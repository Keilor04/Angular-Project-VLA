Bienvenido al proyecto de Angular del Curso de Full Stack Web developer de VLA

A continuación se detallan la información de los prompts utilizados con copilot en Vs Code para la creación del formulario requerido: 

Crear un componente hijo para el formulario.
Diseñar el formulario con los campos name, precio, descripción y categoria.
Configurar el envio de los datos a la API POST https://api.escuelajs.co/api/v1/products.
Consumir la API POST para crear un nuevo producto consumiendo la API pública de https://api.escuelajs.co/docs#/products/ProductsController_create


GitHub Copilot
Para implementar esta funcionalidad, seguiremos estos pasos:

Paso 1: Crear el componente hijo
Ejecuta el siguiente comando en la terminal para crear el componente hijo:

Paso 2: Crear un servicio para manejar la API
Ejecuta el siguiente comando para generar un servicio:

Cambios en los archivos:
Angular-Project-VLA\src\app\services\product.service.ts
Crear el servicio para manejar la API.

product.service.ts+17-1
Angular-Project-VLA\src\app\components\product-form\product-form.component.html
Crear el formulario en el componente hijo.

product-form.component.html+20-1
Angular-Project-VLA\src\app\components\product-form\product-form.component.ts
Configurar la lógica para enviar los datos del formulario a la API.

product-form.component.ts+32-1
Paso 3: Importar HttpClientModule
Asegúrate de importar HttpClientModule en el módulo principal.

Proyecto Angular\Angular-Project-VLA\src\app\app.module.ts
app.module.ts

Con esto, el formulario estará listo para crear productos en la API pública.

Gracias por su atención 
