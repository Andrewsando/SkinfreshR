## Skinfresh
Página proyecto principal html
Proyecto con la intención de ser una página web de venta de productos dermocosméticos, su funcionalidad se basa en el uso de distintas páginas de navegación las cuanles se encuentran en la barra de navegación y se encuentran enlazadas por links, de las que se desprenden los diferentes productos por categoría de tipo de piel, su funcionalidad base está en simular la venta del producto usando el carrito de venta, el cual se desarrolla en una pantalla inicial donde aparecen los productos, al darle click al producto lo lleva al detalle (valor), en ésta se puede elegir la cantidad que se desea adquirir y se redireccona por medio de un botón a la sección de finalizar compra, en esta ya se piden datos de usuario para gestionar el pedido.

Para el desarrollo de la simulación anterior se crearon diferentes componentes que ejemplifican una funcionalidad especifica, estos se compilan en un componente que está encargado de renderizar (App.js)

## Configurar proyecto

ID del repositorio del proyecto:

```
https://github.com/Andrewsando/skinfresh
```

Se deben instalar las dependencias
```
npm i
```

Para correr el programa

```
npm run start
```

## Database

La base de datos donde se registra la información de los productos es Firebase

```
https://console.firebase.google.com/project/skinfresh-ce366/overview?hl=es-419
```

Se registran bajo colección los nuevos productos y el registro de las compras que se van haciendo (obteniendo información del producto que compran (categoría, id, imagen, nombre, precio) y la información del cliente (email, nombre, telefono y fecha de compra)

Para acceder a la base de datos se deben configurar las siguientes variables de entorno de Firebase

```
REACT_APP_PROJECT_ID 
REACT_APP_API_KEY
```

## Librería

También se usó la librería MUI que contiene componentes customizados que se pueden editar
```
https://mui.com/
```

## Dudas

Cualquier duda de la funcionalidad del programa me pueden escribir al correo

```
andres.torressandoval@hotmail.com
```