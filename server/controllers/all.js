const connection = require('../db/connect')

exports.all = (req, res) => { 
    connection.query("SELECT * FROM list", 
    (err, data)=> {
        if(err) 
            res.send("error: "+ err)
        //console.log(data)
        res.send(data)
})}
