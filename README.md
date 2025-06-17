# 🏨 Proyecto Final Backend: Rolling Palace

Bienvenidos al repositorio **backend** de **Rolling Palace**, el proyecto final desarrollado por el **Grupo II** de la **comisión Web7** en el programa de formación **Full Stack Web Developer** de **RollingCode School**.

Este backend gestiona las funcionalidades del sistema de reservas del hotel, incluyendo autenticación de usuarios, gestión de habitaciones, reservas, panel administrativo, y más.

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

- [José Ignacio Ramón](https://github.com/ignacio) – Tech Lead
- [Tomás Pando](https://github.com/tomas) – Scrum Master
- [Juan Andres Monserrat](https://github.com/monserrat) – Developer
- [Eric Ezequiel Mercado](https://github.com/eric) – Developer
- [Juan Andres Stegmayer](https://github.com/stegmayer) – Developer

---

## 🎓 Agradecimientos

Agradecemos a los mentores y compañeros de RollingCode School por su acompañamiento y guía constante durante todo el proceso de aprendizaje.  
Especialmente a **Andrés Perlo**, **Emilse Arias** y **Julio Forni** por los conocimientos transmitidos.

---

## 📄 Licencia

Este proyecto se encuentra bajo la licencia MIT.
