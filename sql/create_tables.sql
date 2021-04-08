DROP TABLE IF EXISTS users;

CREATE TABLE IF NOT EXISTS users (
    user_id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    firstname VARCHAR(50) NOT NULL,
    lastname VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL UNIQUE,
    password CHAR(60) NOT NULL,
    gender CHAR(1) NOT NULL,
    weight DECIMAL(6,2),
    height DECIMAL(6,2)
);

DROP TABLE IF EXISTS diary;

CREATE TABLE IF NOT EXISTS diary (
    diary_id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    user_id INT NOT NULL,
    diary_date TIMESTAMPTZ NOT NULL DEFAULT now(),
    meal VARCHAR(50) NOT NULL,
    food_title VARCHAR(50) NOT NULL,
    calories INT NOT NULL,

    FOREIGN KEY(user_id)
    REFERENCES users(user_id)
    ON DELETE CASCADE
);