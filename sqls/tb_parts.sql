CREATE TABLE tb_parts(
parts_id INT(11) PRIMARY KEY AUTO_INCREMENT,
is_GB ENUM('true','false'),
parts_name VARCHAR(10) NOT NULL,
parts_drawings VARCHAR(20),
parts_grade VARCHAR(5),
parts_material VARCHAR(10) NOT NULL,
parts_description VARCHAR(30),
parts_manufacturer VARCHAR(10)
);