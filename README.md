# Delosi E-commerce MFE Challenge

Reto técnico frontend desarrollado con **Next.js App Router**, **React**, **TypeScript**, **monorepo con npm workspaces** y una arquitectura de **microfrontends usando Next.js Multi-Zones**.

El proyecto implementa un flujo e-commerce completo:

```txt
Home
→ Product Listing Page
→ Product Detail Page
→ Add to cart
→ Cart
→ Checkout simulado
→ Order confirmed
```

---

## Demo y servicios desplegados

### Aplicación principal

```txt
Shell:
https://delosi-shell.vercel.app
```

### Zonas desplegadas

```txt
Catalog:
https://delosi-catalog.vercel.app

Checkout:
https://delosi-checkout.vercel.app
```

### API compatible con FakeStore

```txt
API:
https://fake-store-api-kevin.onrender.com
```

Endpoints principales:

```txt
GET /products
GET /products/:id
GET /products/categories
```

La aplicación consume productos mediante la variable `FAKESTORE_API_URL`. En producción se usa una API compatible con FakeStore desplegada en Render para mantener el consumo vía API, Server Components y SSR sin hardcodear datos en el frontend.

---

## 1. Descripción del proyecto

Este proyecto simula una experiencia moderna de e-commerce retail construida sobre una arquitectura modular y escalable.

La solución incluye:

* Monorepo con múltiples aplicaciones Next.js.
* Microfrontends mediante Next.js Multi-Zones.
* Design System compartido.
* Product Listing Page con datos reales desde FakeStore API.
* Product Detail Page con metadata dinámica y JSON-LD.
* Carrito persistente con Zustand.
* Checkout simulado.
* Tests unitarios y de componentes.
* Build productivo validado para todas las zonas.

---

## 2. Stack técnico

* Next.js 15.5.19
* React 19.1.0
* TypeScript
* Tailwind CSS v4
* npm workspaces
* Zustand
* Zod
* Vitest
* React Testing Library
* Testing Library User Event
* jsdom
* FakeStore API compatible desplegada en Render

---

## 3. Arquitectura general

El proyecto está organizado como un monorepo:

```txt
delosi-ecommerce-mfe-challenge/
  apps/
    shell/
    catalog/
    checkout/

  packages/
    ui/
    products/
    cart/
    analytics/
    config/

  package.json
  tsconfig.base.json
  README.md
```

### Aplicaciones

| App             | Responsabilidad                                                                       |
| --------------- | ------------------------------------------------------------------------------------- |
| `apps/shell`    | Aplicación principal. Expone la ruta `/` y compone las demás zonas mediante rewrites. |
| `apps/catalog`  | Microfrontend de catálogo. Expone `/products` y `/products/[id]`.                     |
| `apps/checkout` | Microfrontend de compra. Expone `/cart` y `/checkout`.                                |

### Packages compartidos

| Package             | Responsabilidad                                                                              |
| ------------------- | -------------------------------------------------------------------------------------------- |
| `@delosi/ui`        | Design System compartido: Button, Card, Badge, Header, Container, estados visuales y tokens. |
| `@delosi/products`  | Dominio de productos: servicios, schemas Zod, filtros, ordenamiento y tipos.                 |
| `@delosi/cart`      | Dominio de carrito: store Zustand, tipos y cálculos.                                         |
| `@delosi/analytics` | Capa desacoplada para tracking de eventos.                                                   |
| `@delosi/config`    | Configuración compartida: rutas, site config, API config y zonas.                            |

---

## 4. Microfrontends con Next.js Multi-Zones

La arquitectura usa **Next.js Multi-Zones** para dividir el sistema en varias aplicaciones Next.js independientes, integradas por rutas desde el `shell`.

Puertos locales:

```txt
shell:    http://localhost:3000
catalog:  http://localhost:3001
checkout: http://localhost:3002
```

Rutas principales:

```txt
/              → shell
/products      → catalog
/products/[id] → catalog
/cart          → checkout
/checkout      → checkout
```

### ¿Por qué Multi-Zones?

Se eligió Multi-Zones porque permite trabajar con microfrontends en un contexto nativo de Next.js, separando dominios funcionales por aplicación sin introducir complejidad innecesaria.

Ventajas:

* Separación real por aplicación.
* Deploy independiente por zona.
* Ownership por dominio funcional.
* Integración simple mediante routing.
* Compatibilidad con App Router.
* Mantiene SSR, metadata, Server Components y optimización de imágenes.
* Evita agregar Module Federation, iframes o Web Components cuando no eran necesarios para el alcance del reto.

---

## 5. Arquitectura de despliegue

El despliegue productivo usa servicios independientes para cada zona:

| Servicio | Plataforma | Responsabilidad |
| -------- | ---------- | --------------- |
| `delosi-shell` | Vercel | Punto de entrada principal y composición por rewrites. |
| `delosi-catalog` | Vercel | Product Listing Page y Product Detail Page. |
| `delosi-checkout` | Vercel | Carrito y checkout simulado. |
| `fake-store-api-kevin` | Render | API compatible con FakeStore conectada a MongoDB Atlas. |

### Variables de entorno en producción

#### `delosi-catalog`

```env
FAKESTORE_API_URL=https://fake-store-api-kevin.onrender.com
```

#### `delosi-checkout`

```env
FAKESTORE_API_URL=https://fake-store-api-kevin.onrender.com
```

#### `delosi-shell`

```env
CATALOG_DOMAIN=https://delosi-catalog.vercel.app
CHECKOUT_DOMAIN=https://delosi-checkout.vercel.app
```

### Configuración recomendada en Vercel

Para este monorepo con npm workspaces, la configuración más estable es desplegar cada zona desde la raíz del repositorio y apuntar el build/output a cada app:

| Proyecto Vercel | Build Command | Output Directory |
| --------------- | ------------- | ---------------- |
| `delosi-shell` | `npm run build:shell` | `apps/shell/.next` |
| `delosi-catalog` | `npm run build:catalog` | `apps/catalog/.next` |
| `delosi-checkout` | `npm run build:checkout` | `apps/checkout/.next` |

El orden recomendado de despliegue es:

```txt
1. delosi-catalog
2. delosi-checkout
3. delosi-shell
```

---

## 6. Decisiones de arquitectura

### Shell como punto de entrada

`apps/shell` actúa como aplicación principal y delega rutas hacia las demás zonas mediante rewrites.

Esto permite que el usuario navegue desde un único origen:

```txt
http://localhost:3000
```

aunque internamente las rutas estén resueltas por diferentes aplicaciones.

---

### Catalog como zona de productos

`apps/catalog` contiene:

* Product Listing Page.
* Product Detail Page.
* Server-side data fetching.
* Filtros.
* Búsqueda.
* Ordenamiento.
* SEO dinámico.
* JSON-LD.
* Integración con `@delosi/products`.
* Integración con `@delosi/cart`.

Se decidió mantener PLP y PDP dentro de la misma zona porque pertenecen al mismo dominio funcional: catálogo.

---

### Checkout como zona independiente

`apps/checkout` contiene:

* Cart page.
* Checkout page.
* Resumen de compra.
* Formulario de checkout simulado.
* Confirmación de orden.

Se separó porque representa un dominio funcional diferente al catálogo.

---

### Design System compartido

`@delosi/ui` centraliza componentes visuales reutilizables y tokens de diseño.

Esto evita duplicación entre microfrontends y asegura consistencia visual.

Componentes principales:

```txt
Badge
Button
Card
Container
Header
LinkButton
PageHeader
EmptyState
ErrorState
Skeleton
```

También incluye utilidades compartidas:

```txt
cn
formatCurrency
```

---

### Separación entre Button y LinkButton

Se decidió separar `Button` y `LinkButton` para mantener semántica clara:

* `Button`: acciones como submit, click o clear cart.
* `LinkButton`: navegación entre rutas.

Esto mejora accesibilidad, tipado y mantenibilidad.

---

### Estado del carrito

El carrito vive en `@delosi/cart` y se implementó con Zustand.

Incluye:

* `addItem`
* `removeItem`
* `updateQuantity`
* `clearCart`
* persistencia en `localStorage`
* cálculos derivados

La persistencia se configuró de forma segura para funcionar correctamente en browser, SSR y entorno de tests.

---

## 7. Funcionalidades implementadas

### Home

* Hero retail.
* Comunicación del enfoque técnico.
* Acceso a productos y carrito.
* Resumen de zonas: Shell, Catalog y Checkout.

---

### Product Listing Page

Ruta:

```txt
/products
```

Incluye:

* Renderizado con Server Components.
* Consumo real de FakeStore API.
* Filtro por categoría.
* Búsqueda por texto.
* Ordenamiento por precio y título.
* Product cards.
* Add to cart.
* Empty state.
* Responsive layout.

---

### Product Detail Page

Ruta:

```txt
/products/[id]
```

Incluye:

* Detalle real del producto.
* Imagen optimizada con `next/image`.
* Precio.
* Categoría.
* Rating.
* Descripción.
* Add to cart.
* Metadata dinámica.
* Open Graph.
* JSON-LD tipo Product.
* `notFound()` para productos inválidos o inexistentes.
* Loading, error y not-found states.

---

### Cart

Ruta:

```txt
/cart
```

Incluye:

* Carrito persistente.
* Listado de productos agregados.
* Cambio de cantidad.
* Eliminación de producto.
* Limpiar carrito.
* Resumen de compra.
* Subtotal.
* Estado vacío.

---

### Checkout

Ruta:

```txt
/checkout
```

Incluye:

* Resumen de productos.
* Formulario simulado.
* Validación custom.
* Confirmación de orden.
* Limpieza del carrito al finalizar.
* Código de orden generado localmente.

---

## 8. SEO y metadata

El proyecto implementa SEO especialmente en la zona de catálogo.

En PDP se genera metadata dinámica por producto:

* Title.
* Description.
* Open Graph.
* URL canónica relativa.
* JSON-LD tipo Product.

Esto permite que cada producto tenga información semántica propia.

---

## 9. Performance

Se aplicaron varias decisiones orientadas a performance:

* Uso de Server Components en PLP/PDP.
* Uso de `next/image` para optimización de imágenes.
* Lazy loading automático de imágenes.
* `sizes` en imágenes de producto.
* Revalidación de datos desde API.
* Separación por zonas para aislar assets.
* Design System compartido para evitar duplicación visual.
* Estados loading/error/empty para mejorar UX percibida.

---

## 10. Optimización de imágenes en Multi-Zones

En una arquitectura Multi-Zones, cada zona debe ser responsable de sus assets y de su pipeline de optimización.

Por eso se configuraron paths separados para imágenes:

```txt
/catalog-static/_next/image
/checkout-static/_next/image
```

Esto evita que `next/image` intente resolver imágenes de una zona desde otra aplicación.

También se configuró `remotePatterns` para permitir imágenes desde FakeStore API:

```txt
https://fakestoreapi.com/img/**
```

Se mantuvo la optimización nativa de Next.js y no se usó `unoptimized`.

---

## 11. Testing

El proyecto tiene tests unitarios y tests de componentes.

### Resumen actual

```txt
10 test files passed
42 tests passed
```

### Tests de `@delosi/products`

Cobertura:

* Filtrado de productos.
* Ordenamiento de productos.
* Obtención de categorías.
* Validación de product schema.
* Validación de category schema.

### Tests de `@delosi/cart`

Cobertura:

* Cálculo de cantidad total.
* Cálculo de subtotal.
* Cálculo de total por item.
* Agregar producto.
* Incrementar cantidad si el producto ya existe.
* Eliminar producto.
* Actualizar cantidad.
* Eliminar item cuando quantity <= 0.
* Limpiar carrito.

### Tests de `apps/checkout`

Cobertura:

* `CheckoutForm`

  * error al enviar campos vacíos.
  * error con email inválido.
  * submit con datos válidos.

* `CartSummary`

  * muestra cantidad de items.
  * muestra subtotal.
  * ejecuta clear cart.

* `CheckoutSummary`

  * muestra productos.
  * muestra total.

---

## 12. Scripts disponibles

### Instalar dependencias

```bash
npm install
```

### Levantar todas las aplicaciones en desarrollo

```bash
npm run dev
```

### Levantar una app específica

```bash
npm --workspace @delosi/shell run dev
npm --workspace @delosi/catalog run dev
npm --workspace @delosi/checkout run dev
```

### Ejecutar tests

```bash
npm run test
```

### Ejecutar build completo

```bash
npm run build
```

---

## 13. Validación de build

Build validado correctamente para:

```txt
shell OK
catalog OK
checkout OK
```

Rutas generadas:

```txt
shell:
/

catalog:
/products
/products/[id]

checkout:
/cart
/checkout
```

---

## 14. Variables y configuración

El proyecto usa configuración centralizada en:

```txt
packages/config
```

Incluye:

* Rutas de aplicación.
* Configuración de sitio.
* Configuración de API.
* Configuración de zonas.

Esto evita hardcodear rutas o valores compartidos dentro de los componentes.

---

## 15. Trade-offs

### Por qué no se usó Module Federation

Module Federation es una alternativa válida para microfrontends, pero para este reto se eligió Multi-Zones porque:

* El stack principal era Next.js.
* El requerimiento pedía App Router.
* Se quería conservar SSR, metadata, Server Components y optimización nativa.
* Multi-Zones resuelve bien separación por rutas.
* Reduce complejidad operativa para el alcance del reto.

---

### Por qué no se usó Nx o Turborepo

Se decidió usar npm workspaces para mantener el reto simple, portable y fácil de ejecutar.

Nx o Turborepo podrían aportar cacheo avanzado, affected builds y task orchestration, pero para este alcance podían agregar complejidad innecesaria.

---

### Por qué se usa una API compatible con FakeStore

La solución consume productos usando una variable de entorno (`FAKESTORE_API_URL`) y no datos hardcodeados en el frontend.

Durante el despliegue en entornos cloud, la API pública de FakeStore podía responder `403` desde IPs compartidas de hosting. Para mantener Server Components, SSR, validación con Zod y consumo real vía API, se desplegó una instancia compatible con FakeStore en Render, conectada a MongoDB Atlas.

Esto mantiene el contrato de la API:

```txt
/products
/products/:id
/products/categories
```

y permite que el frontend siga siendo independiente del origen real de datos.

---

### Por qué el checkout es simulado

El alcance del reto está enfocado en frontend, arquitectura, estado, UX, performance y testing.

Por eso el checkout genera una orden simulada localmente y limpia el carrito al finalizar.

---

## 16. Mejoras futuras

Posibles mejoras si el proyecto evolucionara:

* Agregar autenticación.
* Agregar favoritos.
* Agregar búsqueda con debounce.
* Agregar paginación real.
* Agregar filtros por precio/rating.
* Agregar E2E tests con Playwright.
* Agregar CI/CD.
* Agregar Storybook para el Design System.
* Agregar analytics reales.
* Agregar cache distribuido o edge caching.
* Agregar deploy independiente por zona.
* Agregar manejo de stock.
* Agregar integración con pasarela de pago.

---

## 17. Cómo defender la arquitectura

La solución fue diseñada como un monorepo con microfrontends usando Next.js Multi-Zones.

El monorepo permite compartir paquetes internos como UI, productos, carrito y configuración. Multi-Zones permite separar aplicaciones Next.js por dominio funcional y enrutar desde un shell principal.

El catálogo y el checkout viven en zonas separadas porque representan dominios distintos. El catálogo resuelve exploración y detalle de productos, mientras checkout resuelve carrito y compra simulada.

Esta arquitectura mantiene una separación clara, permite escalar por dominio y conserva beneficios nativos de Next.js como App Router, Server Components, metadata dinámica, optimización de imágenes y build independiente por aplicación.

---

## 18. Estado final

El proyecto cumple con:

* Arquitectura modular.
* Microfrontends con Next.js Multi-Zones.
* Monorepo con packages compartidos.
* PLP real.
* PDP real.
* SEO dinámico.
* JSON-LD.
* Carrito persistente.
* Checkout simulado.
* Diseño retail responsive.
* Tests unitarios.
* Tests de componentes.
* Build productivo limpio.
* Deploy productivo por zonas en Vercel.
* API compatible con FakeStore desplegada en Render.
