insert into empresas (nome, cnpj)
values
    ('Bradesco', 1234567890123),
    ('Vale', 3210987654321),
    ('Cielo', 1212121212121);

alter table empresas modify cnpj varchar(14);

desc empresas;

insert into empresas_unidades
    (empresa_id, cidade_id, sede)
values
    (1,1,1),
    (1,2,0),
    (2,1,0),
    (2,2,1);