const User= require('../models/User')


// Register User
exports.register = async (req, res) => {

    try {
        const { name, email, password } = req.body

    //create user
    const user = await User.create({
        name, email, password
    })

    const token = user.getSignedJwtToken()

    res.status(200).json({success : true, token})
        
    } catch (err) {
        res.status(400).json({ success: false, msg: err })
    }
}

// Login User
