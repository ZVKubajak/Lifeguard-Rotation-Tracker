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

/*
    ROTATION NUMBER FUNCTION
*/

document.getElementById('rotation-number').defaultValue = 1;
let rotationNumber = document.getElementById('rotation-number');

function rotationLeft () {
    if (isNaN(rotationNumber.value)) {
        rotationNumber.value = 1;
    } else if (rotationNumber.value <= 1) {
        rotationNumber.value = 1;
    } else if (rotationNumber.value >= 25) {
        rotationNumber.value = 24;
    } else {
        rotationNumber.value = parseInt(rotationNumber.value) - 1;
        unrotateLifeguards();
    }
}

function rotationRight () {
    if (isNaN(rotationNumber.value)) {
        rotationNumber.value = 1;
    } else if (rotationNumber.value <= 0) {
        rotationNumber.value = 1;
    } else if (rotationNumber.value >= 24) {
        rotationNumber.value = 24;
    } else {
        rotationNumber.value = parseInt(rotationNumber.value) + 1;
        rotateLifeguards();
    }
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
    STAND ARRAY (NOT EFFECTED BY ROTATION FUNCTION)
*/

const stands = [];

function getStands () {
    const standInput = document.querySelectorAll('.stand-text-input');
    stands.length = 0; // Clear the stands array
    standInput.forEach(input => {
        stands.push(input.value);
    });

    console.log(stands);
    return stands;
}

/*
    LIFEGUARD ARRAY FOR ROTATION FUNCTION
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

// Make sure the function is not called when the rotation number is < 1 or > 24.

// Program the rotation number to calculate the current rotation for that number. Do it by rotating the table as many times as the rotation number. Set rotation number to 1 before rotating to get the right result.

// Create the break color function. It should color the entire row which includes the stand and lifeguard cells.

// Create a function that displays the current time by using .textContent. The time should change when the rotation changes.

/*
    ROTATION TIME FUNCTION
*/