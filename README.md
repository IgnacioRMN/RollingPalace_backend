# 🏨 Rolling Palace Backend – Proyecto Final

[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=000)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)


Bienvenidos al repositorio **backend** de **Rolling Palace**, el proyecto final desarrollado por el **Grupo II** de la **comisión Web7** en el programa de formación **Full Stack Web Developer** de **RollingCode School**.

Este backend gestiona las funcionalidades del sistema de reservas del hotel, incluyendo autenticación de usuarios, gestión de habitaciones, reservas, panel administrativo, y más.

## 🔗 Enlaces Útiles

- 📦 [Repositorio Frontend](https://github.com/IgnacioRMN/RollingPalace_frontend)

---

## 📁 Estructura del Proyecto

```bash
rollingpalace-backend/
├── src/
│   ├── controllers/         # Lógica de usuarios, habitaciones y autenticación.
│   ├── database/            # Configuración de la base de datos.
│   ├── middlewares/         # Autenticación y manejo de errores.
│   ├── models/              # Modelos de datos con Mongoose.
│   ├── routes/              # Rutas de la API.
│   └── index.js             # Punto de entrada del servidor
├── .gitignore
├── package.json
└── README.md
```

---

## 🛠️ Tecnologías Utilizadas

- **Node.js** – Entorno de ejecución para JavaScript en el backend.
- **Express.js** – Framework para crear el servidor HTTP.
- **MongoDB** – Base de datos NoSQL.
- **Mongoose** – ODM para modelar datos con MongoDB.
- **CORS** – Middleware para habilitar peticiones desde el frontend.
- **dotenv** – Para el manejo de variables de entorno.
- **JWT** – Autenticación basada en tokens.
- **bcrypt** – Encriptación de contraseñas.

---

## 🚀 Instalación y Ejecución

1. Cloná este repositorio:

```bash
git clone https://github.com/IgnacioRMN/RollingPalace_backend.git
```

2. Accedé al directorio del proyecto:

```bash
cd RollingPalace_backend
```

3. Instalá las dependencias:

```bash
npm install
```

4. Configurá tus variables de entorno en un archivo `.env`:

```env
MONGODB_CNN=
JWT_SECRET=
PORT=
```

5. Ejecutá el servidor:

```bash
npm run dev
```

El backend estará disponible en `http://localhost:5000` (o el puerto que configures).

---

# Documentación de la API – RollingPalace Backend

## Tabla de Endpoints

| Recurso      | Método | Ruta                         | Descripción                              | Autenticación |
| ------------ | ------ | ---------------------------- | ---------------------------------------- | ------------- |
| Usuarios     | GET    | `/api/usuarios`              | Obtener todos los usuarios               | Admin         |
| Usuarios     | PUT    | `/api/usuarios/:id`          | Actualizar usuario por ID                | Admin         |
| Usuarios     | DELETE | `/api/usuarios/:id`          | Eliminar usuario por ID                  | Admin         |
| Auth         | POST   | `/api/auth/register`         | Registrar nuevo usuario                  | No            |
| Auth         | POST   | `/api/auth/login`            | Login de usuario                         | No            |
| Habitaciones | POST   | `/api/habitacion`            | Crear habitación                         | Admin         |
| Habitaciones | GET    | `/api/habitacion`            | Listar habitaciones                      | No            |
| Habitaciones | GET    | `/api/habitacion/:id`        | Obtener habitación por ID                | No            |
| Habitaciones | PUT    | `/api/habitacion/:id`        | Editar habitación por ID                 | Admin         |
| Habitaciones | DELETE | `/api/habitacion/:id`        | Eliminar habitación por ID               | Admin         |
| Reservas     | POST   | `/api/reservas`              | Crear reserva                            | Usuario       |
| Reservas     | GET    | `/api/reservas/mis-reservas` | Obtener reservas del usuario autenticado | Usuario       |
| Reservas     | GET    | `/api/reservas`              | Obtener todas las reservas               | Admin         |
| Reservas     | GET    | `/api/reservas/:id`          | Obtener reserva por ID                   | Usuario/Admin |
| Reservas     | PUT    | `/api/reservas/:id`          | Actualizar estado de reserva             | Admin         |
| Reservas     | DELETE | `/api/reservas/:id`          | Eliminar reserva por ID                  | Admin         |

## Descripción General

Esta API permite gestionar usuarios, habitaciones y reservas para el sistema RollingPalace. Incluye autenticación JWT y control de roles (usuario/admin).

### Autenticación

- Algunas rutas requieren autenticación mediante token JWT.
- Las rutas marcadas como "Admin" requieren que el usuario tenga rol de administrador.

### Ejemplo de Login

```json
POST /api/auth/login
{
  "email": "usuario@ejemplo.com",
  "contraseña": "123456"
}
```

### Ejemplo de Respuesta Exitosa

```json
{
  "token": "<jwt_token>",
  "usuario": {
    "_id": "...",
    "nombre": "...",
    "email": "...",
    "esAdmin": false
  }
}
```

---

## 📌 Funcionalidades Principales

- Registro e inicio de sesión de usuarios.
- Autenticación con JWT.
- Encriptación de contraseñas con bcrypt.
- Gestión CRUD de habitaciones y reservas.
- Panel de administración protegido.
- Integración con MongoDB Atlas.
- CORS habilitado para conexión con el frontend.

---

## 👥 Equipo de Desarrollo

- [José Ignacio Ramón](https://github.com/IgnacioRMN) – Tech Lead & Fullstack Developer.
- [Tomás Pando](https://github.com/TPtomaspando) – Scrum Master & Fullstack Developer.
- [Juan Andres Monserrat](https://github.com/petumonse) – Design UI & Frontend Developer.
- Eric Mercado – Developer. 
- Juan Andres Stegmayer – Developer.

---

## 🎓 Agradecimientos

Agradecemos a los mentores y tutores de RollingCode School por su acompañamiento y guía constante durante todo el proceso de aprendizaje.  
Especialmente a **Andrés Perlo**, **Francisco Pérez**, **Emilse Arias** y **Julio Forni** por los conocimientos transmitidos.

---

## 📄 Licencia

Este proyecto se encuentra bajo la licencia MIT.
