This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

- Crear una cuenta en Vercel (Se recomienda loggearse con el servicio dónde se encuentra la app)
- Dar permisos a Vercel para leer los repositorios desde nuestra cuenta de Github
- Ir a Dasboar y añadir nuevo proyecto, buscar el proyecto, y seleccionar importar.
- Dejar que Vercel importe el proyecto
- Al finalizar nos dará una URL donde fue desplegado

## Generar imagen de Docker no optimizada

Crear los siguientes archivos a nivel raíz de nuestra aplicación de NextJS

- Crear archivo .dockerignore

Permite listar todos los directorios y archivos que se deben excluir al momento de generar la imagen de Docker

- Crear archivo Dockerfile

Permite listar todas las instrucciones necesarias para construir la imagen

- Construir la imagen de Docker a partir de las instrucciones listadas en el archivo Dockerfile

```
// 1. Levantar docker en la computadora (Docker Desktop)
// 2. Esperar a que el motor (Engine) de Docket este listo
// 3. Ejecutar el siguiente comando en terminal para construir la imagen

docker build -t nextjs-initial .

// Donde nextjs-initial es el nombre de la imagen generada
// . (la ruta del proyecto - en este caso es dónde se encuentra uno parado)
```

- ### Crear un container a partir de una imagen

Exiten 2 formas para generar un contenedor a partir de una imagen de Docker

```
// Terminal

docker run --name=nextjs-app -p 80:3000 nextjs-initial

// --name=          Permite asignar un nombre específico para el contenedor (servicio)
// -p               Permite especificar un puerto para conectarse con el contenedor
// 80:3000          Le indica a Docker que genere un puente. Asocie el puerto 80 de mi ordenador, con el puerto 3000 de mi container
// nextjs-initial   Es el nombre de la imagen a partir de la cuál se genera el container
```

## Generar imagen de Docker optimizada por el equipo de NextJS

Visitar la siguiente URL: https://github.com/vercel/next.js/tree/canary/examples/with-docker

- En el archivo Dockerfile, colocar las instrucciones que ellos mencionan
- Se recomiendo eliminar todo container e imagen que no se desee utilizar para ahorrar espacio (ya no necesitaremos la imagen y contenedores anteriores de nextjs-initial)

- Construir la imagen optimizada
```
// Terminal

docker build -t nextjs-initial-demo .

```
- Generar un contenedor a partir de esa imagen

Se puede generar un contenedor corriendo la imagen en Docker Desktop (Se configura su nombre y puerto), o se puede generar mediante linea de comandos
```
docker run --name=nextjs-app-demo-inicial -p 9000:3000 nextjs-initial-demo
```

