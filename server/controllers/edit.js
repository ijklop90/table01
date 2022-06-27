const connection = require('../db/connect')

exports.edit =  (req,res) => {
    const sql = `UPDATE 1a SET age=?, name=? WHERE id=?`;
    const data = [25, 'Johny', 3]
    connection.query(sql, data, (err, results)=> {
        if(err){
            console.log(err)
        }
        console.log(req.body.name)
    })
    res.redirect('/')
}