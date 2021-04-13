CREATE TABLE pets(
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    user_id INT REFERENCES users(id) NOT NULL
);

INSERT INTO pets (name, user_id) VALUES ('Juan Pablo', 1), ('Khalo', 2);
