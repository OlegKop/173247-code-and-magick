'use strict';
(function () {
  var userDialog = document.querySelector('.setup');
  // userDialog.classList.remove('hidden');

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

  var getRandomWizard = function (magicFullName, magicCoatColor, magicEyesColor) {
    var wizard = {name: magicFullName, coatColor: magicCoatColor, eyesColor: magicEyesColor};
    return wizard;
  };

  var createRandomWizards = function (magicName, magicLastName, magicCoatColor, magicEyesColor) {
    var magics = [];
    for (var j = 1; j <= 5; j++) {
      magics.push(magic);
      for (var i = 0; i <= j; i++) {
        var firstName = window.pickRandomElement(magicName);
        lastName = window.pickRandomElement(magicLastName);
        var nameFull = firstName + ' ' + lastName;
        coatColor = window.pickRandomElement(magicCoatColor);
        var wizardeyesColor = window.pickRandomElement(magicEyesColor);
        var magic = getRandomWizard(nameFull, coatColor, wizardeyesColor);
      }
      magicName.splice(magicName.indexOf(firstName), 1);
      magicLastName.splice(magicLastName.indexOf(lastName), 1);
      magicCoatColor.splice(magicCoatColor.indexOf(coatColor), 1);
      magicEyesColor.splice(magicEyesColor.indexOf(wizardeyesColor), 1);
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

  // обработчики событий

  var ESC_KEYCODE = window.ESC_KEYCODE;
  var ENTER_KEYCODE = window.ENTER_KEYCODE;
  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setup.querySelector('.setup-close');
  var setupWizard = document.querySelector('.setup-wizard');
  var setupWizardAppearance = setup.querySelector('.setup-wizard-appearance');
  var wizardCoat = setupWizard.querySelector('.wizard-coat');
  var wizardEyes = setupWizard.querySelector('.wizard-eyes');
  var setupFireball = document.querySelector('.setup-fireball-wrap');
  var setupUserName = setup.querySelector('.setup-user-name');
  var setupOverlay = document.querySelector('.overlay');

  coatColor = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
  ];

  eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];

  var fireballColor = ['#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848'];

  var onPopupEscPress = function (evt) {
    if (evt.keyCode === ESC_KEYCODE && setupUserName !== document.activeElement) {
      closePopup();
    }
  };

  var openPopup = function () {
    setup.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
    setupOverlay.removeAttribute('style');
  };

  var closePopup = function () {
    setup.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
  };

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

  wizardCoat.addEventListener('click', function () {
    wizardCoat.style.fill = window.pickRandomElement(coatColor);
    setupWizardAppearance.querySelectorAll('input')[0].value = wizardCoat.style.fill;
  });

  wizardEyes.addEventListener('click', function () {
    wizardEyes.style.fill = window.pickRandomElement(eyesColor);
    setupWizardAppearance.querySelectorAll('input')[1].value = wizardEyes.style.fill;
  });

  setupFireball.addEventListener('click', function () {
    setupFireball.querySelector('input').value = window.pickRandomElement(fireballColor);
    setupFireball.style.background = setupFireball.querySelector('input').value;
  });
})();
