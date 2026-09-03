Think how can hacker get access based on developer vulanrebilities think like that

first is injection attacks:-

sql injection 

select * from users where email='' OR '1'='1' --'

sql injection based on driver DDL or DML sequential sql statements will not happen

language crosses other languages

treating data as code - injection
instead write like this

parameterised queries

select * from users where email = $1 

seperate data from user query

when there is seperation between them clearly treat data as string

command injection