# 01 — Sistema de Inventario

**Propósito:** saber **al centavo y al gramo** qué hay, dónde está, cuánto vale y cuánto debería haber. Sin inventario confiable, food cost real no existe y todo lo demás es adivinanza.

**Dueña:** Directora de Operaciones.
**Ejecutor principal:** Jefe de almacén (con apoyo de jefes de estación).

---

## 1. Los 3 tipos de inventario

| Tipo | Qué es | Frecuencia |
|------|--------|:----------:|
| **Inventario perpetuo** | Lo que el sistema dice que hay en cualquier momento | Continuo |
| **Inventario cíclico (A/B/C)** | Conteo físico por categoría, rotando | A: diario  ·  B: semanal  ·  C: quincenal |
| **Inventario físico total** | Conteo físico de **todo** el stock | Semestral + Anual |

**Regla clave:** el teórico (perpetuo) nunca va a ser idéntico al real; lo que importa es **que la desviación sea pequeña, conocida y atribuible**.

---

## 2. Clasificación ABC

Se ordena todo el inventario por **valor anual consumido** (precio × unidades/año) de mayor a menor:

| Clase | % del valor | % del SKU típico | Control |
|:-----:|:-----------:|:----------------:|---------|
| **A** | 80% | 10-20% | Conteo diario, par level exacto, proveedor preferente, KPI por SKU |
| **B** | 15% | 30% | Conteo semanal, par level en rango, 1-2 proveedores |
| **C** | 5% | 50-60% | Conteo quincenal/mensual, stock generoso, proveedor único OK |

**Ejemplo:**
- **A:** proteínas principales (pollo, carne de res, pescado principal), aceites, quesos principales.
- **B:** vegetales básicos, lácteos secundarios, panadería.
- **C:** especias, condimentos, envolturas pequeñas.

**Acción del sprint:** al día 9, la Directora + Chef firman la clasificación ABC completa.

---

## 3. Hoja maestra de insumos

El documento madre del inventario:

```
HOJA MAESTRA DE INSUMOS — FUD LAB

SKU     Descripción          UM      Clase   Par     Proveedor1  Proveedor2  Costo   Ubicación
______  __________________   __      A/B/C   ______  __________  __________  $____   __________
______  __________________   __      A/B/C   ______  __________  __________  $____   __________
______  __________________   __      A/B/C   ______  __________  __________  $____   __________
```

### Campos obligatorios

- **SKU:** código único (numérico o alfanumérico corto).
- **Descripción:** nombre completo, con calidad (ej: "Pechuga pollo deshuesada sin piel").
- **Unidad de medida:** kg, g, L, ml, und.
- **Clase ABC.**
- **Par level:** cantidad mínima que debe haber.
- **Proveedor 1 (principal) + Proveedor 2 (backup).**
- **Costo unitario** (actualizado mínimo mensual).
- **Ubicación:** cámara fría 1, almacén seco estante 3, etc.

---

## 4. Cálculo de par levels

```
Par level = (Consumo diario promedio) × (Lead time en días) + Stock seguridad
Stock seguridad = 20-30% × Consumo diario × Lead time
```

**Ejemplo:**
- Pechuga de pollo: consumo 15 kg/día.
- Lead time proveedor: 2 días (orden lunes, llega miércoles).
- Par = 15 × 2 + 0.25 × 15 × 2 = 30 + 7.5 = **37.5 kg al arrancar el ciclo**.

### Ajustes estacionales
- Si hay semana alta esperada (feriado, evento): par × 1.3-1.5.
- Si hay semana baja (post-feriado): par × 0.7-0.8.

### Revisión de par levels
Se revisan **mensualmente** con el forecast y el consumo real del mes anterior. Par desactualizado = inventario desactualizado.

---

## 5. Conteo de inventario diario (insumos A)

**Cuándo:** al cierre del turno, antes de irse.
**Quién:** Jefe de almacén (o Sous si no hay jefe dedicado).

```
CONTEO DIARIO — FECHA: __________   RESPONSABLE: ______________

SKU     Producto              UM   Teórico   Real    Desviación   Motivo (si > 3%)
______  __________________   __   _____     _____   _____%       __________________
______  __________________   __   _____     _____   _____%       __________________
______  __________________   __   _____     _____   _____%       __________________

Total valorizado teórico:  $_____________
Total valorizado real:     $_____________
Desviación total:          $_____________  (___%)

Firma: ____________________   Firma Directora (spot check): _____________
```

**Tolerancia diaria de desviación:** ≤ 2% de valor. Más de eso → investigación inmediata.

---

## 6. Conteo semanal (insumos B + chequeo A)

Viernes noche o sábado temprano. Similar al diario pero cubre insumos B y re-chequea 2-3 insumos A al azar para auditoría cruzada.

---

## 7. Conteo físico semestral (total)

**Cuándo:** fin de junio y fin de diciembre.
**Quién:** equipo completo, bajo la Directora.
**Cómo:**
1. Producción se detiene / reduce al mínimo durante el conteo (1-2 días).
2. Se cuenta **todo**: cámara, congelador, almacén seco, producción, cada restaurante.
3. Se comparan resultados con sistema perpetuo.
4. Se ajusta el sistema con acta firmada por Directora + Contabilidad.
5. Se calcula **shrinkage anual**: diferencia no atribuible entre teórico acumulado y real.

**Shrinkage target:** ≤ 1% anual para una cocina QSR bien operada. Más de 2% = robo, error sistemático de recetas, o fallas en recibo.

---

## 8. Rotación y FIFO

**FIFO** (First In, First Out): el producto que entró primero, sale primero.

### Cómo se ejecuta
- Al recibir, el producto nuevo va **atrás**; el viejo al frente.
- Al usar, se toma del frente.
- En cámaras con estanterías profundas: producto viejo en estante del frente, nuevo en el estante del fondo.

### Rotación como KPI
```
Rotación = Costo de insumo consumido / Valor promedio del inventario
```

**Target de rotación de insumos A:** 2-4 veces por semana (no acumular >3 días de stock).

---

## 9. Software o planilla

**Mínimo para empezar:** Google Sheets / Excel compartido con versionado.

**Recomendado:** software de inventario para restaurantes (existen opciones como MarketMan, BlueCart, xtraCHEF, Restaurant365, MarginEdge).

**Requisitos mínimos del software:**
- Registro de recibo con cotejo contra orden de compra.
- Registro de waste (merma).
- Par levels por SKU.
- Alertas automáticas de stock bajo.
- Integración (o import) con ventas para food cost teórico vs real.
- Export contable.

**Evitar** sistemas que requieren entrada manual de cada consumo por plato si no hay recetas integradas — se vuelve imposible.

---

## 10. Reporte de inventario — tarjeta ejecutiva mensual

```
INVENTARIO — MES: __________

Valor inicial del mes:       $____________
Compras del mes:             $____________
Ajustes (+/-):               $____________
Valor final del mes:         $____________

Consumo teórico (de ventas): $____________
Consumo real:                $____________
Desviación:                  $____________  (___%)

SHRINKAGE del mes:           $____________  (___%)

Top 3 SKUs con mayor desviación:
  1. ______________________________  Desv: $_______  (___%)
  2. ______________________________  Desv: $_______  (___%)
  3. ______________________________  Desv: $_______  (___%)

Acciones tomadas:
  - _______________________________________________________
  - _______________________________________________________
```

Este reporte se presenta en la MBR mensual.

---

## 11. Investigación de desviaciones

Cuando aparece desviación > tolerancia, se sigue el árbol:

```
¿DESVIACIÓN > 3% EN UN SKU?
        │
        ▼
¿Se registró correctamente el recibo?  (cotejo con remisión)
        │ Sí
        ▼
¿Se registró correctamente la merma?   (waste log completo)
        │ Sí
        ▼
¿La ficha técnica coincide con el gramaje servido?  (auditoría con balanza al plato)
        │ Sí
        ▼
¿Hay rotación de personal nuevo sin certificar en esa estación?
        │ No
        ▼
Hipótesis: robo / shrinkage no explicado.
→ Escalar a dueño, revisar cámaras, accesos, patrones horarios.
```

---

## 12. Controles antifraude básicos

- **Recibo solo en horario con dos personas presentes** (jefe almacén + Sous o Directora).
- **Nadie recibe y registra solo** en horarios de madrugada.
- **Cámaras de video en zona de recibo y cámaras frías**, si presupuesto lo permite.
- **Rotación de jefe de almacén** cada 12-18 meses al menos para auditoría natural.
- **Conteos aleatorios sorpresa** por la Directora (mínimo 1 por mes, a un SKU A al azar).
- **Separación de funciones:** quien compra no recibe; quien recibe no cuenta final; quien cuenta final no paga factura.

---

## 13. Regla cultural

**"El inventario que no se cuenta, desaparece."** No hay cocina QSR en el mundo que tenga inventario preciso **por suerte**. Se logra por **disciplina de conteo diario**, el mismo día, a la misma hora, firmada por la misma persona responsable.
