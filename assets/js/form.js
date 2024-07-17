// ! SELECT ROTATION LENGTH FUNCTION

const selectLength = document.getElementById('rotation-length');

selectLength.addEventListener('change', function() {

  document.getElementById('time-select-text').style.display = 'block';

  const minute15 = document.getElementById('minute-15');
  const minute20 = document.getElementById('minute-20');
  const minute30 = document.getElementById('minute-30');

  if (selectLength.value == 15) {
    minute15.setAttribute('style', 'display: inline');
    minute20.setAttribute('style', 'display: none');
    minute30.setAttribute('style', 'display: none');
  } else if (selectLength.value == 20) {
    minute15.setAttribute('style', 'display: none');
    minute20.setAttribute('style', 'display: inline');
    minute30.setAttribute('style', 'display: none');
  } else if (selectLength.value == 30) {
    minute15.setAttribute('style', 'display: none');
    minute20.setAttribute('style', 'display: none');
    minute30.setAttribute('style', 'display: inline');
  }
});

// ! COLLECT FORM DATA FUNCTION

function collectFormData () {

  if (selectLength.value == 15) {

    const startHour15 = document.getElementById('start-hour-15');
    // console.log(startHour15.value);
    const startMinute15 = document.getElementById('start-minute-15');
    // console.log(startMinute15.value);
    const startAmPm15 = document.getElementById('start-ampm-15');
    // console.log(startAmPm15.value);

    const endHour15 = document.getElementById('end-hour-15');
    // console.log(endHour15.value);
    const endMinute15 = document.getElementById('end-minute-15');
    // console.log(endMinute15.value);
    const endAmPm15 = document.getElementById('end-ampm-15');
    // console.log(endAmPm15.value);

    const start15 = {
      hour: startHour15.value,
      minute: startMinute15.value,
      // ampm: startAmPm15.value
    };

    const end15 = {
      hour: endHour15.value,
      minute: endMinute15.value,
      // ampm: endAmPm15.value
    };

    console.log(start15);
    console.log(end15);

    localStorage.setItem('start15', JSON.stringify(start15));
    localStorage.setItem('end15', JSON.stringify(end15));

    localStorage.removeItem('start20');
    localStorage.removeItem('end20');
    localStorage.removeItem('start30');
    localStorage.removeItem('end30');

  } else if (selectLength.value == 20) {
    
    const startHour20 = document.getElementById('start-hour-20');
    // console.log(startHour20.value);
    const startMinute20 = document.getElementById('start-minute-20');
    // console.log(startMinute20.value);
    const startAmPm20 = document.getElementById('start-ampm-20');
    // console.log(startAmPm20.value);

    const endHour20 = document.getElementById('end-hour-20');
    // console.log(endHour20.value);
    const endMinute20 = document.getElementById('end-minute-20');
    // console.log(endMinute20.value);
    const endAmPm20 = document.getElementById('end-ampm-20');
    // console.log(endAmPm20.value);

    const start20 = {
      hour: startHour20.value,
      minute: startMinute20.value,
      // ampm: startAmPm20.value
    };

    const end20 = {
      hour: endHour20.value,
      minute: endMinute20.value,
      // ampm: endAmPm20.value
    };

    console.log(start20);
    console.log(end20);

    localStorage.setItem('start20', JSON.stringify(start20));
    localStorage.setItem('end20', JSON.stringify(end20));

    localStorage.removeItem('start15');
    localStorage.removeItem('end15');
    localStorage.removeItem('start30');
    localStorage.removeItem('end30');

  } else if (selectLength.value == 30) {

    const startHour30 = document.getElementById('start-hour-30');
    // console.log(startHour30.value);
    const startMinute30 = document.getElementById('start-minute-30');
    // console.log(startMinute30.value);
    const startAmPm30 = document.getElementById('start-ampm-30');
    // console.log(startAmPm30.value);

    const endHour30 = document.getElementById('end-hour-30');
    // console.log(endHour30.value);
    const endMinute30 = document.getElementById('end-minute-30');
    // console.log(endMinute30.value);
    const endAmPm30 = document.getElementById('end-ampm-30');
    // console.log(endAmPm30.value);

    const start30 = {
      hour: startHour30.value,
      minute: startMinute30.value,
      // ampm: startAmPm30.value
    };

    const end30 = {
      hour: endHour30.value,
      minute: endMinute30.value,
      // ampm: endAmPm30.value
    };

    console.log(start30);
    console.log(end30);

    localStorage.setItem('start30', JSON.stringify(start30));
    localStorage.setItem('end30', JSON.stringify(end30));

    localStorage.removeItem('start15');
    localStorage.removeItem('end15');
    localStorage.removeItem('start20');
    localStorage.removeItem('end20');

  }
};

// ! REDIRECT TO MAIN FUNCTION

function redirectToMain () {
  window.location.href = 'main.html';
};

// ! SUBMIT FORM EVENT LISTENER

const submitForm = document.getElementById('submit-form');
submitForm.addEventListener('click', function() {

  if (selectLength.value !== "15" && selectLength.value !== "20" && selectLength.value !== "30") {
    document.getElementById('error').style.display = 'block';
  } else {
    localStorage.setItem('rotation-length', JSON.stringify(selectLength.value));
    collectFormData();
    redirectToMain();
  }
});