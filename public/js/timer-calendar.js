let timer;
let isRunning = false;
let seconds = 0;

document.addEventListener("DOMContentLoaded", function () {
    document.querySelector('.start-stop-button').textContent = 'Start'; // Initialize with Start button
});

function startStopTimer() {
    const button = document.querySelector('.start-stop-button');
    if (isRunning) {
        clearInterval(timer);
        isRunning = false;
        button.textContent = 'Start'; // Show Start button when stopped
    } else {
        timer = setInterval(() => {
            seconds++;
            document.getElementById('timer').textContent = formatTime(seconds);
        }, 1000);
        isRunning = true;
        button.textContent = 'Stop'; // Show Stop button when running
    }
}

function resetTimer() {
    clearInterval(timer); // Stop the timer
    isRunning = false;    // Ensure the timer is stopped
    seconds = 0;          // Reset the seconds counter
    document.getElementById('timer').textContent = formatTime(seconds); // Reset the displayed time
    document.querySelector('.start-stop-button').textContent = 'Start'; // Reset to Start button
}

function formatTime(seconds) {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

// Calendar generation (simple placeholder for now)
// Calendar generation (simple placeholder for now)
function generateCalendar() {
    const calendarView = document.getElementById('calendar-view');
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();
    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    // Create the calendar header
    let calendarHTML = `<h3>${monthNames[currentMonth]} ${currentYear}</h3>`;
    calendarHTML += `<table><tr>`;

    // Add days of the week header
    daysOfWeek.forEach(day => calendarHTML += `<th>${day}</th>`);
    calendarHTML += `</tr><tr>`;

    // Fill the first row with empty cells until the first day of the month
    for (let i = 0; i < firstDay; i++) {
        calendarHTML += `<td></td>`;
    }

    // Fill the calendar with day numbers
    for (let day = 1; day <= daysInMonth; day++) {
        // Start a new row for each week
        if ((day + firstDay - 1) % 7 === 0 && day !== 1) {
            calendarHTML += `</tr><tr>`;
        }
        calendarHTML += `<td>${day}</td>`;
    }

    // Close the last row and the table
    calendarHTML += `</tr></table>`;
    calendarView.innerHTML = calendarHTML;
}

// Handle month changes (previous/next month)
function changeMonth(delta) {
    currentMonth += delta;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    } else if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    generateCalendar();
}

// Handle year changes (previous/next year)
function changeYear(delta) {
    currentYear += delta;
    generateCalendar();
}

// Calendar view switcher (monthly, weekly, daily) 
function changeView() {
    const currentView = document.getElementById('view-select').value;
    // Logic to handle different views, for now, we only focus on the monthly view
    if (currentView === 'monthly') {
        generateCalendar(); // default monthly view
    } else if (currentView === 'weekly') {
        // Logic for weekly view
        alert('Weekly view is under construction!');
    } else if (currentView === 'daily') {
        // Logic for daily view
        alert('Daily view is under construction!');
    }
}

// Initialize the calendar when the page loads
document.addEventListener("DOMContentLoaded", generateCalendar);

