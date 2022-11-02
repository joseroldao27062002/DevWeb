const { exec } = require('child_process');

module.exports = {
     cat(file) {
        const command1 = `cat ${file}`
        const command2 = `wc -l ${file}`
        const content = exec(command1 + ";" + command2)

        return content;
     }
}
