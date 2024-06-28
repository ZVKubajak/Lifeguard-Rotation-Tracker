// Make a function that moves the value of the lifeguard input field down to the next row. If the value is already in the last row, it should be moved to the first row. This function should occur every 15 minutes.

//

// Before making the time interval function, we need all the tables for each time to generate the data. (So there needs to be a function that generates 24 tables from 1:00 to 7:00 if it is a weekend at West.) Then each of the tables should be ordered on a carousel that can change with the click of a previous and next button.

// The carousel should also automatically change every 15 minutes once the time interval function is set up.

const table = document.querySelector('table');

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

    const numText = document.createElement("input");
    numText.type = "text";
    numText.className = "text-input"; // set the CSS class

    const standText = document.createElement("input");
    standText.type = "text";
    standText.className = "text-input"; // set the CSS class

    const lifeguardText = document.createElement("input");
    lifeguardText.type = "text";
    lifeguardText.className = "text-input"; // set the CSS class

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