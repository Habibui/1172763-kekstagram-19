'use strict';

var MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

var NAMES = [
  'Артём',
  'Антон',
  'Рома',
  'Григорий',
  'Макс',
  'Жека',
  'Тереза'
];

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max + 1 - min) + min);
}

var getRandomElement = function (array) {
  return array[getRandomInt(0, array.length)];
};

var getPictures = function (amount) {
  var pictures = [];

  var getComments = function (number) {
    var comments = [];

    for (var i = 0; i < number; ++i) {
      comments.push({
        avatar: 'img/avatar-' + getRandomInt(1, 6 + 1) + '.svg',
        message: getRandomElement(MESSAGES),
        name: getRandomElement(NAMES),
      });
    }
    return comments;
  };

  for (var i = 1; i < amount + 1; ++i) {
    var likes = getRandomInt(15, 200 + 1);

    pictures.push({
      url: 'photos/' + i + '.jpg',
      description: 'Описание',
      likes: getRandomInt(15, 200 + 1),
      comments: getComments(getRandomInt(0, likes / 3)),
    });
  }
  return pictures;
};

var placePictures = function (amount) {
  var picturesContainer = document.querySelector('.pictures');

  var pictureTemplate = document.querySelector('#picture').content;

  var getPictureElement = function (picture) {
    var pictureElement = pictureTemplate.querySelector('.picture').cloneNode(true);

    pictureElement.querySelector('.picture__img').src = picture.url;
    pictureElement.querySelector('.picture__likes').textContent = picture.likes;
    pictureElement.querySelector('.picture__comments').textContent = picture.comments.length;

    return pictureElement;
  };

  var pictures = getPictures(amount);

  var fragment = document.createDocumentFragment();

  for (var i = 0; i < amount; ++i) {
    fragment.appendChild(getPictureElement(pictures[i]), pictureTemplate);
  }

  picturesContainer.appendChild(fragment);
};

placePictures(25);
