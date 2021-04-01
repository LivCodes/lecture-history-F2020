DROP TABLE IF EXISTS people;
CREATE TABLE people (id SERIAL PRIMARY KEY, name TEXT, email TEXT);
INSERT INTO people (name, email) VALUES ('Ann', 'ann@gmail.com'), ('Maya', 'maay@gmail.com');
