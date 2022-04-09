const express = require('express')
const app = express()

// 设置token密钥,严格意义上密钥应创建一个.key文件，放入环境变量中，在这里引用
app.set('secret', 'er324dsgijert412fd`dfsdf')

app.use(require('cors')())
app.use(express.json())

require('./plugins/db')(app)
require('./routes/admin/index')(app)

app.listen(3000, () => {
  console.log('http://localhost:3000')
})