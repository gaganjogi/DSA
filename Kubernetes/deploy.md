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


to set the image of new build

kubectl set image deployment {deployment_name} {container_name}={new_image}

for example if any deployment is stucked or wrong tag name we need to rollout

kubectl rollout status deployment/{deployment_name}

to rollout the deployment

kubectl rollout undo deployment/{deployment_name}

self healing if app is shut down how this handle?

kubernetes will not allow application from failing all of a sudden it will again get restarted if anything breaks

how to scale in kubernetes?
kubectl scale deployment {deployment_name} --replicas={number_of_replicas}

to do all manually we can do this in configuration file 

kubectl apply -f deployment-config.yaml