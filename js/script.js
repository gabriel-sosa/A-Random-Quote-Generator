// FSJS - Random Quote Generator

// movie quotes array, each quote object has a quote property, a source(the name of the film) and a release date or a fun fact about the quote

var quotes = [
	{quote: 'Frankly, my dear, I don\'t give a damn.', 
	source: 'Gone With the Wind',
	citation: 'movie', 
	year: 1939},
	{quote: 'I\'m going to make him an offer he can\'t refuse.', 
	source: 'The Godfather',
	citation: 'movie',
	year: 1954,  
	funFact: 'This line makes it into each Godfather film in some way or another.'},
	{quote: 'You don\'t understand! I coulda had class. I coulda been a contender. I could\'ve been somebody, instead of a bum, which is what I am.', 
	source: 'On the Waterfront',
	citation: 'movie',  
	year: 1954},
	{quote: 'Toto, I\'ve got a feeling we\'re not in Kansas anymore.', 
	source: ' The Wizard of Oz',
	citation: 'movie',  
	funFact: 'As one of the most famous movie quotes in film history, this line has been parodied by many different movies and television shows.'},
	{quote: 'Here\'s looking at you, kid.', 
	source: 'Casablanca',
	citation: 'movie',  
	year: 1942},
	{quote: 'Go ahead, make my day.', 
	source: 'Sudden Impact',
	citation: 'movie',  
	year: 1983}
];

// function will receive a low number and a high number, then returns a number between the low number and the high number - 1

function randomNumber (lowerNumber, higherNumber) {
	return Math.floor(Math.random() * (higherNumber - lowerNumber)) + lowerNumber;
}

// function receives an array and returns a random object from said array

function getRandomQuote (arr) {
	return arr[randomNumber(0, arr.length)];
}

// function displays a selected quote from the array of quotes

function printQuote () {
	var quoteObject = getRandomQuote(quotes),   									//selects a ramdom quote from the array
		result = '';																//declares an empty string, here will be stored the html string
		result += '<p class="quote">' + quoteObject.quote + '</p>' +				//starts to fill the array with the quote and the source
				  '<p class="source">' + quoteObject.source +
				  	'<span class="citation">' + quoteObject.citation + '</span>';
		if (quoteObject.year !== undefined)											//if the quote has a year stored in the object, it will be displayed
			result += '<span class="year">' + quoteObject.year + '</span>';
		result += '</p>';
		if (quoteObject.funFact !== undefined) 										//if the quote has a fact stored in the object, it will be displayed
			result += '<p>Fun Fact: ' + quoteObject.funFact + '</p>';
		document.getElementById('quote-box').innerHTML = result;					//changes the html file to show the quote in the web page
		//this will chage the background color each time this function is called
		document.querySelector('body').style.backgroundColor = 'rgb(' + randomNumber(0,256) + ', ' + randomNumber(0,256) + ', ' + randomNumber(0,256) + ')';
}

window.setInterval(printQuote, 30000);												//calls the printQuote function each 30s

// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);