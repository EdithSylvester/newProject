//////////////
// CONSTANTS
//////////////
const motivationQuotes = [
'Success is not final; failure is not fatal: It is the courage to continue that counts. Winston S. Churchill',
'Don’t let yesterday take up too much of today. — Will Rogers',
`Do not let someone else's opinion of you become your reality. Les Brown`,
'Go for a walk. One step at a time and you are already moving forward.',
'Feeling too much is a hell of a lot better than feeling nothing. Nora Roberts',
'There is no better way to grow as a person than to do something you hate every day. David Goggins',
'What we fear doing most is usually what we most need to do. Tim Ferriss',
'Intelligence consists in ignoring things that are irrelevant. Nassim Nicholas Taleb'
];

const jokes = [
'Hear about the new restaurant called Karma? - There’s no menu: You get what you deserve.',
'How does the ocean say hi? - It waves!',
'What do you call two bananas on the floor? - Slippers.',
'Why can’t you ever trust atoms? - Because they make up everything.',
'What did the limestone say to the geologist? - Don’t take me for granite!',
'What do you call a tired bull? - A bulldozer.',
'Why was the baby strawberry crying? - Because their parents were in a jam.',
'What gets wetter the more it dries? - A towel.',
];

//////////////
// FUNCTIONS
//////////////
function getRandomMotivation() {
    return motivationQuotes [Math.floor(Math.random() * motivationQuotes.length)];
};

function getRandomJoke() {
    return jokes [Math.floor(Math.random() * jokes.length)];
};


console.log ("\n" + getRandomMotivation() + "\n");
console.log (`\n${getRandomJoke()}\n`);



