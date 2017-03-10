const express = require('express')
const app = express()

app.use(express.static('./public'))

var movies = [
  {title: 'Star Wars: A New Hope', year: 1977},
  {title: 'Star Wars: Empire Strikes Back', year: 1980},
  {title: 'Star Wars: Return of the Jedi', year: 1983},
  {title: 'Harry Potter: The Sorcerors Stone', year: 2001},
  {title: 'Bladerunner', year: 1982}
];

app.get('/api/movies', (req, res) => {
  res.json(movies)
})

app.listen(3000)
