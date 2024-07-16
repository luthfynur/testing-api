const Queue = require('../entity/queueEntity')

const addQueue = async () => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const lastQueue = await Queue.findOne({
        createdAt: {
            $gte: today,
            $lt: new Date(today.getTime() + 24 * 60 * 60 * 1000) 
        }
    }).sort({createdAt: 'desc'})

    if (lastQueue) {
        let queueNumber = parseInt(lastQueue.number, 10)
        queueNumber += 1;
        const queue = new Queue({
            number: queueNumber.toString().padStart(3, "0"),
            served: false
        })

        return await queue.save();
    } else {
        const queueNumber = "1".padStart(3, "0");
        const queue = new Queue({
            number: queueNumber,
            served: false
        })

        return await queue.save();
    }
}

module.exports = {
    addQueue
}