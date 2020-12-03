const express = require('express')
const chalk = require('chalk')
const { MongoClient } = require('mongodb')
const routeApp = require('./src/routes')
const initDB = require('./src/init-db')

const dbName = 'egor-master'
const app = express()
const port = 3001

async function init (){
  const client = await MongoClient.connect('mongodb://localhost:27017', { useUnifiedTopology: true })
  const db = client.db(dbName)
  console.log(chalk.green(`Success connected to db ${dbName}`))
  
  await initDB(db)
  
  routeApp(app, db)

  app.listen(port, () => console.log(chalk.green(`Success app listening at http://localhost:${port}`)))
}

init()
