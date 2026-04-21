# Compliance README · Reglas de cero riesgo para @ariereboot

> **Este documento es OBLIGATORIO leer** para cualquier persona que vaya a tocar la cuenta de Instagram @ariereboot, ManyChat, o manejar comunicación automatizada del programa Reboot 30.
>
> **Principio rector:** la cuenta @ariereboot es el activo principal. Cero riesgo siempre.

---

## ✅ Lo que SÍ se puede hacer

| Acción | Por qué es seguro |
|--------|-------------------|
| Responder automático con DM a quien comentó una keyword en un reel | El usuario inició la interacción |
| Responder automático a quien te mandó DM primero | El usuario abrió la conversación |
| Responder automático a quien mencionó tu cuenta en su story | Permitido por Meta |
| Mandar mensaje de seguimiento dentro de 24h después que el usuario respondió | Ventana legal de Meta |
| Mandar updates del programa (Día 1, Día 7, etc.) a inscritos con tag `ACCOUNT_UPDATE` | Permitido porque tienen cuenta activa |
| Incluir "Responde STOP" en los primeros mensajes | Requisito legal + respeto |
| Identificar cada mensaje con "— Arie · @ariereboot" | Cumplimiento |

---

## ❌ Lo que NUNCA se puede hacer

| Acción | Por qué es peligroso |
|--------|----------------------|
| **Mandar DM "en frío"** a followers que nunca interactuaron | Spam violation. La cuenta puede quedar baneada. |
| **Auto-follow** de cuentas masivamente | Viola TOS. Cuenta suspendida inmediatamente. |
| **Auto-like** o **auto-comment** con bots | Shadowban garantizado. |
| **Comprar listas de emails** e importar a ManyChat | Spam. Prohibido por Meta. |
| **Mandar mensajes fuera de 24h** sin tag oficial aprobado | Bloqueado por Meta, genera flags. |
| **Copy con promesas médicas** ("cura la diabetes", "pierde 10 kg seguro") | Reporte inmediato, shadowban. |
| **"Urgencia fake"** cuando no es real ("últimas 2 horas" repetidamente) | Reportes de usuarios, pérdida de alcance. |
| **Mandar mismo mensaje al mismo usuario >3 veces** | Reportes → shadowban. |
| **Flows sin opción de STOP** | Incumplimiento legal + políticas Meta. |
| **Compartir el password de la cuenta** con terceros | Riesgo de hackeo. |
| **Usar apps no oficiales** (growth tools, analytics dudosas) | Acceso a tu cuenta puede ser revocado por Meta. |

---

## 🚨 Señales de alerta a monitorear

Si ves alguno de estos síntomas, **detén inmediatamente** cualquier automatización y avísame:

1. **Engagement baja un 30%+** de un día para otro sin causa → posible shadowban silencioso
2. **Mensajes automáticos dejan de entregarse** → flag de Meta
3. **ManyChat muestra "messages not delivered"** en los reportes → violación de policy
4. **Ves mensaje "tu cuenta ha sido limitada"** en la app de Instagram → notificación oficial de restricción
5. **Usuarios reportan que no les llega el DM automático** a pesar de haber comentado la keyword → policy violation silenciosa
6. **Aparecen captchas frecuentes** al usar Instagram → Meta te identifica como bot

### Si alguna pasa:

1. **Pausa todos los flows** en ManyChat (botón "Disable" en Automations)
2. **No publiques reels nuevos con CTAs** por 72h
3. **Revisa reportes de spam** en ManyChat (Analytics → Delivery → Spam reports)
4. **Contáctame** (Claude / equipo técnico)

---

## 🛡️ Configuración defensiva de la cuenta

### Que siempre esté activo

- **Autenticación de dos factores** en Instagram (Settings → Security → Two-Factor Authentication)
- **Autenticación de dos factores** en Facebook (la page vinculada)
- **Backup codes** guardados en un lugar seguro (no en la nube pública)
- **Email de recovery** en una cuenta distinta, con 2FA
- **Actividad de inicio de sesión** revisada cada semana (Settings → Security → Login Activity)

### Permisos de aplicaciones conectadas

Revisar cada trimestre:
- Settings → Security → Apps and Websites
- Solo deben estar: ManyChat, Meta Business Suite, Facebook Ads Manager
- Eliminar cualquier app desconocida

---

## 👥 Reglas para el equipo / colaboradores

### Si alguien ayuda con la cuenta

**Nunca compartir:**
- Password real
- Códigos 2FA
- Backup codes

**Siempre dar acceso via:**
- **Instagram**: agregar como "colaborador" si es otra cuenta (no compartir login)
- **ManyChat**: agregar como "user" del workspace (invitación por email)
- **Facebook Page**: agregar como "editor" o "analyst" según necesidad (Business Manager)

### Niveles de acceso recomendados

| Rol | Instagram | Facebook Page | ManyChat |
|-----|-----------|---------------|----------|
| Arie (owner) | Admin | Admin | Admin |
| Community Manager | Moderator | Editor | Editor |
| Analyst / Reports | — | Analyst | Viewer |
| Copy / Content | — | Editor (solo posts) | Editor (solo flows) |

---

## 📋 Checklist mensual

Primer día de cada mes, verifica:

- [ ] Engagement rate estable vs mes anterior (si baja > 20%, alerta)
- [ ] Delivery rate de ManyChat > 95% (ManyChat → Analytics → Broadcasting)
- [ ] Spam reports en ManyChat < 1% (si es mayor, revisar copy)
- [ ] No hay apps desconocidas en Instagram/Facebook
- [ ] 2FA sigue activado
- [ ] Backup codes siguen en lugar seguro
- [ ] Actividad de login sin entradas sospechosas

---

## 📞 Contactos de emergencia

Si algo se rompe:

- **Meta Business Support**: https://business.facebook.com/help
- **ManyChat Support**: https://manychat.com/help (chat en su dashboard)
- **Documentación Meta para partners**: https://developers.facebook.com/docs/messenger-platform/instagram/

---

## ✅ Firma de lectura

Cualquier persona que vaya a trabajar con la cuenta de Instagram, ManyChat, o el programa Reboot 30 en automatización **debe leer este documento completo** y confirmar:

```
Yo, [NOMBRE], confirmo que leí el compliance-readme.md completo el [FECHA].
Me comprometo a respetar todas las reglas aquí descritas y a consultar
antes de cualquier cambio en la configuración de automatización.
```

---

**Última actualización:** 21 abril 2026
**Autor:** Arie Reboot + Claude (asistente técnico)
**Versión:** 1.0
