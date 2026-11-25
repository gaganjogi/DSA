Docker hub for the aws environment as normally image will be outside the aws container right so instead taking from docker hub we make use of ECR 

for authenication we use IAM

as we cannot make image publicly available

we have connected from local aws cli to aws 

we need to authenticate docker to ECR so

first docker will fetch token from aws cli and then will give it to docker client
