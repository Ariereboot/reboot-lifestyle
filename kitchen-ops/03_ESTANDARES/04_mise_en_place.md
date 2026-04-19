# 04 — Sistema de Mise en Place

**Mise en place** (literalmente: "todo en su lugar") es la **base operativa de cualquier cocina profesional**. Una cocina con mise en place hecho sale sus tickets en tiempo; una sin mise en place colapsa con la primera ola.

**Dueño del sistema:** Sous Chef (ejecuta y audita) + Directora (diseña y mejora).

---

## 1. Los 3 pilares del mise en place

### Pilar 1 — Mise en place **de estación**
Todo lo que la estación necesita **físicamente** para operar el turno: utensilios, contenedores, etiquetas, bolsas, trapos, aceite, especias.

### Pilar 2 — Mise en place **de producto**
Todos los ingredientes **preparados** al punto de entrar al plato: cortado, porcionado, marinado, reducido, enfriado, etiquetado, en su lugar.

### Pilar 3 — Mise en place **mental**
Que cada cocinero sepa, antes del servicio, **qué forecast tiene, qué especiales hay, qué le falta**, y **cómo se va a organizar su espacio**.

---

## 2. Secuencia del mise en place diario

```
     06:30 ──── Llegada cocinero de producción (prep cook)
     ↓
     07:00 ──── Revisión prep sheet (ver sección 4)
     ↓
     07:15 ──── Mise en place de PRODUCCIÓN: cortes, marinados,
                fondos, salsas para todas las estaciones
     ↓
     10:30 ──── Entrega a cada estación: producto listo
     ↓
     10:45 ──── Llegada cocineros de servicio
     ↓
     11:00 ──── Mise en place DE ESTACIÓN: montaje
     ↓
     11:30 ──── Pre-shift huddle
     ↓
     11:45 ──── Line check por Sous (ver 04_CHECKLISTS/02)
     ↓
     12:00 ──── Apertura de servicio
```

---

## 3. Par levels de mise en place por estación

Por cada estación, cada insumo preparado tiene un **par level**: la cantidad mínima que debe haber al arranque de servicio.

### Fórmula

```
Par level de mise en place =
    Ventas esperadas del servicio × Gramaje por porción × Factor seguridad 1.2
```

**Ejemplo:**
- Se esperan 80 órdenes del plato X en el turno.
- Ficha técnica: 150g de salsa Y por orden.
- Par level = 80 × 150 × 1.2 = **14,400g (14.4 kg) de salsa Y al arranque**.

### Tabla de par levels por estación (plantilla)

```
ESTACIÓN: ____________________     FECHA: __________

COMPONENTE MISE EN PLACE     PAR LEVEL    CANTIDAD REAL   √/X
___________________________  ______       ______          ___
___________________________  ______       ______          ___
___________________________  ______       ______          ___
___________________________  ______       ______          ___
___________________________  ______       ______          ___

Firma Sous: ____________   Firma Jefe estación: ____________
```

Este documento se llena **antes** de abrir servicio. Se firma.

---

## 4. Prep sheet diario (la hoja del prep cook)

Es **la instrucción de trabajo** para el cocinero de producción cada día. Se deriva del forecast de ventas + par levels.

```
PREP SHEET — FECHA: __________    PREP COOK: _______________

DERIVADO DE:
- Forecast ventas del día: __ órdenes servicio comida / __ cena
- Par levels de mise en place por estación (ver hoja par)

TAREAS DEL DÍA

Producto/Prep         Cantidad a producir   Ficha Ref   Prioridad   Hora obj
____________________  ________              P-___       1 / 2 / 3   __:__
____________________  ________              P-___       1 / 2 / 3   __:__
____________________  ________              P-___       1 / 2 / 3   __:__
____________________  ________              P-___       1 / 2 / 3   __:__

Firmado prep cook: _______   Firmado Sous: _______   Hora entrega: _____
```

**Prioridad 1:** hay que tenerlo listo antes de 10:00. **Prioridad 2:** antes de 10:30. **Prioridad 3:** antes de 11:00 (ventana de riesgo).

---

## 5. Sistema de etiquetado (rotación y trazabilidad)

**Toda preparación de mise en place lleva etiqueta.** Etiqueta sin fecha = producto sin identidad = se tira.

Plantilla y vida útil: ver `03_ESTANDARES/03_HACCP_y_food_safety.md` sección 6.

**Regla de rotación FIFO visible:**
- Producto más antiguo **al frente** de la cámara.
- Producto nuevo **atrás**.
- Si se usa un contenedor nuevo, primero se vacía el viejo (no se mezclan batches).

---

## 6. Código de contenedores

Estandarizar contenedores reduce errores y acelera el montaje:

| Color / tipo | Uso |
|--------------|-----|
| Contenedor GN (gastronorm) 1/6 | Guarniciones pequeñas |
| Contenedor GN 1/4 | Proteínas porcionadas |
| Contenedor GN 1/3 | Salsas, fondos |
| Contenedor GN 1/2 | Lote intermedio |
| Contenedor GN completo | Producción masiva |
| Squeeze bottles (aceite/salsas) | Dosificación rápida |
| Frascos herméticos | Especias, mezclas secas |

**Por estación, los contenedores se ubican siempre en el mismo lugar**. "Siempre el mismo lugar" = productividad en servicio.

---

## 7. Station layout (diseño físico de la estación)

Cada estación se arma siempre igual. Es un **mapa físico** pegado en el frente de la estación:

```
ESTACIÓN LÍNEA CALIENTE — LAYOUT

  [CAMPANA]
  ┌──────────────────────────────────────────────┐
  │  Salamandra    Plancha       Saltear         │
  ├──────────────────────────────────────────────┤
  │  Mesa fría con GN 1/6 × 6 (guarniciones)    │
  │  [G1][G2][G3][G4][G5][G6]                    │
  ├──────────────────────────────────────────────┤
  │  Refrigerador bajo-mesa (proteínas crudas)   │
  └──────────────────────────────────────────────┘

  Utensilios colgantes (orden fijo):
  [Espátula][Pinza][Cuchara cacerola][Cuchillo]

  Especias de estación (orden alfabético):
  [Sal][Pimienta][Comino][Pimentón][Orégano]
```

**Criterio:** cualquier cocinero certificado en la estación debe poder entrar a ciegas y saber dónde está cada cosa.

---

## 8. Reposición durante servicio

Durante el servicio, cuando un mise en place baja de cierto umbral ("re-order point"), se dispara reposición.

### Reglas del re-order point
- **Re-order point = 30% del par level.**
- Cuando baja a ese nivel, el cocinero de esa estación avisa a Sous: "Falta de salsa Y al 30%".
- Sous activa reposición: o hay stock en cámara (se sube), o se pide al prep cook producir más (ventana mínimo 20-40 min según complejidad).
- Si no hay stock ni se puede producir a tiempo: **Sous avisa a piso que el plato sale del menú ese servicio**. Nunca improvisar con menos gramaje.

---

## 9. Cierre de mise en place

Al cierre del servicio:

1. Se **pesa / mide** lo que sobra de mise en place por estación.
2. Se registra en hoja de cierre (ayuda a ajustar par levels futuros).
3. Se decide por ítem: se guarda, se reusa mañana, se tira.
4. Lo que se guarda se **re-etiqueta** con nueva fecha use-by.
5. Lo que se tira se registra en **waste log** (ver `05_INVENTARIO_COMPRAS/03_waste_log.md`).

---

## 10. Indicadores del mise en place

| Indicador | Cómo se mide | Target |
|-----------|--------------|--------|
| **% cumplimiento par level al abrir** | Ítems con par OK / total ítems | ≥ 98% |
| **# de "86s" por servicio** | Platos caídos por falta de mise | ≤ 1 |
| **% mise en place no usado (sobra)** | Sobra / preparado | ≤ 10% |
| **Tiempo medio de montaje de estación** | Min desde llegada hasta listo | ≤ 45 min |

"86" es jerga clásica de cocina: "se cayó X del menú" porque se acabó.

---

## 11. Principios culturales

- **"El servicio lo ganas o lo pierdes en el prep."** Si el mise en place falla, el servicio falla, sin importar qué tan bueno sea el cocinero en pase.
- **"Nunca pidas la batalla sin munición."** Abrir el servicio con par levels incompletos es suicidio operativo. Mejor abrir 10 min tarde que abrir sin mise en place.
- **"Un contenedor vacío no espera."** En cuanto un contenedor del 30%, se dispara reposición, no se espera a que se acabe.

---

## 12. Mise en place en modelo commissary (si Fud Lab lo tiene)

Si hay producción central que abastece restaurantes:
- **Commissary produce** las sub-recetas, bases, salsas, cortes porcionados.
- **Commissary etiqueta y enfría rápidamente.**
- **Restaurantes reciben** producto pre-preparado y solo ejecutan el paso final al pedido.
- **Par levels existen en DOS niveles:** uno en commissary (producción semanal) y otro en restaurante (reposición diaria).

Modelo Chipotle: commissary masivo → restaurante solo arma y calienta. Esto es **palanca operativa clave** para escalar con calidad consistente.
