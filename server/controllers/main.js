const connection = require('../db/connect')

exports.main = (req, res) => { 
    connection.query("SELECT * FROM " + req.params.id, 
    (err, data)=> {
        if(err) 
            res.send("error: "+ err)
        res.send(data)
})}
