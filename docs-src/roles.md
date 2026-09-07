# Roles y permisos

Tres perfiles con permisos granulares definidos en `src/types/auth.ts` (`ROLE_PERMISSIONS`).

| Rol | Etiqueta UI | Resumen |
| --- | --- | --- |
| `admin` | Administración | Acceso completo a todos los módulos. |
| `trabajador` | Trabajador | Registra actuaciones, tratamientos, maquinaria y muestras de suelo; no puede borrar nada ni editar cultivos. |
| `visitante` | Visitante | Solo lectura. |

## Permisos por rol

Definidos en `ROLE_PERMISSIONS` (líneas 69-83 de `src/types/auth.ts`).

| Permiso | Admin | Trabajador | Visitante |
| --- | :-: | :-: | :-: |
| `cultivos:create` | ✓ | — | — |
| `cultivos:update` | ✓ | — | — |
| `cultivos:delete` | ✓ | — | — |
| `cultivos:adjunto-upload` | ✓ | — | — |
| `cultivos:adjunto-delete` | ✓ | — | — |
| `actuaciones:create` | ✓ | ✓ | — |
| `actuaciones:update` | ✓ | ✓ | — |
| `actuaciones:delete` | ✓ | — | — |
| `actuaciones:adjunto-upload` | ✓ | ✓ | — |
| `actuaciones:adjunto-delete` | ✓ | — | — |
| `tratamientos:create` | ✓ | ✓ | — |
| `tratamientos:update` | ✓ | ✓ | — |
| `tratamientos:delete` | ✓ | — | — |
| `maquinaria:create` | ✓ | ✓ | — |
| `maquinaria:update` | ✓ | ✓ | — |
| `maquinaria:delete` | ✓ | — | — |
| `maquinaria:adjunto-upload` | ✓ | ✓ | — |
| `maquinaria:adjunto-delete` | ✓ | — | — |
| `muestras-suelo:create` | ✓ | ✓ | — |
| `muestras-suelo:delete` | ✓ | — | — |
| `gestion-riego:delete` | ✓ | — | — |
| `images:crop` | ✓ | — | — |

## Autenticación

!!! warning "Sin backend de autenticación"
    La autenticación es **estrictamente cliente**. Hay tres cuentas fijas en `src/stores/authStore.ts` (líneas 29-51) y la sesión se persiste en `localStorage` bajo `terra:auth-session-v1`. No hay JWT, no hay endpoint de login en el backend, no hay base de datos de usuarios. Esto está implícito en el modelo de datos del proyecto y debe tenerse en cuenta antes de exponer la app en red.

| Usuario | Contraseña |
| --- | --- |
| `admin` | `admin` |
| `trabajador` | `trabajador` |
| `visitante` | `visitante` |

La pantalla de login también expone un botón **Entrar como visitante** (`loginAsGuest()` en `authStore.ts`) que fija la sesión visitante sin pedir contraseña.
