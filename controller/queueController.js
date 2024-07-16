const queueService = require('../service/queueService')

const addQueue = async (req, res) => {
    try {
       const queue = await queueService.addQueue();
        res.status(200).json({
            message: "OK",
            data: queue
        })
    } catch(err) {
        console.log(err);
        res.status(500).json({
            message: "Gagal menambah queue"
        });
    }
}

module.exports = {
    addQueue
}