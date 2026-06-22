# BFF (Backend For Frontend) - Barbería

## ¿Qué hace el proyecto?
Actúa como una capa intermedia segura entre la aplicación Frontend (React) y el Backend principal (Spring Boot). Desarrollado en Node.js, este servicio se encarga de recibir las peticiones del cliente, gestionar e inyectar de forma segura los tokens (JWT) y redirigir las solicitudes al backend, evitando exponer la API directa y previniendo errores de CORS.

## Cómo instalar dependencias
Asegúrate de tener Node.js instalado. Abre la terminal en esta carpeta y ejecuta:
```bash
npm install
```

## Cómo ejecutar (comandos)
Para iniciar el servidor de desarrollo:
```bash
npm run dev
```
Para iniciar el servidor en modo normal/producción:
```bash
npm start
```

## Endpoints disponibles
El BFF funciona principalmente como un intermediario (Proxy). Redirige las llamadas recibidas hacia el Backend en Java.

* Todas las peticiones al BFF (por ejemplo a `/api/*`) son interceptadas y enviadas al Spring Boot, adjuntando el JWT correspondiente en los headers para la autorización.