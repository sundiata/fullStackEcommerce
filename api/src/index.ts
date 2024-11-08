import express, { json, urlencoded }  from 'express'
import productsRouter from './routes/products/index'   

const port = 3000

const app = express()
app.use(urlencoded({ extended: true }))
app.use(json())

app.get('/', (req, res) => {
  res.send('Hello Worldfgf!')
})


app.use('/products', productsRouter)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})