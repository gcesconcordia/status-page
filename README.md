# GCES Systems Status Page

Keep track of our internal services to make sure it is smooth and spiffy ✨

Currently keeping track of:
- Homepage at https://gcesconcordia.com
- UpDash at https://updash.gcesconcordia.com

## How does it work?

By sending a HTTP GET request to the sites' `/healthcheck` endpoint. When the API endpoint responds with a `OK` 200 status, we know it is ballin'. Otherwise, raise the alarm bells 🔔.

Note that this is not configured to be a polling feature since that could potentially overload the server and degrade performance for users.

## Deployment

The proof-of-concept (PoC) is currently being hosted on Vercel, which is not ideal 🙅. It needs to be lifted and shifted to a dedicated server (Server 1) and potentially replicated on another (Server 2) to ensure the status page is operational on the event of Vercel infrastructure or Server 1 or Server 2 fails.

### Manually

To manually deploy on a Linux baremetal server (with `ssh` and `root` access):

- Log in with `ssh` to the server
- Make sure the following dependencies are installed
  - git
  - nodejs >= 19.0.0
  - npm
  - python >= 3.7
  - build-essential (for `apt`-based Linux distributions)
  - ufw
  - nginx
- Clone the repo: `git clone https://github.com/gcesconcordia/status-page`
- Install

WIP...
