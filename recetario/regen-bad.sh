#!/bin/bash
# Regenera las fotos que salieron mal con prompts muy específicos
set -u
DEST="$(dirname "$0")/fotos"
LOGS="$(dirname "$0")/regen-bad.log"
echo "=== Regen bad $(date) ===" > "$LOGS"

# Slugs + prompts muy específicos (distintos seeds para variabilidad)
RECIPES=(
  "huevos-revueltos-aguacate|soft fluffy creamy scrambled eggs with small golden curds French style on white plate with cubed green avocado chunks and fresh spinach leaves on the side, NOT fried eggs, NOT sunny side up, scrambled texture, morning natural light, wooden table|501"
  "tortitas-zanahoria-huevos|orange carrot pancakes fritters stack on white plate topped with scrambled eggs and fresh parsley, NOT regular pancakes, visible grated carrot texture, home cooking morning light|502"
  "aguacate-relleno-atun|halved avocados cut open with tuna salad filling spooned into the hollowed pit cavity, two avocado halves on white plate, lime wedge, cilantro garnish, natural light, NOT avocado soup, NOT whole avocado|503"
  "avocado-toast-huevo-poche|smashed green avocado on toasted dark oat bread topped with ONE poached egg white wrapped around runny yolk NOT fried egg, microgreens chili flakes, white plate morning light|504"
  "huevos-cocidos-cottage-tostada|two hard boiled eggs cut in half with visible yellow yolks next to a dollop of white cottage cheese on slice of oat bread toast, NOT fried eggs NOT scrambled, fresh chives, white plate bright morning light|505"
  "wrap-linaza-atun|dark flaxseed tortilla wrap cut in half open showing tuna salad filling with shredded carrots lettuce avocado inside, visible chunks of tuna fish, on wooden board natural light|506"
  "ensalada-garbanzo|mediterranean chickpea salad bowl with visible garbanzo beans chickpeas mixed with cucumber cherry tomatoes red onion feta cheese kalamata olives tahini lemon dressing, ceramic bowl, natural lunch light|507"
  "pastel-carne-pure-brocoli|sliced baked meatloaf loaf home style served with creamy green broccoli puree mash on white plate, NOT steak NOT beef tenderloin, rustic comfort food natural lunch light|508"
  "sopa-calabaza-pollo|creamy orange butternut squash pumpkin soup in white bowl with visible shredded white chicken breast pieces on top, pumpkin seeds garnish fresh herbs, NOT plain soup, dinner natural light|509"
  "lasana-palmito-carne|layered lasagna made with white hearts of palm slices instead of pasta noodles layered with ground beef tomato sauce melted cheese sliced cross section showing layers of palmito and meat, rustic plate natural light|510"
  "estofado-pollo-vegetales|chicken stew in cast iron dutch oven pot with visible chicken thighs legs drumsticks with carrots celery onions bay leaf in rich brown broth, homestyle comfort food, natural dinner light|511"
  "costillas-res-horno-ensalada|oven roasted beef short ribs rib rack with glossy brown char served with fresh green salad cherry tomatoes cucumber on rustic plate, meaty bone-in ribs, natural lunch light|512"
)

for entry in "${RECIPES[@]}"; do
  IFS='|' read -r slug prompt seed <<< "$entry"
  out="$DEST/${slug}.jpg"

  # Force: delete old file
  rm -f "$out"

  encoded=$(python3 -c "import urllib.parse, sys; print(urllib.parse.quote(sys.argv[1]))" "$prompt")
  url="https://image.pollinations.ai/prompt/${encoded}?width=1200&height=750&seed=${seed}&nologo=true&model=flux"

  echo "Regenerating: $slug (seed=$seed)" | tee -a "$LOGS"
  for attempt in 1 2 3; do
    curl -sS --max-time 90 -o "$out" "$url"
    size=$(stat -f%z "$out" 2>/dev/null || stat -c%s "$out" 2>/dev/null || echo 0)
    if [ "$size" -gt 10000 ]; then
      echo "  OK (${size})" | tee -a "$LOGS"
      break
    fi
    echo "  attempt $attempt too small, retry..." | tee -a "$LOGS"
    sleep 3
    if [ "$attempt" -eq 3 ]; then
      echo "  FAILED" | tee -a "$LOGS"
      rm -f "$out"
    fi
  done
  sleep 4
done

# Upscale the new ones
echo "=== Upscaling ===" | tee -a "$LOGS"
for entry in "${RECIPES[@]}"; do
  IFS='|' read -r slug prompt seed <<< "$entry"
  out="$DEST/${slug}.jpg"
  if [ -f "$out" ]; then
    sips -Z 1600 --setProperty formatOptions high "$out" --out "$out" > /dev/null 2>&1
    size=$(stat -f%z "$out" 2>/dev/null || stat -c%s "$out")
    echo "upscaled $slug (${size} bytes)" | tee -a "$LOGS"
  fi
done

echo "=== Done $(date) ===" | tee -a "$LOGS"
