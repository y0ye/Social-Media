CREATE DATABASE posts;

CREATE TABLE post(
    post_id SERIAL PRIMARY KEY,
    title VARCHAR(144),
    description VARCHAR(255)
);