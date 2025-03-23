project/
├── public/
│ ├── index.html
│ ├── assets/
│ │ └── images/
│
├── src/
│ ├── components/ # Компоненты
│ │ ├── Header/
│ │ │ ├── Header.jsx
│ │ │ └── Header.scss
│ │ ├── Footer/
│ │ │ ├── Footer.jsx
│ │ │ └── Footer.scss
│ │ ├── Product/
│ │ │ ├── Product.jsx
│ │ │ └── Product.scss
│ │ ├── Cart/
│ │ │ ├── Cart.jsx
│ │ │ └── Cart.scss
│ │ ├── FilterSort/
│ │ │ ├── FilterSort.jsx
│ │ │ └── FilterSort.scss
│ │ └── Pagination/
│ │ ├── Pagination.jsx
│ │ └── Pagination.scss
│
│ ├── pages/ # Страницы
│ │ ├── Home/
│ │ │ ├── Home.jsx
│ │ │ └── Home.scss
│ │ ├── Catalog/
│ │ │ ├── Catalog.jsx
│ │ │ └── Catalog.scss
│ │ ├── ProductPage/
│ │ │ ├── ProductPage.jsx
│ │ │ └── ProductPage.scss
│ │ ├── CartPage/
│ │ │ ├── CartPage.jsx
│ │ │ └── CartPage.scss
│ │ └── Registration/
│ │ ├── Registration.jsx
│ │ └── Registration.scss
│
│ ├── App.jsx # Главный компонент
│ ├── index.js # Точка входа
│ ├── routes.js # Маршруты
│ ├── styles/
│ │ ├── main.scss
│ │ ├── global.scss
│ │ └── variables.scss
│
│ ├── utils/ # Вспомогательные функции
│ │ └── helpers.js
│
│ ├── context/ # Контекст для управления состоянием
│ │ └── CartContext.jsx
│
│ └── assets/ # Локальные ассеты
│ └── images/
