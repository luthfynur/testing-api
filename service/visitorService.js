const Visitor = require("../entity/visitorEntity")

const createVisitor = async (body) => {
    const visitor = new Visitor({
        name: body.name,
        address: body.address,
        phone: body.phone
    })

    const savedVisitor = await visitor.save();
    return savedVisitor;
}

const getAllVisitors = async (query) => {
    let queries = [];
    if (query.name) {
        queries.push( {
            name: { $regex: query.name, $options: 'i' }
        },)
    }
    if (query.address) {
        queries.push( {
            address: { $regex: query.address, $options: 'i' }
        },)
    }
    if (query.phone) {
        queries.push({
            phone: { $regex: query.phone, $options: 'i' }
        })
    }
    if (queries.length > 0) {
        return await Visitor.find({
            $or: queries
        });
    } 
    return await Visitor.find();
}

module.exports = {
    createVisitor,
    getAllVisitors
}