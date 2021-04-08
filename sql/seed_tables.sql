INSERT INTO users(firstname, lastname, email, password, gender, weight, height)
VALUES
('James', 'Bond', 'james.bond@gmail.com', crypt('HelloWorld123', gen_salt('bf')), 'M', 76, 183),
('Tony', 'Stark', 'tony.stark@gmail.com', crypt('HelloWorld123', gen_salt('bf')), 'M', 70, 172),
('Hermione', 'Granger', 'hermione.granger@gmail.com', crypt('HelloWorld123', gen_salt('bf')), 'F', 63, 165);

INSERT INTO diary(user_id, diary_date, meal, food_title, calories)
VALUES
(1, '2021-04-03 10:30:00+10', 'Breakfast', 'Herbed Ricotta & Tomato Toast', 427),
(1, '2021-04-03 10:30:00+10', 'Lunch', 'Veggie & Hummus Sandwich', 502),
(1, '2021-04-03 10:30:00+10', 'Dinner', 'Creamy chicken & asparagus braise', 623),
(1, '2021-04-04 10:30:00+10', 'Breakfast', 'Ham, Egg & Avocado Burrito', 480),
(1, '2021-04-04 10:30:00+10', 'Lunch', 'Egg Salad Lettuce Wraps', 510),
(1, '2021-04-04 10:30:00+10', 'Dinner', 'Herby lamb fillet with caponata', 712),
(1, '2021-04-05 10:30:00+10', 'Breakfast', 'PB & J Yogurt Parfait', 390),
(1, '2021-04-05 10:30:00+10', 'Lunch', 'Mediterranean Tuna-Spinach Salad', 475),
(1, '2021-04-05 10:30:00+10', 'Dinner', 'Creamy chicken & asparagus braise', 623),
(1, '2021-04-06 10:30:00+10', 'Breakfast', 'PB & J Yogurt Parfait', 410),
(1, '2021-04-06 10:30:00+10', 'Lunch', 'Egg Salad Lettuce Wraps', 485),
(1, '2021-04-06 10:30:00+10', 'Dinner', 'Herby lamb fillet with caponata', 720),
(1, '2021-04-07 10:30:00+10', 'Breakfast', 'Herbed Ricotta & Tomato Toast', 410),
(1, '2021-04-07 10:30:00+10', 'Lunch', 'Veggie & Hummus Sandwich', 385),
(1, '2021-04-07 10:30:00+10', 'Dinner', 'Ham, Egg & Avocado Burrito', 640),
(1, '2021-04-08 10:30:00+10', 'Breakfast', 'Poached eggs with smashed avocado & tomatoes', 450),
(1, '2021-04-08 10:30:00+10', 'Lunch', 'Citrus Lime Tofu Salad', 390),
(1, '2021-04-08 10:30:00+10', 'Dinner', 'Thai red duck with sticky pineapple rice', 590),
(1, '2021-04-09 10:30:00+10', 'Breakfast', 'Poached eggs with smashed avocado & tomatoes', 450),
(1, '2021-04-09 10:30:00+10', 'Lunch', 'Salmon Salad-Stuffed Avocado', 377),
(1, '2021-04-09 10:30:00+10', 'Dinner', 'Tuna pasta with rocket & parsley pesto', 550);
