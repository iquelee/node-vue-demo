module.exports = app => {
  const express = require('express')
  const router = express.Router()
  const Category = require('../../models/Category')
  const AdminUser = require('../../models/AdminUser')

  const jwt = require('jsonwebtoken')

  router.post('/categories', async (req, res) => {
    const model = await Category.create(req.body)
    res.send(model)
  })

  router.put('/categories/:id', async (req, res) => {
    const model = await Category.findByIdAndUpdate(req.params.id, req.body)
    res.send(model)
  })

  router.delete('/categories/:id', async (req, res) => {
    await Category.findByIdAndDelete(req.params.id, req.body)
    res.send({
      success: true
    })
  })

  router.get('/categories', async (req, res) => {
    const items = await Category.find().limit(10)
    res.send(items)
  })

  router.get('/categories/:id', async (req, res) => {
    const model = await Category.findById(req.params.id)
    res.send(model)
  })

  router.post('/admin_users', async (req, res) => {
    const model = await AdminUser.create(req.body)
    res.send(model)
  })

  router.put('/admin_users/:id', async (req, res) => {
    const model = await AdminUser.findByIdAndUpdate(req.params.id, req.body)
    res.send(model)
  })

  router.delete('/admin_users/:id', async (req, res) => {
    await AdminUser.findByIdAndDelete(req.params.id, req.body)
    res.send({
      success: true
    })
  })

  router.get('/admin_users', async (req, res) => {
    const items = await AdminUser.find().limit(10)
    res.send(items)
  })

  router.get('/admin_users/:id', async (req, res) => {
    const model = await AdminUser.findById(req.params.id)
    res.send(model)
  })

  app.use('/admin/api',router)

  app.post('/admin/api/login', async (req, res) => {
    const { username, password } = req.body
    // 1.根据用户名找用户
    const user =await AdminUser.findOne({
      username: username
    }).select('+password')
    if (!user) {
      return res.status(422).send({
        message: '用户不存在'
      })
    }
    // 2.校验密码
    const isValid = require('bcryptjs').compareSync(password, user.password)
    if (!isValid) {
      return res.status(422).send({
        message: '密码错误'
      })
    }
    // 3.返回token
    const token = jwt.sign({ id: user._id}, app.get('secret'))
    res.send({token})
  })
}
