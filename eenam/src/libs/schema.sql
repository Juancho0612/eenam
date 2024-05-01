CREATE DATABASE enamm_database;

CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100) UNIQUE NOT NULL,
    price DECIMAL,
    description VARCHAR(255),
    image VARCHAR(255)
)
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    documento VARCHAR(20),
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(100) NOT NULL,
    nombres VARCHAR(50),
    apellidos VARCHAR(50),
    departamento VARCHAR(50),
    ciudad VARCHAR(50)
);

INSERT INTO
    products(title, price, description, image)
VALUES
    (
        'Globos Filigree Metal color Dorado Rosa',
        17800,
        '12 pulgadas - 30 centímetros',
        'https://lapinateria.store/cdn/shop/products/R12-Inf-Filigree-568_1944x.jpg?v=1596133885'
    );

INSERT INTO
    products(title, price, description, image)
VALUES
    (
        'Globos Confetti Metal color Negro',
        17800,
        '12 pulgadas - 30 centímetros',
        'https://lapinateria.store/cdn/shop/products/R12-Inf-Confetti-Tinta-Dorada-580_1944x.jpg?v=1596133715'
    );

INSERT INTO
    products(title, price, description, category, image)
VALUES
    (
        'KIT DECORATIVO ROSADO DORADO',
        63500,
        '-LETRERO FELIZ CUMPLEAÑOS CARTON

-GLOBOS DORADO ROSA R12X12

-CORTINA METALIZADA 

-GLOBO METALIZADO NUMERO (ELECCION DEL CLIENTE)

-CORONA DE REINA 

-BANDA FELIZ CUMPLEAÑOS

-PLATO X12

-VASOS X12',
        'decoracion',
        'https://ohhiparty.com/cdn/shop/files/KITDECORATIVOROSADODORADO.jpg?v=1686149529&width=700'
    );

INSERT INTO
    products(title, price, description, category, image)
VALUES
    (
        'KIT DECORATIVO DÍA DEL PADRE',
        69900,
        '-GLOBOS SEMPERTEX METAL AZUL R12X12
-GLOBOS SEMPERTEX SATIN PLATA R12X12
-GLOBO METALIZADO MOSTACHO 
-CORTINA METALIZADA 
-LETRERO GLOBO METALIZADO FELIZ DIA
-SERPENTINA PLATEADA
-MANTEL DE PLASTICO REUTILIZABLE
-PLATO REDONDO X10
-VASOS CARTON X10',
        'decoracion',
        'https://ohhiparty.com/cdn/shop/files/KITDECORATIVODIADELPADRE.jpg?v=1686259592&width=700'
    );

INSERT INTO
    products(title, price, description, category, image)
VALUES
    (
        'Camisa en ojalilloo',
        239900,
        'Camisa manga larga-Cuello clásico-Diseño abierto. • Mix de telas. *La modelo usa una camisa talla S.',
        'ropa',
        'https://nafnaf.vtexassets.com/arquivos/ids/1036979/14_412F013_CRU111001_6.jpg?v=638482728137730000'
    );

INSERT INTO
    products(title, price, description, category, image)
VALUES
    (
        'Jean jegging super alto azul oscuro',
        69900,
        'Jean para mujer, 5 bolsillos, tiro super alto, ajuste ceñido con lavado azul oscuro',
        'ropa',
        'https://cdn.koaj.co/217776-thickbox_default/jean-jegging-super-alto-azul-oscuro.jpg'
    );

INSERT INTO
    products(title, price, description, category, image)
VALUES
    (
        'Chaqueta gris bomber acolchada con rombos y cuello alto',
        129900,
        'Chaqueta bomber acolchada gris clara para mujer cuenta con cuello alto, detalles con costuras de rombos, puños y ruedo con elásticos, 2 bolsillos de ribete, cierre con cremallera y un fit ajustado.',
        'ropa',
        'https://cdn.koaj.co/213770-thickbox_default/chaqueta-tipo-bomber-acolchada-con-forma-de-rombos-bolsillos-de-ribete-sencillos-bajos-y-punos-resortados-cierre-frontal-con-cr.jpg'
    );

INSERT INTO
    products(title, price, description, category, image)
VALUES
    (
        'Jean tiro alto 90´s negro con bota ancha y bolsillos',
        69900,
        'Jean 90´S para mujer en tono negro cuenta con 5 bolsillos, diseño de bota ancha, trabillas en la pretina, botón metálico en la cintura y una silueta holgada al cuerpo.',
        'ropa',
        'https://cdn.koaj.co/216069-thickbox_default/jean-90s-tiro-alto-negro.jpg'
    );