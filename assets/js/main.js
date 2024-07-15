/*
    * SETTING START TIME
*/

const rotationLength = JSON.parse(localStorage.getItem('rotation-length'));
// console.log(rotationLength);

const startTime = JSON.parse(localStorage.getItem('start15')) || JSON.parse(localStorage.getItem('start20')) || JSON.parse(localStorage.getItem('start30'));
const endTime = JSON.parse(localStorage.getItem('end15')) || JSON.parse(localStorage.getItem('end20')) || JSON.parse(localStorage.getItem('end30'));
// console.log(startTime);
// console.log(endTime);

const startHour = document.getElementById('start-hour');
// :
const startMinute = document.getElementById('start-minute');
const startAmPm = document.getElementById('start-ampm');
// -
const nextHour = document.getElementById('next-hour');
// :
const nextMinute = document.getElementById('next-minute');
const nextAmPm = document.getElementById('next-ampm');

startHour.value = startTime.hour;
startMinute.value = startTime.minute;
// startAmPm.value = startTime.ampm;

if (rotationLength == 15) {
    nextHour.value = parseInt(startTime.hour);
    if (parseInt(startTime.minute) + 15 == 60) {
        if (parseInt(startTime.hour) === 12) {
            nextHour.value = 1;
        } else {
            nextHour.value = parseInt(startTime.hour) + 1;
        }
    }
    nextMinute.value = ((parseInt(startTime.minute) + 15) % 60).toString().padStart(2, '0');
    // NextAmPm.value
} else if (rotationLength == 20) {
    nextHour.value = parseInt(startTime.hour);
    if (parseInt(startTime.minute) + 20 == 60) {
        if (parseInt(startTime.hour) === 12) {
            nextHour.value = 1;
        } else {
            nextHour.value = parseInt(startTime.hour) + 1;
        }
    }
    nextMinute.value = ((parseInt(startTime.minute) + 20) % 60).toString().padStart(2, '0');
    // NextAmPm.value
} else if (rotationLength == 30) {
    nextHour.value = parseInt(startTime.hour);
    if (parseInt(startTime.minute) + 30 == 60) {
        if (parseInt(startTime.hour) === 12) {
            nextHour.value = 1;
        } else {
            nextHour.value = parseInt(startTime.hour) + 1;
        }
    }
    nextMinute.value = ((parseInt(startTime.minute) + 30) % 60).toString().padStart(2, '0');
    // NextAmPm.value
}

/*
    * FUNCTIONS
*/

// ! ROTATION NUMBER FUNCTION

let rotationNumber = document.getElementById('rotation-number');
rotationNumber.value = 1;
let hasReachedEndTime = false;
let hasReachedStartTime = false;

// --------------------------------------------------------------------------------------------



// --------------------------------------------------------------------------------------------

function addRotationCount () {

    if (nextHour.value == endTime.hour && nextMinute.value == endTime.minute) {
        hasReachedEndTime = true;
        console.log('You have reached the end time.');
    } else {
        rotationNumber.value++;
        hasReachedStartTime = false;
    }
}

function subtractRotationCount () {

    if (startHour.value == startTime.hour && startMinute.value == startTime.minute) {
        hasReachedStartTime = true;
        console.log('You have reached the start time.');
    } else {
        rotationNumber.value--;
        hasReachedEndTime = false;
    }
}

// ! ROTATION TIME FUNCTION

function addTime () {

    startHour.value = nextHour.value;
    startMinute.value = nextMinute.value;

    if (rotationLength == 15) {
        nextMinute.value = ((parseInt(nextMinute.value) + 15) % 60).toString().padStart(2, '0');
        if (parseInt(nextMinute.value) === 0) {
            if (parseInt(nextHour.value) === 12) {
            nextHour.value = 1;
            } else {
            nextHour.value = parseInt(nextHour.value) + 1;
            }
        }
    } else if (rotationLength == 20) {
        nextMinute.value = ((parseInt(nextMinute.value) + 20) % 60).toString().padStart(2, '0');
        if (parseInt(nextMinute.value) === 0) {
            if (parseInt(nextHour.value) === 12) {
            nextHour.value = 1;
            } else {
            nextHour.value = parseInt(nextHour.value) + 1;
            }
        }
    } else if (rotationLength == 30) {
        nextMinute.value = ((parseInt(nextMinute.value) + 30) % 60).toString().padStart(2, '0');
        if (parseInt(nextMinute.value) === 0) {
            if (parseInt(nextHour.value) === 12) {
            nextHour.value = 1;
            } else {
            nextHour.value = parseInt(nextHour.value) + 1;
            }
        }
    } 
}

function subtractTime () {

    nextHour.value = startHour.value;
    nextMinute.value = startMinute.value;

    if (rotationLength == 15) {
        startMinute.value = ((parseInt(startMinute.value) - 15) % 60).toString().padStart(2, '0');
        if (parseInt(startMinute.value) < 0) {
            startMinute.value = "45";
            if (parseInt(startHour.value) === 1) {
                startHour.value = 12;
            } else {
                startHour.value = parseInt(startHour.value) - 1;
            }
        }
    } else if (rotationLength == 20) {
        startMinute.value = ((parseInt(startMinute.value) - 20) % 60).toString().padStart(2, '0');
        if (parseInt(startMinute.value) < 0) {
            startMinute.value = "40";
            if (parseInt(startHour.value) === 1) {
                startHour.value = 12;
            } else {
                startHour.value = parseInt(startHour.value) - 1;
            }
        }
    } else if (rotationLength == 30) {
        startMinute.value = ((parseInt(startMinute.value) - 30) % 60).toString().padStart(2, '0');
        if (parseInt(startMinute.value) < 0) {
            startMinute.value = "30";
            if (parseInt(startHour.value) === 1) {
                startHour.value = 12;
            } else {
                startHour.value = parseInt(startHour.value) - 1;
            }
        }
    }
}

// ! STAND ARRAY FUNCTION

const stands = [];

function getStands () {
    const standInput = document.querySelectorAll('.stand-text-input');
    stands.length = 0; // Clear the stands array
    standInput.forEach(input => {
        stands.push(input.value);
    });

    // console.log(stands);
    return stands;
}

// ! LIFEGUARD ARRAY FUNCTION

const lifeguards = [];

function getLifeguards () {
    const lifeguardInput = document.querySelectorAll('.lifeguard-text-input');
    lifeguards.length = 0; // Clear the lifeguards array
    lifeguardInput.forEach(input => {
        lifeguards.push(input.value);
    });

    // console.log(lifeguards);
    return lifeguards;
}

// ! ROTATE LIFEGUARDS FUNCTION

function rotateLifeguards() {
  const lifeguards = getLifeguards();
  const lastLifeguard = lifeguards.pop();
  lifeguards.unshift(lastLifeguard);
  // console.log(lifeguards);

  const lifeguardCells = document.querySelectorAll('.lifeguard-text-input');
  lifeguardCells.forEach((cell, index) => {
      cell.value = lifeguards[index];
  });

  return lifeguards;
}

// ! UNROTATE LIFEGUARDS FUNCTION

function unrotateLifeguards() {
  const lifeguards = getLifeguards();
  const firstLifeguard = lifeguards.shift();
  lifeguards.push(firstLifeguard);
  // console.log(lifeguards);

  const lifeguardCells = document.querySelectorAll('.lifeguard-text-input');
  lifeguardCells.forEach((cell, index) => {
      cell.value = lifeguards[index];
  });

  return lifeguards;
}

// ! LR BUTTON FUNCTIONS

// ? LEFT BUTTON

function rotationLeft () {

    subtractRotationCount();

    if (hasReachedStartTime === false) {
        subtractTime();
        unrotateLifeguards();
    }

    return
}

// ? RIGHT BUTTON

function rotationRight () {

    addRotationCount();

    if (hasReachedEndTime === false) {
        addTime();
        rotateLifeguards();
    }

    return
}

// ! ADD STAND FUNCTION

const table = document.querySelector('table');

function addStand () {

  // Creating row and cell elements

  const row = document.createElement('tr');

  const numCell = document.createElement('td');
  const standCell = document.createElement('td');
  const lifeguardCell = document.createElement('td');

  numCell.className = "hide-query";

  // Creating text input elements for each cell

  const numText = document.createElement("p");
  const num = document.querySelectorAll('tr').length;
  numText.textContent = num;

  const standText = document.createElement("input");
  standText.type = "text";
  standText.className = "stand-text-input"; // set the CSS class

  const lifeguardText = document.createElement("input");
  lifeguardText.type = "text";
  lifeguardText.className = "lifeguard-text-input"; // set the CSS class

  // Putting the elements together

  table.appendChild(row);

  row.appendChild(numCell);
  numCell.appendChild(numText);

  row.appendChild(standCell);
  standCell.appendChild(standText);

  row.appendChild(lifeguardCell);
  lifeguardCell.appendChild(lifeguardText);
  
  return
}

const addStandButton = document.getElementById('as-button');
addStandButton.addEventListener("click", addStand);

// ! REMOVE STAND FUNCTION

function removeStand () {
  const rows = document.querySelectorAll('tr');
  const lastRow = rows[rows.length - 1];
  table.removeChild(lastRow);

  return
}

const removeStandButton = document.getElementById('rs-button');
removeStandButton.addEventListener("click", removeStand);

/*
    * SET LOCAL STORAGE
*/

// ! SAVE TO LOCAL STORAGE FUNCTION

function saveToLocalStorage () {

  // Stand Names
  getStands();
  let standNames = JSON.stringify(stands);
  localStorage.setItem('standNames', standNames);
  // console.log(standNames);

  // Lifeguard Names & Last Order
  getLifeguards();
  let lifeguardNames = JSON.stringify(lifeguards);
  localStorage.setItem('lifeguardNames', lifeguardNames);
  // console.log(lifeguardNames);

  // Stand Count
  localStorage.setItem('standCount', document.querySelectorAll('tr').length - 1);

  // Rotation Number
  localStorage.setItem('rotationNumber', rotationNumber.value);

  return
}

/*
    * GET LOCAL STORAGE
*/

// ! ROTATION NUMBER VALUE

const savedRotationNumber = parseInt(localStorage.getItem('rotationNumber'));
    console.log(rotationNumber.value);

    if (isNaN(savedRotationNumber)) {
        rotationNumber.value = 1;
    } else {
        rotationNumber.value = savedRotationNumber;
    }

// ! STAND COUNT VALUE

const savedStandCount = parseInt(localStorage.getItem('standCount'));
    console.log(savedStandCount);

    for (let i = 0; i < savedStandCount; i++) {
        addStand();
    }

// ! STAND NAME VALUES

const savedStandNamesJSON = localStorage.getItem('standNames');
const savedStandNames = JSON.parse(savedStandNamesJSON) || [];
    console.log(savedStandNames);

    savedStandNames.forEach((name, index) => {
    const standInput = document.querySelectorAll('.stand-text-input');
    if (index >= standInput.length) {
        return;
    } else {
        standInput[index].value = name;
    }
});

// ! LIFEGAURD NAME & ORDER VALUES

const savedLifeguardNamesJSON = localStorage.getItem('lifeguardNames');
const savedLifeguardNames = JSON.parse(savedLifeguardNamesJSON) || [];
    console.log(savedLifeguardNames);

    savedLifeguardNames.forEach((name, index) => {
    const lifeguardInput = document.querySelectorAll('.lifeguard-text-input');
    if (index >= lifeguardInput.length) {
        return;
    } else {
        lifeguardInput[index].value = name;
    }
});