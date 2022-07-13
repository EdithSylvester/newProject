//////////////
// CONSTANTS
//////////////
const quotes = [
'All great changes are preceded by chaos. Deepak Chopra',

'It is never too late to be what you might have been. George Elliot',

'If you’re going through hell, keep going. Winston Churchill',

'Getting fired is nature’s way of telling you that you had the wrong job in the first place. Hal Lancaster',

'Keep away from people who try to belittle your ambitions. Small people always do that, but the really great make you feel that you, too, can become great. Mark Twain',

'Make sure your own worst enemy doesn’t live between your own two ears. Laird Hamilton',

'If you want to achieve greatness, stop asking for permission. Eddie Colla',

'Act as if what you do makes a difference. It does. William James',

'Man cannot discover new oceans unless he has the courage to lose sight of the shore. Andre Gide',

'Don’t put off for tomorrow what you can do today because if you enjoy it today, you can do it again tomorrow. James A. Michener',

'In a moment of decision, the best thing you can do is the right thing to do, the next best thing is the wrong thing, and the worst thing you can do is nothing.   Theodore Roosevelt',

'The least productive people are usually the ones who are most in favor of holding meetings. Thomas Sowell',

'Courage is only an accumulation of small steps. George Konrad',

'Go for a walk. One step at a time and you are already moving forward.',

'Look up, you are worthy.',

'The things you are passionate about are not random, they are your calling. Fabienne Fredrickson',

'When you focus on the good, the good gets better',

'Work hard in silence; let your success make noise.',

'Strive for progress not perfection.'
];

//////////////
// FUNCTIONS
//////////////
function getRandomQuote() {
    return quotes [Math.floor(Math.random() * quotes.length)];
}

console.log (getRandomQuote()); 