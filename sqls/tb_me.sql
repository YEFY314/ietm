CREATE TABLE tb_mechanism_parts(
m_id INT(4),
p_id INT(11),
p_num INT(4),
PRIMARY KEY(m_id, p_id)
);
ALTER TABLE tb_mechanism_parts ADD CONSTRAINT FK_ID FOREIGN KEY(m_id) REFERENCES tb_mechanism(mechanism_id);
