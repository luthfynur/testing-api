const visitorService = require('../service/visitorService')

const createVisitor = async (req, res) => {
    try {
        const name = req.body.name
        if (!name) {
            res.status(400).json({
                message: "name required"
            })
            return;
        }
        const address = req.body.address
        if (!address) {
            res.status(400).json({
                message: "address required"
            })
            return;
        }
        const phone = req.body.phone
        if (!phone) {
            res.status(400).json({
                message: "phone required"
            })
            return;
        }

        const visitor = await visitorService.createVisitor(req.body)

        res.status(201).json({
            message: "Created",
            data: visitor
        })
        
    } catch(err) {
        console.log(err);
        res.status(500).json({
            message: "Gagal membuat visitor"
        });
    }
}

const findVisitors = async (req, res) => {
    try {
        const visitors = await visitorService.getAllVisitors(req.query)

        res.status(200).json({
            message: "OK",
            data: visitors
        })
    } catch(err) {
        console.log(err);
        res.status(500).json({
            message: "Gagal membuat visitor",
            data: []
        });
    }
}

module.exports = {
    createVisitor,
    findVisitors
}