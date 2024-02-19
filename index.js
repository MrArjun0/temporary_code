require('dotenv').config()

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('hiteshChaudhari!')
})

app.get('/login', (req, res) => {
    res.send('<h1>Please login at chai aur code with Arjx</h1>')
})

app.get('/youtube', (req, res) => {
    res.send( '<h2> Code with Arjx </h2> ')
})
app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})

console.log(process.env);



/*to run it in cmd enter the code npm run start
now your small server has been ready to serve the code to you

now check the response goto the browser and search for localhost: 3000 (port no. your preferred choice )

for the other you need to change  it with /twitter (in my case )

*/