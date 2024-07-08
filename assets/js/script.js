// * Brought to you by Zesty-Z!

const table = document.querySelector('table');

/*
    LOCAL STORAGE
*/

// Stand Count

let lastStandCount = parseInt(localStorage.getItem('standCount'));
    console.log(lastStandCount);

    for (let i = 0; i < lastStandCount; i++) {
        addStand();
    }

// Stand Names

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

// Lifeguard Names & Last Order

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

/*
    NEXT INPUT FUNCTION
*/

document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        const inputs = document.querySelectorAll("input");
        const currentInput = document.activeElement;
        const currentIndex = Array.from(inputs).indexOf(currentInput);
        const nextIndex = (currentIndex + 1) % inputs.length;
        const nextInput = inputs[nextIndex];
        nextInput.focus();
    }
});

/*
    ROTATION FUNCTION
*/

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

/*
    ROTATION TIME FUNCTION
*/

const currentTime = document.getElementById('rotation-time');

function rotationTime() {
    const rotationNumberValue = rotationNumber.value;
    const timeRanges = [
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
        '6:45 - 7:00',
        '7:00 - 7:15',
        '7:15 - 7:30',
        '7:30 - 7:45',
        '7:45 - 8:00'
    ];

    if (rotationNumberValue >= 1 && rotationNumberValue <= 24) {
        currentTime.textContent = timeRanges[rotationNumberValue - 1];
    } else {
        currentTime.textContent = '';
    }
}

/*
    ROTATION NUMBER FUNCTION
*/

const rotationNumber = document.getElementById('rotation-number');

// ----- Last Rotation Number -----

let lastRotationNumber = parseInt(localStorage.getItem('rotationNumber'));
    console.log(lastRotationNumber);

    rotationNumber.value = lastRotationNumber; // Rotation Number (from Local Storage)

if (isNaN(rotationNumber.value))  {
    rotationNumber.value = 1;
} else {
    rotationTime();
}

// ----- Last Rotation Number -----

function rotationLeft () {
    if (isNaN(rotationNumber.value) || rotationNumber.value <= 1 || rotationNumber.value > 24) {
        rotationNumber.value = 1;
        currentTime.textContent = '2:00 - 2:15';
    } else {
        rotationNumber.value = parseInt(rotationNumber.value) - 1;
        unrotateLifeguards();
        rotationTime();
    }

    return
}

function rotationRight () {
    if (isNaN(rotationNumber.value) || rotationNumber.value < 1) {
        rotationNumber.value = 1;
        currentTime.textContent = '2:00 - 2:15';
    } else if (rotationNumber.value == 24) {
        rotationNumber.value = 24;
    } else if (rotationNumber.value > 24) {
        rotationNumber.value = 1;
        currentTime.textContent = '2:00 - 2:15';
    } else {
        rotationNumber.value = parseInt(rotationNumber.value) + 1;
        rotateLifeguards();
        rotationTime();
    }

    return
}

/*
    ADD STAND BUTTON
*/

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

/*
    REMOVE STAND BUTTON
*/

function removeStand () {
    const rows = document.querySelectorAll('tr');
    const lastRow = rows[rows.length - 1];
    table.removeChild(lastRow);

    return
}

const removeStandButton = document.getElementById('rs-button');
removeStandButton.addEventListener("click", removeStand);

/*
    BREAK COLOR EVENT LISTENER
*/

//

/*
    STAND ARRAY (NOT EFFECTED BY ROTATION FUNCTION)
*/

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

/*
    LIFEGUARD ARRAY FOR ROTATION FUNCTION (INCLUDES STARTING LIFEGUARD ARRAY)
*/

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

/*
    SAVE BUTTON
*/

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
    const rotationNumberForLS = rotationNumber.value;

    localStorage.setItem('rotationNumber', rotationNumberForLS);
}

/*
    FUTURE UPDATES
*/

// The rotation number and time reset when the rotation number goes below 1 or above 24, but the lifeguards do not reset. The lifeguards should reset to their starting positions when the rotation number resets.

// There needs to be a function that allows the user to type a number into the rotation number input field and a button that will update the time and table.

// The break color function has not been created yet which might make the website hard to read.

// !!! The program needs to be universal by having a settings menu where you can choose between 15, 20, 30 minute rotations, the number of rotations, and the hours of operation. !!!



// Make a function that moves the value of the lifeguard input field down to the next row. If the value is already in the last row, it should be moved to the first row. This function should occur every 15 minutes.

// Before making the time interval function, we need all the tables for each time to generate the data. (So there needs to be a function that generates 24 tables from 1:00 to 7:00 if it is a weekend at West.) Then each of the tables should be ordered on a carousel that can change with the click of a previous and next button.

// The carousel should also automatically change every 15 minutes once the time interval function is set up.