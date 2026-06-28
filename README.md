# 🐾 AdoptMe Backend API

API REST para la gestión de adopción de mascotas. Permite administrar usuarios, mascotas y procesos de adopción mediante distintos endpoints.

---

## 🚀 Tecnologías utilizadas

- Node.js
- Express
- MongoDB
- Mongoose
- Cookie-Parser
- JSON Web Token (JWT)
- Mocha
- Supertest
- Docker

---

## 📁 Estructura del proyecto

```
src/
├── app.js
├── server.js
├── controllers/
├── routes/
├── services/
├── dao/
├── repository/
test/
Dockerfile
package.json
README.md
```

---

## ⚙️ Instalación

Clonar el repositorio y ejecutar:

```bash
npm install
```

---

## ▶️ Ejecutar el proyecto

Modo desarrollo:

```bash
npm run dev
```

Modo producción:

```bash
npm start
```

---

## 🧪 Ejecutar los tests

```bash
npm test
```

Los tests funcionales verifican los endpoints del router de adopciones:

- GET /api/adoptions
- GET /api/adoptions/:aid
- POST /api/adoptions/:uid/:pid

Incluyen casos exitosos y casos de error (404 y validaciones).

---

## 🌐 Endpoints principales

- /api/users
- /api/pets
- /api/adoptions
- /api/sessions

---

## 🐳 Docker

### Construir la imagen

```bash
docker build -t adoptme-backend .
```

### Ejecutar el contenedor

```bash
docker run -p 8080:8080 -e MONGO_URL="mongodb://host.docker.internal:27017/adoptme-test" adoptme-backend
```

---

## 🐳 Imagen publicada en DockerHub

Repositorio:

https://hub.docker.com/r/mica11/adoptme-backend

Para descargar la imagen:

```bash
docker pull mica11/adoptme-backend
```

---

## 📌 Notas

- La conexión a MongoDB se configura mediante la variable de entorno `MONGO_URL`.
- El servidor utiliza el puerto **8080** por defecto.
- El proyecto incluye tests automatizados desarrollados con **Mocha** y **Supertest**.