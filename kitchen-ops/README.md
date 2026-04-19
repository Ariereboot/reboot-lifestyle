# Sistema de Operaciones de Cocina — Fud Lab

Este es el **sistema operativo completo** de la cocina de Fud Lab: desde el diagnóstico y la intervención con el Head Chef, hasta el manual anual de operaciones, estándares, checklists y playbooks de crisis. Está diseñado para llevar la cocina de un modelo de "restaurante que cocina y apaga incendios" a un modelo **QSR (Quick Service Restaurant)** estilo McDonald's, Chick-fil-A y Chipotle: procesos documentados, controles medibles, variabilidad cero, cadena de mando clara.

---

## Cómo usar este sistema

1. **Empieza por `00_INTERVENCION/`**. Ahí están el diagnóstico, el guion de la reunión de arranque, el sprint de 14 días y la matriz de consecuencias. Eso es lo que pones sobre la mesa con la Directora de Operaciones y el Head Chef.
2. **Después `01_GOBIERNO/`**. Define quién decide qué (RACI), cadencia de reuniones y KPIs. Sin esto, los documentos no caminan solos.
3. **`02_MANUAL_ANUAL/`** es el calendario del año: presupuesto, capacitación, auditorías y mantenimiento. Es el "sistema operativo" anual.
4. **`03_ESTANDARES/` y `04_CHECKLISTS/`** son los documentos de piso: lo que el cocinero usa cada turno. Plantillas de SOP, fichas técnicas, HACCP, aperturas, cierres, line checks.
5. **`05_INVENTARIO_COMPRAS/`** es el corazón del control de costos. Par levels, recibo, merma, forecast.
6. **`06_CAPACITACION/`** es la matriz de certificación por estación (el "star system" de McDonald's).
7. **`07_CRISIS/`** son los playbooks para cuando algo se cae: falla equipo, falta gente, cadena fría rota, auditoría sanitaria sorpresa.

---

## Estructura

```
kitchen-ops/
├── README.md                           <- este archivo
│
├── 00_INTERVENCION/                    <- LA reunión + sprint + consecuencias
│   ├── 01_diagnostico_y_vision.md
│   ├── 02_guion_reunion_arranque.md
│   ├── 03_sprint_14_dias.md
│   └── 04_consecuencias_y_escalacion.md
│
├── 01_GOBIERNO/                        <- quién decide, qué se mide, cuándo se reúnen
│   ├── 01_estructura_y_raci.md
│   ├── 02_cadencia_reuniones.md
│   └── 03_kpis_tablero.md
│
├── 02_MANUAL_ANUAL/                    <- el año completo
│   ├── 01_calendario_anual.md
│   ├── 02_presupuesto_anual.md
│   ├── 03_plan_capacitacion.md
│   ├── 04_plan_auditorias.md
│   └── 05_mantenimiento_preventivo.md
│
├── 03_ESTANDARES/                      <- plantillas base
│   ├── 01_plantilla_SOP.md
│   ├── 02_plantilla_ficha_tecnica.md
│   ├── 03_HACCP_y_food_safety.md
│   ├── 04_mise_en_place.md
│   └── 05_flujo_de_cocina.md
│
├── 04_CHECKLISTS/                      <- documentos de piso por turno
│   ├── 01_opening.md
│   ├── 02_line_check.md
│   ├── 03_closing.md
│   ├── 04_shift_handoff.md
│   └── 05_cleaning.md
│
├── 05_INVENTARIO_COMPRAS/              <- control de costos
│   ├── 01_sistema_inventario.md
│   ├── 02_recibo_y_compras.md
│   ├── 03_waste_log.md
│   └── 04_forecast_y_prep.md
│
├── 06_CAPACITACION/                    <- certificación de cocineros
│   └── 01_matriz_certificacion.md
│
└── 07_CRISIS/
    └── 01_playbooks_crisis.md
```

---

## Principios no negociables

1. **Si no está escrito, no existe.** Toda decisión operativa se convierte en SOP o no se implementa.
2. **Quien no mide, no mejora.** Cada estación tiene un KPI diario visible.
3. **Un estándar, una forma.** No hay "como lo hace cada quien". Hay UNA manera.
4. **La accountability recae en uno, no en el grupo.** Cada SOP, KPI y entregable tiene UN dueño con nombre.
5. **Velocidad > perfección en el sprint inicial.** Versión 1.0 funcionando en 14 días vence a versión 2.0 en 90.
6. **El chef cocina el menú; el sistema cocina el negocio.** El Head Chef es custodio de sabor y calidad; la Directora de Operaciones es custodia del sistema.

---

## Quién es responsable de qué (resumen ejecutivo)

- **Dueño del sistema (tú):** define la visión, aprueba presupuesto, sostiene la autoridad de la Directora de Operaciones frente al Head Chef.
- **Directora de Operaciones:** dueña del sprint, de los KPIs, de los SOPs y del cumplimiento. Autoridad operativa final durante y después del sprint.
- **Head Chef:** custodio de recetas, sabor, calidad, menú. Ejecuta los SOPs que salen del sprint. Reporta a Operaciones en lo operativo y al dueño en lo gastronómico.
- **Sous Chef / Jefes de estación:** ejecutan los checklists diarios, entrenan al equipo, reportan KPIs.

Para el detalle completo ver `01_GOBIERNO/01_estructura_y_raci.md`.
