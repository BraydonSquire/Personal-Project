CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    user_name VARCHAR(180),
    email VARCHAR(180),
    img TEXT,
    auth_id TEXT PRIMARY KEY
)

-- CREATE TABLE blogComments (
--     comments varchar(1500),
--     commentid serial PRIMARY KEY,
--     userid TEXT ,
--     blogid int NOT NULL,
--     CONSTRAINT FK_PostId
--     FOREIGN KEY (userid) REFERENCES users(auth_id),
--     CONSTRAINT FK_BlogPost
--     FOREIGN KEY (blogid) REFERENCES blog(blogid) 
--     )  