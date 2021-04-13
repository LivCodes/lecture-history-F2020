CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    username TEXT NOT NULL
);

INSERT INTO users (username) VALUES ('reubs');
INSERT INTO users (username) VALUES ('maya');
