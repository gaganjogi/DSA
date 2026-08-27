Automatic deployement and managing containered apps

heavy load on app and server crashes 
to just install back up nodes

to manage this nodes

How this solves?
we get a cluster - in that control plane & worker nodes

master - api server

node - kublet (agent)

a single instance is called a pod inside this container reside

components of master node - api server - interface to talk (kubectl) kube control

schedular - maintain new pods created

etcd - data for pods and clusters

control manager - managing state 

worker node - kublet (make sure container running)
 pod - app resides
kube proxy - network rules for comm with pods 
container run time - docker

scalability - load balancing


mac download

brew install kubectl

brew install minikube

minikube start
minikube dashboard
minikube status
minikube delete