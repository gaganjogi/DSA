first we need to create cluster so we need to do one image deployment

 kubectl create deployment local-nginx-test --image=nginx:latest

 kubectl get deployments
 kubectl get pods

 default is 80 port number

 contianer->pod->cluster-> machine

 we need service object

kubectl expose deployment local-nginx-test --port=80 --type=LoadBalancer

 You're explicitly saying: "Create a Service that listens on port 80, and make it externally reachable via a LoadBalancer."

 minikube also should get to know right we use this minikube service local-nginx-test

docker build -t name .
 when ever app is build we cannot use local image for kubernetes we need to build and publish the docker image

 kubectl logs pod_name - kubectl describe pods