'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = userDialog.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');


var firstname = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];

var lastName = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];

var coatColor = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];

var eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];

var pickRandomElement = function (element) {
  var randElement = element[Math.floor(Math.random() * element.length)];
  return randElement;
};

var getRandomWizard = function (magicFullName, magicCoatColor, magicEyesColor) {
  var wizard = {name: magicFullName, coatColor: magicCoatColor, eyesColor: magicEyesColor};
  return wizard;
};

var createRandomWizards = function (magicName, magicLastName, magicCoatColor, magicEyesColor) {
  var magics = [];
  for (var j = 1; j <= 5; j++) {
    magics.push(magic);

    for (var i = 0; i <= j; i++) {
      var firstName = pickRandomElement(magicName);
      lastName = pickRandomElement(magicLastName);
      var nameFull = firstName + ' ' + lastName;
      coatColor = pickRandomElement(magicCoatColor);
      eyesColor = pickRandomElement(magicEyesColor);

      var magic = getRandomWizard(nameFull, coatColor, eyesColor);
    }
    magicName.splice(magicName.indexOf(firstName), 1);
    magicLastName.splice(magicLastName.indexOf(lastName), 1);
    magicCoatColor.splice(magicCoatColor.indexOf(coatColor), 1);
    magicEyesColor.splice(magicEyesColor.indexOf(eyesColor), 1);
  }
  magics.splice(0, 1);
  return magics;
};

var wizards = createRandomWizards(firstname, lastName, coatColor, eyesColor);

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');
