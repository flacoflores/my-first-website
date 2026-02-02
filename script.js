// Theme toggle
// 1. Get a reference to the button using its ID
var toggleButton = document.getElementById('theme-toggle');

// 2. Add an event listener - a better way to handle clicks than onclick=""
toggleButton.addEventListener('click', function () {

    // 3. Toggle the "light" class on the body element
    //    If body has class "light", this removes it. If not, it adds it.
    document.body.classList.toggle('light');

    // 4. Update the button text based on the current theme
    //    classList.contains() checks if an element has a class
    if (document.body.classList.contains('light')) {
        toggleButton.textContent = 'Dark Mode';
    } else {
        toggleButton.textContent = 'Light Mode';
    }
});

// Goals - rendered from an array
// 1. Define the data as an array of strings
var goals = [
    'Understand HTML structure',
    'Style pages with CSS',
    'Add interactivity with JavaScript',
    'Build a multi-page website',
    'Learn a frontend framework',
    'Create cool websites'
];

// 2. Get the container element where we'll put the goals
var goalsContainer = document.getElementById('goals-container');

// 3. Loop through the array and create HTML for each goal
for (var i = 0; i < goals.length; i++) {
    // createElement makes a new HTML element
    var goalDiv = document.createElement('div');

    // Add the CSS class so it gets styled
    goalDiv.className = 'goal';

    // Set the text content (i + 1 because arrays start at 0)
    goalDiv.textContent = (i + 1) + '. ' + goals[i];

    // Append it to the container on the page
    goalsContainer.appendChild(goalDiv);
}

// Click counter using an event listener
// A variable to keep track of the count
var count = 0;
var clickButton = document.getElementById('click-btn');
var message = document.getElementById('message');

clickButton.addEventListener('click', function () {
    count = count + 1;

    // Different messages based on the count
    if (count === 1) {
        message.textContent = 'You clicked 1 time!';
    } else if (count < 10) {
        message.textContent = 'You clicked ' + count + ' times!';
    } else {
        message.textContent = count + ' clicks! You really like this button.';
    }
});

// Fetch API - load a random quote from an external API
var quoteText = document.getElementById('quote');
var newQuoteButton = document.getElementById('new-quote-btn');

// A function that fetches a random quote
function getQuote() {
    quoteText.textContent = 'Loading quote...';

    // fetch() makes an HTTP request to a URL (like a browser visiting a page)
    // It returns a "Promise" - a value that will arrive in the future
    fetch('https://dummyjson.com/quotes/random')
        // .then() runs when the response arrives
        // response.json() converts the raw response into a JavaScript object
        .then(function (response) {
            return response.json();
        })
        // This .then() runs after the JSON is parsed
        // "data" is now a regular JavaScript object we can use
        .then(function (data) {
            quoteText.textContent = '"' + data.quote + '" — ' + data.author;
        })
        // .catch() runs if something goes wrong (no internet, API down, etc.)
        .catch(function (error) {
            quoteText.textContent = 'Failed to load quote. Try again.';
        });
}

// Load a quote when the page first opens
getQuote();

// Load a new quote when the button is clicked
newQuoteButton.addEventListener('click', getQuote);
