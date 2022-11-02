const exec = require('child_process').exec;

// read file
const read = (path) => {
   return new Promise((resolve, reject) => {
      exec(`cat ${path}`, (err, stdout, stderr) => {
         if (err) {
            reject(err);
         } else {
            resolve(stdout);
         }
      });
   });
};

module.exports = {
   read
};
