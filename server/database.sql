CREATE DATABASE posts;

CREATE TABLE post(
    post_id SERIAL PRIMARY KEY,
    description VARCHAR(255)
);