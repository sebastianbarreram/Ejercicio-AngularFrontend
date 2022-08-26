# EjercicioAngularFrontend

Aplicación Frontend en donde se implementa Angular. Se trabaja con Angular Material y se crea una Fake API Rest usando json-server.

## Enunciado
Vamos a crear el catálogo de una tienda en línea que ofrezca una gran variedad de productos. Los artículos se obtendrán a partir de la consulta a un servicio REST (mock) que puede ejecutarse de manera simultánea en el servidor local y que obtiene los datos de un archivo JSON.

Como requerimientos del sistema, se tiene lo siguiente:
- Se deberían tener al menos 20 artículos cargados en el archivo JSON que servirá de base de datos (para obtener datos de prueba, se puede utilizar la librería Faker.js)
- Los atributos que debería tener cada producto son: id (número identificador único), nombre, descripción, precio, cantidad. (puede tener una imagen, pero es opcional - referencia para imagenes aleatorias: Lorem picsum)
- Se sugiere utilizar alguna librería o componente para elementos de interfaz gráfica (ej, Angular Material, Ng-Bootstrap)

## Configuración
Configurar el proyecto utilizando npm:

```bash
  npm install
```

## Proyecto
Este proyecto fue generado con [Angular CLI](https://github.com/angular/angular-cli) version 14.1.3.

## Servidor
Para desplegar el servidor de manera local usar el siguiente comando:

```bash
  ng serve
```

Para desplegar el servidor Fake API Rest usar el siguiente comando:

```bash
  npm run server
```

Desde el navegador de preferencia ingresar a la url `http://localhost:4200/`.
La aplicación automáticamente se recargará si se realiza algún cambio en los archivos fuente.
