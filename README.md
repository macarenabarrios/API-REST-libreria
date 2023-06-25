# Libreria API-REST

 Desarrollo de API REST que permite manejar librerías y los libros asociados a cada una de las librerías.

 ## Infraestructura del servicio

- Express: framework
- Sequelize: ORM
- Passport: Middleware de autenticación

 ## Instalación de dependencias y ejecución

```sh
$ npm i
$ npm start
```

## Desarrollo

### Archivos

**src/app.js**

Primer archivo creado de la aplicación, corresponde al 'main' que ejecuta el servidor.
Contiene las rutas de las entidades User, Book y Library, la configuración del puerto del servidor; aquí se crea el usuario 'admin', se inicia la autenticación y se ejecuta el middleware para manejar errores.

**src/middlewares**

- *error-handler.js*: archivo que maneja los errores que pueden surgir en las peticiones.
- *authentication.js*: arhivo donde se implementa el middleware que gestiona la autenticación del usuario.

**src/auth**

- *auth.js*: contiene la función de autenticación, la cual utiliza la configuración del Middleware de Passport configurado en *passport-config.js*.
- *passport-config.js*: contiene la configuración del middleware de Passport con su respectiva estrategia (passport-jwt).

**src/db**

- *sequelize-config.js*: contiene la configuración de la base de datos para conectarse a ella. Se definen el host, database, username, password, port y dialect.

**src/models**

Se definen los archivos que representan los modelos de las entidades definidas en la base de datos: Books, Libraries y Users. Cada archivo contiene los atributos requeridos para implementar las funcionalidades del proyecto.

**src/routes**

Se definen los archivos con las rutas para las funcionalidades de cada entidad: Book, Library y User. Se utiliza Express para la creación de dichas rutas. En cada archivo se encuentran las rutas que se llaman al ejecutar cualquiera de las funcionalidades implementadas, algunas de ellas requieren estar autenticado (logueado).

**src/controllers**

Para cada entidad, se definen en los archivos las funciones que procesan las peticiones, solicitan el servicio y envían la respuesta que les retorna este último.

**src/services**

Para cada entidad, se definen en los archivos las funciones que reciben las peticiones de los controladores, a los cuales envían la respuesta. Estan todas las funcionalidades del proyecto discriminadas por entidad.