const express = require('express')
const app = express()
const db = require('../database/mongo.js')
const api = require('./github.js')
const port = process.env.PORT || 3000

app.use(express.static('./client/dist'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/get', async (req, res) => {
  try {
    let results = await db.top25();
    res.status(200).send(results);
  } catch (e) {
    console.log('server get error', e)
    res.status(404).send('server get error')
  }
});

app.post('/add', async (req, res) => {
  try {
    let apiData = await api.getReposByUsername(req.body.search)
    let results = await db.create(apiData)
    res.status(200).send(results)
  } catch (e) {
    console.log('server add error', e)
    res.status(404).send('server add error')
  }
})

app.put('/update', async (req, res) => {
  try {
    let results = await db.update(req.body)
    res.status(200).send(results)
  } catch (e) {
    console.log('server update error', e)
    res.status(404).send('server update error')
  }
})

app.delete('/del', async (req, res) => {
  try {
    let results = await db.del(req.body.repoId)
    res.status(200).send(results)
  } catch (e) {
    console.log('server delete error:', e)
    res.status(404).send('server delete error')
  }
})

app.listen(port, () => {
  console.log(`Listening at port ${port}.`)
})