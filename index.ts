import express from 'express';
import { paintings } from './db';
import cors from 'cors';

const app = express()

app.use(cors())

app.get('/_ping', (req, res) => {
  res.send('pong')
})

app.get('/paintings', (req, res) => {
    res.json(paintings);
  })

const port = process.env.PORT || 4000

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})