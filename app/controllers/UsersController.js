
const User = require('../models/User')

//local host:4000/users/registration
module.exports.register = (req, res) => {
    const body = req.body
    const user = new User(body)
    user.save()
        .then((user) => {
            const { _id, username, email } = user
            res.json({ _id, username, email })
        })

        .catch((err) => {
            res.send(err)
        })
}
//localhost:4000/users/login
module.exports.login = (req, res) => {
    const body = req.body
    User.findByCredentials(body.email, body.password)
        .then((user) => {
            return user.generateToken()
        })
        .then((token) => {
            //res.send(token)
            res.setHeader('x-auth', token).send({})
        })
        .catch((err) => {
            res.send(err)
        })
}
//localhost:4000/users/account
module.exports.account = (req, res) => {
    const { _id, username, email } = req.user


    res.send({ _id, username, email })

}
//localhost:4000/users/logout
module.exports.logout = (req, res) => {
    const { user, token } = req
    User.findByIdAndUpdate(user._id, { $pull: { tokens: { token: token } } })
        .then(() => {
            res.send({ notice: 'sucessfully logged out' })
        })
        .catch((err) => {
            res.send(err)
        })
}

module.exports.AllUserlist = (req, res) => {
    User.find()
    .then((list) => {
        res.send(list)
    })
    .catch((err) => {
        res.send(err)
    })
}


