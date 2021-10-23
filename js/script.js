window.addEventListener('DOMContentLoaded', () => {

// render cards
const cardsContentList = [
  {
    ttl: 'Pulse',
    src: './pulse',
    imgSrc: '../img/pulse.png',
    descr: 'Вёрстка из PSD-макета. Всплывающее окно формы заявки (по PSD-макету). Slick - слайдер. Карточки товаров. Анимированная средствами CSS иконка и "всплывающие" отзывы. Плавный скролл по внутренним ссылкам и наверх страницы, средствами jquery. Да, я знаю, можно и на чистом JS, но тогда возможны проблемы несовместимости с некоторыми устройствами от Apple. В процессе вёрстки так же использованы препроцессор SCSS и сервер gulp(в достаточно простой конфигуроции). Подключен mailer.php, который позволяет работать по email при не-большом количестве клиентов. *В версии для портфолио он удалён за ненадобностью.'
  },
  {
    ttl: 'Food',
    src: './food',
    imgSrc: '../img/food.png',
    descr: 'Это учебный проект из курса по javascript. В изначальном виде это был красивый сайт без малейшего интерактива, и без адаптации для разных устройств, таких, как планшеты и мобильные телефоны. Адаптация выполнена. Все опции интерактива реализованы на чистом JS: -Разделы("табы") выбора стиля питания. -Слайдер. Простой, минималистичный, и достаточно примитивный; -Калькулятор калорий. Считает необходимое человеку количество калорий по реально существующей формуле, за исключением варианта "очень большие нагрузки". Этот вариант был бы актуален для профессиональных спортсменов, но, видимо, они не являются целевой аудиторией этого сайта. Кроме того, скорее всего, они сами контролируют свои калории; -Рендер карточек вариантов стилей питания с помощью JS, из файла db.json (в портфолио - переделано и рендерится из простого JS-массива объектов. Упрощено с целью выкладки на github pajes); -Форма вызова обратной связи или отправки заявки, сохранение введённых данных в файле db.json (в варианте для портфолио эта опция сокращена с целью выкладки на github pajes); -Счётчик до окончания акции; -И, конечно же, назойливое всплывающее окно. При разработке адаптивной версии использованы gulp и scss. При разработке интерактива использованы webpack, json-server(NPM-модуль) и LAMP-сервер(на linux-based OS). Да, можно было бы потанцевать с бубнами на windows, установив MAMP или OpenServer. Но на linux всё работает из коробки, запускается одной простой командой в терминале, легко гуглится и почти полностью соответствует реальным условиям(за исключением наличия графического интерфейса и прямого доступа к железу).'
  },
  {
    ttl: 'Uber',
    src: './uber',
    imgSrc: '../img/uber.png',
    descr: 'Вёрстка из PSD-макета. Адаптивная вёрстка. Добавление "гамбургера" и всплывающего меню для планшетов и мобильных устройств. Учебный проект по вёрстке. Один из первых. Достаточно красивый, но не слишком сложный. Не содержит карточек товаров, анимаций, интерактивной карты. SASS, HTML; bootstrap, flexbox'
  }
]

function renderCards() {
  const cards = document.querySelector('#cards');
  return (
    cards.innerHTML = cardsContentList.map(({ttl, src, imgSrc, descr}) => (
      `<div class="card">
      <div class="card__screenshot">
        <a href=${src}>
          <img src=${imgSrc} alt="site's screenshot">
        </a>
      </div>
      <div class="card__info"><img src="./icons/info.svg" alt="i"></div>
      
      <div class="card__content overflow">
        <div class="card__content_top-wrapper">
          <div class="card__content_ttl">${ttl}</div>
        </div>
        <div class="card__content_descr">${descr}</div>
      </div>
      <div class="card__close-info overflow"></div>
      </div>`
    )).join('')
  )
}
renderCards();


// make cards interactive -->> hide i , show descr // show i , hide descr
const infoBtns = document.querySelectorAll('.card__info'),
  infoCloseBtns = document.querySelectorAll('.card__close-info'),
  infoCardsContent = document.querySelectorAll('.card__content');

for (let i = 0; i < infoBtns.length; i++) {
  const btn = infoBtns[i],
    closeBtn = infoCloseBtns[i],
    infoCardContent = infoCardsContent[i];
  btn.addEventListener("click", (event) => {
    btn.classList.add("hide");
    infoCardContent.classList.remove("overflow");
    closeBtn.classList.remove("overflow");
  });
  closeBtn.addEventListener("click", (event) => {
    btn.classList.remove("hide");
    infoCardContent.classList.add("overflow");
    closeBtn.classList.add("overflow");
  });
}

// hamburger - tap to show menu & block scroll
const body = document.querySelector('body'),
    menu = document.querySelector('.header__menu'),
    menuItem = document.querySelectorAll('.header__menu_item'),
    hamburger = document.querySelector('.hamburger');

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("hamburger_active");
  menu.classList.toggle('header__menu_active');
  document.body.classList.toggle('fixed');
});

menuItem.forEach(item => {
  item.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger_active');
    menu.classList.toggle('header__menu_active');
    body.classList.toggle('fixed');
  })
})





});