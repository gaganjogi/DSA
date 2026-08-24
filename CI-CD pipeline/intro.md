Node js Github action deployment

how can we deploy the application on the server?
first we ssh
and then we put the application to the server

copying the code is not good so we use github

we push to github and server will pull
if docker is used do docker compose up

and next again if i push something same process repeat

this is where ci cd comes 

whenver push happens ssh the server pull the code docker compose up 

github runners

first new server -> download docker-> then git clone the project -> then docker compose up --build 

if any changes done git commit -> git pull and -> same docker compose up and build

this is manual step to make this automatic we need script for that

So create actions?
github/workflows make deploy.yaml


ssh setup only giving ip address i not ok we need to provide ssh key also

How SSH key auth actually works
You generate a key pair: a private key and a public key
The public key goes on the server (in ~/.ssh/authorized_keys) — this says "anyone with the matching private key can log in"
The private key stays secret — you add it to GitHub Actions as a secret (e.g., SSH_PRIVATE_KEY)
When your workflow runs, it uses that private key to authenticate with the server over SSH

How to generate keys:-

ssh-keygen -t ed25519 -C "github-actions-deploy" -f ./deploy_key

creates two files: deploy_key (private key) and deploy_key.pub (public key)

~/.ssh/authorized_keys on your target server  - public key 

or 

use: ssh-copy-id -i deploy_key.pub user@your-server-ip

private key in secrets :-
 SSH_PRIVATE_KEY, and paste the private key contents as the value

 after delete this file from local machine