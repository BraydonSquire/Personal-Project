module.exports = {
    getBlogs: (req, res, next) =>{
        const db = req.app.get('db')//this is where the db call is made
        db.get_allblogs()//this is the db file
        .then(response => {
            console.log(response)
            res.status(200).send(response)
        })
    }
}