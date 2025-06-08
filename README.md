# Backend NestJS · Prueba Técnica Fullstack para Shakers

Este es el backend desarrollado con [NestJS](https://nestjs.com/) y TypeScript como parte del case study técnico para Shakers.

El backend expone los endpoints necesarios para alimentar la aplicación de frontend y simula una base de datos utilizando archivos JSON internos a través de servicios NestJS.

---

## 🚀 Tecnologías utilizadas

- [NestJS 11](https://docs.nestjs.com/)
- TypeScript
- Node.js
- Eslint + Prettier

---


## Cómo lanzar el proyecto

### 1. Requisitos

- Tener [Node.js](https://nodejs.org) instalado.
- Clonar este repositorio.

### 2. Pasos

```bash
git clone https://github.com/nievent/Shakers-backend
cd shakers-backend
npm install
```

### 3. Ejecutar en desarrollo

```bash
npm run start:dev
```

El backend se levantará en http://localhost:3001.

Puedes cambiar el puerto desde main.ts si lo deseas.

## 📁 Estructura del proyecto

```bash
src/
├── assets/               # Archivos estáticos JSON como lookups y proyectos
├── lookups/              # Módulo de lookups (servicios y controladores)
├── projects/             # Módulo de proyectos (servicios y controladores)
├── app.module.ts         # Módulo principal de la aplicación
├── main.ts               # Punto de entrada de Nest
```

---

## 📝 Notas adicionales

- Los datos de prueba están en `/src/assets/`.
- El backend **no requiere base de datos externa**: funciona con archivos JSON embebidos. Me habría gustado hacerlo en mongo, pero por desgracia he tenido poco tiempo esta semana y no le he podido dedicar todo el que me gustaría.
- Se puede extender fácilmente para consumir una base de datos real (MongoDB, PostgreSQL, etc.).
