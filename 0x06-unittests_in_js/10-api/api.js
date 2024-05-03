const express = require('express')
const bodyParser = require('body-parser')

const app = express()
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Welcome to the payment system');
});

app.get('/cart/:id(\\d+)', (req, res) => {
    res.send(`Payment methods for cart ${req.params.id}`)
})

app.get('/available_payments', (req, res) => {
    res.send({
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      })
})

app.post('/login', (req, res) => {
    if (req.body) {
        const username = req.body.userName
        
        if (username) {
            res.send(`Welcome ${username}`)
        }
    }
    
    res.status = 400
})

app.listen(7865, () => {
    console.log('API available on localhost port 7865');
})