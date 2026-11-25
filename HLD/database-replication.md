Database replication vs data sharding 

same data and sharding is data splitting

leader - follower 

user register when write operation happen we make one of them as leader and whenever write operation happens will go to leader operation and then make other of them in sync

synchronous (safe) and slow and asynchronous(reverse) sending to keep in sync

mainly company follow semi - sychronous atleast send for 1 server and then post and then you send for other nodes