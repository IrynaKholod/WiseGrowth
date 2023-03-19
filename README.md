Genesis Front-End School 2.0 / Кейсове завдання для 
===================================================

* Додаток реалізовано з використанням бібліотеки React. Для коректної роботи потрібно включити розширення для браузера Allow CORS: Access-Control-Allow-Origin.

* Додаток використовує компоненти react-router-dom для реалізації маршрутизації. Для кожної сторінки створений окремий компонент, який відповідає за рендеринг відповідної сторінки. 
Для динамічної завантаження компонентів на сторінці використаний функціональний компонент React.lazy.

* На головній сторінці передбачено спіннер, який відображається під час завантаження курсів з API. Також у додатку реалізована сторінка 404, яка відображатиметься у випадку, якщо користувач перейде неіснуючим маршрутом.

* Головна сторінка додатка - "Courses", яка рендерить перелік курсів з використанням GET запиту до API. Кожен курс має картку з зображенням, яке зникає при наведенні курсора, та відтворюється відео без звуку на його місці. Крім того, кожен курс містить заголовок, кількість уроків, навички та рейтинг.

* Створена пагінація, яка містить кнопки prev та next, а також нумерацію сторінок. Кнопки prev та next стають неактивними, коли користувач знаходиться на першій або останній сторінці. Кожна сторінка виводить по 10 курсів.

* При натисканні на окремий курс на головній сторінці виконується перехід на сторінку курсу ":courseId". За допомогою GET запиту до API за id рендериться детальна інформація обраного курсу. На сторінці відтворено назву курсу, відео, опис та перелік уроків. Біля назви активного уроку з'являється іконка, яка показує місцезнаходження користувача в курсі. Заблоковані уроки також позначені іконками. При натисканні на заблокований урок на місці відео з'являється повідомлення з пропозицією придбати доступ.

* У додатку додано можливість зміни швидкості відтворення відео за допомогою клавіатури при натисканні ArrowUp/ArrowDown. Через дві секунди після завантаження сторінки toast-повідомлення з'являється повідомлення з інструкцією.

* На сторінці курсу присутня кнопка "Go back", яка повертає користувача на сторінку з курсами.

* Прогрес перегляду кожного відео зберігається у LocalStorage, що дозволяє користувачам повертатись до розпочатих відео пізніше.

* Додаток  адаптовано до мобільної версії з брейкпоінтом 786px.
