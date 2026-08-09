Client (js app) and server (rust app) client make http calls

GET http://domain.com/users

request
{
    "users": [
        {
            "id": 1,
            "name": "John Doe"
        }
    ]
}

OSI Model

application- physical - one machine connnected to physical - application to communicate (language agnostic)
we need to have common standards (set of rules) to communicate

js standards to common standards rust will make that to struct and vice versa

coming up with serialization and deserialization

converting to some format that can be sent over network(languages agnostic)

json for serialization and deserialization

yaml xml all are text based formats

type of serialization:
- text based
- binary based

JSON
{
    "name": "John Doe"
}

keys inside double quotes

main thing is before sending we need to follow to send in portable format

in server side also it again get converted to json

serialization & deserialization - are the techniques data is converted into standard format client send and server receives in standard format and perform business logic and send that again in that format (language agnostic)
