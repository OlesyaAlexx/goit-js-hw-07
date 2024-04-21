const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
  {
    url: 'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    alt: 'Alpine Spring Meadows',
  },
  {
    url: 'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    alt: 'Nature Landscape',
  },
  {
    url: 'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    alt: 'Lighthouse Coast Sea',
  },
];

const GalleryListEl = document.querySelector('.gallery');

//Створюємо функціюдля отримання одного екземпляру картинки вкладеної в тег li
const makeImagesGallery = ({ url, alt }) => {
  const imagesItemEl = document.createElement('li');
  const imgEl = document.createElement('img');
  imgEl.src = url;
  imgEl.alt = alt;
  imgEl.width = 360;
  imgEl.height = 300;
  imagesItemEl.appendChild(imgEl);
  return imagesItemEl;
};

//Перебираємо масив обєктів images за допомогою методу map і вньому викликаємо
//колбек функцію makeImagesGallery, яка перебире масив та поверне масив такої ж
//довжини з обєктами картинок вкладених в тег li
const ItemsElements = images.map(makeImagesGallery);

// Додаємо розпилений(spend) масив обєктів за допомогою методу append в ul список з  класом .gallery
GalleryListEl.append(...ItemsElements);
