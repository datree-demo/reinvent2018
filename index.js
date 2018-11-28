var Koa = require('koa')
var Router = require('koa-router')

var app = new Koa()
var router = new Router()

router.get('/health', ctx => {
  ctx.status = 200
  ctx.body = 'up'
})

router.get('/', ctx => {
  ctx.body = 're:invent 2018!'
})

app.use(router.routes()).use(router.allowedMethods())

console.log('Starting Koa server on port 8000')
app.listen(8000)
