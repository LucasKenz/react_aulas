require('dotenv').config()
const express = require('express')
const app = express()
const axios = require('axios')
const cors = require('cors')

app.get('/serach', async (req,res) => {
    // req de request engloba dados de requsição
    // res objeto que permite operar em cima de dados a responder para clientes
    const pexelsClient = axios.create({
        baseURL: 'https://api.pexels.com/v1',
        headres: {
            Autorization: process.env.PEXELS_API_KEY
        }
    })
    const result = await pexelsClient.get('/serach', {
        params: {
            query: req.query.query
        }
    })
    // console.log(result.data) // query de fotos, dentro de data??, no front tem result.data.photos, um objeto extra photos
    // como manter no front
    console.log(result.data.photos)
        res.json({photos: result.data.photos})
    query.end
})

const port = 3000
app.listen(port, () => console.log(`back ok porta ${port}`))


// 'cyJx3dHz4w3qiLol4wu7JHAHTWPBMldssXk4WDEuQCHahECXood48gJk'