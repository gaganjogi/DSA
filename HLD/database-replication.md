Database replication vs data sharding 

same data and sharding is data splitting

leader - follower 

user register when write operation happen we make one of them as leader and whenever write operation happens will go to leader operation and then make other of them in sync

synchronous (safe) and slow and asynchronous(reverse) sending to keep in sync

mainly company follow semi - sychronous atleast send for 1 server and then post and then you send for other nodes

main problem in above will be replication lag as write will be in other node and not in read db

so for first 1 min we need to take that read to leader db

back in time - sometimes read will go to any other db


sync - bank 
async - insta/fb

 leaders will take as if we different regions

 but conflict

 leaderless - quorum - like a group
 whichever can read and write

 write atleast 2db
 for read also it asks 2 db and give newest (latest)

 w+r>n
 2+2>4 so odd numbers of db

 3+3>5 complex this is 