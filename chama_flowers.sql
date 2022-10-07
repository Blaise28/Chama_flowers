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
    id_categ INT(5) NOT NULL,
    Foreign Key (email) REFERENCES user(email) ON DELETE CASCADE,
    Foreign Key (id_categ) REFERENCES category(id_category)
);
DROP TABLE category;
CREATE TABLE category(
    id_category INT(5) PRIMARY KEY AUTO_INCREMENT,
    name CHARACTER(30) NOT NULL UNIQUE 
);
SELECT * FROM category;


-- DROP TABLE product;
-- CREATE TABLE
--     product(
--         id_prod INT(5) PRIMARY KEY AUTO_INCREMENT,
--         name VARCHAR(30) NOT NULL,
--         quantity INT(100) NOT NULL,
--         description VARCHAR(50),
--         type CHARACTER(20) NOT NULL,
--         auction_id INT(5) NOT NULL, 
--         email VARCHAR(25) NOT NULL,
--         FOREIGN KEY(auction_id) REFERENCES auction(auction_id) ON DELETE CASCADE ON UPDATE CASCADE,
--         FOREIGN KEY(email)  REFERENCES user(email)
--     );

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

