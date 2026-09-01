internet service provider

public address is required willl assign that to one router (public ip address)

and router will have some private address list 

normal device will have localhost(mind ip) internal network mac address private ip address

how ip allote?
automate - dhcp

when talking with outside world router will assign that public address as source ip address
and then again it will reverse network address translation (nat)


request response cycle

trace - get address of the file get  connect - tunnel to the server http method

in godaddy 
domain manager 
settings are record
A - address record - ip address
CNAME - canonical name record - alias record redirect
mx - mail exchange record - email server
txt - text record - verification
ns - name server record - dns server for one domain to control traffic set two name server
soa - start of authority - primary dns server for domain
srv - service record - specific port service like ldap
ptr - pointer record - reverse dns lookup instead of our domain to confuse send other dns name


after setting up new instance new ip address will get updated in zone file(list of ip address) connected with some name server