// Make a function that adds a new row to the table. The function should be called by the Add Stand Button.

// Make a function that removes the last row from the table. The function should be called by the Remove Stand Button.

// Make a function that moves the value of the lifeguard input field down to the next row. If the value is already in the last row, it should be moved to the first row. This function should occur every 15 minutes.

const table = document.querySelector('table');

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

function removeStand () {

}