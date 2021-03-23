# Intro To SQL

## Database
- What are databases? What are our mental models?
- What is a relational database?
- How are relational and non-relational databases different?
- What is a relational database management system (RDBMS)?
  - different flavors of relational databases 
  - Postgres
  - MySQL
  - SQLite
  - Oracale
- What is PostgreSQL?
  - is our RDBMS

## Table (Relation)
- Think of a single Google Spreadsheet!
- Database is a collect of these spreadsheets

## Schema vs Data
- Structure vs content of a table
- [Example1](https://cdn.ablebits.com/_img-blog/google-sheets-if/sample-spreadsheet-data.png)
- Primary Key

## SQL (Structured Query Language)
- Domain specific language
  - this language was created for one specific purpose
  - to communicate with Relational Databases

## Postgres Shell vs a GUI
- `psql`
- pgAdmin, postico, etc.


## SQL CheatSheet
- [CheatSheat](https://www.sqltutorial.org/sql-cheat-sheet/)
- Control-F to find what you're looking for









### Practice
- Imagine you are Jeff Bezos, the year is 1995, you decide to open up an online book store:

```sql
DROP TABLE IF EXISTS books;
CREATE TABLE books (
    id INT PRIMARY KEY,
    title TEXT,
    price DECIMAL(10,2),
    copies_sold INT
);

DROP TABLE IF EXISTS authors;
CREATE TABLE authors (
    id INT PRIMARY KEY,
    name TEXT,
    country TEXT
);

INSERT INTO authors(id, name, country) VALUES(11, 'J.D. Salinger', 'USA');
INSERT INTO authors(id, name, country) VALUES(12, 'F. Scott. Fitzgerald', 'USA');
INSERT INTO authors(id, name, country) VALUES(13, 'Jane Austen', 'UK');
INSERT INTO authors(id, name, country) VALUES(14, 'Scott Hanselman', 'USA');
INSERT INTO authors(id, name, country) VALUES(15, 'Jason N. Gaylord', 'USA');
INSERT INTO authors(id, name, country) VALUES(16, 'Pranav Rastogi', 'India');
INSERT INTO authors(id, name, country) VALUES(17, 'Todd Miranda', 'USA');
INSERT INTO authors(id, name, country) VALUES(18, 'Christian Wenz', 'USA');
INSERT INTO authors(id, name, country) VALUES(19, 'George Orwell', 'UK');

INSERT INTO books(id, title, price, copies_sold) VALUES(11, 'The Catcher in the Rye', 5.99, 65468);
INSERT INTO books(id, title, price, copies_sold) VALUES(12, 'Nine Stories', 3.99, 54365);
INSERT INTO books(id, title, price, copies_sold) VALUES(13, 'Franny and Zooey', 2.99, 6584);
INSERT INTO books(id, title, price, copies_sold) VALUES(14, 'The Great Gatsby', 4.99, 5435);
INSERT INTO books(id, title, price, copies_sold) VALUES(15, 'Tender id the Night', 5.99, 27657);
INSERT INTO books(id, title, price, copies_sold) VALUES(16, 'Pride and Prejudice', 9.99, 54375);
INSERT INTO books(id, title, price, copies_sold) VALUES(17, 'Professional ASP.NET 4.5 in C# and VB', 3.99, 8762);
INSERT INTO books(id, title, price, copies_sold) VALUES(18, 'How Sleep the Brave', 4.99, 65846);
INSERT INTO books(id, title, price, copies_sold) VALUES(19, 'Precious Bane', 4.99, 7636);
INSERT INTO books(id, title, price, copies_sold) VALUES(20, 'This Side of Paradise', 0.99, 2696);
INSERT INTO books(id, title, price, copies_sold) VALUES(21, 'All Passion Spent', 6.99, 18653);
INSERT INTO books(id, title, price, copies_sold) VALUES(22, 'The Door in the Wall', 4.99, 86386);
INSERT INTO books(id, title, price, copies_sold) VALUES(23, 'A Gathering of Days', 2.99, 27653);
INSERT INTO books(id, title, price, copies_sold) VALUES(24, 'Of Fire And Flame', 8.99, 763);
INSERT INTO books(id, title, price, copies_sold) VALUES(25, 'The Subtle Art of Not Giving a F*ck', 10.99, 7637);
INSERT INTO books(id, title, price, copies_sold) VALUES(26, 'The Code Breaker', 4.99, 46783);
INSERT INTO books(id, title, price, copies_sold) VALUES(27, 'How to Do the Work', 5.99, 76376);
INSERT INTO books(id, title, price, copies_sold) VALUES(28, 'The Mistake', 3.99, 8456);
INSERT INTO books(id, title, price, copies_sold) VALUES(29, 'Eat Better, Feel Better', 4.99, 8638);
INSERT INTO books(id, title, price, copies_sold) VALUES(30, 'A Time for Mercy', 3.99, 4735);
```

### Entity Relationship Diagrams (ERD)
- https://dbdiagram.io/
- You can see the schema and relationships between tables

### Most Used Command
- SELECT clause

## Queries
- WHERE clause
  * Show me all the american authors
- ORDER BY clause
  * Show me the authors in alphetical order
- LIMIT clause
  * Show me the top 3 most expensive books

## Manipulation
- ALTER clause
- UPDATE clause
- DELETE clause

## Contraints
- NOT NULL
- DEFAULT
- PRIMARY KEY

## Aggregate Functions: compute a single result from a set of values
- COUNT()
  * How many books cost 4.99?
- SUM
  * How many books have we sold?
- AVG
  * What's the average price of one of our books?
- MAX, MIN
  * What's the price of most expensive book?
  * What book is the most expensive?
  * What's the least selling book?
- GROUP BY
  * What's the breakdown of our authors by country?
  * What's the breakdown of our books by price?
