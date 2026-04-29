#!/bin/bash
# Regenera 2 fotos: arepa calabaza (con masa naranja) y pescado al ajillo
set -u
DEST="$(dirname "$0")/fotos"
LOGS="$(dirname "$0")/regen-29abr.log"
echo "=== Regen 29 abr $(date) ===" > "$LOGS"

RECIPES=(
  "arepa-calabaza-reina-pepiada|two split arepa flatbreads with bright orange pumpkin colored masa shell with grilled char marks on the surface, filled with shredded chicken and cubed avocado in creamy reina pepiada salad style, served on white ceramic plate with parchment paper underneath, side bowl of avocado salad blurred in background, soft warm golden light, cozy home setting with herbs in background, food photography style, professional close-up shot|901"
  "pescado-ajillo-zucchini-quinoa|white fish fillet pieces with golden caramelized garlic served over fluffy quinoa with diced sauteed zucchini fresh parsley and lemon wedges on white ceramic plate, mediterranean style, natural daylight, food photography overhead shot home cooking|902"
)

for entry in "${RECIPES[@]}"; do
  IFS='|' read -r slug prompt seed <<< "$entry"
  out="$DEST/${slug}.jpg"
  rm -f "$out"

  encoded=$(python3 -c "import urllib.parse, sys; print(urllib.parse.quote(sys.argv[1]))" "$prompt")
  url="https://image.pollinations.ai/prompt/${encoded}?width=1200&height=750&seed=${seed}&nologo=true&model=flux"

  echo "Regenerating: $slug (seed=$seed)" | tee -a "$LOGS"
  for attempt in 1 2 3; do
    curl -sS --max-time 120 -o "$out" "$url"
    size=$(stat -f%z "$out" 2>/dev/null || stat -c%s "$out" 2>/dev/null || echo 0)
    if [ "$size" -gt 10000 ]; then
      echo "  OK (${size})" | tee -a "$LOGS"
      sips -Z 1600 --setProperty formatOptions high "$out" --out "$out" > /dev/null 2>&1
      echo "  upscaled" | tee -a "$LOGS"
      break
    fi
    echo "  attempt $attempt small, retry..." | tee -a "$LOGS"
    sleep 3
    if [ "$attempt" -eq 3 ]; then
      echo "  FAILED" | tee -a "$LOGS"
      rm -f "$out"
    fi
  done
  sleep 4
done

echo "=== Done $(date) ===" | tee -a "$LOGS"
