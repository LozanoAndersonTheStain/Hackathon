# Rest-Server-Master

Buenos días, tardes o noches, independientemente de la hora en que lo estés viendo, este es un proyecto para el público.

Este es un proyecto el cual tiene como función ayudarnos y guiarnos por el camino que debemos seguir por nuestra propia cuenta para generar una `CRUD` de una forma más veloz y dinámica de lo normalmente acostumbrado.

Tenemos una serie de carpetas y archivos, los cuales contienen su propia información aparte y otras que dependen de la información que hay en otra para funcionar adecuadamente, al igual que un archivo depende de otro.
Ya dadas estos puntos a conocer iniciemos en forma.
### Imagen de todas las carpetas y archivos necesarios para un funcionamiento perfectamente equilibrado, como debe de ser.

![carpetas](https://user-images.githubusercontent.com/105325885/201475217-c50d0eea-eb59-4671-9726-1772cac2316d.jpg)
## Cuál es el funcionamiento de cada uno de estos 

* `assets`: Esta es una carpeta la cual almacena (Imágenes, Logos, Animaciones y/o Videos).
* `controllers`: Esta carpeta contiene cada uno de los controladores necesarios para poder acceder a una ruta específica y realizar las acciones posibles entre (Create, Read, Update y Delete).
* `database`: Esta tiene en su contenido el método necesario para conectar todo nuestro proyecto, y que se pueda conectar a una base de datos ubicada en `MongoDB Compass`-`MongoDB Atlas` y acceder a ella por medio de una variable de entorno.
* `helpers`: Es una carpeta la cual nos ayuda a validar si algo existe o no en nuestra base de datos y a poder cargar archivos (PNG o JPG) a la página web llamada `Cloudinary`, también nos ayuda a generar un `JWT` o también conocido como `Token` el cual dura una totalidad de tiempo de 4h, (Esto lo podemos adaptar a nuestras necesidades).
* `middelwares`: En esta carpeta tenemos otro tipo de validaciones, en estas podemos saber.
    - Si el usuario tiene un rol que exista en nuestra base de datos, y dependiendo de ese rol elegir las acciones que puede cometer.
    - Validar que hay un token en la petición de creación del usuario y que esté mismo sea un `Administrador`.
    - Validar que en el método de creación o actualización le estemos enviando algo.
* `models`: Esta carpeta contiene:
    - Esta carpeta contiene un archivo llamado `server.js`, este archivo funciona como el servidor local del proyeco, en este debemos de instanciar los paths ya que por medio de estos los archivos de `routes` podran ser accedidos como ruta en (`Postman` o `Thunder Client`)      
    - Como su nombre lo índica tiene a cargo, almacenar cada una de la información que se necesita cada modelo para poder ser generado en la base de datos. 
* `node_modules`: Esta carpeta contiene todas las dependencias que necesitamos en este proyecto, debe ser instalada antes de iniciar a trabajar. Su comando de instalación es: `Npm install` con este comando iniciará su instalación y no se vuelve a tocar.
* `public`: Esta contiene un `index.html`, esté es modificable a  nuestro placer y dependiendo de lo que queramos mostrar.
    - Nota: Está para poder verse, primero hay que desplegar el proyecto en 'Heroku'.
* `routes`: Es una carpeta que contiene nuestras rutas para poder acceder a los métodos ya antes mencionados en `controllers` y también contiene los métodos de validación, esto para darle a conocer a nuestro compañero `FrontEnd` cuáles son los parámetros que se piden al momento de crear algo o actualizarlo.
* `uploads`: Esta carpeta contendrá las imágenes que hemos cargado a nuestro Cloudinary por medio del método `upload`, cada vez que carguemos o le pongamos una imagen, ya sea a un producto, noticia o artículo, podría aparecer aquí.
* `.env`: Esta carpeta nunca la encontrarás al hacer una descarga de este trabajo, ya que contiene tus variables de entorno y estas no deben ser conocidas por ningún otro usuario o compañero de trabajo, a menos de que sean colaboradores del mismo proyecto. Por esta razón debes de ignorarla en la siguiente carpeta.
* `.gitignore`: En esta carpeta es donde se ponen todos los archivos que no deben ser subidos o que consideramos no deben de serlo, asi mismo como la carpeta `.env`, la carpeta `node_modules` debe de ser ignorada, ya que esta tiene más de 5 mil archivos y no es algo productivo a la hora de subirlo o descargarlo, porque esto tardaría demasiado y nos retrasaría.
* `public.env`: Esta carpeta es como nuestro templo de inteligencia de variables de entorno, ya que está creada con la intención de darte a conocer cuáles son las variables que necesitas tener, para tener un buen funcionamiento del programa.
* `app.js`: Esta solo tiene 6 líneas de código y en esas 6 líneas se encuentra el proceso necesario para levantar el servidor y poder poner a funcionar la aplicación en modo producción.
* `package-lock.json`: Contiene dependencias que se necesitan para que el siguiente archivo funcione.
* `package.json`: Este archivo nos contendrá todas las librerías que necesitamos para trabajar en este proyecto y nos almacenara todas las nuevas librerías que necesitemos. 
* `README.md`: Contiene la misma información que ahora mismo estás leyendo.
## Como se ven los servicios creados

Estamos ubicados en el programa `Postman` el cual nos ayuda a probar si nuestros Endpoints y si nuestras rutas sirven a la perfección.

![postman](https://user-images.githubusercontent.com/105325885/201479876-16a2a919-a944-4b39-9688-a01a1420fc40.jpg)

Aqui te dejo una URL que te llevara a la documentación de estos Endpoints en postman

-  [Postman](https://documenter.getpostman.com/view/24188518/2s8YespB9b)


## Servicios 

Así deben de verse los servicios ya creados

![servicios](https://user-images.githubusercontent.com/105325885/201480272-97284e45-4d7f-463d-af69-9fcd36941b76.jpg)
# Hackathon
