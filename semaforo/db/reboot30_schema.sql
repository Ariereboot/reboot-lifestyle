-- Tabla para los registros al programa Reboot 30 (form reboot30.html)
-- Correr UNA vez en el SQL editor de Supabase.

create table if not exists public.reboot30_registros (
  id bigserial primary key,
  created_at timestamptz not null default now(),

  nombre text not null,
  apellido text,
  email text not null,
  codigo_pais text,
  telefono text,
  pais text,
  retos text[],                  -- array de los retos marcados
  consentimiento boolean not null default false,

  -- Tracking
  source text,                   -- ej: "cafe-landing", "instagram", "direct"
  utm_source text,
  utm_medium text,
  utm_campaign text,
  user_agent text,
  ip_hash text,

  -- Estado (para cuando programador integre FluentCRM)
  fluentcrm_synced boolean not null default false,
  fluentcrm_contact_id text,

  status text not null default 'nuevo' check (status in ('nuevo', 'confirmado', 'grupo_wa', 'duplicado'))
);

-- Índices para queries típicos
create index if not exists idx_reboot30_email on public.reboot30_registros (email);
create index if not exists idx_reboot30_created on public.reboot30_registros (created_at desc);
create index if not exists idx_reboot30_pais on public.reboot30_registros (pais);
create index if not exists idx_reboot30_status on public.reboot30_registros (status);

-- Trigger updated_at (reutiliza la función ya existente de menu_analyses)
-- (no hace falta agregarla porque no tenemos updated_at en esta tabla - simpler)

-- Row Level Security: nada de lectura pública
alter table public.reboot30_registros enable row level security;

drop policy if exists "no public read" on public.reboot30_registros;
create policy "no public read" on public.reboot30_registros
  for select to anon using (false);

-- Vista limpia para exportar a CSV desde Supabase UI o consumir
create or replace view public.reboot30_export as
  select
    id,
    created_at at time zone 'America/Panama' as fecha_panama,
    nombre,
    apellido,
    email,
    codigo_pais,
    telefono,
    pais,
    array_to_string(retos, ' · ') as retos,
    consentimiento,
    source,
    utm_source,
    utm_campaign,
    status
  from public.reboot30_registros
  order by created_at desc;
