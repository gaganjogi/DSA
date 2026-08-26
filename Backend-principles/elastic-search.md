if we want to show list of laptops and its description we do like this 

select * from products where ilike '%laptop%' or description ilike '%laptop%'

but starting it may take like 50 ms and grow upto 30 seconds or typo like labtop or something like that

this is why elastic search came

postgres is like librarian sometimes may be relevant

search results should be very fast

INVERTED INDEX

while storing only we index like this 

machine

machine learning
cook machine age

learning

machine learning
learning fundamentals

apache lucene (underlying tech)
postgres also full text search also have relevance scoring (like number of times , title , description)

BM 25 algorithm 

elastic search docs 

single entity like document term frequency document frequency document length field boosting (title> description) custom field boosting 

postgres - full text search feature

ELK stack elastic kibana logstash

anykind of search of type ahead full text or elastic search

search based use cases