CREATE DATABASE enamm_database;


CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100) UNIQUE NOT NULL,
    price DECIMAL,
    description VARCHAR(255),
    image VARCHAR(255)
)
INSERT INTO products(title, price, description,image) VALUES('Globos Filigree Metal color Dorado Rosa',17800,'12 pulgadas - 30 centímetros','https://lapinateria.store/cdn/shop/products/R12-Inf-Filigree-568_1944x.jpg?v=1596133885');
INSERT INTO products(title, price, description,image) VALUES('Globos Confetti Metal color Negro',17800,'12 pulgadas - 30 centímetros','https://lapinateria.store/cdn/shop/products/R12-Inf-Confetti-Tinta-Dorada-580_1944x.jpg?v=1596133715');
