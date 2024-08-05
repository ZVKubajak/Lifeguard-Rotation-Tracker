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
    rotationLength = 15;
    minute15.setAttribute('style', 'display: inline');
    [minute20, minute30, minute45, minute60].forEach(minute => {
      minute.setAttribute('style', 'display: none');
    });
  } else if (selectLength.value == 20) {
    rotationLength = 20;
    minute20.setAttribute('style', 'display: inline');
    [minute15, minute30, minute45, minute60].forEach(minute => {
      minute.setAttribute('style', 'display: none');
    });
  } else if (selectLength.value == 30) {
    rotationLength = 30;
    minute30.setAttribute('style', 'display: inline');
    [minute15, minute20, minute45, minute60].forEach(minute => {
      minute.setAttribute('style', 'display: none');
    });
  } else if (selectLength.value == 45) {
    rotationLength = 45;
    minute45.setAttribute('style', 'display: inline');
    [minute15, minute20, minute30, minute60].forEach(minute => {
      minute.setAttribute('style', 'display: none');
    });
  } else if (selectLength.value == 60) {
    rotationLength = 60;
    minute60.setAttribute('style', 'display: inline');
    [minute15, minute20, minute30, minute45].forEach(minute => {
      minute.setAttribute('style', 'display: none');
    });
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

  localStorage.clear();

  localStorage.setItem('startTime', JSON.stringify(startTime));
  localStorage.setItem('endTime', JSON.stringify(endTime));
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
    collectFormData(rotationLength);
    localStorage.setItem('rotationLength', JSON.stringify(rotationLength));
    redirectToMain();
  }
});

if (localStorage.getItem('rotationLength')) {
  redirectToMain();
}