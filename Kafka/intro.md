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


Code part 
Using docker image i tried to run zookeeper service port 2181 (this is the main service which manages the kafka brokers)

docker run -p 9092:9092 \
-e KAFKA_ZOOKEEPER_CONNECT=192.0.0.2:2181 \ - zookeeper port
-e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://192.0.0.2:9092 \ kafka port
-e KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR=1 \ number of replication 

INFRA Setup
Admin - partition,topics
produces - messages producer
consumers - messages consumer

setup kafka client
admin client
producer client
consumer client

so to check this we tried to partition split the messages into different partitions
for 2 partitions and 1 consumer group both were going to same consumer
for 2 partitions and 2 consumer groups both were going to different consumers