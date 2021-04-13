ALTER TABLE users ADD birthday DATE;

UPDATE users SET birthday = '01-10-1991' WHERE username = 'reubs';