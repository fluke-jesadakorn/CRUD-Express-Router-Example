const express = require('express')
const app = express()
const router = express.Router()
const port = 5000

router.get('/', async (req,res,next) => {
    res.send("Fuckyou")
})
router.get('/:id', async (req,res,next) => {
    res.send(res)
})
router.post('/', async(req,res,next) => {
    res.send("post")
})
router.patch('/:id', async (req,res,next) => {
    res.send(res)
})
router.delete('/:id', async (req,res,next) => {
    res.send(res)
})

app.use('/api', router)

app.listen(port,()=>{
    console.log(`listen on Port : ${port}`)
})

module.exports = router