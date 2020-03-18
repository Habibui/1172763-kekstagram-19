'use strict';

(function () {

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

  var AVATARS_AMOUNT = 6;
  var PICTURES_AMOUNT = 25;

  var getComments = function (number) {
    var comments = [];

    for (var i = 0; i < number; ++i) {
      comments.push({
        avatar: 'img/avatar-' + getRandomInt(1, AVATARS_AMOUNT + 1) + '.svg',
        message: getRandomElement(MESSAGES),
        name: getRandomElement(NAMES),
      });
    }
    return comments;
  };

  var getPictures = function (amount) {
    var pictures = [];

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

  var pictures = getPictures(PICTURES_AMOUNT);

  window.data = {
    pictures: pictures
  };

})();
