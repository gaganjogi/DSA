The Docker daemon is a background service (process) that does all the real work of Docker. Think of it as the engine — everything else (like the docker command you type) is just a remote control that talks to this engine.

What it manages, specifically
Images — pulling them from registries (like Docker Hub), storing them in layers, building new ones from a Dockerfile
Containers — creating, starting, stopping, pausing, deleting them (this is where those namespaces/cgroups we talked about get set up)
Networks — creating the virtual bridges, assigning IPs, setting up that NAT we discussed
Volumes — persistent storage that survives container restarts
The build process — layer caching, executing Dockerfile instructions

You type:  docker run nginx
              │
              ▼
   Docker CLI (client) — just sends a request
              │
              ▼
   Docker daemon (dockerd) — does the actual work
              │
              ▼
   Talks to the Linux kernel — namespaces, cgroups, iptables
   

So the CLI (docker ... commands) isn't doing the work itself — it's sending API requests (usually over a Unix socket, /var/run/docker.sock) to the daemon, which then talks to the Linux kernel to actually create isolated processes, set up networking, mount filesystems, etc.