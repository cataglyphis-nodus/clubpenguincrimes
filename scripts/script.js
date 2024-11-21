// Sample data for search
const data = [
    { username: "PenguinFan123", comment: "Remember the epic snowball battles?" },
    { username: "IceWarrior", comment: "I was the leader of the Snow Ninjas!" },
    { username: "ClubPenguinKing", comment: "Puffles were life!" },
];

// Get elements from the DOM
const searchInput = document.getElementById("searchInput");
const childDiv = document.querySelector(".child");
const noteDiv = document.getElementById("note"); // Reference to the note element

// Function to display results or an error message
const displayResults = (results) => {
    // Remove any existing results or error messages
    const oldResults = document.querySelectorAll(".result, .error");
    oldResults.forEach((el) => el.remove());

    // Select the h3 and h4 elements
    const h3Element = document.querySelector("h3");
    const h4Element = document.querySelector("h4");

    if (results.length > 0) {
        // Hide h3 and h4
        if (h3Element) h3Element.style.display = "none";
        if (h4Element) h4Element.style.display = "none";

        // Display each matching result
        results.forEach((result) => {
            const resultDiv = document.createElement("div");
            resultDiv.classList.add("result");
            resultDiv.innerHTML = `${result.username}: ${result.comment}`;
            resultDiv.style.color = "#000000";
            resultDiv.style.backgroundColor = "#FFDE59";
            resultDiv.style.border = 'none';
            resultDiv.style.borderRadius = '50px';
            resultDiv.style.padding = '10px';
            resultDiv.style.fontSize = '25px';
            resultDiv.style.fontStretch = 'Normal';
            resultDiv.style.marginTop = '20%';
            resultDiv.style.marginBottom = '3%';
            resultDiv.style.position = 'fixed';
            childDiv.appendChild(resultDiv);
        });
    } else {
        // Show h3 and h4 again when no results are displayed
        if (h3Element) h3Element.style.display = "block";
        if (h4Element) h4Element.style.display = "block";

        // Display an error message if no matches found
        const errorDiv = document.createElement("div");
        errorDiv.classList.add("error");
        errorDiv.textContent = "No results found. Try searching for a different username.";
        errorDiv.style.color = "red";
        errorDiv.style.marginTop = '20%';
        errorDiv.style.fontSize = '20px';
        errorDiv.style.position = 'absolute';
        childDiv.appendChild(errorDiv);
    }
};

// Event listener for pressing Enter in the search input
searchInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        const query = searchInput.value.trim();

        // Select the h3 and h4 elements
        const h3Element = document.querySelector("h3");
        const h4Element = document.querySelector("h4");

        // Clear existing results when input is empty
        if (query === "") {
            const oldResults = document.querySelectorAll(".result, .error");
            oldResults.forEach((el) => el.remove());

            // Display h3 and h4 again
            if (h3Element) h3Element.style.display = "block";
            if (h4Element) h4Element.style.display = "block";

            return;
        }

        // Filter data based on an exact match for the username
        const results = data.filter((item) => item.username === query);

        // Display the results or an error message
        displayResults(results);

        // If no results, show h3 and h4 again
        if (results.length === 0) {
            if (h3Element) h3Element.style.display = "block";
            if (h4Element) h4Element.style.display = "block";
        }
    }
});


// Get the button and the note container
const button = document.getElementById("button");
const noteContainer = document.getElementById("note-container");

//Add event listner to button
let clickCount = 0;

button.addEventListener('click', () => {
    clickCount++;

    if (clickCount === 1) {
        noteContainer.style.display = 'flex'; // First click: Show the container
    } else if (clickCount === 2) {
        noteContainer.style.display = 'none'; // Second click: Hide the container
        clickCount = 0; // Reset the counter for subsequent toggling
    }
});

