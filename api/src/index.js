const express = require('express')
const axios = require('axios');
const cors = require('cors')

const app = express();
const PORT = process.env.PORT || 4000;

// Middlewares
app.use(express.json());
app.use(cors({
    origin: '*'
}))

// Rutas
app.get('/shopify', async (req, res) => {
    try {
        const data = await axios.get('https://celes-app.myshopify.com/admin/api/2023-04/products.json', {
        headers: {
            'X-Shopify-Access-Token': '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'
        }
    })

    res.json(data.data)
    } catch (error) {
        console.log(error)
    }
})

// Inicio de servidor
app.listen(PORT, () => {
    console.log(`Servidor en el puerto ${PORT}`)
})