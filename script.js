const ethicalFashionApp = {};

// collect user input 

const searchInput = document.querySelector('.search');
searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);


// display matches
function displayMatches() {
    console.log(this.value);
}

// compare user input to data array 
    // find matches function 
        // takes in wordToMatch and data array
        //returns a filtered data array
            // 
            // if wordToMatch matches brand name in data array



    // display css styles (background color) depending on company rating (e.g. A+ rating = green background)

//stretch goals
    // move data to DB and connect 
    // show results as user types 