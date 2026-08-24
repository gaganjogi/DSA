Caching is nothing but storing subset of primary information so that it is very easy to get the data and serve the users

if it is get from cache we say that is cache hit or cache miss if not present
content delivery network:-
efficiently deliver data based on geographical location spread accross all over world closest server will reach

we cannot put everything in cache (more expensive)

WE DO caching in this situation
heavy work or heavy data (avoid this we do caching) heavy compuation for like some hours or day


Three levels of caching:-

Network caching:-
  Content delivery network - edge servers closed to users
   when we get the ip address from dns then cdn dns system will redirect to nearest point of presence (pop) for particular region if user network is not good then redirects to less bandwidth pop first check if the resource is there or not miss or hit if fetches from originating server and also have time to live (ttl) like how long to store data

  Domain name service - exmaple.com then sends to dns query-> recursive resolver (provided by ISP or google provider)

  resolver - first checks the local cache hit means return if not next

  querying root servers (this do not have any) they have address of top level domain servers (.com,.in)

  give reference of .com TLD (no ip)

  sends to authoritative name server of example.com send address to recursive resolver


  os local cache -> browser dns cache -> resolver cache -> root server -> tld server -> authoritative name server
  
  Root server = "That's in this country, ask the state"
  TLD server = "That's in this state, ask the city"
  Authoritative server = "Yes, that's my house, here's the exact address" ✅ (final, definitive answer)

  Hardware level cache- L1 L2 L3 cache

  Ram - inmemory (redis) bunch of capacitors directly access the data with electrical signal (no abundance) volatile

  Redis is called an "in-memory database" specifically because it uses your machine's RAM instead of disk for storage — that's what makes it extremely fast compared to a traditional database like PostgreSQL or MySQL, which read/write from disk. The tradeoff is: fast, but limited by however much RAM you have, and volatile unless you enable persistence to disk.

So yes — when Redis is holding data, it's consuming your Mac's actual physical memory, the same finite resource everything else on your machine shares.

in-memory based 
key - value based 
no sql db

caching strategies:-

Lazy caching:- first check if data is present in cache if not then fetch from primary database and store in cache and then return to client

write through:- made changes in both cache and primary database at the same time

eviction policy:-
no eviction 

lru - least recently used

lfu - least frequently used

ttl - time to live

where actually use redis?

db query (heavy computation). e-commerce social media profile  if new entry cache invalidate and write through
session storage - auth token (stored in inmemory)
api caching - external api (to reduce billing)
rate limiting - give ip address of the user  ip : count untill 1 min example like 50 request if not and not to make db call for simply checking the count of the ip address

