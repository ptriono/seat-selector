// Generate seats dynamically
const seatContainer = document.querySelector('.seat-container');
const seatList = document.getElementById('seat-list');

// Define number of rows and columns
const rows = 5;
const cols = 5;

// Create an array to hold the seat status (true = taken, false = available)
const seats = Array(rows).fill().map(() => Array(cols).fill(false));

// Generate seat elements dynamically
for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
        const seat = document.createElement('div');
        seat.classList.add('seat');
        seat.dataset.row = i;
        seat.dataset.col = j;

        // Add event listener for seat selection
        seat.addEventListener('click', toggleSeatSelection);

        // Mark seats as taken if needed
        if (seats[i][j]) {
            seat.classList.add('taken');
        }

        seatContainer.appendChild(seat);
    }
}

// Function to handle seat selection
function toggleSeatSelection(event) {
    const seat = event.target;
    const row = seat.dataset.row;
    const col = seat.dataset.col;

    // Check if seat is already taken
    if (seat.classList.contains('taken')) {
        alert("This seat is taken!");
        return;
    }

    // Toggle seat selection
    if (seat.classList.contains('selected')) {
        seat.classList.remove('selected');
        removeSeatFromList(row, col);
    } else {
        seat.classList.add('selected');
        addSeatToList(row, col);
    }
}

// Function to add seat to the selected list
function addSeatToList(row, col) {
    const seatItem = document.createElement('li');
    seatItem.textContent = `Row: ${parseInt(row) + 1}, Column: ${parseInt(col) + 1}`;
    seatList.appendChild(seatItem);
}

// Function to remove seat from the selected list
function removeSeatFromList(row, col) {
    const listItems = seatList.querySelectorAll('li');
    listItems.forEach(item => {
        if (item.textContent === `Row: ${parseInt(row) + 1}, Column: ${parseInt(col) + 1}`) {
            seatList.removeChild(item);
        }
    });
}
