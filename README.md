## Description
Proyecto Backend desarrollado con Nestjs, TypeOrm, Docker, Postgresql y Postman


## Project setup

```bash
$ cd tour13express-backend
$ npm install
$ docker compose -up
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Endpoints
Seed project
```
GET localhost:3000/api/seed
```
Registrar usuario: (subir archivo) como `file`
```
POST localhost:3000/api/auth/register

form-data:

usuario[nombre]:Alejo
usuario[documento]:12345
usuario[telefono]:12345
usuario[correo]:alejoguia@gmail.com
usuario[contrasena]:Street12
tipoDocumento:1
rol:1

json:
{
    "usuario":{
        "nombre": "Street Memories",
        "documento": "12345",
        "telefono": "12345",
        "correo": "streetmemories@gmail.com",
        "contrasena": "Street12"
    },
    "tipoDocumento": "1",
    "rol": "2"
}
```
login: 
```
POST localhost:3000/api/auth/login

{
    "correo": "streetmemories@gmail.com",
    "contrasena": "Street12"
}
```