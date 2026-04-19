# 02 — Recibo y Compras

**Propósito:** comprar al mejor costo posible, recibir **solo lo que cumple**, y nunca dejar entrar a la cocina producto que no debió pasar la puerta.

**Dueña:** Directora de Operaciones (órdenes y proveedores).
**Ejecutor:** Jefe de almacén (recibo físico).
**Consultor técnico:** Head Chef (calidad y especificación gastronómica).

---

## 1. Ciclo completo de compras

```
FORECAST ───▶ PAR LEVEL ───▶ ORDEN DE COMPRA ───▶ RECIBO ───▶ ALMACENAMIENTO
                                                     │
                                                     ▼
                                                  RECHAZO
                                                  (si no cumple)
```

---

## 2. Especificaciones de compra

Por cada insumo A y B, existe una **ficha de especificación** que define qué es "bueno" y qué es "malo":

```
FICHA DE ESPECIFICACIÓN DE COMPRA — SKU ___

Nombre:              _____________________________
Unidad compra:       _____________________________ (caja/kg/litro)
Rango de peso/caja:  _____________________________
Calidad visual:      _____________________________
Temperatura recibo:  ≤ ____°C / ≥ ____°C / ambiente
Vida útil mínima al recibir: ≥ ___% de vida declarada
Empaque:             _____________________________
Certificaciones requeridas: _______________________

CRITERIOS DE RECHAZO (cualquiera de estos):
 - Temperatura fuera de rango
 - Empaque dañado, roto, con filtración
 - Fecha vencimiento < 50% vida útil
 - Color / olor / textura fuera de norma
 - Plagas visibles o evidencia (roedores, insectos)
 - Sellos de seguridad rotos (caso aplicable)
 - Etiquetado faltante o ilegible

Aprobado por Chef:     __________________  Fecha: _______
Aprobado por Directora: __________________  Fecha: _______
```

---

## 3. Orden de compra (OC)

### Quién puede emitir
- **Directora:** cualquier OC.
- **Jefe de almacén:** OCs recurrentes < $X dentro de par y dentro de proveedores aprobados.
- **Head Chef:** OCs de producto especializado < $X (ej: quesos, pescado premium, ingredientes de menú nuevo).
- **Cualquier monto > $X:** firma Directora.
- **Monto > $XX o proveedor nuevo:** firma Directora + Dueño.

### Plantilla de OC

```
ORDEN DE COMPRA OC-_______       FECHA: __________

Proveedor:      ________________________________________
Contacto:       ________________________________________
Fecha entrega:  _____________   Hora entrega:  _________
Dirección entrega: ______________________________________

SKU    Descripción              Cantidad   UM   Precio un.   Subtotal
______ ______________________   ________   __   $_______     $_______
______ ______________________   ________   __   $_______     $_______
______ ______________________   ________   __   $_______     $_______
                                                            ────────
                                              Subtotal:     $_______
                                              Impuestos:    $_______
                                              TOTAL:        $_______

Condiciones: _________________ (pago 15/30 días, contado, etc.)

Emitida por:    _________________
Autorizada por: _________________
```

**La orden va al proveedor Y se archiva.** El jefe de almacén tiene copia al recibir.

---

## 4. Proceso de recibo (paso a paso)

```
PASO 1 — ANTES DE ABRIR LA CAJA
  [ ] Identificar al transportista y su empresa
  [ ] Verificar que la entrega esté agendada (hay OC)
  [ ] Pedir la remisión / factura
  [ ] Comparar remisión contra OC → debe coincidir

PASO 2 — INSPECCIÓN EXTERNA
  [ ] Vehículo: limpio, refrigerado si aplica
  [ ] Empaque: íntegro, sin daños, sin plagas
  [ ] Etiquetas: legibles, con lote y fecha
  [ ] Temperatura del producto (si corresponde)
      · Refrigerado:  ≤ 4°C
      · Congelado:    ≤ -18°C
      · Cocido caliente: ≥ 60°C

PASO 3 — INSPECCIÓN INTERNA
  [ ] Cantidad coincide con OC (pesar si corresponde)
  [ ] Calidad visual según ficha de especificación
  [ ] Vida útil restante ≥ 50%
  [ ] No hay contaminación cruzada en el vehículo
  [ ] Certificados adjuntos si aplica (sanidad, origen)

PASO 4 — DECISIÓN
  Si TODO OK:
    [ ] Firmar remisión "RECIBIDO CONFORME"
    [ ] Registrar en sistema perpetuo
    [ ] Etiquetar con fecha de recibo y rotar FIFO

  Si HAY NO CONFORMIDAD:
    [ ] Rechazar total o parcial (según criterio)
    [ ] Registrar en "Acta de no conformidad"
    [ ] Firmar remisión "RECIBIDO CON OBSERVACIÓN" o "RECHAZADO"
    [ ] Avisar a Directora en <15 min
    [ ] Cámara fotográfica: foto de la no conformidad
```

---

## 5. Plantilla de bitácora de recibo

```
BITÁCORA DE RECIBO — FECHA: __________   RESPONSABLE: _______________

OC N°    Proveedor       Hora      Temp prod    SKUs   Conforme  Rechazos   Firma
_______  _____________   _____     _____°C      __     √ / X     $______    ______
_______  _____________   _____     _____°C      __     √ / X     $______    ______
_______  _____________   _____     _____°C      __     √ / X     $______    ______

TOTAL CONFORME:   $___________
TOTAL RECHAZADO:  $___________

Observaciones:  ______________________________________________________

Firma Jefe almacén:  _________________   Firma Sous (testigo): _________
```

---

## 6. Acta de no conformidad (ANC)

Cada rechazo se documenta formalmente:

```
ACTA DE NO CONFORMIDAD — ANC-________

Fecha: ___________   Hora: _______
Proveedor: _____________________________
OC / Remisión N°: ______________________

Producto no conforme:
  SKU: ______   Descripción: ____________________________
  Cantidad: ______ UM: ___

Motivo de no conformidad:
  [ ] Temperatura fuera de rango  (medida: ___°C)
  [ ] Empaque dañado
  [ ] Fecha vencimiento insuficiente
  [ ] Calidad visual (color/olor/textura)
  [ ] Plagas o evidencia
  [ ] Cantidad errónea
  [ ] Otro: _________________

Decisión:
  [ ] Rechazo total  [ ] Rechazo parcial  [ ] Aceptación con descuento

Foto evidencia: Sí / No   Archivada en: _______________________

Firma receptor: _________________
Firma transportista: ____________
Firma Directora: ______________________________

Acción con proveedor:
  [ ] Nota de crédito solicitada
  [ ] Reemplazo solicitado
  [ ] Llamada al comercial
  [ ] Reunión formal (si > 2 ANC/mes)
```

---

## 7. Gestión de proveedores

### Base de datos de proveedores

```
PROVEEDOR:  _____________________________
CONTACTO:   _____________________________
EMAIL:      _____________________________
TELÉFONO:   _____________________________
DIRECCIÓN:  _____________________________
RIF/NIT:    _____________________________
CERTIFICACIONES: _______________________

LEAD TIME:     ___ días
MONTO MÍNIMO:  $_________
FRECUENCIA:    _______________________
FORMA DE PAGO: _______________________
SKUs QUE SUMINISTRA: _____________________
CATEGORÍA:     [ ] A principal  [ ] A backup  [ ] B  [ ] C

SCORECARD (último trimestre):
  Calidad:            _/5
  Cumplimiento:       _/5
  Precio:             _/5
  Flexibilidad:       _/5
  Documentación:      _/5
  Total:              __/25   ESTADO: 🟢 🟡 🔴
```

### Regla de dependencia
- Ningún SKU A depende de **un solo proveedor**. Siempre hay backup probado.
- Se prueba al backup al menos 1 vez por trimestre (una orden real, no solo de emergencia).

### Evaluación anual
Ver `02_MANUAL_ANUAL/04_plan_auditorias.md` — auditoría de proveedores.

---

## 8. Negociación y RFQ (Request for Quote)

**Cada 6 meses**, se hace RFQ a mínimo 2 proveedores alternativos de los insumos A top 10. Esto **sin cambiar proveedor necesariamente**, solo para:
- Tener referencia de mercado.
- Evitar la complacencia del proveedor actual.
- Tener una carta en la mesa al renegociar.

**Plantilla RFQ:**

```
RFQ — SKU _____   FECHA: __________

Insumo: _____________________________
Volumen mensual estimado: ___ ___ (UM)
Especificaciones: ver ficha adjunta
Condiciones deseadas: __________________

Favor cotizar:
  - Precio unitario:
  - Volumen mínimo:
  - Lead time:
  - Forma de pago:
  - Condiciones de transporte:
  - Certificaciones:

Plazo respuesta: ___ días
Enviar a: __________________________
```

---

## 9. Calendario de compras (semana típica)

```
LUNES      : conteo A + ajuste forecast + OC insumos críticos (lunes tarde = entrega miércoles)
MARTES     : recibo de OC del lunes
MIÉRCOLES  : conteo B + OC resto
JUEVES     : recibo de OC del miércoles
VIERNES    : conteo semanal + reporte consumo
SÁBADO     : día alto, solo emergencia
DOMINGO    : cierre / consolidación
```

El calendario exacto varía por proveedor, pero el **ritmo semanal fijo** es clave.

---

## 10. Reglas no negociables de compras y recibo

1. **NO se recibe fuera de horario establecido.** Si llega a las 2 am, se rechaza (salvo excepción firmada por Directora).
2. **NO se recibe sin OC previa.** Si un proveedor aparece con mercancía sin OC, se llama a Directora antes de aceptar.
3. **NO se recibe solo** (siempre 2 personas mínimo en zona de recibo).
4. **NO se paga factura sin remisión firmada "conforme"** coincidente.
5. **NO se cambia de proveedor sin RFQ y aprobación escrita** de Directora.
6. **NO se acepta producto con temperatura fuera de rango**, aunque "solo esta vez".
7. **NO se firma remisión sin haber contado y pesado.**

---

## 11. KPIs de compras y recibo

| KPI | Target |
|-----|--------|
| % de entregas a tiempo | ≥ 95% |
| % de no conformidades sobre OCs | ≤ 3% |
| % de proveedores con scorecard ≥ 4/5 | ≥ 80% |
| Costo promedio por SKU A vs mercado | ≤ mercado |
| # de roturas de stock (stock = 0) en insumos A | 0 |
| Tiempo promedio proceso de recibo por OC | ≤ 20 min |

Se reportan en MBR.
