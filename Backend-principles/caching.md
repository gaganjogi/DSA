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