# SQL Relationship (One to Many)

## How can we relate data to each other in tables?
- primary key
- foreign key

## Example of a One to Many (Has many) relationship
- Owners and pets

```sql
DROP TABLE IF EXISTS pets;
DROP TABLE IF EXISTS people;
CREATE TABLE people(
	id SERIAL PRIMARY KEY,
	first_name TEXT NOT NULL,
	last_name TEXT NOT NULL
);

INSERT INTO people(first_name, last_name) VALUES('Ann', 'Duong');
INSERT INTO people(first_name, last_name) VALUES('Reuben', 'Ogbonna');
INSERT INTO people(first_name, last_name) VALUES('Maya', 'Bhattacharjee');

CREATE TABLE pets (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
	species TEXT,
	owner_id INT REFERENCES people(id) -- this is a foreign key
);

INSERT INTO pets(name, species, owner_id) VALUES('Khalo', 'dog', 3);
INSERT INTO pets(name, species, owner_id) VALUES('Juan Pablo', 'dog', 2);
INSERT INTO pets(name, species, owner_id) VALUES('Bora', 'bird', 1);
INSERT INTO pets(name, species, owner_id) VALUES('Tora', 'dog', 1);
INSERT INTO pets(name, species, owner_id) VALUES('Frida', 'cat', 3);
INSERT INTO pets(name, species, owner_id) VALUES('Pon Juablo', 'cat', 2);
INSERT INTO pets(name, species, owner_id) VALUES('Kora', 'cat', 1);

SELECT * FROM pets;
```

## Joining tables
- There are certain questions we can answer given individual tables
  - What is Reuben's last name?
  - How many dogs do we have?
- But there are questions can we can only answer when we JOIN our tables
  - What are all the pets owned by Ann?
    - `SELECT * FROM people JOIN pets ON people.id = pets.owner_id WHERE people.first_name = 'Ann';`
  - Who is the owner of Frida?
    - `SELECT first_name, last_name FROM people JOIN pets ON people.id = pets.owner_id WHERE pets.name = 'Frida';`
  - How many people own birds?
  - How many pets does Maya have?

## 99% of the time, you will be doing INNER JOINS, but here are other joins:
- outer join (left join)
- union
- cross join
- if you ever need these, you can look up the documentation

## Practice: Authors and books

```sql
DROP TABLE IF EXISTS books;
DROP TABLE IF EXISTS authors;
CREATE TABLE authors(
	id SERIAL PRIMARY KEY,
	first_name TEXT NOT NULL,
	last_name TEXT NOT NULL
);

INSERT INTO authors(first_name, last_name) VALUES('James', 'Baldwin');
INSERT INTO authors(first_name, last_name) VALUES('Langston', 'Hughes');
INSERT INTO authors(first_name, last_name) VALUES('Maya', 'Angelou');

CREATE TABLE books (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
	published_year INT,
	author_id INT REFERENCES authors(id)
);

INSERT INTO books(title, published_year, author_id) VALUES('The Fire Next Time', 1963, 1);
INSERT INTO books(title, published_year, author_id) VALUES('The Weary Blues', 1926, 2);
INSERT INTO books(title, published_year, author_id) VALUES('The Heart of a Woman', 1981, 3);
INSERT INTO books(title, published_year, author_id) VALUES('Go Tell it on the Mountain', 1953, 1);
INSERT INTO books(title, published_year, author_id) VALUES('Notes of a Native Son', 1955, 1);
INSERT INTO books(title, published_year, author_id) VALUES('Not Without Laughter', 1930, 2);
INSERT INTO books(title, published_year, author_id) VALUES('Mom & Me & Mom', 2013, 3);

SELECT * FROM books;
```


