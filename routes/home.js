const express = require('express')
const router = express.Router()
const Todo = require('../models/todo')

// Todo 首頁
router.get('/', (req, res) => {
  Todo.find()
    .sort({ name: 'asc' })
    .lean()
    .exec((err, todos) => { // 把 Todo model 所有的資料都抓回來
      if (err) return console.error(err)
      return res.render('index', { todos: todos }) // 將資料傳給 index 樣板
    })
})

module.exports = router
