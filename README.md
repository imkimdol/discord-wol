## Overview

`discord-wol` is a Discord bot that allows the user to wake their device using Wake-on-LAN from a Discord command.

## Requirements

- [Node.js](https://nodejs.org/) (Tested with v18.19.0)
- [Yarn Classic](https://classic.yarnpkg.com/)

## Setup

1. Create a new Discord bot from the [Discord Developer Portal](https://discord.com/developers/applications).
2. Add the bot to a server.
3. Clone the repository.
4. Create a `.env` file with the required tokens, IDs, and addresses (example below).
5. Deploy the wake command to the specified server using `yarn run deploy` from the console.*
6. Start the bot using `yarn run start` from the console.

*To deploy to ALL servers, use `yarn run deploy all` (NOT RECOMMENDED)

#### `.env` example:
```
DISCORD_TOKEN="<Bot token>"

TEST_GUILD_ID=<ID of the server to deploy commands to>
BOT_ID=<Bot ID>

OWNER_ID=<Device owner's user ID>
MAC_ADDRESS="<MAC address of device to wake>"
```

## Usage

Once the bot is running, use the `/wake` command to wake your specified device.
