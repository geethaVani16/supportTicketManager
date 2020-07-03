const axios = require("axios")

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
    axios.get("https://desk.zoho.in/api/v1/tickets", {
        headers: {
            orgId: "60001280952",
            Authorization: "aa8cd2f4d25aa3418e47f953ad9fe323"
        }
    })
        .then((a) => {
            console.log(a.data)
            res.send(a.data)
        })
        .catch(() => {
            res.send("err")
        })
}

module.exports.test = (req, res) => {
    axios.post("https://desk.zoho.in/api/v1/tickets", {
        headers: {
            orgId: "60001280952",
            Authorization: "aa8cd2f4d25aa3418e47f953ad9fe323"
        }, 
        formdata: {
            "subCategory": "Sub General",
            "cf": {
                "cf_permanentaddress": null,
                "cf_dateofpurchase": null,
                "cf_phone": null,
                "cf_numberofitems": null,
                "cf_url": null,
                "cf_secondaryemail": null,
                "cf_severitypercentage": "0.0",
                "cf_modelname": "F3 2017"
            },
            "productId": "",
            "contactId": "1892000000042032",
            "subject": "Real Time analysis Requirement",
            "dueDate": "2016-06-21T16:16:16.000Z",
            "departmentId": "1892000000006907",
            "channel": "Email",
            "description": "Hai This is Description",
            "priority": "High",
            "classification": "",
            "assigneeId": "1892000000056007",
            "phone": "1 888 900 9646",
            "category": "general",
            "email": "carol@zylker.com",
            "status": "Open"
        }
    })
        .then((a) => {
            console.log(a)
            res.send(a.data)
        })
        .catch((error) => {
            res.send(error)
        })
}



