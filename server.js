import express from 'express'
import axios from 'axios'
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config()

const app = express()

app.use(cors())

const port = process.env.PORT || 4000
const CAT_FACT_API = process.env.CAT_FACT_API || 'https://catfact.ninja/fact'

// GET /me endpoint
app.get('/me', async (req, res) => {
    try {
        // fetch a random cat fact
        const { data } = await axios.get(CAT_FACT_API, {timeout: 5000})
        const catFact = data?.fact || 'Cats are mysterious creatures!'

        // build response
        const response = {
            status: 'success',
            user: {
                email: 'abulamartins@gmail.com',
                name: 'Abula Martins Onyemuche',
                stack: 'Node.js/Express'
            },
            timestamp: new Date().toISOString(),
            fact: catFact
        }

        res.status(200).send(response)
    } catch (error) {
        console.error('Error fetching cat fact:', error.message)

        res.status(500).send({
            status: 'error',
            message: 'Unable to fetch cat fact at the moment.',
            timestamp: new Date().toISOString()
        })
    }
})

// start server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
})