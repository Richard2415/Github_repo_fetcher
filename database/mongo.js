const mongoose = require('mongoose')

require('dotenv').config()

// const uri = 'mongodb+srv://repofetcher:repofetcher123@cluster0.qcdnl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(process.env.MONGO_DB, { useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true })

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function () {
  console.log('Mongoose connected.')
})

const repoSchema = new mongoose.Schema({
  repoId: String,
  repoName: String,
  owner: String,
  ownerUrl: String,
  htmlUrl: String,
  description: String,
  updated: String,
  note: String
})

const Repo = mongoose.model('Repo', repoSchema)

let top25 = async () => {
  try {
    let results = await Repo.find({}).sort({ updated: -1 }).limit(25)
    return results
  } catch (e) {
    console.log('db get error:', e)
  }
}

let create = async (apiArray) => {
  try {
    let arrayOfPromises = await apiArray.map(repo => Repo.findOneAndUpdate({ repoId: repo.repoId }, repo, { upsert: true }))
    await Promise.all(arrayOfPromises)
    return apiArray
  } catch (e) {
    console.log('db create error:', e)
  }
}

let update = async (edit) => {
  try {
    await Repo.findOneAndUpdate({ repoId: edit.repoId }, { note: edit.note })
    let results = await top25()
    return results
  } catch (e) {
    console.log('db update error:', e)
  }
}

let del = async (id) => {
  try {
    await Repo.deleteOne({ repoId: id })
    let results = await top25()
    return results
  } catch (e) {
    console.log('db del error:', e)
  }
}

module.exports = {
  top25,
  create,
  update,
  del,
}