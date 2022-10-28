const express = require('express')
const app = express()
const port = 3000

// { "slackUsername": String, "backend": Boolean, "age": Integer, "bio": String }

app.get('/', (req, res) => {
    const response = {
        "slackUsername": "lewiclancy",
        "backend": true,
        "age": 22,
        "bio": "Let's build a better world through tech"
    }
    res.status(200).send(response)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
