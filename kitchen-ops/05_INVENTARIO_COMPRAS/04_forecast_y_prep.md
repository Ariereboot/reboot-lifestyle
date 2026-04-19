# 04 — Forecast de Ventas y Prep Sheet

**Propósito:** producir **exactamente lo que se va a vender**. Ni más (merma) ni menos (rotura, cliente sin plato). El forecast es lo que convierte una cocina intuitiva en una cocina QSR.

**Dueña:** Directora de Operaciones (con inputs de Chef y ventas).
**Consumidor:** Sous + Prep Cook (ejecutan) + Jefe Almacén (compra).

---

## 1. ¿Qué es un forecast y por qué no puede "sentirse"?

Forecast = predicción cuantitativa de cuántas unidades de cada plato se van a vender en un período (día, semana, mes).

Sin forecast:
- Se prepara por intuición del chef.
- Unos platos sobran, otros se acaban.
- El prep cook adivina cuánto producir.
- Se compra "lo de siempre".

Con forecast:
- Cada prep tiene un número objetivo.
- Compras se ajustan a demanda real.
- Se valida al final del día vs predicción.
- Se aprende y se mejora.

---

## 2. Fuentes de datos para el forecast

| Fuente | Qué aporta |
|--------|-----------|
| **Histórico de ventas del POS** | Base del forecast (lo que se vende, cuándo, a qué hora) |
| **Día de semana** | Lunes ≠ viernes, sábado ≠ martes |
| **Clima local** | Lluvia → menos delivery a local, más delivery a domicilio |
| **Feriados y eventos locales** | Partido de fútbol, concierto, mes de festividad |
| **Campañas de marketing activas** | Descuento lanzado en X plato |
| **Temporada del año** | Ensaladas suben en verano; sopas en invierno |
| **Turismo / flujo del barrio** | Si aplica por ubicación |

---

## 3. Niveles de forecast

### Forecast anual
Hecho en el offsite de diciembre. Es la base del presupuesto anual (ver `02_MANUAL_ANUAL/02_presupuesto_anual.md`).

### Forecast mensual
En el primer lunes de cada mes (MBR), se actualiza el forecast del mes en curso con los datos frescos.

### Forecast semanal
**Cada lunes** la Directora actualiza el forecast de los próximos 7 días. Se considera:
- Reservas conocidas.
- Clima esperado.
- Eventos de la semana.
- Stock disponible.

### Forecast diario
**Cada noche** se afina el forecast del día siguiente con la info más reciente.

---

## 4. Plantilla de forecast semanal

```
FORECAST SEMANAL — Semana del ___ al ___

                    LUN   MAR   MIE   JUE   VIE   SAB   DOM   TOTAL
Tickets totales     ___   ___   ___   ___   ___   ___   ___   _____
Ventas $            ___   ___   ___   ___   ___   ___   ___   _____

UNIDADES POR PLATO:

Plato P-001         ___   ___   ___   ___   ___   ___   ___   _____
Plato P-002         ___   ___   ___   ___   ___   ___   ___   _____
Plato P-003         ___   ___   ___   ___   ___   ___   ___   _____
...

Factores especiales esta semana:
  - Lunes: ________________________
  - Jueves: _______________________
  - Sábado: _______________________

Firma Directora:  __________  Aprobado Chef:  __________
```

---

## 5. Del forecast al prep sheet

El forecast de unidades vendidas se **traduce** en producción (prep) mediante las fichas técnicas:

```
Unidades prev plato X × Gramaje ficha por ingrediente = Cantidad prep ingrediente
```

**Ejemplo:**
- Forecast lunes: 80 órdenes del plato "Pollo ranch".
- Ficha: 180g pollo + 60g salsa ranch + 100g papa + 50g ensalada.
- Prep lunes:
  - Pollo: 80 × 180 × factor seguridad 1.15 = **16.6 kg porcionado**.
  - Salsa ranch: 80 × 60 × 1.15 = **5.5 L**.
  - Etc.

Esto se hace para **todos los ingredientes de todos los platos** del forecast.

### Automatización
Una planilla bien montada (Google Sheets / Excel) multiplica forecast × fichas automáticamente y escupe el prep sheet del día. **Setup de la planilla es trabajo del sprint día 10.**

---

## 6. Plantilla del prep sheet diario

```
PREP SHEET — FECHA: __________   DÍA: __________

Basado en forecast de ___ órdenes totales.

SUB-RECETAS A PRODUCIR
Código   Nombre                   Cantidad   UM   Hora obj    Ejecutor
______   __________________      _________  ___  ________    ________
______   __________________      _________  ___  ________    ________

MISE EN PLACE POR ESTACIÓN

LÍNEA CALIENTE:
  Elemento                  Cantidad par  Hora obj   Ejecutor
  ________________________  __________    ________   ________
  ________________________  __________    ________   ________

LÍNEA FRÍA / PANTRY:
  ________________________  __________    ________   ________

PARRILLA:
  ________________________  __________    ________   ________

PREP DE CARNES (porcionado):
  Carne / corte             Porciones     Hora obj   Ejecutor
  ________________________  __________    ________   ________

PREP DE VEGETALES:
  ________________________  __________    ________   ________

SALSAS Y ADEREZOS:
  ________________________  __________    ________   ________

Firma Sous:            __________________
Firma Prep Cook:       __________________
Hora entrega estaciones: _________________
```

---

## 7. Validación post-servicio

Al cierre del día, se mide **forecast vs real**:

```
ANÁLISIS FORECAST — FECHA: __________

PLATO    FORECAST   REAL VENDIDO   DIFERENCIA   DIFERENCIA %
P-001    ___        ___            ___          ___%
P-002    ___        ___            ___          ___%
P-003    ___        ___            ___          ___%

Total forecast:       ___
Total real:           ___
Exactitud del día:    ___%  (1 - |diferencia/forecast| promedio)
```

**Target de exactitud:**
- Semana 1-4 del sistema: ≥ 70%.
- Mes 2-3: ≥ 80%.
- Mes 4+: ≥ 85%.
- Plateau maduro (mes 6+): ≥ 90%.

La exactitud mejora con **datos acumulados** y con ajuste continuo del algoritmo.

---

## 8. Método simple de forecast (mientras no hay software avanzado)

**Forecast por día del mes = promedio últimas 4 semanas del mismo día × factor de tendencia × factor estacional**

Ejemplo:
- Promedio últimos 4 martes de ventas: 95 tickets.
- Tendencia 3 meses: +3% mes.
- Factor tendencia: 1.03.
- Factor estacional (ej. semana de feriado): 0.85.
- Forecast martes = 95 × 1.03 × 0.85 = **83 tickets**.

Para cada plato: % histórico de ventas del plato × total proyectado.

### Luego del método simple
Cuando haya al menos 6-12 meses de datos, conviene migrar a un forecast más sofisticado (regresión, software de forecast restaurant, etc.). Pero incluso el método simple es **infinitamente mejor que ningún forecast**.

---

## 9. Ajuste de par levels por forecast

Los par levels **no son fijos**; se recalculan cada lunes según el forecast semanal:

```
Par level semana = Forecast unidades × Gramaje × Factor seguridad × Días entre pedidos
```

Si la semana se prevé 15% más alta, los par levels suben 15%. Si se prevé 20% más baja, bajan 20%.

**Ajuste mínimo, no cada día.** Cambiar par levels diariamente sobrecarga a todos. Revisión semanal en el lunes (con el daily huddle extendido de apertura de semana).

---

## 10. Forecast y rotura de stock (86)

Cuando un plato "cae" (se acaba) a media noche:

1. **Se documenta** en la bitácora de handoff.
2. **Se calcula** cuánto se dejó de vender (tickets perdidos × precio promedio).
3. **Se analiza causa**:
   - ¿Forecast bajo?
   - ¿Prep no alcanzó tiempo?
   - ¿Venta real mucho mayor que proyectado?
   - ¿Error de pedido?
4. Se ajusta el forecast o el par de la semana siguiente.

**Regla cultural:** caer un plato **ocasionalmente** es aceptable (un buen restaurante a veces cae de éxito). Caer el **mismo plato** 3 veces en 2 semanas es mal forecasteo / mal prep.

---

## 11. Forecast en modelo commissary

Si hay producción central:

- El commissary produce en **ciclos de 2-4 días** (no diario, por economía de escala).
- Forecast semanal → orden de producción para commissary.
- Commissary despacha a restaurantes con frecuencia **diaria** según par de cada restaurante.
- Restaurante solo gestiona forecast **diario de punto de venta**, no de producción.

Esto reduce trabajo de planificación en cada restaurante y concentra la complejidad en el commissary, que tiene recursos dedicados.

---

## 12. KPIs del forecast

| KPI | Target | Frecuencia |
|-----|:------:|:----------:|
| Exactitud del forecast (%) | ≥ 85% | Diario, presentado semanal |
| # de 86 por semana | ≤ 2 | Semanal |
| % de prep sheet ejecutado en hora | ≥ 95% | Diario |
| % de mise en place no usado (sobra) | ≤ 10% | Diario |
| Merma por forecast excesivo | ≤ 1% sobre ventas | Semanal |

---

## 13. El principio

**"Mejor un forecast malo que ningún forecast."** Si tu forecast del día 1 tiene 50% de exactitud, en 30 días de iteración llega a 75%; en 90 días, a 85%; en 180, a 90%. Sin forecast nunca se aprende, y por eso una cocina puede llevar 10 años operando y seguir "cocinando por sensación".

El forecast es la disciplina que **convierte cada día en un dato**, y cada dato en una mejora.
