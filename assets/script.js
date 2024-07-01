// Make a function that moves the value of the lifeguard input field down to the next row. If the value is already in the last row, it should be moved to the first row. This function should occur every 15 minutes.

// Before making the time interval function, we need all the tables for each time to generate the data. (So there needs to be a function that generates 24 tables from 1:00 to 7:00 if it is a weekend at West.) Then each of the tables should be ordered on a carousel that can change with the click of a previous and next button.

// The carousel should also automatically change every 15 minutes once the time interval function is set up.

const table = document.querySelector('table');

/*
    ENTER FOCUS FUNCTION
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
    console.log(lifeguards);

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
    console.log(lifeguards);

    const lifeguardCells = document.querySelectorAll('.lifeguard-text-input');
    lifeguardCells.forEach((cell, index) => {
        cell.value = lifeguards[index];
    });

    return lifeguards;
}

/* function resetLifeguards() {
    const startingLifeguards = getStartingLifeguards();
    console.log(startingLifeguards);

    const lifeguardCells = document.querySelectorAll('.lifeguard-text-input');
    lifeguardCells.forEach((cell, index) => {
        cell.value = startingLifeguards[index];
    });

    return startingLifeguards;
} */

/*
    ROTATION TIME FUNCTION
*/

const currentTime = document.getElementById('rotation-time');

function rotationTime() {
    if (rotationNumber.value === '1') {
        currentTime.textContent = '1:00 - 1:15';
    } else if (rotationNumber.value === '2') {
        currentTime.textContent = '1:15 - 1:30';
    } else if (rotationNumber.value === '3') {
        currentTime.textContent = '1:30 - 1:45';
    } else if (rotationNumber.value === '4') {
        currentTime.textContent = '1:45 - 2:00';
    } else if (rotationNumber.value === '5') {
        currentTime.textContent = '2:00 - 2:15';
    } else if (rotationNumber.value === '6') {
        currentTime.textContent = '2:15 - 2:30';
    } else if (rotationNumber.value === '7') {
        currentTime.textContent = '2:30 - 2:45';
    } else if (rotationNumber.value === '8') { 
        currentTime.textContent = '2:45 - 3:00';
    } else if (rotationNumber.value === '9') {
        currentTime.textContent = '3:00 - 3:15';
    } else if (rotationNumber.value === '10') {
        currentTime.textContent = '3:15 - 3:30';
    } else if (rotationNumber.value === '11') {
        currentTime.textContent = '3:30 - 3:45';
    } else if (rotationNumber.value === '12') {
        currentTime.textContent = '3:45 - 4:00';
    } else if (rotationNumber.value === '13') {
        currentTime.textContent = '4:00 - 4:15';
    } else if (rotationNumber.value === '14') {
        currentTime.textContent = '4:15 - 4:30';
    } else if (rotationNumber.value === '15') {
        currentTime.textContent = '4:30 - 4:45';
    } else if (rotationNumber.value === '16') {
        currentTime.textContent = '4:45 - 5:00';
    } else if (rotationNumber.value === '17') {
        currentTime.textContent = '5:00 - 5:15';
    } else if (rotationNumber.value === '18') {
        currentTime.textContent = '5:15 - 5:30';
    } else if (rotationNumber.value === '19') {
        currentTime.textContent = '5:30 - 5:45';
    } else if (rotationNumber.value === '20') {
        currentTime.textContent = '5:45 - 6:00';
    } else if (rotationNumber.value === '21') {
        currentTime.textContent = '6:00 - 6:15';
    } else if (rotationNumber.value === '22') {
        currentTime.textContent = '6:15 - 6:30';
    } else if (rotationNumber.value === '23') {
        currentTime.textContent = '6:30 - 6:45';
    } else if (rotationNumber.value === '24') {
        currentTime.textContent = '6:45 - 7:00';
    }

    return
}

/*
    ROTATION NUMBER FUNCTION
*/

document.getElementById('rotation-number').defaultValue = 1;
const rotationNumber = document.getElementById('rotation-number');

function rotationLeft () {
    if (isNaN(rotationNumber.value) || rotationNumber.value <= 1 || rotationNumber.value > 24) {
        rotationNumber.value = 1;
        currentTime.textContent = '1:00 - 1:15';
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
        currentTime.textContent = '1:00 - 1:15';
    } else if (rotationNumber.value == 24) {
        rotationNumber.value = 24;
    } else if (rotationNumber.value > 24) {
        rotationNumber.value = 1;
        currentTime.textContent = '1:00 - 1:15';
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

    console.log(lifeguards);
    return lifeguards;
}

/* const startingLifeguards = [];

function getStartingLifeguards () {
    const startingLifeguardInput = document.querySelectorAll('.lifeguard-text-input');
    startingLifeguards.length = 0; // Clear the starting lifeguards array
    startingLifeguardInput.forEach(input => {
        startingLifeguards.push(input.value);
    });

    console.log(startingLifeguards);
    return startingLifeguards;
} */

/*
    PROBLEMS
*/

// The rotation number and time reset when the rotation number goes below 1 or above 24, but the lifeguards do not reset. The lifeguards should reset to their starting positions when the rotation number resets.

// There needs to be a function that allows the user to type a number into the rotation number input field and a button that will update the time and table.

// The break color function has not been created yet which might make the website hard to read.

// !!! The program needs to be universal by having a settings menu where you can choose between 15, 20, 30 minute rotations, the number of rotations, and the hours of operation. !!!