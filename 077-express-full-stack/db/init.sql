DROP TABLE IF EXISTS pets;
DROP TABLE IF EXISTS users;

CREATE TABLE users (id SERIAL PRIMARY KEY, name TEXT, email TEXT);

INSERT INTO users (name, email) VALUES 
    ('Erwins', 'erwins@gmail.com'),
    ('Carmen', 'carmen@gmail.com'), 
    ('Motun', 'motun@yahoo.com');

CREATE TABLE pets (
    id SERIAL PRIMARY KEY, 
    pet_name TEXT, 
    species TEXT, 
    age INT, 
    user_id INT REFERENCES users(id)
);

INSERT INTO pets (pet_name, species, age, user_id) VALUES
    ('Fluffy', 'Cat', 3, 1),
    ('Fido', 'Dog', 1, 1),
    ('Polly', 'Bird', 4, 2),
    ('Sparky', 'Dog', 5, 3),
    ('Tabby', 'Cat', 7, 2);