"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const status_controller_1 = require("./controllers/status.controller");
// Our Express APP config
const app = express();
app.set("port", process.env.PORT || 3000);
// API Endpoints
app.get('/', (req, res) => {
    res.send("Hello world");
});
app.get('/hi', status_controller_1.hi);
app.get('/awesome', status_controller_1.awesome);
// export our app
exports.default = app;
//# sourceMappingURL=app.js.map