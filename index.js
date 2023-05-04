const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const cors = require('cors')


const chef = require('./data/chefData.json')
const recipes = require('./data/recipes.json')
const clients = require('./data/happyClients.json')



app.use(cors())


// to get all recipe /all-recipe
// to get chef /chef

app.get('/', (req, res) => {
  res.send( 'Life is beautiful')
})

app.get('/all-recipe', (req, res) => {
  res.send(recipes)
})

app.get('/chef',(req, res)=>{
  res.send(chef)
})


app.get('/clients',(req, res)=>{
  res.send(clients)
})

app.get('/chef/:id',(req, res)=>{
  const id = req.params.id;
  const searchedRecipes = recipes.filter(n => n.chefId === id);
  res.send(searchedRecipes)
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})