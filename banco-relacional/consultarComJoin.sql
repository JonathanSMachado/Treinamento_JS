select * from estados e, cidades c
    where e.id = c.estado_id;

select 
    e.nome as Estados,
    c.nome as Cidades
from estados e, cidades c
where e.id = c.estado_id;

select 
    e.nome as Estados,
    c.nome as Cidades
from estados e
inner join cidades c on e.id = c.estado_id;


select 
    e.nome as Estados,
    c.nome as Cidades
from estados e
left join cidades c on e.id = c.estado_id
