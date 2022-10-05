-- Active: 1658177003268@@127.0.0.1@3306@chama_flowers

DROP TABLE `user`;

CREATE Table
    user(
        email VARCHAR(25) NOT NULL UNIQUE PRIMARY KEY,
        user_name VARCHAR(20) NOT NULL,
        number INT(20),
        password VARCHAR(200) NOT NULL,
        verify BOOLEAN DEFAULT false,
        type ENUM ('client','saller') DEFAULT 'client'
    );
SELECT * FROM `user`;
DROP TABLE product;
CREATE TABLE
    product(
        id_prod INT(5) PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(30) NOT NULL,
        quantity INT(100) NOT NULL,
        description VARCHAR(50),
        type CHARACTER(20) NOT NULL,
        auction_id INT(5) NOT NULL, 
        email VARCHAR(25) NOT NULL,
        FOREIGN KEY(auction_id) REFERENCES auction(auction_id) ON DELETE CASCADE ON UPDATE CASCADE,
        FOREIGN KEY(email)  REFERENCES user(email)
    );

CREATE TABLE
    auction(
        auction_id INT(5) PRIMARY KEY AUTO_INCREMENT,
        start_time DATETIME NOT null,
        End_time DATETIME NOT NULL,
        id_prod INT NOT NULL,
        FOREIGN KEY(id_prod) REFERENCES product(id_prod)
    );

CREATE TABLE
    auction_product(
        auction_id INT(5) ,
        email VARCHAR(25) ,
        PRIMARY KEY(auction_id,email),
        UNIQUE(auction_id,email),
        FOREIGN KEY(auction_id) REFERENCES auction(auction_id),
        FOREIGN KEY(email) REFERENCES user(email)
    );

SELECT * from `user` WHERE email = "poseudo33@gmail.com";

-- ALTER TABLE `user` ADD (type CHARACTER(10) DEFAULT("client"));;
INSERT INTO
    user(
        user_name,
        email,
        number,
        password
    )
VALUES
(
        "wolf",
        "poseudo33@gmail.com",
        123033,
        "1d1d3"
    );

UPDATE `user` SET code = true where user_id = 2;

select *
from user
where
    email = 'poseudo33@gmai.com'
    and password = '$2y$10$EqT7n7GfUhysKazzvwLsJuyO7mOrhsG3.GSFgDfB8A5Gm3ynM1dl.';

SELECT *
FROM `user`
WHERE
    email = "poseudo33@gmail.com"
    AND password = "$2y$10$EqT7n7GfUhysKazzvwLsJuyO7mOrhsG3.GSFgDfB8A5Gm3ynM1dl.";