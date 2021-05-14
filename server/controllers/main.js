const uploadDb = require('../schema/schema')

module.exports = {
    upload: (req, res) => {
        let {name, quantity, price} = req.body

        let item = new uploadDb
        item.name = name
        item.quantity = quantity
        item.price = price
        item.save().then(() => {
            res.send({error: false})
        }).catch(e => {
            res.send({error: true, message: e})
        })
    },
    getPost: async (req, res) => {
        let post = await uploadDb.find()
        res.send({rec: post})
    },
    minus: async (req, res) => {
        let item = await uploadDb.find({_id: req.params.id})
        let quantity = item[0].quantity -1
        await uploadDb.findOneAndUpdate({_id: req.params.id}, {quantity: quantity})
        res.send({error: false, msg: 'Update success'})
    },
    add: async (req, res) => {
        let item = await uploadDb.find({_id: req.params.id})
        let quantity = item[0].quantity +1
        await uploadDb.findOneAndUpdate({_id: req.params.id}, {quantity: quantity})
        res.send({error: false, msg: 'Update success'})
    },
    deleteItem: async (req, res) => {
        await uploadDb.findByIdAndDelete({_id: req.params.id})
        res.send({error: false, msg: "Item delete"})
    }


}