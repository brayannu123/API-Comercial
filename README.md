Esta aplicación es un catálogo de productos desarrollado con Ionic, que permite a los usuarios explorar una lista de productos, filtrar por categorías, visualizar detalles y gestionar un carrito de compras.

Los usuarios podrán ver los productos disponibles con sus respectivas calificaciones y número de compras, además de seleccionar categorías específicas para filtrar los productos mostrados. También podrán acceder a los detalles de cada producto y agregarlo al carrito de compras, el cual se gestionará mediante localStorage.

Funcionalidades Principales

1. Pantalla de Carga

Al iniciar la aplicación, se mostrará una pantalla de carga con una duración de 3 segundos antes de acceder a la pantalla principal.

2. Visualización de Productos

La aplicación obtendrá los productos desde una API externa y los renderizará en pantalla.

Se mostrará el precio en dólares, el número de compras y la calificación de cada producto.

Se implementará un componente de carta para mostrar cada producto.

3. Filtrado por Categorías

Se dispondrá de una lista desplegable de categorías para filtrar los productos.

Al seleccionar una categoría, se obtendrán y mostrarán solo los productos pertenecientes a dicha categoría.

4. Detalle del Producto

Al hacer clic en un producto, se abrirá una pantalla con la información detallada del mismo.

Esta pantalla recibirá el identificador del producto mediante la URL.

5. Carrito de Compras

Se implementará un carrito de compras accesible desde la pantalla principal y la pantalla de detalles del producto.

Los productos agregados al carrito actualizarán automáticamente el contador.

Se creará un componente de item para cada producto dentro del carrito.

Los usuarios podrán eliminar productos del carrito y recibirán un mensaje de confirmación.

6. Proceso de Compra (Checkout)

Los usuarios podrán acceder a una pantalla de checkout donde ingresarán sus datos y los de la tarjeta.

Al hacer clic en el botón de pago, se mostrará un mensaje de confirmación.

Se implementará un loader de 3 segundos antes de mostrar el resumen de la transacción.

