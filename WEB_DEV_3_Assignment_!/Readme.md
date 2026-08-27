# Smart Utility Toolkit

Node.js core modules (process, http, fs, crypto) use karke banaya gaya assignment.
Koi external npm package use nahi kiya gaya.

## Files
- calculator.js -> CLI calculator (process.argv) + functions export karta hai (add, sub, mul, div)
- modules/isEven.js, modules/logger.js -> custom modules
- app.js -> modules ka reuse demo
- server.js -> HTTP server with routes (/, /about, /contact, 404)
- fileManager.js -> file CRUD using fs module
- dice.js -> random dice generator using crypto module

## How to run
node calculator.js add 10 5
node app.js
node server.js
node fileManager.js
node dice.js