const jokeEl = document.querySelector('#joke');
const jokeBtn = document.querySelector('#jokeBtn');

generateJoke();

async function generateJoke() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  };
  const res = await fetch('https://icanhazdadjoke.com', config);
  const data = await res.json();
  jokeEl.textContent = data.joke;
}
jokeBtn.addEventListener('click', generateJoke);
