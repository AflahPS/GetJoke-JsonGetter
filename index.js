const http = require("http");
const url = require("url");
const fs = require("fs");
const superagent = require("superagent");
const express = require("express");
const app = express();

const jsonGetter = require('./modules/JsonGetter')
jsonGetter();

