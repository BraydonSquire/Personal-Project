module.exports = {
    getBlogs: (req, res, next) =>{
        const db = req.app.get('db')//this is where the db call is made
        db.get_allblogs()//this is the db file
        .then(response => {
            console.log(response)//console log to see what you got
            res.status(200).send(response)//send the response
        })
    },
    getPhotos: (req, res, next) => {
        const db = req.app.get('db')
        db.get_allphotos()
        .then(response => {
            console.log(response)
            res.status(200).send(response)
        })
    }
}