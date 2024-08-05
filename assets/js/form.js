// ! SELECT ROTATION LENGTH FUNCTION

const selectLength = document.getElementById('rotation-length');

selectLength.addEventListener('change', function() {

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
  } else if (selectLength.value == 20) {
    minute20.setAttribute('style', 'display: inline');
    [minute15, minute30, minute45, minute60].forEach(minute => {
      minute.setAttribute('style', 'display: none');
    });
  } else if (selectLength.value == 30) {
    minute30.setAttribute('style', 'display: inline');
    [minute15, minute20, minute45, minute60].forEach(minute => {
      minute.setAttribute('style', 'display: none');
    });
  } else if (selectLength.value == 45) {
    minute45.setAttribute('style', 'display: inline');
    [minute15, minute20, minute30, minute60].forEach(minute => {
      minute.setAttribute('style', 'display: none');
    });
  } else if (selectLength.value == 60) {
    minute60.setAttribute('style', 'display: inline');
    [minute15, minute20, minute30, minute45].forEach(minute => {
      minute.setAttribute('style', 'display: none');
    });
  }
});

// ! COLLECT FORM DATA FUNCTION

function collectFormData () {

  if (selectLength.value == 15) {

    const startHour15 = document.getElementById('start-hour-15');
    const startMinute15 = document.getElementById('start-minute-15');

    const endHour15 = document.getElementById('end-hour-15');
    const endMinute15 = document.getElementById('end-minute-15');

    const start15 = {
      hour: startHour15.value,
      minute: startMinute15.value,
    };

    const end15 = {
      hour: endHour15.value,
      minute: endMinute15.value,
    };

    localStorage.setItem('start15', JSON.stringify(start15));
    localStorage.setItem('end15', JSON.stringify(end15));

    const removedLengths = ['start20', 'end20', 'start30', 'end30', 'start45', 'end45', 'start60', 'end60'];
    removedLengths.forEach(length => {
      localStorage.removeItem(length);
    });

  } else if (selectLength.value == 20) {
    
    const startHour20 = document.getElementById('start-hour-20');
    const startMinute20 = document.getElementById('start-minute-20');

    const endHour20 = document.getElementById('end-hour-20');
    const endMinute20 = document.getElementById('end-minute-20');

    const start20 = {
      hour: startHour20.value,
      minute: startMinute20.value,
    };

    const end20 = {
      hour: endHour20.value,
      minute: endMinute20.value,
    };

    localStorage.setItem('start20', JSON.stringify(start20));
    localStorage.setItem('end20', JSON.stringify(end20));

    const removedLengths = ['start15', 'end15', 'start30', 'end30', 'start45', 'end45', 'start60', 'end60'];
    removedLengths.forEach(length => {
      localStorage.removeItem(length);
    });

  } else if (selectLength.value == 30) {

    const startHour30 = document.getElementById('start-hour-30');
    const startMinute30 = document.getElementById('start-minute-30');

    const endHour30 = document.getElementById('end-hour-30');
    const endMinute30 = document.getElementById('end-minute-30');

    const start30 = {
      hour: startHour30.value,
      minute: startMinute30.value,
    };

    const end30 = {
      hour: endHour30.value,
      minute: endMinute30.value,
    };

    localStorage.setItem('start30', JSON.stringify(start30));
    localStorage.setItem('end30', JSON.stringify(end30));

    const removedLengths = ['start15', 'end15', 'start20', 'end20', 'start45', 'end45', 'start60', 'end60'];
    removedLengths.forEach(length => {
      localStorage.removeItem(length);
    });

  } else if (selectLength.value == 45) {

    const startHour45 = document.getElementById('start-hour-45');
    const startMinute45 = document.getElementById('start-minute-45');

    const endHour45 = document.getElementById('end-hour-45');
    const endMinute45 = document.getElementById('end-minute-45');

    const start45 = {
      hour: startHour45.value,
      minute: startMinute45.value,
    };

    const end45 = {
      hour: endHour45.value,
      minute: endMinute45.value,
    };

    localStorage.setItem('start45', JSON.stringify(start45));
    localStorage.setItem('end45', JSON.stringify(end45));

    const removedLengths = ['start15', 'end15', 'start20', 'end20', 'end30', 'end30', 'start60', 'end60'];
    removedLengths.forEach(length => {
      localStorage.removeItem(length);
    });

  } else if (selectLength.value == 60) {

    const startHour60 = document.getElementById('start-hour-60');
    const startMinute60 = document.getElementById('start-minute-60');

    const endHour60 = document.getElementById('end-hour-60');
    const endMinute60 = document.getElementById('end-minute-60');

    const start60 = {
      hour: startHour60.value,
      minute: startMinute60.value,
    };

    const end60 = {
      hour: endHour60.value,
      minute: endMinute60.value,
    };

    localStorage.setItem('start60', JSON.stringify(start60));
    localStorage.setItem('end60', JSON.stringify(end60));

    const removedLengths = ['start15', 'end15', 'start20', 'end20', 'end30', 'end30', 'start45', 'end45'];
    removedLengths.forEach(length => {
      localStorage.removeItem(length);
    });
  }
};

// ! REDIRECT TO MAIN FUNCTION

function redirectToMain () {
  window.location.href = 'main.html';
};

// ! SUBMIT FORM EVENT LISTENER

const submitForm = document.getElementById('submit-form');
submitForm.addEventListener('click', function() {

  if (selectLength.value !== "15" && selectLength.value !== "20" && selectLength.value !== "30" && selectLength.value !== "45" && selectLength.value !== "60") {
    document.getElementById('error').style.display = 'block';
  } else {
    localStorage.setItem('rotation-length', JSON.stringify(selectLength.value));
    collectFormData();
    redirectToMain();
  }
});