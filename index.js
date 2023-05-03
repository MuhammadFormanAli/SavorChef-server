const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const cors = require('cors')


const chef = require('./data/chefData.json')
const recipes = require('./data/recipes.json')



app.use(cors())

app.get('/', (req, res) => {
  res.send( 'Life is beautiful')
})

app.get('/chef',(req, res)=>{
  res.send(chef)
})

app.get('/chef/:id',(req, res)=>{
  const id = req.params.id;
  const searchedRecipes = recipes.filter(n => n.chefId === id);
  res.send(searchedRecipes)
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})