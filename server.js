const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config()
const stripe = require('stripe')(
  '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'
)
const port = process.env.PORT || 4000
const app = express()
app.use(cors())
app.use(express.static('public'))
app.use(express.json())
//

app.get('/', (req, res) => {
  res.send('MahaARTwork Server LIVE')
})
app.listen(port, console.log(`MahARTwork Server LIVE on port ${port}`))
//

// 1. POST to /checkout -------------------------------------------
app.post('/checkout', async (req, res) => {
  //
  console.log('This is the req.body', req.body)
  //

  // 2. Create lineItems from req.body -----------------------------
  const items = req.bodyitems
  let lineItems = []
  //
  items.forEach(item => {
    lineItems.push({
      price: item.id,
      quanity: item.quanity,
    })
  })

  // 3. Create Stripe session ---------------------------------------
  const session = await stripe.checkout.sessions.create({
    line_items: lineItems,
    mode: 'payment',
    success_url: 'http://localhost:5173/success',
    cancel_url: 'http://localhost:5173/cancel',
  })

  // 4. Once Session created, access the 'url'
  res.send(
    JSON.stringify({
      url: session.url,
    })
  )
})
//---------------------------------------------------------------
