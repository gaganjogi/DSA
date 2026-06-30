ELASTIC LOAD BALANCER
vertical scalibity - increasing more resources in existing server
horizontal scalibity - adding more instances 

HIGH AVAILABILITY
running on mutiple availability zones

ELasticity  
based on the situation increase or decrease the instances dynamically

now i created 2 instances in same region then after wards we need to step by load balancer right for that
we need ti create new application load balancer(http https) and network level and gateway level load balancer

so we start with the inbound security group for load balancer like mainly allowing http protocol with port number and ip address

and then listeners and route mapping in route mapping we need to add target group (for which are all instances i need to forward requests)

and then create load balancer

and then we see this like url http://practise-load-balancer-1543871316.ap-south-1.elb.amazonaws.com

and if anything not worked check in resoure map of load balaancer and check the target group
if the target is not registered manually then we need to register the target group with the instance

then we can see distrubuting of the requests between instances distrubutes the traffic scalable resources
we can create in other regions also and test and make HA and all
ALB , NLB , GWLB

BE carful while writing security group check inbound and outbound rules