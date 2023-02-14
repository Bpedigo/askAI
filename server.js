const askDavinic = require(`./src/openAI`)
const express = require('express')
const app = express()
app.use(express.urlencoded({ extended: false }))
app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('index')
})

app.post('/', (req, res) => {
    console.log(`[post] => ${req.body.q1}`)
 
    askDavinic(req.body.q1).then((response) => {
        let answer = response.data.choices[0].text
        res.render('index', { response: `${answer}` })
    }).catch(err => {
       
        console.log(err)
        let message = 'opps there was a error ' + err + ' try your request again!'
        res.render('index', {response:`${err.message}`})
    })

})

app.listen(3000,()=>{
    console.log('The app is running on localhost:3000 || 127.0.0.1:3000')
})