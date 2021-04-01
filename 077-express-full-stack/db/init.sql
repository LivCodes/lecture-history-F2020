DROP TABLE IF EXISTS pets;
DROP TABLE IF EXISTS users;

CREATE TABLE users (id SERIAL PRIMARY KEY, name TEXT, bio TEXT);

INSERT INTO users (name, bio) VALUES 
    ('Erwins', 'I''m an instructor'),
    ('Carmen', 'I''m an teaching fellow'),
    ('Motun', 'I''m a program manager');

CREATE TABLE pets (id SERIAL PRIMARY KEY, pet_name TEXT, species TEXT, user_id INT REFERENCES users(id));

INSERT INTO pets (pet_name, species, user_id) VALUES
    ('Fluffy', 'Cat', 1),
    ('Fido', 'Dog', 1),
    ('Polly', 'Bird', 2),
    ('Sparky', 'Dog', 3),
    ('Tabby', 'Cat', 2);