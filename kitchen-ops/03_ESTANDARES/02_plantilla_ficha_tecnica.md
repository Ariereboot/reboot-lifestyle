# 02 — Plantilla de Ficha Técnica de Receta

**Qué es:** el documento maestro de cada plato del menú. Es **lo más importante que produce el sprint**, porque sin fichas no hay costeo, no hay par levels, no hay food cost, no hay consistencia.

**Regla:** un plato que no tiene ficha no puede estar en el menú. Punto.

---

## Estructura de la ficha técnica

```
╔══════════════════════════════════════════════════════════════════╗
║  FICHA TÉCNICA DE RECETA — FUD LAB                               ║
║                                                                  ║
║  Plato: ___________________________                              ║
║  Categoría: _______________________   Código: _______            ║
║  Estación: ________________________                              ║
║  Porciones por preparación: _______   Peso final por porción: __g║
║  Tiempo total: ___ min                                           ║
║  Versión: ___  Fecha: __________  Vigente hasta: __________      ║
╚══════════════════════════════════════════════════════════════════╝

1) INGREDIENTES Y GRAMAJES POR PORCIÓN

   Ingrediente           Cantidad   UM    Costo Unit.   Costo Total
   _________________     _______    __    $_______      $_______
   _________________     _______    __    $_______      $_______
   _________________     _______    __    $_______      $_______
   _________________     _______    __    $_______      $_______
   _________________     _______    __    $_______      $_______
   _________________     _______    __    $_______      $_______
   _________________     _______    __    $_______      $_______
                                           ───────────   ───────────
                                           COSTO PORCIÓN   $_______

   Precio de venta:                 $_______
   Food cost %:                     ___%
   Margen bruto por plato:          $_______

2) MISE EN PLACE (antes del servicio)

   [ ] Elemento 1: ____________   Cantidad: ______
   [ ] Elemento 2: ____________   Cantidad: ______
   [ ] Elemento 3: ____________   Cantidad: ______
   [ ] Sub-receta: ____________   Ref ficha: ______

3) EJECUCIÓN PASO A PASO (al pedido)

   Paso  Acción                                        Tiempo  Temp
   1.    ________________________________             __ seg  ___°C
   2.    ________________________________             __ seg  ___°C
   3.    ________________________________             __ seg  ___°C
   4.    ________________________________             __ seg  ___°C
   5.    ________________________________             __ seg  ___°C
   6.    EMPLATADO: ________________________          __ seg
   7.    PASE                                         ≤ __ seg total

4) PLATING (emplatado)

   [FOTO DE REFERENCIA PEGADA AQUÍ]

   Plato: tipo ___________    Tamaño: ____
   Orden de colocación:
   - Abajo: _________________________
   - Centro: ________________________
   - Encima: ________________________
   - Salsa: ________________________
   - Guarnición: ____________________
   - Detalle / frescura: ____________

5) ESTÁNDARES DE CALIDAD (QA)

   - Peso final servido (±%):     ____ g ± __%
   - Temperatura en pase:          ≥ ___°C
   - Color / aspecto clave:        ___________
   - Textura clave:                ___________
   - Sabor dominante:              ___________

6) ALÉRGENOS PRESENTES

   [ ] Gluten     [ ] Lácteo    [ ] Huevo    [ ] Soya
   [ ] Pescado    [ ] Marisco   [ ] Maní     [ ] Frutos secos
   [ ] Otro: ____________

7) SUSTITUCIONES PERMITIDAS / VERSIONES

   - Sin [X]: [receta ajustada con código ___]
   - Vegetariano: [si aplica]
   - Vegano: [si aplica]
   - Sin gluten: [si aplica]

8) ALMACENAMIENTO Y ROTACIÓN

   - Temperatura de almacenamiento: ____°C
   - Vida útil post-prep: __ horas / __ días
   - Tipo de contenedor: _____________________
   - Etiqueta requerida: fecha prep + iniciales + use-by

9) SUB-RECETAS VINCULADAS

   - Salsa ___________________________  Ficha: _____
   - Base ___________________________   Ficha: _____
   - Adobo __________________________   Ficha: _____

10) FIRMAS

    Responsable gastronómico (Chef):    __________________
    Responsable operativo (Directora):  __________________
    Fecha fichaje: __________
    Fecha próxima revisión (1 año):     __________
```

---

## Reglas obligatorias del fichaje

### 1. Todo se pesa
- No "un puñado", no "al gusto", no "cantidad necesaria".
- Si la sazón varía por gusto: se fija **rango mínimo-máximo** con gramos (ej: sal: 1.5-2.0 g por porción).
- Balanza digital de 0.1g para micros (especias, levadura), balanza de 1g para el resto.

### 2. Todo se cronometra
- Cada paso tiene tiempo estimado.
- El tiempo total del plato (pick-up time) es número duro que define el ticket time objetivo.

### 3. Foto obligatoria
- Foto del plato emplatado, con **regla o moneda** de referencia de tamaño.
- Foto de ingredientes dosificados (para que cualquiera vea cuánto es "2 cucharadas").
- Foto de punto crítico (si existe): ej. "así se ve el filete al punto".

### 4. Doble firma
- Chef firma por el lado gastronómico: "esto es el plato como debe ser".
- Directora firma por el lado operativo: "esta ficha es ejecutable, costeada y rastreable".

### 5. Revisión anual obligatoria
- Todo plato se re-ficha al menos una vez al año (cambio de proveedor, ajuste de costo, ajuste de gramaje).
- Si no se re-ficha, queda marcado en el tablero y no se le permite estar en menú nuevo.

---

## Costeo (cómo se calcula)

### Costo por porción

```
Costo de cada ingrediente = Gramaje × (Costo compra / tamaño unidad compra)

Ejemplo:
  Pechuga de pollo: 180g por porción
  Compra: $120,000 / 10kg = $12,000/kg = $12/g
  → Costo de la pechuga en este plato = 180g × $12/g = $2,160
```

### Yield (rendimiento)

Si hay merma durante la preparación (ej: huesos, grasa, peladura), se aplica yield:

```
Costo ajustado por yield = Costo bruto / Yield%

Ejemplo:
  Tomate: se compra 1kg a $5,000. Al limpiar, se usa 700g (70% yield).
  Costo real por gramo usado = $5,000 / 700g = $7.14/g (no $5/g)
```

**Toda ficha que usa un insumo con merma mayor al 5% debe declarar el yield.**

### Food cost %

```
Food cost % = (Costo porción / Precio venta) × 100
```

Si el food cost % de un plato supera el target de Fud Lab (ej: 32%), se marca **rojo** y se pone en la weekly menu review para rediseño.

---

## Sub-recetas (critical)

Muchas recetas usan bases comunes: salsa madre, mirepoix, adobo, fondo, reducción. Esas son **sub-recetas** que se fichan independientemente y se referencian.

**Ventajas de fichar sub-recetas:**
- Se produce en lote en commissary, no plato por plato.
- Se costea una sola vez y se referencia.
- Si cambia la sub-receta, se actualiza un solo documento.

**Ejemplo:**

```
SUB-RECETA — Salsa base de tomate
Código: SB-003    Yield: 2 litros por preparación
Costo por litro: $_____
Usada en fichas: [P-001, P-005, P-012, P-018]
```

Cada ficha de plato que la usa pone: "Salsa SB-003: 60ml".

---

## Proceso de fichaje en el sprint (operativo)

1. **Chef asigna platos a cocineros de cada estación** (ej: 3 platos por cocinero).
2. **Cada cocinero prepara su plato** con balanza, cronómetro y Sous documentando.
3. **Se pesa todo lo que entra**, se anota.
4. **Se cronometra cada paso**, se anota.
5. **Se fotografía** el emplatado y el producto terminado.
6. **Se llena la ficha** en digital (Google Sheets / Excel / el software que se use).
7. **Chef firma**, Directora firma.
8. **Se imprime**, se pega en su estación con lámina protectora.

**Tiempo estimado por ficha:** 30-60 min por plato simple, 60-90 min por plato complejo. Por eso es tarea del sprint: no se improvisa en un día.

---

## Hoja maestra de fichas (índice)

Planilla donde viven todos los platos:

```
HOJA MAESTRA DE MENÚ — FUD LAB

Código   Plato                 Categoría  Estación   Costo  PV     FC%   Versión  Vigente hasta
P-001    ___________________   _________  ________   $___   $___   __%   1.0      __/__/__
P-002    ___________________   _________  ________   $___   $___   __%   1.0      __/__/__
SB-001   Salsa ______________  sub        _________  $___    -      -    1.0      __/__/__
...
```

Esta hoja es la primera fuente para el forecast, los par levels y el food cost teórico.
