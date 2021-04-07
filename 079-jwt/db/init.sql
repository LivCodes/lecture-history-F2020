DROP TABLE IF EXISTS pets;
DROP TABLE IF EXISTS users;

CREATE TABLE users (id SERIAL PRIMARY KEY, name TEXT, email TEXT, encrypted_password TEXT);

-- password for ALL these users is '1234'
INSERT INTO users (name, email, encrypted_password) VALUES 
    ('Erwins', 'erwins@gmail.com', '$2b$10$ot5KJmIrU0uKhQg2GgTqh.GcU7llvBGWqhLn883aOx0fuI5Gizxsa'),
    ('Carmen', 'carmen@gmail.com', '$2b$10$eKpgpT0O4cTd3zdEpVKNjuE0j0FN0b1XqcXuNZq7qzjLsGUoVrg4W'), 
    ('Motun', 'motun@gmail.com', '$2b$10$7bLxXeoTjHnEDgaBldj.re1pdveyuDbMebIC1UjAouYSZ2dh58Hr.');

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