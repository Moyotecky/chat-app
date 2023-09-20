const express = require('express');
const cors = require('cors');
const { default: axios } = require('axios');

const app = express()
app.use(express.json())
app.use(cors({origin: true}))

app.post('/authenticate', async(req, res) => {
    const { username } = req.body
    try{
        const response = await axios.put(
            'https://api.chatengine.io/users',
            {
                username,
                secret: username,
                first_name: username
            },
            {
                headers: {"private-key": "ac6c82df-a576-4692-8d47-aa75b1b5aa22"}
            }
        )
        return res.status(response.status).json(response.data)
    }catch (e){
        return res.status(e.response.status).json(e.response.data)
    }
    
})
const port = process.env.PORT || 3000
app.listen(port, () =>{console.log(`listening on ${port}`)})

