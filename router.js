const express = require('express')
const app = express()

app.route('/api')
.get('/',async (req,res) => {
    res.send(res)
})
.get('/:id',async (req,res) => {
    res.send(res)
})
.post('/:id',async(req,res) => {
    res.send(res)
})
.patch('/',async (req,res) => {
    res.send(res)
})
.delete('/:id',async (req,res) => {
    res.send(res)
})