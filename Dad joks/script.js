const joke = document.querySelector('#joke');
const container = document.getElementById('container');

// creating elements
const headDiv = document.createElement('div');
const h1 = document.createElement('h1');
h1.textContent = 'Dad Joke Generator';
headDiv.appendChild(h1);
container.appendChild(headDiv)

const jokeDiv = document.createElement('div');
const p = document.createElement('p');
p.textContent= "  What's Forrest Gump's computer password? 1forrest1";
p.id= 'joke';
jokeDiv.appendChild(p)
container.appendChild(jokeDiv);

const buttonDiv = document.createElement('div');
const jokeBtn = document.createElement('button');
jokeBtn.textContent= "Get Joke";
jokeBtn.id= 'get-joke';
buttonDiv.appendChild(jokeBtn);
container.appendChild(buttonDiv)


async function generateJoke(){
    const header = {
        headers: { 'X-Api-Key': 'APUFhJBLuaMPjcJswqx9Tw==5oDPPS7wbSQfev4D'}
    }
    const url = `https://api.api-ninjas.com/v1/dadjokes?limit=1`
    let dadjoke = await fetch(url, header);
    dadjoke = await dadjoke.json();
    joke.innerHTML = dadjoke[0].joke;

}
jokeBtn.addEventListener('click', generateJoke);