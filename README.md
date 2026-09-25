# ChatVioniko Afiliados Landing

Proyecto independiente de la landing del Programa de Afiliados de ChatVioniko. La pagina principal se sirve directamente en `/`.

## Requisitos

- Node.js 20 o superior
- npm

## Instalacion

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

Abre `http://localhost:3000/`.

## Build de produccion

```bash
npm run build
npm start
```

## Configuracion de contenido comercial

- URL publica de ChatVioniko: `components/landing/affiliateConfig.ts`
- Precio de lanzamiento: `components/landing/AffiliateLandingPage.tsx` y `components/landing/AffiliateCalculator.tsx`
- Porcentajes de afiliacion: `components/landing/AffiliateLandingPage.tsx` y `components/landing/AffiliateCalculator.tsx`

El proyecto no necesita variables de entorno. No contiene formularios externos ni integracion con CRM. Los botones dirigen a la URL publica definida en `affiliateConfig.ts`.
