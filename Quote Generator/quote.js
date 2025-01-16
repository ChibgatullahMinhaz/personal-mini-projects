// creating div
const container = document.getElementById('container');
const header = document.createElement('div');
const quoteDiv = document.createElement('div');
const authorDiv = document.createElement('div');
const buttonDiv = document.createElement('div');

// header child elements
const h1 = document.createElement('h1');
header.className = 'header';
h1.textContent = 'Random Quote Generator';
header.appendChild(h1)

// quotes child elements
const quoteP = document.createElement('p');
quoteDiv.className = 'quote';
quoteP.textContent = "if you have a dream, don't just sit there. Gather courage to believe that you can succeed and leave no stone unturned to make it a reality.";
quoteP.id = 'quote';
quoteDiv.appendChild(quoteP)
 
// Auth child elements
authorDiv.className = 'author';
const authorP = document.createElement('p');
authorP.id = 'author';
authorP.textContent = 'Dr. Roopam Sharma';
authorDiv.appendChild(authorP)
 
// buttons childs
const btn = document.createElement('button');
btn.id = 'new_quotes';
btn.textContent = 'new_quotes';
buttonDiv.appendChild(btn)

// Append elements to the container
container.appendChild(header);
container.appendChild(quoteDiv);
container.appendChild(authorDiv);
container.appendChild(buttonDiv);

// Append the container to the body
document.body.appendChild(container);

// fetch quotes
const getQuote = async () => {
    try {
        const response = await fetch('https://dummyjson.com/quotes');
        const data = await response.json();
        const randomIndex = Math.floor(Math.random() * data.quotes.length);
        quoteP.textContent = data.quotes[randomIndex].quote;
        authorP.textContent = '-' + " "+ data.quotes[randomIndex].author;

    } catch (error) {
        alert.error('Error fetching quotes:', error);
    }
};
// Fetch a quote when the page loads
getQuote();

// event btn
btn.addEventListener('click',getQuote)


// resset styleing  
container.style.border = '1px solid red';
container.style.padding = '1rem';
authorP.style.color = 'red';
document.body.style.backgroundColor = 'black';
document.body.style.display = 'flex';
document.body.style.justifyContent = 'center';
document.body.style.alignItems = 'center';
document.body.style.height = '100vh';

// Create and style container
container.style.backgroundColor = 'white';
container.style.width = '500px';
container.style.textAlign = 'center';
container.style.borderRadius = '10px';
container.style.padding = '25px';
container.style.border = 'none';
container.style.boxShadow = '0 0 10px 0 yellow';
container.style.position = 'relative';

// Create and style header
header.style.fontSize = '20px';
header.style.color = 'white';
header.style.position = 'absolute';
header.style.top = '-40%';
header.style.left = '10%';

// Create and style quote
quoteP.style.fontSize = '25px';
quoteP.style.marginBottom = '20px';
quoteP.style.color = 'green';

// Create and style author
authorP.style.fontSize = '20px';
authorP.style.marginBottom = '20px';
authorP.style.color = 'orang';

// Create and style button
btn.style.backgroundColor = 'yellow';
btn.style.border = 'none';
btn.style.padding = '10px 20px';
btn.style.borderRadius = '5px';
btn.style.color = 'black';
btn.style.fontWeight = 'bolder'
btn.style.fontSize = '20px';
btn.style.cursor = 'pointer';
btn.style.outline = 'none';