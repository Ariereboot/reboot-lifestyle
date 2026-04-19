# 05 — Plan de Mantenimiento Preventivo Anual

**Propósito:** prevenir fallas de equipo que paran la operación, dañan producto o cuestan multas sanitarias. Mantenimiento reactivo (arreglar cuando falla) es 3-5× más caro que preventivo.

**Dueña:** Directora de Operaciones.
**Ejecutores:** proveedores técnicos externos (especializados por tipo de equipo) + jefe de mantenimiento interno si existe.

---

## 1. Inventario maestro de equipos

Antes de planear mantenimiento hay que tener **inventario completo de equipos** con estos campos:

```
INVENTARIO DE EQUIPOS — COCINA FUD LAB

ID    Equipo           Marca/Modelo   Serie    Ubicación    Compra   Garantía   Vida útil  Valor reposición
001   Cámara fría 1    ___            ___      Producción   ___      ___        8-10 años  $___
002   Congelador 1     ___            ___      Producción   ___      ___        8-10 años  $___
003   Plancha ind.     ___            ___      Línea        ___      ___        10 años    $___
004   Freidora doble   ___            ___      Línea        ___      ___        8 años     $___
005   Horno combi      ___            ___      Producción   ___      ___        10-12 años $___
...
```

Ubicación física: una etiqueta con el ID pegada en cada equipo.

---

## 2. Categorías de equipos y frecuencia base

| Categoría | Ejemplos | Frec recomendada | Riesgo si falla |
|-----------|----------|------------------|-----------------|
| **Frío** | Cámaras, congeladores, vitrinas | Mensual | 🔴 ALTO — pérdida de cadena fría, riesgo sanitario, pérdida de producto |
| **Cocción a gas** | Planchas, salamandras, hornos | Trimestral | 🔴 ALTO — riesgo incendio/explosión, paro de línea |
| **Cocción eléctrica** | Hornos, abatidor | Trimestral | 🟡 MEDIO |
| **Freidoras** | Freidoras doble, sartenes | Mensual | 🔴 ALTO — riesgo incendio por aceite |
| **Procesadores** | Licuadoras, cortadoras, sierras | Trimestral | 🟡 MEDIO |
| **Lavado** | Lavavajillas, lavamanos | Trimestral | 🟡 MEDIO — cuello de botella |
| **Ventilación** | Campanas, extractores, ductos | Semestral (profundo) | 🔴 ALTO — riesgo incendio ductos con grasa |
| **Gas / red** | Válvulas, mangueras, reguladores | Semestral | 🔴 ALTO — riesgo vida |
| **Eléctrico** | Tableros, UPS, cableado | Anual | 🔴 ALTO |
| **Agua y desagües** | Trampas de grasa, desagües, filtros | Mensual (trampa), trimestral (resto) | 🟡 MEDIO |
| **Seguridad contra incendio** | Extintores, sistema supresión | Semestral | 🔴 ALTO — multa + vida |
| **Detección** | Termómetros, balanzas | Semestral (calibración) | 🟡 MEDIO |

---

## 3. Calendario anual de mantenimiento

### Cada mes (todos los meses)

**Mantenimiento mensual fijo:**

| Tarea | Responsable |
|-------|-------------|
| Limpieza profunda y revisión visual de cámaras y congeladores | Interno + proveedor |
| Limpieza profunda freidoras + filtro/aceite | Interno |
| Limpieza trampa de grasa | Externo |
| Revisión visual mangueras de gas | Interno |
| Prueba de termómetros contra punto de hielo (0°C) | Interno |
| Revisión extintores (carga, fecha, obstáculos) | Interno |
| Revisión cuchillería: afilado y reemplazo | Interno |

### Cada trimestre

- Mantenimiento preventivo profundo por proveedor certificado: planchas, salamandras, hornos, procesadores, lavavajillas.
- Limpieza profunda de campana/extractor.
- Calibración de balanzas.
- Revisión del sistema eléctrico por electricista certificado.

### Cada semestre

- **Limpieza profunda de ductos de extracción** (crítico para prevención de incendios).
- Mantenimiento de sistema de gas (proveedor certificado).
- Inspección y recarga de extintores (según normativa).
- Calibración de termómetros críticos (cámaras, sondas).
- Revisión profunda de sistema de supresión de incendios en campana.

### Cada año

- Revisión completa del sistema eléctrico (certificación).
- Revisión estructural de equipos grandes (cámaras).
- Evaluación de vida útil de cada equipo → plan de reposición.
- **Actualización de inventario maestro** + valor de reposición actualizado.

---

## 4. Plan de reposición / CAPEX

**Por cada equipo en el inventario maestro** se lleva una ficha con:

```
FICHA DE EQUIPO — ID ____
Equipo: _____________________________
Fecha compra: _____________  Vida útil: __ años
Fin de vida útil proyectado: _____________

Últimos mantenimientos mayores:
  __/__/____  Descripción: _______________  Costo: $___
  __/__/____  Descripción: _______________  Costo: $___
  __/__/____  Descripción: _______________  Costo: $___

Fallas en los últimos 12 meses: __
Costo acumulado de mantenimiento año: $___
Costo reposición hoy: $___

Decisión:  [ ] continuar  [ ] reemplazar año próximo  [ ] reemplazar YA

Firma Directora: _______________
```

**Regla:** si el costo de mantenimiento acumulado de un equipo en 12 meses supera el 40% del costo de reposición → se reemplaza.

---

## 5. Bitácora de mantenimiento

Cada intervención (preventiva o correctiva) se registra en la bitácora del equipo:

```
BITÁCORA DE EQUIPO ID ____
Fecha  Tipo        Descripción             Proveedor/Técnico   Costo    Firma
___    Prev/Corr   _______________         _________________   $___     ___
___    Prev/Corr   _______________         _________________   $___     ___
```

**Documentación obligatoria:** el proveedor deja orden de servicio firmada. Se archiva física y digitalmente por mínimo 2 años (y lo que exija normativa local).

---

## 6. Contratos con proveedores técnicos

**Para equipo crítico** se firma contrato anual con:
- Mantenimiento preventivo programado incluido.
- SLA de respuesta a fallas: típicamente ≤ 4 horas para crítico, ≤ 24h para no crítico.
- Inventario de repuestos clave en su bodega.
- Precios fijos durante el año.

**Mínimo sugerido:** 1 contrato anual por categoría crítica (frío, gas, electricidad, extracción).

---

## 7. Respuesta a falla (reactivo)

Cuando falla un equipo:

1. **Jefe de estación reporta a Sous** en los 5 min.
2. **Sous informa a Directora** de inmediato.
3. Se activa el **playbook de falla de equipo** (ver `07_CRISIS/01_playbooks_crisis.md`).
4. Directora llama al proveedor bajo contrato.
5. Se documenta la falla, el impacto, la solución y la causa raíz.
6. Se evalúa si entra en plan de reposición.

---

## 8. KPI de mantenimiento

| KPI | Target | Cómo se mide |
|-----|--------|--------------|
| % mantenimientos preventivos ejecutados en fecha | ≥ 95% | Ejecutados / programados |
| Paros no planeados de equipo crítico por mes | ≤ 1 | Conteo |
| Tiempo promedio de reparación (MTTR) | ≤ 4h crítico | Horas |
| Costo de mantenimiento / ventas | ≤ 1.5% | $/$ |
| Equipos fuera de plan de calibración | 0 | Conteo |

Se reporta en la MBR mensual.

---

## 9. Culturalmente

El mantenimiento preventivo no es "gasto que da pereza". Es **seguro** — seguro contra incendio, contra paro operativo, contra multa sanitaria, contra ticket frío servido a cliente. Se ejecuta **con la misma disciplina que el menú**: programado, documentado, firmado.
