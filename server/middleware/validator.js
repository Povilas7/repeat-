
module.exports = {
    check: (req, res, next) => {
        console.log(req.body)
        let {name, quantity, price} = req.body
        function error(status, msg){
            return res.send({error:status, message: msg})
        }
        if(name.length < 3){
            return error(true, 'Name is to short')
        }
        if(name.length > 50){
            return error(true, 'Name is to long')
        }

        next()
    }
}