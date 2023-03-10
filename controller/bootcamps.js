const Bootcamp = require('../models/bootcamps')

exports.getbootcamps = async (req, res, next) => {

    try {
        const bootcamps = await Bootcamp.find()
        res.status(200).json({ success : true, data: bootcamps })
        
    } catch (err) {
        res.status(400).json({ success : false })
    }
    res.status(200).json({ success: true, msg: "Show all bootcamps" })
}


exports.getbootcamp = async (req, res, next) => {
    try {
        const bootcamp = await Bootcamp.findById(req.params.id)
        if(!bootcamp) {
         return   res.status(400).json({ success : false }) 
        }
        res.status(200).json({ success : true, data : bootcamp })

       
        
    } catch (err) {
        res.status(400).json({ success : false })
    }
    
}

exports.createbootcamps = async (req, res, next) => {
    try {
        const bootcamp = await Bootcamp.create(req.body)

        res.status(201).json({
            success : true,
            data: bootcamp
        })
    } catch (err) {
        res.status(400).json({ success : false })
    }
 
}

exports.updatebootcamp = async (req, res, next) => {

    try {
        const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
            new : true,
            runValidators : true
        })

        if(!bootcamp){
            res.status(400).json({success : false})
        }
        res.status(200).json({ success: true, data: bootcamp })
        
    } catch (err) {
        res.status(400).json({ success: false })
    }
    
}




exports.deletebootcamp = async (req, res, next) => {
    try {
        const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id)

        if(!bootcamp){
            res.status(400).json({success : false})
        }
        res.status(200).json({ success: true, data: {} })
        
    } catch (err) {
        res.status(400).json({ success: false })
    }
    
}
