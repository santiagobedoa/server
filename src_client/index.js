/**
 * A simple Node.js script for serving files using HTTP.
 *
 */

const http = require("http");
const fs = require("fs");
const path = require("path");

// Create an HTTP server
const server = http.createServer((request, response) => {
  // Create a file path based on the URL of the request
  let filePath = "." + request.url;
  if (filePath === "./") {
    filePath = "./index.html";
  }

  // Get the extension of the file path in lowercase
  const extname = String(path.extname(filePath)).toLowerCase();
  // Mapping of file extensions to MIME types
  const mimeTypes = {
    ".html": "text/html",
    ".js": "text/javascript",
    ".css": "text/css",
    ".json": "application/json",
    ".png": "image/png",
    ".jpg": "image/jpg",
  };

  // get the MIME type of the file based on its extension
  const contentType = mimeTypes[extname];

  // Read the file
  fs.readFile(filePath, (error, data) => {
    // If and error ocurr while readding the file
    if (error) {
      response.writeHead(404);
      response.write("Solati Bot is gone...");
      response.end();
      return;
    }

    // If the file was successfully read, send it to the client
    response.writeHead(200, { "Content-Type": contentType });
    response.end(data, "utf-8");
  });
});

server.listen(3000);
