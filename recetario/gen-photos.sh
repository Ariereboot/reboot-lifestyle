#!/bin/bash
# Pre-genera fotos de Pollinations AI y las guarda en ./fotos/
# Corre una vez, guarda el resultado estáticamente. No rate-limiting en runtime.

set -u

DEST="$(dirname "$0")/fotos"
LOGS="$(dirname "$0")/gen-photos.log"
mkdir -p "$DEST"

echo "=== Photo generation started $(date) ===" > "$LOGS"

# Cada línea: slug|prompt|seed_override(optional, defaults to hash)
RECIPES=(
  "bowl-pollo-quinoa|overhead photo of grilled chicken breast sliced over quinoa with roasted colorful vegetables broccoli bell peppers zucchini cilantro lime on white ceramic bowl natural light wooden table|1"
  "huevos-revueltos-aguacate|scrambled eggs with wilted baby spinach and cubed green avocado sesame seeds cilantro on small white plate morning window light wooden table|2"
  "bolitas-datil-cacao|dark chocolate cacao energy balls rolled in shredded coconut on small ceramic plate one cut open showing dense interior afternoon light wooden table with coffee cup blurred|3"
  "arepa-calabaza-reina-pepiada|traditional venezuelan arepa cut open showing creamy chicken avocado filling reina pepiada on white plate fresh cilantro natural morning light rustic wooden table|4"
  "noquis-espinaca-pollo|green spinach gnocchi with grilled chicken pieces in light sauce parmesan cheese fresh basil italian pasta dish on white plate natural lunch light|5"
  "crema-brocoli-pollo-desmenuzado|creamy green broccoli soup in white bowl topped with shredded chicken and pumpkin seeds drizzle of olive oil natural dinner light wooden table|6"
  "huevos-cocidos-cottage-tostada|hard boiled eggs halved with cottage cheese and oat toast on white plate fresh chives cracked pepper bright morning light|7"
  "lomo-res-pure-coliflor|sliced beef tenderloin steak served next to creamy cauliflower mash puree on white plate rosemary natural lunch light|8"
  "pescado-plancha-rugula-aceitunas|grilled white fish fillet with arugula salad kalamata olives cherry tomatoes lemon on white plate mediterranean dinner natural light|9"
  "huevos-revueltos-espinaca|fluffy scrambled eggs mixed with wilted spinach on small white plate morning natural light wooden breakfast table casual|10"
  "camarones-ajillo-zucchini-quinoa|garlic shrimp served over quinoa with sauteed zucchini parsley and lemon wedges on white plate natural lunch light home cooking|11"
  "nuggets-pollo-yogurt|golden baked almond flour chicken nuggets with greek yogurt dipping sauce in white ramekin on white plate natural light home cooking|12"
  "avena-cocida-proteina|warm creamy oatmeal in ceramic bowl topped with fresh berries almond butter drizzle chia seeds morning natural light|13"
  "pechuga-rellena-queso-espinaca-zanahoria|stuffed chicken breast sliced showing melted cheese and spinach filling with carrot sticks on white plate natural lunch light|14"
  "ceviche-jueves|fresh peruvian fish ceviche with lime red onion cilantro sweet potato in clear glass bowl vibrant natural light|15"
  "tostada-hummus-champinones|oat bread toast spread with creamy hummus topped with sauteed mushrooms fresh thyme sesame seeds on white plate morning light|16"
  "costillas-res-horno-ensalada|oven roasted beef short ribs with fresh mixed green salad cherry tomatoes on rustic plate natural lunch light home cooking|17"
  "berenjenas-horneadas-pollo-plancha|roasted eggplant slices topped with grilled chicken breast basil parmesan on white plate mediterranean natural dinner light|18"
  "aguacate-relleno-atun|halved avocado filled with creamy tuna salad garnished with lime and cilantro on white plate bright natural weekend light breakfast|19"
  "salmon-hierbas-esparragos|pan seared salmon fillet topped with herb compound butter served with roasted asparagus lemon wedge on white plate elegant natural light|20"
  "bowl-tofu|bowl with crispy golden tofu cubes over quinoa and sauteed vegetables broccoli carrots bell pepper with sesame seeds scallions natural dinner light top-down|21"
  "tofu-revuelto-tostada|scrambled tofu with turmeric golden yellow color and spinach served with oat bread toast avocado slices on white plate morning light|22"
  "hamburguesa-lentejas-ensalada|homemade lentil burger patty on lettuce with fresh mixed greens salad cherry tomatoes cucumber on rustic plate natural light vegetarian|23"
  "pizza-coliflor-pollo|cauliflower crust pizza topped with shredded chicken mozzarella cheese tomato sauce mushrooms fresh basil on wooden board rustic|24"
)

COUNT=${#RECIPES[@]}
OK=0
FAIL=0

for i in "${!RECIPES[@]}"; do
  IFS='|' read -r slug prompt seed <<< "${RECIPES[$i]}"

  out="$DEST/${slug}.jpg"

  # Skip if already exists and has reasonable size
  if [ -f "$out" ] && [ "$(stat -f%z "$out" 2>/dev/null || stat -c%s "$out")" -gt 10000 ]; then
    echo "SKIP (exists): $slug" | tee -a "$LOGS"
    OK=$((OK+1))
    continue
  fi

  # URL-encode prompt via python (more reliable than bash)
  encoded=$(python3 -c "import urllib.parse, sys; print(urllib.parse.quote(sys.argv[1]))" "$prompt")
  url="https://image.pollinations.ai/prompt/${encoded}?width=1200&height=750&seed=${seed}&nologo=true&model=flux"

  echo "[$((i+1))/${COUNT}] Fetching $slug (seed=$seed)..." | tee -a "$LOGS"

  # Retry up to 3 times if small response
  for attempt in 1 2 3; do
    curl -sS --max-time 90 -o "$out" "$url"
    size=$(stat -f%z "$out" 2>/dev/null || stat -c%s "$out" 2>/dev/null || echo 0)
    if [ "$size" -gt 10000 ]; then
      echo "  OK (${size} bytes)" | tee -a "$LOGS"
      OK=$((OK+1))
      break
    fi
    echo "  attempt $attempt small (${size} bytes), retrying..." | tee -a "$LOGS"
    sleep 3
    if [ "$attempt" -eq 3 ]; then
      echo "  FAIL after 3 attempts" | tee -a "$LOGS"
      FAIL=$((FAIL+1))
      rm -f "$out"
    fi
  done

  # Polite delay between requests to avoid rate-limit
  sleep 4
done

echo "=== Done $(date) ===" | tee -a "$LOGS"
echo "OK: $OK / $COUNT" | tee -a "$LOGS"
echo "FAIL: $FAIL" | tee -a "$LOGS"
ls -lh "$DEST" | tee -a "$LOGS"
