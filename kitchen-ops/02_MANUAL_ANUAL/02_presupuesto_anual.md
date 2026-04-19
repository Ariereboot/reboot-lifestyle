# 02 — Presupuesto Anual de Cocina

**Propósito:** traducir la ambición del año en números concretos, medibles y distribuidos mes a mes. Sin presupuesto, los KPIs no tienen contra qué compararse.

**Dueña del documento:** Directora de Operaciones.
**Aprobador:** Dueño.
**Input de contenido:** Chef (en lo gastronómico).

---

## 1. Estructura de costos de cocina (cuentas contables mínimas)

Toda cocina profesional separa su P&L en estos bloques:

```
VENTAS DE COCINA                                 $
  (-) COSTO DE MERCANCÍA VENDIDA (CMV)           $
      = Alimentos                                $
      = Bebidas (si cocina las maneja)           $
      = Empaques / desechables                   $
  (-) MERMA / WASTE                              $
                                                 ___
  UTILIDAD BRUTA                                 $

  (-) LABOR (costo laboral)                      $
      = Sueldos cocina                           $
      = Horas extra                              $
      = Beneficios / prestaciones                $
      = Uniformes                                $
                                                 ___
  PRIME COST (Food + Labor)                      %

  (-) GASTOS OPERATIVOS COCINA                   $
      = Energía (gas, electricidad, agua)        $
      = Limpieza / químicos                      $
      = Pequeño equipo / consumibles             $
      = Mantenimiento                            $
      = Capacitación                             $
      = Auditorías / consultorías                $
      = Software / licencias                     $
                                                 ___
  UTILIDAD OPERATIVA DE COCINA                   $
```

---

## 2. Targets de referencia (benchmarks QSR)

Estos son rangos típicos de la industria. **Sirven como punto de partida**; tus targets reales los fija el dueño con la Directora según margen objetivo de Fud Lab.

| Línea | Target QSR | Target casual dining | Fud Lab (llenar) |
|-------|:----------:|:--------------------:|:----------------:|
| CMV (Food cost) | 28-32% | 30-35% | ____ % |
| Merma sobre ventas | ≤ 2% | ≤ 3% | ____ % |
| Labor cost | 25-30% | 28-34% | ____ % |
| Prime cost | ≤ 60% | ≤ 65% | ____ % |
| Energía + limpieza | 3-5% | 3-6% | ____ % |
| Capacitación | 1-2% de labor | 1-2% | ____ % |
| Utilidad operativa cocina | ≥ 20% | ≥ 15% | ____ % |

---

## 3. Cómo se construye el presupuesto anual (paso a paso)

### Paso 1 — Forecast de ventas

Con datos históricos de los últimos 12-24 meses + tendencia + iniciativas nuevas (ej: apertura de restaurante nuevo, menú de temporada), se proyectan las ventas mensuales del año entrante.

**Formato mínimo:**

| Mes | Ventas comida | Ventas bebida | Ventas totales | Tickets estimados |
|-----|:-------------:|:-------------:|:--------------:|:-----------------:|
| Ene | __ | __ | __ | __ |
| Feb | __ | __ | __ | __ |
| ... | ... | ... | ... | ... |
| Dic | __ | __ | __ | __ |
| **Año** | __ | __ | __ | __ |

### Paso 2 — CMV mensual derivado de ventas × food cost target

CMV del mes = Ventas del mes × target food cost %

**Ejemplo:** si ventas de marzo son $100,000 y target CMV es 30% → CMV presupuestado de marzo = $30,000.

### Paso 3 — Labor mensual

Labor = costo fijo de plantilla (sueldos base) + variable proporcional a ventas (horas extra, temporales).

**Fórmula simplificada:**
```
Labor del mes = Plantilla base × salario promedio cargado
              + (Ventas mes / Ventas promedio) × horas extra base
```

### Paso 4 — Gastos operativos

Cada línea se presupuesta con lógica propia:

| Línea | Lógica de presupuesto |
|-------|-----------------------|
| Energía | Histórico + ajuste por inflación + ajuste por volumen |
| Limpieza / químicos | % fijo de ventas (~0.3-0.7%) |
| Pequeño equipo | $ fijo mensual + reserva para reemplazo |
| Mantenimiento | Plan preventivo (ver `05_mantenimiento_preventivo.md`) + reserva contingencia 20% |
| Capacitación | % de labor (1-2%) |
| Auditorías | Costo fijo trimestral + reserva sorpresa |
| Software | Suscripciones anuales / 12 |

### Paso 5 — Consolidación y verificación de utilidad

Se suma todo, se resta de ventas, se valida que la utilidad operativa proyectada cumpla el target del dueño. Si no, se itera: ¿se sube precio? ¿se baja CMV? ¿se reduce plantilla? ¿se sube venta?

---

## 4. Plantilla ejecutiva del presupuesto anual

```
PRESUPUESTO ANUAL DE COCINA — FUD LAB — AÑO _____

                        Ene    Feb    Mar ... Dic    AÑO
VENTAS COMIDA           ___    ___    ___     ___    ___
VENTAS BEBIDA           ___    ___    ___     ___    ___
VENTAS TOTAL            ___    ___    ___     ___    ___

CMV ALIMENTOS           ___    ___    ___     ___    ___
CMV BEBIDAS             ___    ___    ___     ___    ___
EMPAQUES / DESECHABLES  ___    ___    ___     ___    ___
MERMA                   ___    ___    ___     ___    ___
TOTAL COSTO MERCANCÍA   ___    ___    ___     ___    ___
CMV %                   __%    __%    __%     __%    __%

SUELDOS BASE            ___    ___    ___     ___    ___
HORAS EXTRA             ___    ___    ___     ___    ___
BENEFICIOS              ___    ___    ___     ___    ___
UNIFORMES               ___    ___    ___     ___    ___
TOTAL LABOR             ___    ___    ___     ___    ___
LABOR %                 __%    __%    __%     __%    __%

PRIME COST %            __%    __%    __%     __%    __%

ENERGÍA                 ___    ___    ___     ___    ___
LIMPIEZA                ___    ___    ___     ___    ___
PEQUEÑO EQUIPO          ___    ___    ___     ___    ___
MANTENIMIENTO           ___    ___    ___     ___    ___
CAPACITACIÓN            ___    ___    ___     ___    ___
AUDITORÍAS              ___    ___    ___     ___    ___
SOFTWARE                ___    ___    ___     ___    ___
TOTAL OPEX              ___    ___    ___     ___    ___

UTILIDAD COCINA         ___    ___    ___     ___    ___
UTILIDAD %              __%    __%    __%     __%    __%
```

---

## 5. Gobernanza del presupuesto

### Autoridades y límites

| Gasto | Aprueba |
|-------|---------|
| Dentro del presupuesto mensual | Directora sin consulta |
| Desvío < 5% línea mes | Directora, reporta en MBR |
| Desvío 5-15% línea mes | Directora + Dueño (email) |
| Desvío > 15% línea mes o > $X absoluto | Reunión formal + firma |
| Gasto no presupuestado | Dueño |

(Los montos exactos los define el dueño en la firma del plan anual.)

### Revisión mensual

En cada MBR (primer lunes de mes) la Directora presenta:
- Variación real vs presupuesto por línea.
- Explicación de desvíos > 3%.
- Proyección de cierre de año con datos nuevos.
- Ajustes propuestos.

### Revisión trimestral

En cada quarterly planning se **re-pronostica** el año. El presupuesto original no cambia (sirve para medir), pero el "forecast rolling" sí. Sirve para tomar decisiones en tiempo real.

---

## 6. Contingencias obligatorias

Dentro del presupuesto anual se reservan tres partidas ocultas pero presupuestadas:

1. **Contingencia operativa (2% del OPEX anual):** para fallas imprevistas de equipo, sanciones, situaciones de crisis. Usarla requiere firma del dueño.
2. **Fondo de capacitación "estira":** 10% adicional sobre la línea de capacitación, para oportunidades de formación externa (ferias, cursos) que aparezcan sin aviso.
3. **Fondo de reconocimiento:** 0.5-1% de ventas, para bonos por desempeño, comidas del equipo, celebraciones. Lo administra la Directora con criterio del dueño.

---

## 7. Firma del presupuesto

Sin las tres firmas, el presupuesto no es oficial:

```
PRESUPUESTO ANUAL DE COCINA — AÑO _____

Apruebo el presupuesto anexo como base de operación y evaluación:

Dueño / CEO:           __________________  Fecha: ______
Directora de Ops:      __________________  Fecha: ______
Head Chef:             __________________  Fecha: ______
```

Una copia queda en el folder físico "Plan Anual" y otra en drive. No se modifica sin firma nueva.
