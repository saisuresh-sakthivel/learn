/**
  Hello World
**/

//console.log("hello world")

/** 
  Events
**/

/*var events = require('events');
var eventEmitter = new events.EventEmitter();
eventEmitter.on("connection",function(){
	console.log("connection");
	eventEmitter.emit("data_recieved");
});
eventEmitter.on("data_recieved",function(){
	console.log("data_recieved");
});
eventEmitter.emit("connection");*/

/**
  Streams
  RWDT - Read Stream, Write Stream, Duplex Stream, Transform Stream
  Read Stream.
**/
/*var fs = require('fs');
var data = '';
var readStream = fs.createReadStream('input.txt');
readStream.setEncoding('utf-8');
readStream.on('data',function(chunk){
	data+=chunk;
});
readStream.on('end',function(){
	console.log(data);
});
readStream.on('error', function(err){
   console.log(err.stack);
});

console.log("Program Ended");*/

/*
 * Streams
 * Write Stream
 */
/* var fs = require("fs");
var data = 'Simply Easy Learning';

// Create a writable stream
var writerStream = fs.createWriteStream('output.txt');

// Write the data to stream with encoding to be utf8
writerStream.write(data,'UTF8');

// Mark the end of file
writerStream.end();

// Handle stream events --> finish, and error
writerStream.on('finish', function() {
    console.log("Write completed.");
});

writerStream.on('error', function(err){
   console.log(err.stack);
});

console.log("Program Ended");*/

/*
 * Streams
 * Piping the streams
 */

/*var fs = require("fs");

// Create a readable stream
var readerStream = fs.createReadStream('input.txt');

// Create a writable stream
var writerStream = fs.createWriteStream('output.txt');

// Pipe the read and write operations
// read input.txt and write data to output.txt
readerStream.pipe(writerStream);

console.log("Program Ended");*/

/*
 * Streams
 * Chaining
 */
/*var fs = require("fs");
var zlib = require('zlib');

// Compress the file input.txt to input.txt.gz
fs.createReadStream('input.txt')
   .pipe(zlib.createGzip())
   .pipe(fs.createWriteStream('input.txt.gz'));
  
console.log("File Compressed.");*/

/*
 * File System
 */
 var fs = require("fs");

// Asynchronous - Opening File
console.log("Going to open file!");
fs.open('input.txt', 'r+', function(err, fd) {
   if (err) {
      return console.error(err);
   }
  console.log("File opened successfully!");     
});