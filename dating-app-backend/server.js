import express from 'express'
import mongoose from 'mongoose'
import Cards from './dbCards.js'
import Cors from 'cors'
//App Config
const app = express()
const port = process.env.PORT || 8001

const connection_url = 'mongodb+srv://devsflux3:DuDO7bdHw4x0wfWa@cluster0.8tmsmn2.mongodb.net/?retryWrites=true&w=majority'

//Middleware
app.use(express.json())
app.use(Cors())

//DB Config
mongoose.connect(connection_url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

//API Endpoints
app.get("/", (req, res) => res.status(200).send("Hello TheWebDev"))
app.post('/dating/cards', async (req, res) => {
        const dbCard = req.body
        await Cards.create(dbCard, (err, data) => {
                if(err) {
                    res.status(500).send(err)
                } else {
                    res.status(201).send(data)
                }
            })
        })
        app.get('/dating/cards',async  (req, res) => {
            try{
                const data = await Cards.find({})
                if(data){
                    console.debug(data)
                    res.status(200).send(data)
                }
            }
            catch(err){
                res.status(500).send(err)
            }
            
        })
//Listener
app.listen(port, () => console.log(`Listening on localhost: ${port}`))