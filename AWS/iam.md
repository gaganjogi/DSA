Iaas - full complete room
paas - they provide full platform only think of application
saas -  like google on local download access using internet

public cloud - bus
private cloud - zoom car[1:49 AM]EC2 - compute
S3 - storage
RDS - databases
Lambda - serverless functions
Cloudfront - content delivery

ways of accessing aws cli this is completely identity access managment
IAM - create user
create group
create policy and add existing policy
MFA for root
always create user do not do everything by root account due to security threat
aws cli to access aws using cli
then for seperate user we can create access key and get secret key we can use commands to access using cli
command - aws iam list-users


The one-line mental model: IAM = who (identity) can do what (action) on which resource, and under what conditions.
Interview hit-list:
Identities — Users have long-term keys (bad practice at scale). Roles use short-term STS tokens — always prefer roles for services. Groups are just for attaching policies to multiple users at once.
Policy types — Identity-based says "this user can do X". Resource-based says "this S3 bucket allows Y to access it". When both exist, access is granted if either allows it (within the same account). Cross-account needs both to allow.
Evaluation logic — Always: explicit deny > SCP guardrail > identity policy allow > default deny. "Deny wins" is the one rule you cannot forget.
Assume Role — The core pattern for everything real: EC2 instance profile, Lambda execution role, CI/CD pipeline, cross-account access. Principal calls sts:AssumeRole, gets temporary credentials (15 min–12 hrs), uses those. The role has two policies: trust policy (who can assume it) + permission policy (what it can do).
Common interview traps:

SCPs don't grant access, they set the ceiling. Even with a full-access identity policy, if the SCP blocks it, you're denied.
* in Action or Resource is almost never right in production.
IAM is global — not region-specific.
Root account has no restrictions at all — hence "lock it with MFA and never touch it."

* in Action or Resource is almost never right in production.
IAM is global — not region-specific.
Root account has no restrictions at all — hence "lock it with MFA and never touch it."