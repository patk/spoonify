INSERT INTO users(firstname, lastname, email, password, gender, weight, height)
VALUES
('James', 'Bond', 'james.bond@gmail.com', crypt('HelloWorld123', gen_salt('bf')), 'M', 76, 183),
('Tony', 'Stark', 'tony.stark@gmail.com', crypt('HelloWorld123', gen_salt('bf')), 'M', 70, 172),
('Hermione', 'Granger', 'hermione.granger@gmail.com', crypt('HelloWorld123', gen_salt('bf')), 'F', 63, 165);
