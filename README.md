# JOTR

![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/creative-tutorials/tunnel-sharing) [![Discord-Connect](https://img.shields.io/badge/discord-JoinUs-green?logo=discord&style=plastic)](https://discordapp.com) ![License](https://img.shields.io/github/license/creative-tutorials/tunnel-sharing?color=blue) ![GitHub Repo stars](https://img.shields.io/github/stars/creative-tutorials/tunnel-sharing?style=social)

Jotr a simple tunnel sharing application that allows you to share your localhost live...

## Description

**JOTR** is a simple application that allows you to share your localhost, live for people to see, this app solves the issue where you want a developer to view your app but you don't want to pay for hosting, **JOTR** helps you simply convert your localhost into a secured tunnel that can be viewed live for others to see

## Example

```javascript
(async () => {
  const aPort = req.body.Port;

  const tunnel = await easyTunnel({ port: aPort });

  // the assigned public url for your tunnel
  // i.e. https://abcdefgjhij.localtunnel.me
  let requestedPort = details[details.length - 1].Port;
  tunnel.url;
  /**
   * Returns the URL of the page that the filter is applied to.
   * @returns {string} The URL of the page that the filter is applied to.
   */
  
  console.log(tunnel.url);
  requestedPort = tunnel.url;
  console.log(requestedPort);
  req.body.domainURL = requestedPort;
  tunnel.on("close", () => {
    console.log("tunnel closed");
  });
})();
```

The `tunnel.url` is the URL assigned to the port of the localhost engine, by default the domain is localhost, all user needs is to apply their port and wait for it to tunnel and server your file to you.

## Features

- Includes support for different types of requests
- application status that shows when the app is shipped successfully
- unique app id (your app id is unique and cannot be changed, also cannot be used by anyone)
- server status - shows when the server is running `(Admin Previlage only)`
- support domain URL - for the host request -> routes you to the live tunnel (default is "http://localhost:{YOUR_PORT}")

## Technologies

Jotr is built under cool Technologies and we would love to share a quick taste of what the technologies Jotr uses

- [React](https://reactjs.org/)
- [Nodejs](https://nodejs.org/en/)
- [Firebase](https://firebase.google.com/)
- [MongoDB](https://www.mongodb.com)


Copyright &copy; 2022 - creative-tutorials All rights reserved
