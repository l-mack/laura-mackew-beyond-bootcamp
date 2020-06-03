
const ethicalFashionApp = {};

const companies = [{
    "name": "Abercrombie & Fitch",
    "environmental": "D",
    "labor": "F",
    "auditing": "D-",
    "transparency": "D-",
    "policies": "B-",
    "overall": "D"
},
{
    "name": "adidas",
    "environmental": "A",
    "labor": "B-",
    "auditing": "B+",
    "transparency": "A-",
    "policies": "A+",
    "overall": "A"
},
{
    "name": "Bardot",
    "environmental": "F",
    "labor": "F",
    "auditing": "D-",
    "transparency": "C-",
    "policies": "A-",
    "overall": "D"
},
{
    "name": "Ben Sherman",
    "environmental": "F",
    "labor": "D-",
    "auditing": "C-",
    "transparency": "C-",
    "policies": "A-",
    "overall": "D"
},
{
    "name": "Coles",
    "environmental": "F",
    "labor": "F",
    "auditing": "D",
    "transparency": "C+",
    "policies": "A-",
    "overall": "D"
},
{
    "name": "Forever 21",
    "environmental": "D",
    "labor": "F",
    "auditing": "F",
    "transparency": "F",
    "policies": "C",
    "overall": "D"
},
{
    "name": "Fruit of the Loom",
    "environmental": "D-",
    "labor": "D-",
    "auditing": "D",
    "transparency": "C",
    "policies": "A",
    "overall": "D"
},
{
    "name": "Gap",
    "environmental": "A-",
    "labor": "D+",
    "auditing": "C+",
    "transparency": "A",
    "policies": "A+",
    "overall": "B"
},
{
    "name": "H&M",
    "environmental": "A+",
    "labor": "C-",
    "auditing": "B-",
    "transparency": "A-",
    "policies": "A+",
    "overall": "B"
},
{
    "name": "Hugo Boss",
    "environmental": "B",
    "labor": "D",
    "auditing": "C-",
    "transparency": "B+",
    "policies": "A+",
    "overall": "C"
},
{
    "name": "Jeanswest",
    "environmental": "A",
    "labor": "C",
    "auditing": "B+",
    "transparency": "A-",
    "policies": "A+",
    "overall": "B"
},
{
    "name": "Lacoste",
    "environmental": "D+",
    "labor": "F",
    "auditing": "D+",
    "transparency": "C-",
    "policies": "A+",
    "overall": "C"
},
{
    "name": "Levis",
    "environmental": "A+",
    "labor": "D-",
    "auditing": "B-",
    "transparency": "A-",
    "policies": "A+",
    "overall": "B"
},
{
    "name": "Lululemon",
    "environmental": "A-",
    "labor": "B-",
    "auditing": "A+",
    "transparency": "A",
    "policies": "A+",
    "overall": "A"
},
{
    "name": "Marks and Spencer",
    "environmental": "A+",
    "labor": "D+",
    "auditing": "C",
    "transparency": "A+",
    "policies": "A+",
    "overall": "B"
},
{
    "name": "New Balance",
    "environmental": "B+",
    "labor": "D",
    "auditing": "C+",
    "transparency": "A-",
    "policies": "A+",
    "overall": "B"
},
{
    "name": "Nike",
    "environmental": "A+",
    "labor": "D-",
    "auditing": "C",
    "transparency": "A-",
    "policies": "A+",
    "overall": "B"
},
{
    "name": "Puma",
    "environmental": "A",
    "labor": "D+",
    "auditing": "B",
    "transparency": "A-",
    "policies": "A+",
    "overall": "B"
},
{
    "name": "Ralph Lauren",
    "environmental": "D+",
    "labor": "F",
    "auditing": "D+",
    "transparency": "B-",
    "policies": "A+",
    "overall": "C"
},
{
    "name": "Rodd & Gunn",
    "environmental": "A-",
    "labor": "B-",
    "auditing": "B-",
    "transparency": "A",
    "policies": "A+",
    "overall": "A"
},
{
    "name": "Target",
    "environmental": "C-",
    "labor": "C-",
    "auditing": "B",
    "transparency": "A-",
    "policies": "A+",
    "overall": "B"
}
]

// get data

// collect user input 

const searchInput = document.querySelector('.search');
const matches = document.querySelector('.matches');
const submit = document.querySelector('.submit');
const results1 = document.querySelector('.resultsTextBox');
const results2 = document.querySelector('.resultsFlex');


searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);
submit.addEventListener('click', function (e){
    e.preventDefault();
    displayResult();
    changeBackground();
});



// display matches as user types
function displayMatches() {
    const matchArray = findMatches(this.value, companies);
    const html = matchArray.map(company =>{
        const  regex = new RegExp(this.value, 'gi');
        const companyName = company.name.replace(regex, `<span class = "highlight">${this.value}</span>`);
        return `
        <li>${companyName}</li>
        `
    }).join('')
    matches.innerHTML = html;
}

//display final search result
function displayResult() {
    const resultArray = findMatches(searchInput.value, companies);
    const html1 = resultArray.map((company, index, array) =>{
        if(array.length < 2){
            return `
                <h3>${company.name}</h3>
                <p class = "overall">${company.overall}</p>`
        }
    }).join('')
    results1.innerHTML = html1;

    const html2 = resultArray.map((company, index, array) => {
        if (array.length < 2){
            return `
            <li class="grades">ethics grades</li>
                <li>environmental: ${company.environmental}</li>
                <li>labor: ${company.labor}</li>
                <li>auditing: ${company.auditing}</li>
                <li>transparency: ${company.transparency}</li>
                <li>policies: ${company.policies}</li>
            </ul >
            `
        }
    }).join('')
    results2.innerHTML = html2
}

// compare user input to data array 
    // find matches function 
    function findMatches (wordToMatch, companies){
        return companies.filter(company =>{
            // does name match user input
            const regex = new RegExp (wordToMatch, 'gi');
            return company.name.match(regex)
        });
    }

    //change background color according to user selection
    function changeBackground (){
        const resultArray = findMatches(searchInput.value, companies);
        const newClass = resultArray.map(company =>{
            return `${company.overall}`
        })
        results1.className = `resultsTextBox ${newClass}`;
    }




    //handle errors 
        //when user enters a not found search


//stretch goals
    // move data to DB and connect 


