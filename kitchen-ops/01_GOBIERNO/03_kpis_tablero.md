# 03 — Tablero de KPIs

## Principios

1. **Pocos, visibles, diarios.** Un tablero con 40 KPIs no lo mira nadie. Con 7-10 sí.
2. **Cada KPI tiene un dueño con nombre.** Si falla, hay una persona que explica, no "el equipo".
3. **Se pinta el tablero con 3 colores:** verde / amarillo / rojo. Nada más.
4. **El tablero físico vive en cocina** (cartelera 1m × 1.5m). El digital vive en una hoja compartida. Ambos se actualizan diario, por la Directora, antes del daily huddle.
5. **Lo que no se mide no se paga.** Bono variable de Directora, Chef, Sous y Jefes de estación se liga directamente a estos KPIs.

---

## Tablero diario (el que vive pegado en cocina)

| # | KPI | Cómo se mide | Dueño | Verde | Amarillo | Rojo |
|---|-----|--------------|-------|:-----:|:--------:|:----:|
| 1 | **Ticket time promedio** | Minutos desde orden hasta pase, promedio del servicio | Sous | ≤ X | X+20% | > X+40% |
| 2 | **% cumplimiento checklists** | (checklists firmados completos) / (checklists del día) | Jefe estación | 100% | 90-99% | < 90% |
| 3 | **Merma del día** | $ de producto desechado / ventas día | Jefe almacén | ≤ 2% | 2-4% | > 4% |
| 4 | **Desviación inventario** | $ (teórico - real) / teórico, de insumos A | Directora | ≤ 1% | 1-3% | > 3% |
| 5 | **CMV del día** | Costo insumo / ventas netas | Directora | ≤ target | target+2pp | > target+4pp |
| 6 | **Incidentes de calidad** | # quejas escritas cliente + # platos devueltos | Chef | 0 | 1-2 | ≥ 3 |
| 7 | **Asistencia** | (asistentes puntuales) / (programados) | Sous | 100% | 90-99% | < 90% |
| 8 | **Temperaturas fuera de rango** | # lecturas fuera de rango del día | Jefe estación caliente | 0 | 1-2 | ≥ 3 |

**Nota sobre los thresholds:** los valores exactos (X, target CMV, etc.) los define la Directora con el Chef en los primeros 30 días de operación post-sprint, con datos reales. Hasta entonces se ponen targets provisionales.

---

## Tablero semanal (viernes, weekly review)

Mismos 8 KPIs de arriba, pero:
- Promedio semanal.
- Tendencia (↑ ↓ →) vs semana pasada.
- Acumulado del mes.

Se añaden estos 4:

| # | KPI semanal | Dueño | Verde | Amarillo | Rojo |
|---|-------------|-------|:-----:|:--------:|:----:|
| 9 | **Rotación de inventario** | Directora | ≥ target ciclos/sem | | |
| 10 | **% de platos fichados en uso** | Chef | 100% | 90-99% | < 90% |
| 11 | **Horas extra / planta** | Directora | ≤ 5% | 5-10% | > 10% |
| 12 | **NPS de cocina** (del personal, 1-10) | Directora | ≥ 8 | 6-7 | ≤ 5 |

---

## Tablero mensual (monthly business review)

Todos los anteriores + estos indicadores de negocio:

| # | KPI mensual | Fórmula | Dueño |
|---|-------------|---------|-------|
| M1 | **Food cost %** | CMV acumulado / ventas acumuladas del mes | Directora |
| M2 | **Labor cost %** | Costo laboral cocina / ventas | Directora + RRHH |
| M3 | **Prime cost %** | Food + Labor / ventas (target típico QSR 55-65%) | Directora |
| M4 | **Utilidad bruta de cocina** | Ventas − Food − Labor | Directora |
| M5 | **Productividad por cocinero** | Ventas cocina / cocineros equivalentes a tiempo completo | Directora |
| M6 | **# SOPs vigentes vs objetivo** | Activos / plan | Directora |
| M7 | **# cocineros certificados por estación (star system)** | Contador | Sous |
| M8 | **Rotación de personal de cocina** | Bajas / plantilla promedio | Directora |
| M9 | **Cumplimiento HACCP** | (registros correctos) / (registros esperados) | Chef |
| M10 | **Costo de auditorías fallidas / multas sanitarias** | $ | Directora |

---

## Tablero anual

Además de los promedios mensuales, se miden:

- Variación de CMV año contra año.
- Estabilidad (desviación estándar) del ticket time mes a mes.
- % del menú re-fichado en el año (debe ser 100%, al menos una vez al año cada plato se re-audita).
- # de menú engineering decisions tomadas.
- % de cocineros certificados full stack (que pueden rotar por todas las estaciones).
- $ ahorrado por reducción de merma vs año anterior.
- $ ahorrado por renegociación de proveedores.

---

## Visualización del tablero físico (cartelera de cocina)

Se pega en la pared de acceso a cocina. Diseño simple:

```
┌─────────────────────────────────────────────────────────────────┐
│  TABLERO DE COCINA — FUD LAB                  FECHA: __/__/____ │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   KPI           AYER    HOY    SEMANA   MES      COLOR          │
│   Ticket time   __      __     __       __       🟢🟡🔴         │
│   Checklists    __%     __%    __%      __%      🟢🟡🔴         │
│   Merma         __%     __%    __%      __%      🟢🟡🔴         │
│   Desv inv      __%     __%    __%      __%      🟢🟡🔴         │
│   CMV           __%     __%    __%      __%      🟢🟡🔴         │
│   Calidad       __      __     __       __       🟢🟡🔴         │
│   Asistencia    __%     __%    __%      __%      🟢🟡🔴         │
│   Temperaturas  __      __     __       __       🟢🟡🔴         │
│                                                                 │
│   ───── TOP 3 PRIORIDADES DE HOY ─────                          │
│   1) ____________________________   Dueño: _______              │
│   2) ____________________________   Dueño: _______              │
│   3) ____________________________   Dueño: _______              │
│                                                                 │
│   ───── ALERTAS ─────                                           │
│   · _________________________________________                   │
│   · _________________________________________                   │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

Se actualiza a mano con marcador borrable. Foto al tablero a las 9:00 am → se sube al grupo de dueños y la Directora.

---

## Regla de cierre

Si un KPI queda en **ROJO 3 días consecutivos**, se activa protocolo:
- La Directora convoca 1:1 con el dueño de ese KPI en <24h.
- Se elabora un **plan de corrección a 72 horas** escrito.
- Si al 4º día sigue rojo: se informa al dueño de la empresa.
- Si al 7º día sigue rojo: pasa a la agenda de la weekly review como prioridad uno.

Esto no es escalado punitivo: es el mecanismo que garantiza que **ningún rojo se vuelve invisible**.
