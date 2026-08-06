JS Architecture

js runtime environemnt
js engine call stack web api's microtask queue callback queue
code->parsing->compilation->execution

let a=10
is broken down to tokens
syntax parser -> AST(abstract syntax tree)
is passed to compiler

(just in time compilation)
js is interpreted or compiled

interpretter one by one line 
compiled 
original code to converted to optimal (lot of performance)

behave as both (now interpretter and compiler)

interpretter line by line to optimise it use compiler

next bytecode to execution 
(memory heap call stack)

memory heap where code is allocated