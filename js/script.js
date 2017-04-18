// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// Declaration of global variables
var printedQuotes = []; 				// Array to store the printed quotes
var numberOfQuotes = quotes.length; 	// Store the number of quotes objects in the quotes array

// Generic function to return a random number from 0 to a maximum
function getRandomNumber(max) {
	var min = 0;
	return Math.floor(Math.random() * (max - min)) + min;
}

// function returning a random quote within the quotes array of objects
function getRandomQuote() {
	var quoteId = getRandomNumber(numberOfQuotes); 	// Get a random array position from 0 to the number of quotes
	var selectedQuote = quotes[quoteId];			// Store random quote object 	
	
	return selectedQuote;				
}

// function returning a random rgb string 
function getRandomRGBColor() {
	// Generate values from 0 to 255 for all color components
	var red 	= getRandomNumber(255);		
	var green 	= getRandomNumber(255);
	var blue 	= getRandomNumber(255);
	
	var rgbString = 'rgb(' + red + ', ' + green + ', ' + blue + ')';	// build the rgb string
	
	return rgbString;
}

// function changing the body background color
function changeBackgroundColor(color) {
	document.body.style.background = color;
}

// function building the formatted html string and returning it
function buildQuoteHtmlString(quote) {
	var htmlString = ''; 

	htmlString += '<p class="quote">' + quote.quote + '</p>';
	htmlString += '<p class="source">' + quote.source;
	
	// Look if the quote object has a citation key, if not the html won't be printed
	if(("citation" in quote))
		htmlString += '<span class="citation">' + quote.citation + '</span>';

	// Look if the quote object has a year key, if not the html won't be printed
	if(("year" in quote))
		htmlString += '<span class="year">' + quote.year + '</span>';
	
	htmlString += '</p>';

	return htmlString;
}

// main function printing quote to the page
function printQuote() {

	var output = '';
	var quote;
	var randomColor = getRandomRGBColor();

	// Look if all the quotes have been printed
	if( printedQuotes.length === numberOfQuotes ) {
		printedQuotes = []; // Reset the printed Quote array once they have all been printed at least once
	}
	
	do {
		quote = getRandomQuote(); // generate a random quote until the quote hasn't been shown yet
	} while(printedQuotes.indexOf(quote) > -1)

	printedQuotes.push(quote); // Add the quote to the printedQuotes Array to remember the printed ones

	console.log(quote.quote); // Log the quote to the console in order to see the complete print sequence

	changeBackgroundColor(randomColor); // Change the background color with every new quote

	output = buildQuoteHtmlString(quote); // Build the html code to be output

	document.getElementById('quote-box').innerHTML = output; // output the final html to the selected div on the page

}