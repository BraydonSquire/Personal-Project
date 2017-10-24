SELECT * FROM blog
Join blogcomments On blog.blogid = blogcomments.blogid
 WHERE blog.blogid = $1