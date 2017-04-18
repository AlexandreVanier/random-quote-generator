// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

function getRandomId(max) {
	
	var min = 0;
	return Math.floor(Math.random() * (max - min)) + min;

}

function getRandomQuote() {

	var numberOfQuotes = quotes.length;
	var quoteId = getRandomId(numberOfQuotes);
	var selectedQuote = quotes[quoteId];
	
	return selectedQuote;

}

function printQuote(){

	var htmlString = '';
	var quote = getRandomQuote();

	htmlString += '<p class="quote">' + quote.quote + '</p>';
	htmlString += '<p class="source">' + quote.source;
	
	if(("citation" in quote))
		htmlString += '<span class="citation">' + quote.citation + '</span>';
	if(("year" in quote))
		htmlString += '<span class="year">' + quote.year + '</span>';
	
	htmlString += '</p>';

	document.getElementById('quote-box').innerHTML = htmlString;

}