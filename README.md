# tunnel-sharing


![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/creative-tutorials/tunnel-sharing) [![Discord-Connect](https://img.shields.io/badge/discord-JoinUs-green?logo=discord&style=plastic)](https://discordapp.com)

A simple tunnel sharing application that allows you to share your localhost live...

## Description

tunnel-share is a simple application that allows you to share your localhost, live for people to see, this app solves the issue where you want a developer to view your app but you don't want to pay for hosting, tunnel-share helps you simply convert your localhost into a secured tunnel that can be viewed live for others to see

## Example

```javascript
// input your host url and let the server do the rest
const hostURL = "http://localhost:8080";

const connect = () => {
  //   making a req to the server
};
```

The `connect` method is used to connect to the server, when connecting to the server we're also making a request to the server


## Features

- Includes support for different types of requests
- application status that shows when the app is shipped successfully
- unique app id (your app id is unique and cannot be changed, also cannot be used by anyone)
- server status - shows when the server is running
- support domain URL - for the host request -> routes you to the live tunnel (default is "http://localhost:{YOUR_PORT}")

## Usage

* Install
```bash
yarn add
```
OR
```bash
npm install
```