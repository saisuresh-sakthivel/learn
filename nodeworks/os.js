var os = require('os');
console.log(' Path for temperory directory' +os.tmpdir());
console.log(' EOL :'+os.EOL);
console.log(' arch:'+os.arch());
//console.log(' constants :'+os.constants);
console.log(' cpus :'+JSON.stringify(os.cpus()));
console.log(' endianness :'+os.endianness());
console.log(' freemem :'+os.freemem());
console.log(' homedir :'+os.homedir());
console.log(' hostname :'+os.hostname());
console.log(' loadavg :'+os.loadavg());
console.log(' networkInterfaces :'+JSON.stringify(os.networkInterfaces()));
console.log(' platform :'+os.platform());
console.log(' release :'+os.release());
console.log(' tmpdir :'+os.tmpdir());
console.log(' totalmem :'+os.totalmem());
console.log(' type :'+os.type());
console.log(' uptime :'+os.uptime());
