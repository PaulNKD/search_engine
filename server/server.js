const express = require('express')
const app = express()
const cors = require('cors');

results = [
    'https://en.wikipedia.org/wiki/JavaScript',
    'https://en.wikipedia.org/wiki/Python_(programming_language)',
    'https://en.wikipedia.org/wiki/Java_(programming_language)',
    'https://en.wikipedia.org/wiki/Ruby_(programming_language)',
    'https://en.wikipedia.org/wiki/C%2B%2B',
    'https://en.wikipedia.org/wiki/PHP',
    'https://en.wikipedia.org/wiki/Swift_(programming_language)',
    'https://en.wikipedia.org/wiki/C_Sharp_(programming_language)',
    'https://en.wikipedia.org/wiki/Elixir_(programming_language)',
    'https://en.wikipedia.org/wiki/Modula-2'
]

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function getRandomResult () {
  let randomIndex = randomIntFromInterval(0, results.length - 1);
  return results[randomIndex];
}

app.use(cors());

app.get('/', (req, res) => res.send('Hello World!'))


app.get('/results', (req, res) => res.send(results))

  const randomResult = getRandomResult();
  res.send(randomResult);
})

app.get('/quotes/:id', (req, res) => {
  if(req.params.id > results.length || req.params.id <= 0) {
    const error = {
      error: "Choose a number between 1 and " + results.length
    }
    res.send(error);
    return;
  }

  res.send(results[req.params.id - 1])
})



module.exports = app;
