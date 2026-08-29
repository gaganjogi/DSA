CONFIGURATION MANAGEMENT

settings for the application 
like env secret keys external services 

not only that

db connection logs performance metrics which feature to give for users

and also feature flags for the current deployment old checkout flow or new checkout flow

db connection pool

session timeout 

business tools (max order for the user)

to correct the configuration chaos

Type of configurations:-

1. Application settings - log level -(environment) port connection pool timeout values 
2. Database config - host port user password connection url
3. External services - api keys, urls, timeouts , email provider link
4. Feature flags - on/off for features security infra 


Storage of configs
In env

libraries will take and loads in environment manually 
in kuernetes it will check from vaults 

in files  mostly yaml as json do not have comments
toml

key value stores like redis etcd 

cloud providers azure key vault aws secrets manager gcp secret manager or hybrid of these

why do we have different configs depending on environment?

dev - fast test debug level
test -  automated
staging - as same as production 
prod - security focused, monitoring, observability, performance optimization

without changing application code or it should behave differently 

example db pool size
10
2 - staging
100 - prod
 
 security never hardcode secrets 
 go for cloud aws valut encrypting config 
 access control for config

 rotate secrets process.env we need to validate the config like zod which are mandatory or optional 