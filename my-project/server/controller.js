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
    },
    getPost: (req, res, next) => {
        const db = req.app.get('db')
        db.get_post([req.params.id])
        .then(response => {
            console.log(response,req.params.id)
            res.status(200).send(response)
        })
    },
    addPhoto: (req, res, next) => {
        console.log(req.body)
        const db = req.app.get('db')
        db.add_photo(req.body.image)
        // db.add_photo(this.state.input)
        .then(response => {
            // console.log(response, req.params.id)
            
            res.status(200).send(response)
        })
    },
    addComment: (req, res, next) => {
        console.log(req.body, req.user)
        const db = req.app.get('db')
        console.log(req.user.id)
        db.add_comment([req.body.comment, req.body.blogid, req.user.id])
        .then(response => {
            res.status(200).send(response)
        })
    }
    ,
    getComments: (req, res, next) => {
        console.log('getComments controller',req.params.id)
        const db = req.app.get('db')
    db.get_comments([req.params.id])
    .then(response => {
        res.status(200).send(response)
    })
    },
    deleteComment: (req, res, next) => {
        console.log('deleting comment',req.params.id)
        const db = req.app.get('db')
        db.delete_comment([req.query.commentid])
        .then(response => {
            db.get_comments([req.query.blogid])
            .then( response => {
                res.status(200).send(response)
            })
            
        })
    },
    addBlog: (req, res, next) => {
        console.log('addBlog controller', req.body)
        const db = req.app.get('db')
        db.add_blog([req.body.addBlog, req.body.date, req.body.title])
        .then(response => {
            res.status(200).send(response.data)
        })
    },
    deletePost: (req, res, next) => {
        console.log('deletePost controller req.body:', req.body)
        const db = req.app.get('db')
        db.delete_post([req.params.id])
        .then(response => {
            res.status(200).send(response.data)
        })
    }
}