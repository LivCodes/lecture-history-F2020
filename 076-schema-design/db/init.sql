DROP TABLE IF EXISTS likes;
DROP TABLE IF EXISTS tweets;
DROP TABLE IF EXISTS users;

CREATE TABLE users (id SERIAL PRIMARY KEY, username TEXT, email TEXT, bio TEXT);

INSERT INTO users (username, email, bio) VALUES 
  ('InstructorAnn', 'ann@gmail.com', 'I am an instructor'),
  ('yogaislyfe', 'maya@gmail.com', 'Yoga is life'),
  ('GrillMaster88', 'reuben@gmail.com', 'Cooking up the perfect roast');

CREATE TABLE tweets (id SERIAL PRIMARY KEY, content TEXT, user_id INT REFERENCES users(id), created_at TIMESTAMP WITH TIME ZONE);

INSERT INTO tweets (user_id, content, created_at) VALUES
  (1, 'I love my students', now()),
  (2, 'Mindful Mornings are essential', now()),
  (3, 'Showing the baby how to grill', now()),
  (2, 'Today is a downward dog type of day!', now()),
  (1, 'JavaScript > Python', now()),
  (1, 'If I EXPRESS myself, will you REACT to it? #codingpuns', now()),
  (3, 'I''m already planning my next Thanksgiving Day Turkey dinner', now());

CREATE TABLE likes (user_id INT REFERENCES users(id), tweet_id INT REFERENCES tweets(id), PRIMARY KEY(user_id, tweet_id));

INSERT INTO likes (user_id, tweet_id) VALUES
  (1, 1),
  (2, 1),
  (3, 1),
  (1, 3),
  (2, 3),
  (3, 3);
  
SELECT * FROM likes;