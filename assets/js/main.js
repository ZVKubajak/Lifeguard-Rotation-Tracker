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
// ? NEEDS REWORKING

let rotationNumber = document.getElementById('rotation-number');
rotationNumber.value = 1;
let hasReachedEndTime = false;

// The following code sets its local storage value equal to the current number.

// const savedRotationNumber = parseInt(localStorage.getItem('savedRotationNumber'));
// 
// rotationNumber.value = savedRotationNumber; // Rotation Number (from Local Storage)
// console.log(rotationNumber.value);

function rotationCount () {

    if (nextHour.value == endTime.hour && nextMinute.value == endTime.minute) {
        hasReachedEndTime = true;
    } else {
        rotationNumber.value++;
    
    }
}

// ! ROTATION TIME FUNCTION
// ? NEEDS REWORKING

// If start time == end time, make that the last rotation number.

// If rotationLength.value == 15, add 15 minutes to the start time for each rotation number.
// Else if rotationLength.value == 20, add 20 minutes to the start time for each rotation number.
// Else if rotationLength.value == 30, add 30 minutes to the start time for each rotation number.

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

// ! We need a function that generates the amount of rotations with the given operation hours.
// ! When the user reaches the last rotation number or the end time, stop the buttons from going further.

/* const currentTime = document.getElementById('rotation-time'); */

function rotationTime() {
  const rotationNumberValue = rotationNumber.value;
  const timeRanges = [
      '1:00 - 1:15',
      '1:15 - 1:30',
      '1:30 - 1:45',
      '1:45 - 2:00',
      '2:00 - 2:15',
      '2:15 - 2:30',
      '2:30 - 2:45',
      '2:45 - 3:00',
      '3:00 - 3:15',
      '3:15 - 3:30',
      '3:30 - 3:45',
      '3:45 - 4:00',
      '4:00 - 4:15',
      '4:15 - 4:30',
      '4:30 - 4:45',
      '4:45 - 5:00',
      '5:00 - 5:15',
      '5:15 - 5:30',
      '5:30 - 5:45',
      '5:45 - 6:00',
      '6:00 - 6:15',
      '6:15 - 6:30',
      '6:30 - 6:45',
      '6:45 - 7:00'
  ];

  if (rotationNumberValue >= 1 && rotationNumberValue <= 24) {
      currentTime.textContent = timeRanges[rotationNumberValue - 1];
  } else {
      currentTime.textContent = '';
  }
}

// ! ROTATION NUMBER FUNCTION
// ? NEEDS REWORKING

// ! IDEA CODE

console.log(endTime);

function ideaFunction () {
    function otherIdeaFunction() {
        const endTime = JSON.parse(localStorage.getItem('end15')) || JSON.parse(localStorage.getItem('end20')) || JSON.parse(localStorage.getItem('end30'));
        const startHour = parseInt(startTime.hour);
        const startMinute = parseInt(startTime.minute);
        const endHour = parseInt(endTime.hour);
        const endMinute = parseInt(endTime.minute);

        let rotationCount = 0;

        if (rotationLength == 15) {
            while (startHour !== endHour || startMinute !== endMinute) {
                startMinute = (startMinute + 15) % 60;
                if (startMinute === 0) {
                    if (startHour === 12) {
                        startHour = 1;
                    } else {
                        startHour++;
                    }
                }
                rotationCount++;
            }
        } else if (rotationLength == 20) {
            while (startHour !== endHour || startMinute !== endMinute) {
                startMinute = (startMinute + 20) % 60;
                if (startMinute === 0) {
                    if (startHour === 12) {
                        startHour = 1;
                    } else {
                        startHour++;
                    }
                }
                rotationCount++;
            }
        } else if (rotationLength == 30) {
            while (startHour !== endHour || startMinute !== endMinute) {
                startMinute = (startMinute + 30) % 60;
                if (startMinute === 0) {
                    if (startHour === 12) {
                        startHour = 1;
                    } else {
                        startHour++;
                    }
                }
                rotationCount++;
            }
        }

        return rotationCount;
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
// ? NEEDS REWORKING

// ? LEFT BUTTON

function rotationLeft () {
  if (isNaN(rotationNumber.value) || rotationNumber.value <= 1 || rotationNumber.value > 24) {
      rotationNumber.value = 1;
      currentTime.textContent = '2:00 - 2:15';
  } else {
      rotationNumber.value = parseInt(rotationNumber.value) - 1;
      unrotateLifeguards();
      subtractTime();
  }

  return
}

// ? RIGHT BUTTON

function rotationRight () {

    rotationCount();

    if (hasReachedEndTime === false) {
        addTime();
        rotateLifeguards();
    } else {
        console.log('You have reached the end time.');
    }
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
  const rotationNumberForLS = rotationNumber;

  localStorage.setItem('savedRotationNumber', rotationNumberForLS);
}

/*
    * GET LOCAL STORAGE
*/

// ! STAND COUNT VALUE

let lastStandCount = parseInt(localStorage.getItem('standCount'));
    console.log(lastStandCount);

    for (let i = 0; i < lastStandCount; i++) {
        addStand();
    }

// ! STAND NAME VALUES

let lastStandNamesJSON = localStorage.getItem('standNames');
let lastStandNames = JSON.parse(lastStandNamesJSON) || [];
    console.log(lastStandNames);

    lastStandNames.forEach((name, index) => {
    const standInput = document.querySelectorAll('.stand-text-input');
    if (index >= standInput.length) {
        return;
    } else {
        standInput[index].value = name;
    }
});

// ! LIFEGAURD NAME & ORDER VALUES

let lastLifeguardNamesJSON = localStorage.getItem('lifeguardNames');
let lastLifeguardNames = JSON.parse(lastLifeguardNamesJSON) || [];
    console.log(lastLifeguardNames);

    lastLifeguardNames.forEach((name, index) => {
    const lifeguardInput = document.querySelectorAll('.lifeguard-text-input');
    if (index >= lifeguardInput.length) {
        return;
    } else {
        lifeguardInput[index].value = name;
    }
});