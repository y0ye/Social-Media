CREATE DATABASE posts;

CREATE TABLE Users(
    user_id SERIAL PRIMARY KEY ,
    username VARCHAR(25) NOT NULL,
    password VARCHAR(30) NOT NULL,
    UNIQUE(username)
);

CREATE TABLE post(
    post_id SERIAL PRIMARY KEY,
    title VARCHAR(144) NOT NULL,
    description VARCHAR(255),
    awslink VARCHAR(256) NOT NULL, 
    username VARCHAR(25),
    FOREIGN KEY (username) REFERENCES Users(username)
);

CREATE TABLE Comments(
    comment_id SERIAL PRIMARY KEY,
    message VARCHAR(256),
    user_id VARCHAR(25),
    post_id int,
    FOREIGN KEY (user_id) REFERENCES Users(username),
    FOREIGN KEY (post_id) REFERENCES post(post_id)
);

