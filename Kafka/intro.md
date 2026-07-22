Mainly used for event streaming and message queuing (mainly for real-time data streaming)

As db have low throughput, kafka is used for high throughput scenarios

Throughput is measured in terms of messages per second(inserts or reads per certain amount of time)

kafka high throughput low storage(no query support)
db high storage low throughput (queryable)
combination of both is best

main thing of kafka have high throughput and make a bulk insert to db like around 2-3 sec(transaction)
producers give more data than consumers can handle
prodcuers->kafka->consumers

kafka architecture
in kafka we have topics and partitions(logical partition of messages)

this will happen between the services 
but observer pattern it happens under same hood (same disk space,same stack)

Topics->Partitions->Messages

location based partitioning 

auto balancing based on the partitions and consumer
1 partition -> 1 consumer

1 consumer -> can take multiple partitions

so this problem is overridden by consumer group

in one group only one consumer can read from a partition
so we make multiple consumer groups

group level auto balancing

why this much complexity?

Queue and Pub/Sub is the answer 

Kafka as Queue and Pub/Sub

In our application we can have 4 partitions 1 consumer group
(Number of partitions is equal to number of consumers in 1 consumer group)

Now if we want as Pub/Sub we can have 4 partitions n number of consumer groups

