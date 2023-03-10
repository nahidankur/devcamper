const express = require('express')
const router = express.Router()
const {getbootcamps, getbootcamp, createbootcamps, updatebootcamp, deletebootcamp } = require('../controller/bootcamps')

router.route('/').get(getbootcamps).post(createbootcamps)

router.route('/:id').put(updatebootcamp).delete(deletebootcamp).get(getbootcamp)

module.exports = router