-- Active: 1658177003268@@127.0.0.1@3306@chama_flowers

CREATE Table
    user(
        email VARCHAR(25) NOT NULL UNIQUE PRIMARY KEY,
        user_name VARCHAR(20) NOT NULL,
        number INT(20),
        password VARCHAR(200) NOT NULL,
        verify BOOLEAN DEFAULT false,
        type ENUM ('client','saller') DEFAULT 'client'
    );
CREATE TABLE flower(
    id_flower INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    description CHARACTER(40) NOT NULL,
    image VARCHAR(50) NOT NULL,
    quantity INT(4) NOT NULL,
    email VARCHAR(25) NOT NULL,
    id_category INT(5) NOT NULL,
    Foreign Key (email) REFERENCES user(email) ON DELETE CASCADE,
    Foreign Key (id_category) REFERENCES category(id_category)
);
CREATE TABLE category(
    id_category INT(5) PRIMARY KEY AUTO_INCREMENT,
    name CHARACTER(30) NOT NULL UNIQUE 
);

SELECT id_category FROM category WHERE name LIKE "%Fleur de tombe%";

SELECT id_flower,description,image,quantity,name FROM flower JOIN category 
ON flower.id_category = category.id_category;

CREATE TABLE fixed_price(
    id_price INT(5) PRIMARY KEY AUTO_INCREMENT,
    price INT(4) NOT NULL,
    id_flower INT(5) NOT NULl UNIQUE,
    Foreign Key (id_flower) REFERENCES flower(id_flower)
);

desc fixed_price;
SELECT id_flower,description,image,quantity,name FROM flower as f
JOIN category as c ON c.id_category=f.id_category;
SELECT * FROM fixed_price as fp 
JOIN flower as f ON fp.id_flower=f.id_flower
JOIN category as c ON f.id_category = c.id_category;
SELECT id_flower,description,image,quantity,name FROM flower as f
JOIN fixed_price as fp ON fp.id_flower=f.id_flower ;

TRUNCATE TABLE fixed_price;
-- CREATE TABLE
--     auction(
--         auction_id INT(5) PRIMARY KEY AUTO_INCREMENT,
--         start_time DATETIME NOT null,
--         End_time DATETIME NOT NULL,
--         id_prod INT NOT NULL,
--         FOREIGN KEY(id_prod) REFERENCES product(id_prod)
--     );
-- DROP TABLE auction_product;
-- CREATE TABLE
--     auction_product(
--         auction_id INT(5) ,
--         email VARCHAR(25) ,
--         PRIMARY KEY(auction_id,email),
--         UNIQUE(auction_id,email),
--         FOREIGN KEY(auction_id) REFERENCES auction(auction_id),
--         FOREIGN KEY(email) REFERENCES user(email)
--     );

