'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = userDialog.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');


var randomInteger = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};


var wizards = [
  {
    name: WIZARD_NAMES[randomInteger(0, WIZARD_NAMES.length)] + ' ' + WIZARD_SURNAMES[randomInteger(0, WIZARD_SURNAMES.length)],
    coatColor: COAT_COLORS[randomInteger(0, COAT_COLORS.length)],
    eyesColor: EYES_COLORS[randomInteger(0, EYES_COLORS.length)]
  },
  {
    name: WIZARD_NAMES[randomInteger(0, WIZARD_NAMES.length)] + ' ' + WIZARD_SURNAMES[randomInteger(0, WIZARD_SURNAMES.length)],
    coatColor: COAT_COLORS[randomInteger(0, COAT_COLORS.length)],
    eyesColor: EYES_COLORS[randomInteger(0, EYES_COLORS.length)]
  },
  {
    name: WIZARD_NAMES[randomInteger(0, WIZARD_NAMES.length)] + ' ' + WIZARD_SURNAMES[randomInteger(0, WIZARD_SURNAMES.length)],
    coatColor: COAT_COLORS[randomInteger(0, COAT_COLORS.length)],
    eyesColor: EYES_COLORS[randomInteger(0, EYES_COLORS.length)]
  },
  {
    name: WIZARD_NAMES[randomInteger(0, WIZARD_NAMES.length)] + ' ' + WIZARD_SURNAMES[randomInteger(0, WIZARD_SURNAMES.length)],
    coatColor: COAT_COLORS[randomInteger(0, COAT_COLORS.length)],
    eyesColor: EYES_COLORS[randomInteger(0, EYES_COLORS.length)]
  }
];

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

userDialog.querySelector('.setup-similar').classList.remove('hidden');
