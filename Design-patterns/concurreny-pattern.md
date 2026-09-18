Then multiple requests try to handle the same resource at the same time, leading to race conditions and data inconsistency.

so to handle this we can use synchronised so at one time only one request will be served but we know the difference between thread and process but if it is distrubuted systems it will not work like that as different system will be having different synchronised right because all are seperate process

distrubuted concurrency control
optimisitic control and pessimistic control

what is the usage of transaction?
transaction helps integrity and consistency of data

same bank debit and credit 

begin transac

debit
credit
if all success:
commit
else:
rollback

end transaction


what is db locking?
helps make sure no other transaction can access the same data at the same time
types:-
shared lock only read can happen
exclusive lock (no other transaction can even read it or write it)

isolation level each transaction feel like working alone


dirty read problem :-
transac A and change the status (write is done) but not yet commited then transac B reads the data and then transac A rollback the change so transac B has read the wrong data

non repeatable read:-
in first transac A reads the repeatable row sometimes and gets different data in second read first free and then some other transac make the changes in the row and that is commited then transac A reads different value

phantom reads;-
transac A executes a query and gets 5 rows, then some other transac inserts a new row and commits, then transac A executes the same query again and gets 6 rows

Read Committed → lock held only per statement → allows non-repeatable reads
Repeatable Read → lock held per transaction, per row → blocks non-repeatable reads, but not new rows → allows phantoms
Serializable → lock held per transaction, per range → blocks both

read uncommited - only read you do all above three are yes for this no lock for read and write
read commited - for read shared lock released once read is done  for write exclusive lock so dirty read is not possible here


Why it's called "Serializable": the end result is as if T1 and T2 ran one completely after the other (serially) — never interleaved — even though they may have executed concurrently under the hood. That's the strongest guarantee among all isolation levels, and it's also why it's the slowest — real-world databases rarely default to it because range locks cause heavy contention when many transactions touch overlapping ranges.

"We didn't rely on DB transactions for the overall proctoring workflow because it spanned multiple systems — Postgres, Kafka, S3, external LMS calls — over a duration far longer than a DB transaction can safely hold locks for. Temporal gave us durable execution instead: each step committed independently, workflow state was persisted so crashes were recoverable without data loss, and where cross-system consistency mattered we used compensating actions rather than atomic rollback — essentially a Saga pattern, orchestrated by Temporal instead of hand-rolled event choreography."