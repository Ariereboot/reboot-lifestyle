# 04 — Shift Handoff (Cambio de Turno)

**Propósito:** transferir la operación de un turno al siguiente sin que se pierda información crítica. El 80% de los incidentes "nadie me dijo" nacen de un handoff mal hecho.

**Cuándo:** 10-15 min antes de que termine el turno saliente + 10-15 min después de que empiece el turno entrante. **Traslape obligatorio.**

**Quién ejecuta:**
- Entrega: Jefe de turno saliente (Sous o Chef de turno).
- Recibe: Jefe de turno entrante.

**Entregable:** el Shift Handoff Form firmado por ambos.

---

## Estructura del handoff

```
╔══════════════════════════════════════════════════════════════════╗
║  SHIFT HANDOFF FORM — FUD LAB                                    ║
║                                                                  ║
║  Fecha: __________   Día semana: __________                      ║
║  Turno saliente: ______ hrs    Jefe saliente: ________________   ║
║  Turno entrante: ______ hrs    Jefe entrante: ________________   ║
╚══════════════════════════════════════════════════════════════════╝

1) RESUMEN DEL TURNO SALIENTE

   # tickets servidos: ____
   Ticket time promedio: ____ min
   # de 86 (platos caídos): ____
   Incidentes / quejas de cliente:
     ______________________________________________________________
     ______________________________________________________________
   KPI color del turno:  🟢 🟡 🔴
   Causa del color (si amarillo/rojo):
     ______________________________________________________________

2) ESTADO DEL MISE EN PLACE POR ESTACIÓN

   Estación                      % de par al cierre   Acción
   ─────────────────────────────────────────────────────────────
   Producción / Prep              ___%                 ____________
   Línea caliente                 ___%                 ____________
   Línea fría / Pantry            ___%                 ____________
   Parrilla                       ___%                 ____________
   Freidora                       ___%                 ____________

   "Acción" = OK / REPONER / PRODUCIR MÁS / AVISAR DIRECTORA

3) PRODUCTO EN PREPARACIÓN / EN CURSO

   Qué se quedó cociendo / enfriando / marinando:
   Elemento              Hora inicio  Hora estimada fin   Responsable
   __________________    _____        _____               ___________
   __________________    _____        _____               ___________

   ⚠️ El jefe entrante confirma verbalmente que recibió esta información.

4) FALTANTES / PEDIDOS PENDIENTES

   - ____________________________________________________
   - ____________________________________________________
   - ____________________________________________________
   (Directora o prep cook debe reordenar)

5) EQUIPOS CON FALLA O MANTENIMIENTO PENDIENTE

   Equipo              Síntoma                      Reportado a      Status
   ________________    _____________________        ___________      _______
   ________________    _____________________        ___________      _______

6) AJUSTES DE MENÚ

   Platos "86" este turno:
   - _________________________   motivo: ___________________
   - _________________________   motivo: ___________________

   Platos que pueden caer en el próximo turno:
   - _________________________   por: _____________________

7) AUSENCIAS / CAMBIOS DE EQUIPO

   Quién se fue temprano: _____________________  Razón: ___________
   Quién llega tarde al siguiente: _____________  ETA: _______
   Cambios de posición: ____________________________________

8) MENSAJES DE DIRECCIÓN / CHEF / DUEÑO

   - ____________________________________________________
   - ____________________________________________________

9) FOCO OPERATIVO PARA EL TURNO ENTRANTE

   1. ____________________________________________________
   2. ____________________________________________________
   3. ____________________________________________________

10) CONFIRMACIÓN DEL TURNO ENTRANTE

    [ ] Recorrí la cocina con el jefe saliente
    [ ] Verifiqué personalmente estado de estaciones críticas
    [ ] Entiendo qué está en curso y cuándo sale
    [ ] Conozco los "86" y faltantes
    [ ] Recibí las llaves / accesos / códigos necesarios

FIRMAS
──────
Jefe saliente:   ________________________________  Hora: _____
Jefe entrante:   ________________________________  Hora: _____

(Escaneo digital a Directora. Original archivado 30 días.)
```

---

## Reglas del handoff

### 1. **Cara a cara, no por WhatsApp**
El handoff se hace **caminando juntos por la cocina**, tocando físicamente cada estación. No se reemplaza por mensaje.

### 2. **Traslape real**
El turno saliente se paga hasta X minutos **después** de terminar su turno contractual, y el entrante entra X minutos **antes**. Ese traslape es el handoff. No es negociable ni "a ver si te queda tiempo".

### 3. **El que entra decide**
Si el jefe entrante detecta algo que le impide recibir el turno (ej: cámara fuera de temperatura, equipo dañado, producto en zona peligro), **tiene autoridad para no firmar** y escalar a Directora. El turno saliente no se va hasta resolver o transferir a Directora.

### 4. **Si no hay handoff, no hay turno**
Si un jefe entrante llega y no hay jefe saliente, llama a Directora inmediatamente. No asume el turno ciego.

### 5. **El handoff se guarda**
Todos los handoffs del mes se archivan. En la MBR, la Directora muestra cuántos handoffs se hicieron y cuántos hallazgos críticos se detectaron.

---

## Handoff de producción a restaurantes (si hay commissary)

Si Fud Lab tiene producción central que abastece a restaurantes, hay un handoff adicional **entre commissary y cada restaurante**:

```
HANDOFF COMMISSARY → RESTAURANTE __________

Fecha: __________  Hora despacho: _____

Productos despachados:
Código    Producto             Cantidad   Lote/Fecha   Use-by
______    ___________________  _______    ___________  ______
______    ___________________  _______    ___________  ______
______    ___________________  _______    ___________  ______

Temperatura en salida commissary: _____°C
Temperatura en llegada restaurante: _____°C    Diferencia: _____

Responsable despacho:  _____________________
Responsable recepción: _____________________
Conformidad (√/X por producto)

Novedades / rechazos:
_________________________________________________________________

Firmas: ___________________________________________________________
```

El restaurante firma al recibir y tiene 15 min para reclamar discrepancias (cantidad, temperatura, calidad).

---

## Handoff semanal a la Directora

Una vez por semana (lunes 8:00 am) cada Sous entrega a la Directora un **weekly handoff**: resumen de los 7 días operativos, patrones detectados, alertas recurrentes, ausencias del equipo, feedback a SOPs.

```
WEEKLY HANDOFF — Semana del __ al __ de __

KPIs de la semana:
  Ticket time prom: ___  |  CMV: __%  |  Merma: __%
  Cumplimiento checklists: __%

Top 3 incidentes de la semana:
  1. ________________________________________
  2. ________________________________________
  3. ________________________________________

Equipos con falla recurrente:
  - ________________________________________

Cocineros ausentes:
  Nombre  Días  Motivo
  ______  ____  ____________________

Platos problemáticos (ficha vs realidad):
  - ________________________________________

Sugerencias del equipo:
  - ________________________________________

Firma Sous: _______________  Firma Directora: _______________
```

Este insumo alimenta la weekly kitchen review del viernes con el dueño.

---

## Cultura del handoff

En aviación comercial, ningún piloto deja el avión sin handoff. En una cocina que aspira a nivel QSR, aplica el mismo principio: **el turno no termina cuando te vas; termina cuando el turno entrante recibe y firma**.
