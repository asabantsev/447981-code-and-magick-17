'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

// находим элементы окна
var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');

var similarListElement = setup.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

var randomInteger = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

var randomArrayElement = function (array) {
  return array[Math.floor(Math.random() * (array.length - 1))];
};

var randomObject = function (name, surname, coatColor, eyesColor) {
  var wizardArray = [];

  for (var i = 0; i < 4; i++) {
    var randomName = name[randomInteger(0, name.length)];
    var randomSurname = surname[randomInteger(0, surname.length)];
    var randomCoatColor = coatColor[randomInteger(0, coatColor.length)];
    var randomEyeColor = eyesColor[randomInteger(0, eyesColor.length)];

    var wizardObject = {
      name: randomName + ' ' + randomSurname,
      coatColor: randomCoatColor,
      eyesColor: randomEyeColor
    };

    wizardArray.push(wizardObject);
  }

  return wizardArray;
};

var wizards = randomObject(WIZARD_NAMES, WIZARD_SURNAMES, COAT_COLORS, EYES_COLORS);

var renderWizard = function () {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

setup.querySelector('.setup-similar').classList.remove('hidden');

// функции скрытия и раскрытия окна
var onPopupEcsPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEcsPress);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEcsPress);
};

// обработчики событий
setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

// валидация поля ввода имени
var userNameInput = setup.querySelector('.setup-user-name');

userNameInput.addEventListener('invalid', function () {
  if (userNameInput.validity.tooShort) {
    userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
  } else if (userNameInput.validity.tooLong) {
    userNameInput.setCustomValidity('Имя не должно превышать 25-ти символов');
  } else if (userNameInput.validity.valueMissing) {
    userNameInput.setCustomValidity('Обязательное поле');
  } else {
    userNameInput.setCustomValidity('');
  }
});

// изменение цвета по нажатию
var wizardCoat = setup.querySelector('.setup-wizard .wizard-coat');
var wizardCoatInput = setup.querySelector('input[name=coat-color]');

var wizardEyes = setup.querySelector('.setup-wizard .wizard-eyes');
var wizardEyesInput = setup.querySelector('input[name=eyes-color]');

var fireBall = setup.querySelector('.setup-fireball-wrap');
var fireBallInput = setup.querySelector('input[name=fireball-color]');

var setWizardRandomColor = function (evt, colors, styleProperty, formInputNode) {
  var color = randomArrayElement(colors);
  evt.currentTarget.style[styleProperty] = color;
  formInputNode.value = color;
};

wizardCoat.addEventListener('click', function (evt) {
  setWizardRandomColor(evt, COAT_COLORS, 'fill', wizardCoatInput);
});

wizardEyes.addEventListener('click', function (evt) {
  setWizardRandomColor(evt, EYES_COLORS, 'fill', wizardEyesInput);
});

fireBall.addEventListener('click', function (evt) {
  setWizardRandomColor(evt, FIREBALL_COLORS, 'background', fireBallInput);
});
