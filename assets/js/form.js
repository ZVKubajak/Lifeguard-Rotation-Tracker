// ! SELECT ROTATION LENGTH FUNCTION

let rotationLength = 0;

const selectLength = document.getElementById('rotation-length');

selectLength.addEventListener('change', function () {

  document.getElementById('time-select-text').style.display = 'block';

  const minute15 = document.getElementById('minute-15');
  const minute20 = document.getElementById('minute-20');
  const minute30 = document.getElementById('minute-30');
  const minute45 = document.getElementById('minute-45');
  const minute60 = document.getElementById('minute-60');

  if (selectLength.value == 15) {
    minute15.setAttribute('style', 'display: inline');
    [minute20, minute30, minute45, minute60].forEach(minute => {
      minute.setAttribute('style', 'display: none');
    });
    rotationLength = 15;
  } else if (selectLength.value == 20) {
    minute20.setAttribute('style', 'display: inline');
    [minute15, minute30, minute45, minute60].forEach(minute => {
      minute.setAttribute('style', 'display: none');
    });
    rotationLength = 20;
  } else if (selectLength.value == 30) {
    minute30.setAttribute('style', 'display: inline');
    [minute15, minute20, minute45, minute60].forEach(minute => {
      minute.setAttribute('style', 'display: none');
    });
    rotationLength = 30;
  } else if (selectLength.value == 45) {
    minute45.setAttribute('style', 'display: inline');
    [minute15, minute20, minute30, minute60].forEach(minute => {
      minute.setAttribute('style', 'display: none');
    });
    rotationLength = 45;
  } else if (selectLength.value == 60) {
    minute60.setAttribute('style', 'display: inline');
    [minute15, minute20, minute30, minute45].forEach(minute => {
      minute.setAttribute('style', 'display: none');
    });
    rotationLength = 60;
  }
});

// ! COLLECT FORM DATA FUNCTION

function collectFormData(length) {

  const startHour = document.getElementById(`start-hour-${length}`);
  const startMinute = document.getElementById(`start-minute-${length}`);

  const endHour = document.getElementById(`end-hour-${length}`);
  const endMinute = document.getElementById(`end-minute-${length}`);

  const startTime = {
    hour: startHour.value,
    minute: startMinute.value,
  };

  const endTime = {
    hour: endHour.value,
    minute: endMinute.value,
  };

  localStorage.setItem('startTime', JSON.stringify(startTime));
  localStorage.setItem('endTime', JSON.stringify(endTime));

  const removedLengths = ['start20', 'end20', 'start30', 'end30', 'start45', 'end45', 'start60', 'end60'];
  removedLengths.forEach(length => {
    localStorage.removeItem(length);
  });
};

// ! REDIRECT TO MAIN FUNCTION

function redirectToMain() {
  window.location.href = 'main.html';
};

// ! SUBMIT FORM EVENT LISTENER

const submitForm = document.getElementById('submit-form');
submitForm.addEventListener('click', function () {

  if (rotationLength !== 15 && rotationLength !== 20 && rotationLength !== 30 && rotationLength !== 45 && rotationLength !== 60) {
    document.getElementById('error').style.display = 'block';
  } else {
    localStorage.setItem('rotation-length', JSON.stringify(rotationLength));
    collectFormData(rotationLength);
    redirectToMain();
  }
});