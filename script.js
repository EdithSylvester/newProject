//////////////
// CONSTANTS
//////////////
const quotes = [
    'If you’re going through hell, keep going. —Winston Churchill', 
    'When you focus on the good, the good gets better',
    'Strive for progress not perfection.'
];

//////////////
// FUNCTIONS
//////////////
function getRandomQuote() {
    return quotes [Math.floor(Math.random() * quotes.length)];
}

console.log (getRandomQuote()); 