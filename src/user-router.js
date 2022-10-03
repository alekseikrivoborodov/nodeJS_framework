const Router = require('../framework/Router')
const router = new Router()
const contoller = require('./user-contoller')


router.get('/users', contoller.getUsers)
router.post('/users', contoller.createUser)
router.delete('/users', contoller.deleteUser)
router.put('/users', contoller.putUser)

module.exports = router