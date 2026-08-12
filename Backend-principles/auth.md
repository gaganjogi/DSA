Authentication and Authorization
who are u (Authentication) and what can u do (Authorization)

earlier handshake village head
explicit auth - independent (wax seal with signatures) but forgery possible "something u possess"

watermarking - digital watermarking (unique identifier in the image)
codes - unique codes (qr codes, etc)

then telegraph passphrases came(static keys) "something u know"

multisystem user but password plaintext

storing passwords securely (cryptographic algorithms like bcrypt, scrypt, argon2) plain text to hash

asymmetric encryption (public key cryptography) - public and private keys

MFA 
what you know
what you have
what you are (biometrics)

21st century - OAuth, SAML, JWT, API keys, tokens

Three components to discuss:-
Sessions , JWTs , Cookies

As http is stateless
We need web to be stateful (Cart items)

This is where sessions come in
where logged in user data is stored on the server with session id persistent store(redis)
and then we send the session id in the cookie to the browser
then what happens is that the browser sends the session id in the cookie to the server
and the server looks up the session id in the persistent store and retrieves the user data
and it have expiration time

why session_id to JWT happen
1. Memory as we need to store the data in in-memory store (redis) 
2. Replication across multiple servers (latency)

JWT is stateless mechanism transfering claims between two parties
self contained token (user data + expiration time + signature)

JWT 3 parts:-
1. Header (signing algorithm, token type)
2. Payload (user data, expiration time, signature)
3. Signature (signing algorithm, token type) whether we are the one issued it (data is tampered or not)

if someone change jwt and you verify with our secret key 

anyone on the postal route can read a postcard. But if it has a wax seal from a specific signet ring, the recipient knows nobody rewrote the message after the sender sealed it — even though the message itself was never hidden.

JWT is not encrypted (only encoded) so don't store sensitive data in jwt
Resolved:-
1. JWTs are stateless
2. JWT's scalibitlity(as cookies is not required)
3. Jwt's portable

I (the server) vouch that this user has role user." You carry that token around and present it on every request instead of logging in again.

as jwt is stateless there was no server if someone has access to you jwt token they can impersonate you
and we cannot revoke jwt tokens as all of them will be logged out

whole point of JWTs in an authentication context: the server needs to trust claims about you without hitting a database every time, and the signature is what lets it trust those claims without re-verifying them from scratch.

Hybrid approach also used (session + jwt)

Do not think too much go for auth provider

Cookie server storing in client browser and each request cookie is sent to server


Types of authentication:-
1. Stateful authentication (same session_id inside cookie) security good all users can be tracked challenges(memory intensive) http only session id as js should not read
2. Stateless authentication (JWT) 
3. API Key authentication
4. OAuth 2.0

in stateless JWT using the secret key stored in server  and send the jwt back to client and next request it need 

api key:-
we need to ui for open api servers (programatically)

whatver chatgpt can do i can do that in my ui right using their api key

machine to machine (user backend server to openai api server)

in the above three mainly we deal with many credentials part right

reusing password
fatigue

OAuth concept delegation

One platform asking access or resource from other platform

password sharing - bad practice

instead of password sharing we use token (permission for only one resource)

mainly 4 components:-
resource owner 
resource server 
client 
authorization server 

OAuth 1.0
1. Client redirects to authorization server
2. Authorization server provides the token after giving permission by resource owner
3. Sends the token to client 
4. CLient used the token to access the resource (resource server)

OAuth 2.0
1.0 was complex
crypto graphic signature was error prone

so 2.0 introduces
1. Bearer token
2. Developer to choose mobile or web app
3. Machine to machine communication
4. Device code flow


OAuth is good for authorization (what permission you can do)

So openID Connect came
Id token (JWT) info (issurer , user id , expiry time , etc)
profile info and stores to identify using google then authorization

Here the client will get the auth code and id token from authorization server
then using this auth code we get the auth token (access token jwt) from the resource server and then send to client

now using this client with every request will sends the access token (jwt) to resource server

What to use when?

Stateful - Saas based
Stateless - API based(microservices)
OAuth - third party
API key - machine to machine

AUTHORIZATION
providing specific permission to specific user on the platform (multi tenant architecture)

people came up with rbac(role based access role)

dead zone only for admin

approprite error message

in authentication do not send normal error message like user not found password is incorrect and all this will help for hackers to try different combinations

keep generic message like authentication is failed

timing attacks:-
when user submits the credentials

first user not correct - less time delay
but for password - it may take little more time

attackers can find the user name is correct 

so do constant time operations

or same time delay 