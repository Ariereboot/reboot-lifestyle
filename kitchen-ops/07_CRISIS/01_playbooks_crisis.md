# 01 — Playbooks de Crisis

**Propósito:** tener **respuesta escrita, practicada y clara** para los 10 escenarios de crisis más probables de una cocina. En crisis, nadie improvisa bien — decide lo que ya está escrito.

**Principio:** cada playbook se **practica mínimo 1 vez al año** en simulacro. No se practica = no existe.

---

## Índice de playbooks

1. Falla de equipo crítico
2. Rotura de cadena de frío
3. Falta de personal masiva (turno sin cubrir)
4. Corte de luz / agua / gas
5. Incendio de cocina
6. Accidente con cortes / quemaduras / caídas
7. Sospecha de intoxicación alimentaria de cliente
8. Auditoría sanitaria sorpresa
9. Plaga detectada en cocina
10. Robo / pérdida de efectivo / insumos

---

## Playbook 1 — Falla de equipo crítico

**Ejemplos:** plancha se apaga en servicio, horno no calienta, freidora deja de funcionar, campana se apaga, cámara fría sube temperatura.

### Acción inmediata (primeros 5 min)
1. Jefe de estación detecta y **avisa a Sous** en los primeros 60 segundos.
2. Sous evalúa:
   - ¿Reparación rápida por sí mismo (ej: piloto apagado)? → ejecutar.
   - ¿Fuera del alcance? → playbook continúa.
3. Si fuera del alcance: Sous avisa a Directora en los siguientes 2 min.

### Acción corta (5-15 min)
1. Directora llama a proveedor técnico del contrato (ver `02_MANUAL_ANUAL/05_mantenimiento_preventivo.md` sección 6).
2. Se decide **cómo sigue el servicio**:
   - **Opción A:** redirigir a otra estación que pueda cubrir (plancha cae → salamandra).
   - **Opción B:** "86" temporal de platos que requieren ese equipo.
   - **Opción C:** cierre parcial de menú.
3. Sous comunica a piso (manager de sala).
4. Manager de sala comunica a clientes con disculpa y alternativas.

### Acción media (> 15 min)
1. Si reparación tarda > 30 min: decisión formal de cerrar o continuar con menú reducido.
2. Cliente cuya orden se ve afectada: **política de atención** (reemplazo gratis, descuento, cortesía según monto).
3. Registro en bitácora: equipo, hora, síntoma, acción, tiempo de reparación, costo.

### Prevención
- Revisar calendario de mantenimiento preventivo del equipo que falló.
- Si la falla es por mantenimiento incumplido → registrar como incumplimiento.
- Si el equipo falla > 3 veces en 12 meses → activar plan de reposición.

### Nunca
- 🚫 Intentar reparar un equipo de gas sin certificación.
- 🚫 Forzar equipo eléctrico con síntomas eléctricos (olor a quemado).
- 🚫 Esconder la falla al cliente o al dueño.

---

## Playbook 2 — Rotura de cadena de frío

**Escenarios:**
- Cámara fría superó 8°C por tiempo indefinido (se descubre al abrir).
- Congelador superó -10°C.
- Producto recibido con temperatura fuera de rango.
- Corte de luz > 30 min con producto dentro.

### Acción inmediata
1. **No mover el producto aún.** Confirmar temperatura actual con termómetro calibrado.
2. **Estimar tiempo** que estuvo fuera de rango (última lectura registrada en buen rango vs ahora).
3. Avisar a Sous + Directora.

### Decisión por producto
| Tiempo fuera de rango | Temperatura alcanzada | Acción |
|:---------------------:|:---------------------:|--------|
| < 2h | ≤ 8°C | Puede continuar si se baja temperatura ya |
| < 2h | 8-15°C | Cocinar inmediatamente o descartar |
| 2-4h | Cualquiera sobre 4°C | Descartar producto sensible (proteínas, lácteos, preparados) |
| > 4h | Cualquiera sobre 4°C | Descartar todo producto refrigerado |
| Cualquiera | Proteína cruda > 15°C > 1h | Descartar siempre |

### Descarte
- Registrar en waste log detalladamente.
- Fotografiar antes de descartar (evidencia).
- Estimar pérdida $ y reportar en MBR.

### Causa raíz obligatoria
- ¿Falla del equipo? → playbook 1 + plan de reposición.
- ¿Puerta abierta? → capacitación de equipo.
- ¿Falla de energía? → playbook 4.
- ¿Producto recibido así? → acta de no conformidad al proveedor.

---

## Playbook 3 — Falta de personal masiva

**Escenarios:** brote de enfermedad en el equipo, renuncias simultáneas, feriado mal planeado, transporte público caído.

### Si falta 1-2 personas
- Sous reorganiza posiciones.
- Horas extra para cubrir.
- Si es estación crítica sin cobertura 2★ → simplificar menú ese turno (avisar a piso).

### Si faltan 3+ personas (o 30%+ del equipo del turno)
1. Directora evalúa escenarios:
   - ¿Se puede abrir con menú reducido?
   - ¿Se puede aplazar apertura (ej: solo cena en vez de almuerzo + cena)?
   - ¿Se debe cerrar el día?
2. Decisión con dueño si implica cerrar.
3. Comunicación a clientes (reservas, redes, cartel en puerta).
4. Resto del equipo cubre lo que se pueda con compensación posterior.

### Base de datos de refuerzos
Fud Lab mantiene lista de:
- Ex-cocineros confiables que pueden venir como freelance.
- Escuelas gastronómicas con convenio de practicantes.
- Agencias de staff temporal (en ciudades grandes).

Esta lista vive con la Directora. Se valida cada 6 meses.

### Prevención
- No permitir > 2 vacaciones simultáneas.
- Cross-training agresivo (matriz).
- Ruta de escalamiento documentada.

---

## Playbook 4 — Corte de luz / agua / gas

### Luz
1. Sous verifica si es corte local o del barrio (pregunta a vecinos o llama a proveedora).
2. Si < 15 min estimado: mantener cámaras cerradas, no abrir (aislan bien).
3. Si > 15 min: evaluar si hay UPS / planta eléctrica en operación.
4. Si > 30 min sin backup: cerrar parcialmente, aplicar playbook 2 (cadena fría).
5. Si hay planta: verificar conexión prioritaria (cámaras, freidora para chef safety).

### Agua
1. Sin agua → **no se puede operar cocina** (lavado, sanitización).
2. Sous avisa a Directora. Directora evalúa si:
   - Falla edificio: notifica administrador.
   - Falla red: verificar con vecinos.
3. Si corte > 2h: cerrar operación, mandar equipo a casa (con compensación mínima de horas).
4. Una vez vuelve el agua: revisar si hay contaminación en tubería, descartar primeros 100L, re-sanitizar superficies.

### Gas
1. Olor a gas detectado → **evacuar inmediatamente**, cerrar válvula principal, no encender equipos ni interruptores eléctricos, ventilar, llamar a proveedora de gas.
2. Corte de gas (no olor) → operación limitada: planchas y hornos de gas fuera.
3. Ver playbook 1.

---

## Playbook 5 — Incendio de cocina

**Este playbook se practica con simulacro cada 6 meses.**

### Incendio pequeño contenido (sartén, pequeña llama)
1. **NO echar agua** a fuego de aceite/grasa.
2. Tapar con tapa metálica o manta ignífuga.
3. Cortar fuente de calor (apagar fogón, cerrar gas).
4. Extintor clase K (aceite) o ABC para otros.
5. Verificar que se apague completamente.
6. Ventilar, registrar, reportar.

### Incendio de campana / ductos
1. Activar sistema de supresión si existe (automático o palanca).
2. Cerrar gas principal.
3. Evacuar zona.
4. Llamar a bomberos aunque parezca controlado.

### Incendio descontrolado
1. **Evacuar** por ruta marcada.
2. Cerrar puertas al salir (no con llave, solo cerrar).
3. Reunirse en punto de encuentro definido.
4. Contar personas (Sous).
5. Llamar a bomberos.
6. **No regresar** por nada.

### Después
- Reporte a aseguradora.
- Investigación de causa.
- Re-entrenamiento de equipo.
- Revisión de sistema de supresión.

---

## Playbook 6 — Accidente con cortes / quemaduras / caídas

### Corte leve (no requiere puntos)
1. Detener sangrado con paño limpio.
2. Lavar con agua limpia y jabón.
3. Cubrir con apósito impermeable + guante desechable sobre apósito.
4. Registrar en bitácora de incidentes.

### Corte mayor (sangrado profuso, profundidad)
1. Detener sangrado con presión directa.
2. Elevar la extremidad.
3. Llamar ambulancia si indicado.
4. Sous acompaña al cocinero o asigna acompañante.
5. Reemplazo en estación inmediato.
6. Registro formal + reporte a RRHH / ART / seguro laboral.

### Quemadura
1. Agua fría corriente 10-20 min.
2. No aplicar aceite, pasta de dientes, ni hielo directo.
3. Si 2º o 3er grado: hospital.

### Caída
1. Verificar si puede moverse.
2. Si no puede: no mover, llamar emergencia.
3. Si puede: evaluar, aplicar primeros auxilios básicos.
4. Siempre: documentar y reportar.

### Kit de primeros auxilios obligatorio
- Ubicación visible (señalizada).
- Revisión mensual de contenido.
- Responsable: Sous.

### Registro de accidente (obligatorio para todos)
```
REPORTE DE ACCIDENTE — __________
Persona: _________  Hora: _____  Lugar: ____________
Descripción: _____________________________________
Primeros auxilios aplicados: _____________________
Traslado hospital: Sí / No
Testigos: ________________________________________
Causa probable: __________________________________
Acción correctiva: ________________________________
Firma afectado: ______  Firma Sous: ______  Directora: ______
```

---

## Playbook 7 — Sospecha de intoxicación alimentaria

Ver `03_ESTANDARES/03_HACCP_y_food_safety.md` sección 7. Resumen:

1. Registro inmediato de todos los detalles.
2. Aislar producto sospechoso.
3. Notificar Directora + Dueño en la primera hora.
4. Revisar bitácoras de temperatura y recibo del día.
5. Contactar autoridad sanitaria si la normativa local lo exige.
6. Ser empático con cliente, no aceptar culpa sin asesoría legal.
7. Investigación interna con informe en 48h.

---

## Playbook 8 — Auditoría sanitaria sorpresa

Ver `02_MANUAL_ANUAL/04_plan_auditorias.md` sección 5. Resumen:

1. Recibir con respeto.
2. Llamar a Directora **de inmediato**.
3. El equipo sigue operando normalmente — no correr a limpiar / esconder.
4. Acompañar siempre, tomar notas de todo.
5. Firmar "recibido", no "de acuerdo".
6. Plan correctivo escrito en 24h.

---

## Playbook 9 — Plaga detectada (roedores, insectos)

### Detección
- Durante limpieza o revisión, se ve heces, huellas, insectos vivos, nidos.

### Acción inmediata
1. **Aislar la zona** afectada.
2. Descartar producto en contacto o potencialmente contaminado.
3. Limpieza profunda + sanitización.
4. Foto-evidencia para proveedor de control de plagas.

### Acción siguiente
1. Llamar a control de plagas (proveedor bajo contrato — debería estar vigente).
2. Servicio de fumigación o tratamiento específico.
3. Revisar **punto de entrada**: fisuras, drenajes, puertas mal selladas, empaques sospechosos.

### Prevención permanente
- Contrato mensual con empresa certificada de control de plagas.
- Bitácora de visitas y tratamientos.
- Programa IPM (Integrated Pest Management) documentado.
- Zona de basura en orden permanente.
- No dejar producto en el piso, estanterías de al menos 15 cm.

---

## Playbook 10 — Robo / pérdida no explicada

### Sospecha (no confirmado)
- Inventario muestra desviación > 3% sin causa identificada.
- Cámaras en zonas sensibles (recibo, almacén, cámaras frías).

### Proceso
1. Directora revisa patrón: turnos, días, personas, SKUs.
2. No acusar sin evidencia.
3. Ajustar controles:
   - Recibo con dos personas siempre.
   - Rotación de responsables de conteo.
   - Auditoría sorpresa.

### Confirmado (con evidencia)
1. No confrontar en caliente.
2. Consultar con RRHH / asesoría legal.
3. Proceso formal según normativa laboral.
4. Cierre: separación + posible denuncia según monto y política.

### Reporte a dueño
Cualquier pérdida confirmada > $X se reporta al dueño dentro de 24h.

---

## Simulacros anuales

Una vez al año, la Directora ejecuta **simulacros** de 3-4 de estos playbooks con el equipo, sin aviso previo:

- Simulacro de evacuación por incendio.
- Simulacro de corte eléctrico prolongado.
- Simulacro de auditoría sorpresa (uno de los jefes hace de auditor).

**Objetivo:** que la respuesta sea reflejo, no improvisación.

---

## Directorio de emergencia (visible en cocina)

```
DIRECTORIO DE EMERGENCIA — FUD LAB

EMERGENCIAS GENERALES
  Bomberos:                       ___
  Ambulancia:                     ___
  Policía:                        ___
  Hospital más cercano:           _______________

INTERNOS
  Directora de Operaciones:       _______________
  Head Chef:                      _______________
  Dueño:                          _______________

PROVEEDORES TÉCNICOS (con contrato)
  Mantenimiento frío:             _______________
  Mantenimiento gas:              _______________
  Electricista:                   _______________
  Plomería:                       _______________
  Control de plagas:              _______________
  Fumigador de emergencia:        _______________

SERVICIOS
  Electricidad (reportes):        _______________
  Agua (reportes):                _______________
  Gas (reportes):                 _______________

OTROS
  ART / seguro laboral:           _______________
  Abogado laboral:                _______________
  Asesor de food safety:          _______________
```

Se imprime, se pega en 3 lugares visibles, y se actualiza **cada 3 meses**.

---

## Principio cultural

**"En crisis, el que decide es el que tiene el plan escrito. El que no, entra en pánico."** Los playbooks existen para que en un momento de alta presión, la Directora, el Chef o el Sous **sepan exactamente qué hacer**. Escribirlos es trabajo; practicarlos es inversión; tenerlos y no practicarlos es autoengaño.
