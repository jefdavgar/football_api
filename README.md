## API de Fútbol
Esta API proporciona datos sobre equipos y jugadores de fútbol de diferentes ligas.

# Tabla de contenidos
Instalación
Uso
Documentación
Autor

# Instalación
Para utilizar esta API, necesitarás:

Node.js v14 o superior
Una clave de API para poder hacer las solicitudes a la API (obtenida del proveedor de la API)
Para instalar y configurar la API, sigue los siguientes pasos:

Clona el repositorio:

git clone https://github.com/jefdavgar/football_api.git

Instala las dependencias:

npm install

Crea un archivo .env en la raíz del proyecto y agrega la siguiente información:

DB_URI=mongodb+srv://admin:1018@cluster0.vkzrnaf.mongodb.net/football_api
PORT=3000
JWT_SECRET=123456


# Inicia el servidor:

npm run dev
# Uso
Esta API te permite obtener información sobre equipos y jugadores de fútbol de diferentes ligas. Puedes utilizar las rutas proporcionadas en la documentación para hacer solicitudes a la API y obtener los datos que necesitas.

# Documentación
La documentación de la API está disponible en la ruta /docs del servidor. Esta documentación está en formato Swagger, lo que te permitirá explorar y probar las diferentes rutas y parámetros de la API.

Además, en el archivo swagger.js en el directorio de routes del proyecto, encontrarás toda la especificación OpenAPI de la API, incluyendo los esquemas de los datos y las rutas disponibles.

# Autor
Este proyecto fue creado por Jeferson Camero.
