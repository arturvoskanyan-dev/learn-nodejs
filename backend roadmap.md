1. Node.js Հիմունքներ
- Ներմուծումներ և Բաժանում (Modules)
✅ CommonJS մոդուլների համակարգ (require, module.exports)
✅ ES6 Modules (import/export)

Third-party Libraries (npm packages)

Նորագույն վարկածներ և փոփոխություններ (Node 14, 16, 18, 20)

- Global Objects
global – Յուրաքանչյուր գործառույթին հասանելի համընդհանուր օբյեկտ

__dirname և __filename – Դիրքային և ֆայլային ուղիների մեջ

process – Տեղեկություններ ընթացքի և միջավայրի մասին

require – Մոդուլ ներմուծելու մեթոդ

- Node.js միջավայրի տեղադրում
Installation & Setup – nvm օգտագործումը տարբեր Node վարկածներով

Environment Variables – Սպառողների միջավայրի փոփոխականները

package.json-ի ստեղծում և կառավարման հրահանգներ

Dependency management (npm, yarn)

2. Asynchronous Programming
- Callbacks
Հրահանգների հերթականություն և ելքեր

Callback hell-ը և դրա լուծումները

- Promises
then(), catch() մոդուլների աշխատանք

Promise chaining և երկակի պատկերման խուսափում

Promise.all, Promise.race(): Երբ բազմաբնույթ գործառույթներ պետք է կատարվեն միաժամանակ

- Async/Await
Syntax և առավելություն՝ ավելի պարզ ու ընթեռնելի կոդի համար

Error Handling: try/catch

Sequential vs Concurrent operations: Դիմումների կատարումը ժամանակի ընթացքում

- Event Loop
Phases of Event Loop: Timers, I/O callbacks, Poll, Check, Close callbacks

Blocking vs Non-blocking operations: Ֆունկցիոնալ տարբերությունները

Queue Management: Macro vs Micro tasks

3. Ֆայլային համակարգի մոդուլներ (Core Modules)
- fs (File System)
Read/Write ֆայլերի հետ աշխատանք

Asynchronous vs Synchronous methods

File descriptors, Streams ֆայլերի աշխատանք

Directory traversal (fs.readdir, fs.opendir)

File permissions: ACL (Access Control List)

- path
Path Manipulation: path.join(), path.resolve(), path.basename()

Relative vs Absolute paths

- http / https
Basic HTTP server ստեղծում

Request and Response օբյեկտների կառավարում

HTTP methods (GET, POST, PUT, DELETE)

Content-Type headers և տարբեր տեսակների տվյալներ ուղարկելու ձևեր

- url
URL parsing և formatting (url.parse(), url.format())

Query parameters: URLSearchParams

- events
EventEmitter-ի աշխատանք

Custom events ստեղծում

Event-driven architecture ստեղծել

once() և removeListener() մեթոդներ

4. Web Development
- Express.js Framework
Installation և Basic Setup

Routing: Dynamic routing, parameters, and query strings

Middleware: Error handling, logging, authentication

Template engines: EJS, Handlebars, Pug

HTTP Methods: app.get(), app.post(), app.put(), app.delete()

- Middleware in Express.js
Custom Middleware: req, res, next

Built-in Middleware: express.json(), express.static()

Third-party Middleware: cors, morgan, helmet

- Request & Response Handling
Request Parsing: Form data, JSON bodies, query params

Sending Responses: res.send(), res.json(), res.redirect()

Status codes: Common HTTP status codes (200, 404, 500)

5. Data Storage & Databases
- MongoDB
CRUD operations with Mongoose

Schemas and Models

Validation, Aggregation pipelines

Indexing և Performance tuning

- SQL Databases (PostgreSQL, MySQL)
Using ORM: Sequelize, Knex.js

Relationships: One-to-Many, Many-to-Many

SQL Queries: SELECT, JOIN, INSERT, UPDATE, DELETE

Transaction management in SQL

- Redis
Caching: Store session data or frequently used data in-memory

Pub/Sub mechanism

Persistence: RDB, AOF modes

6. API-ներ
- RESTful API:
Design principles: Stateless, Idempotency, Resource-based

HTTP Status Codes: 200, 201, 400, 404, 500

CRUD Operations: GET, POST, PUT, DELETE

Versioning: URL versioning, Header versioning

- GraphQL:
Query language for APIs

Schemas and resolvers

Apollo Server և Apollo Client

Subscriptions for real-time updates

- WebSockets (Socket.io)
Real-time communication between client and server

Broadcasting, rooms: socket.emit(), socket.on()

- JWT (JSON Web Tokens)
Authentication: User login and session management

JWT Structure: Header, Payload, Signature

Token verification: Using libraries like jsonwebtoken

7. Testing
- Unit Testing
Mocha, Jest, Chai testing frameworks

Test-driven development (TDD)

Mocking: sinon, nock

Assertions: True/False, Equal, DeepEqual, Exist

- Integration Testing
Test APIs: Using libraries like supertest

Database testing: Mock databases or use in-memory databases

- End-to-End (E2E) Testing
Cypress, Puppeteer, Playwright testing tools

UI testing: Interactions, Clicks, Form submissions

8. Performance and Optimization
- Profiling:
CPU profiling, Heap snapshots

Event loop lag: Monitoring delays in I/O

Garbage Collection tuning

- Load Balancing:
Cluster mode in Node.js

Horizontal scaling: Using load balancers

- Caching:
Redis: Cache frequently queried data

HTTP caching: Headers Cache-Control, ETag

Database query optimization: Using indexes, aggregations

9. Security
- HTTPS
TLS/SSL certificates և HTTPS սերվերների ստեղծում

HSTS: Strict Transport Security

- Input Validation & Sanitization
Libraries: express-validator, joi

Prevent SQL injection, XSS (Cross-Site Scripting)

- Authorization & Authentication
OAuth2: Authorization flows

JWT: Secure token-based login

Session-based Authentication

10. Deployment & DevOps
- Dockerizing Node.js Apps
Dockerfiles: Setting up containers for production

CI/CD pipelines: Jenkins, GitLab, GitHub Actions

- Server Setup
NGINX/Apache որպես ռիվերս պրոքսի

PM2: Process manager for Node.js

- Monitoring:
Logging: winston, morgan

APM (Application Performance Monitoring): New Relic, Datadog

11. Advanced Topics
- Worker Threads
Offloading computation-heavy tasks to prevent blocking the event loop

- Native Addons (C++ with Node.js)
Node.js bindings for native code to increase performance

- Streams
Readable, Writable, Transform streams: Working with large files/data

Pipes and Flow Control