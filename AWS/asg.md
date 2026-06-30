Auto scaling group
based on scenario it will add or decrease the instances dynamically to reduce costs

minimum size desired size
maximum size 

for load balancing still ELB is used

for first we need to create ami of the instance and then go to asg 
and there create template of the ami created and set configuration and security group
instance launch options

integrate other services means setting up load balancers and health checks

and then group size desired size and max size configuration

and target tracking scaling policy like what amount of requests and what target we have defined and count of the requests some parameter like this  and then create asg

check logs in ASG activity
Successful
Launching a new EC2 instance: i-033d4be555cc9f0a4
At 2026-06-30T20:17:57Z an instance was launched in response to an unhealthy instance needing to be replaced.
2026 July 01, 01:47:58 AM +05:30
2026 July 01, 01:48:03 AM +05:30
Connection draining in progress
Terminating EC2 instance: i-0be17ae4b7a62e1b6 - Waiting For ELB Connection Draining.
At 2026-06-30T20:17:56Z an instance was taken out of service in response to an EC2 health check indicating it has been terminated or stopped.