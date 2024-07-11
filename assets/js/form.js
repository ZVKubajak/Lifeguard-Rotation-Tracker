// ! SELECT ROTATION LENGTH FUNCTION

const selectLength = document.getElementById('rotation-length');

selectLength.addEventListener('change', function() {

  document.getElementById('time-select-text').style.display = 'block';

  const minute15 = document.getElementById('minute-15');
  const minute20 = document.getElementById('minute-20');
  const minute30 = document.getElementById('minute-30');

  if (selectLength.value == 1) {
    minute15.setAttribute('style', 'display: inline');
    minute20.setAttribute('style', 'display: none');
    minute30.setAttribute('style', 'display: none');
  } else if (selectLength.value == 2) {
    minute15.setAttribute('style', 'display: none');
    minute20.setAttribute('style', 'display: inline');
    minute30.setAttribute('style', 'display: none');
  } else if (selectLength.value == 3) {
    minute15.setAttribute('style', 'display: none');
    minute20.setAttribute('style', 'display: none');
    minute30.setAttribute('style', 'display: inline');
  }
});

// Now we need to save the inputs from the form into local storage or something when the user clicks the submit button.