const router = require('express').Router()
const bcrypt = require('bcryptjs')
const User = require('../models/User.model')
const jwt = require('jsonwebtoken')
const { isAuthenticated } = require('../middlewares/jwt.middleware')

const saltRounds = 10

router.post('/register', (req, res) => {

    const { email, password, number, name, city, postalCode, day, month, year } = req.body

    // if (email === '' || password === '' || name === '' || city === '' || postalCode === 0) {
    //     res.status(400).json({ message: 'El email, contraseña, nombre, ciudad y código postal son requeridos.' })
    //     return
    // }

    if (password.length < 2) {
        res.status(400).json({ message: 'La contraseña debe tener al menos 2 caracteres.' })
        return
    }

    User
        .findOne({ email })
        .then(foundUser => {
            if (foundUser) {
                res.status(400).json({ message: 'Usuari@ ya existente.' })
                return
            }
            const salt = bcrypt.genSaltSync(saltRounds)
            const hashedPassword = bcrypt.hashSync(password, salt)
            return User.create({ email, password: hashedPassword, number, name, city, postalCode, birthday: `${day}/${month}/${year}` })
        })
        .then(createdUser => {
            const { email, name, password, number, city, postalCode, birthday, _id } = createdUser
            const user = { email, name, password, number, city, postalCode, birthday, _id }
            res.status(201).json({ user })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err)
        })
})

router.post('/login', (req, res) => {
    const { email, password } = req.body

    if (email === '' || password === '') {
        res.status(400).json({ message: 'Introduce un correo y contraseña.' })
        return
    }

    User
        .findOne({ email })
        .then(foundUser => {
            if (!foundUser) {
                res.status(401).json({ message: 'Usuario no encontrado.' })
                return
            }

            if (bcrypt.compareSync(password, foundUser.password)) {
                const { email, name, password, city, postalCode, _id } = foundUser
                const payload = { email, name, password, city, postalCode, _id }
                const authToken = jwt.sign(
                    payload,
                    process.env.TOKEN_SECRET,
                    { algorithm: 'HS256', expiresIn: '6h' }
                )
                res.status(200).json({ authToken })
            } else {
                res.status(401).json({ message: 'No se ha podido autenticar al usuario.' })
            }
        })
        .catch(() => res.status(401).json({ message: 'Error interno del servidor.' }))
})

router.get('/verify', isAuthenticated, (req, res) => {
    res.status(200).json(req.payload)
})

module.exports = router