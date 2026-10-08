const fs = require('node:fs');
const path = require('node:path');

const logsDir = path.join(__dirname, 'Logs');



// creating log files
function createLogFiles() {
  if (!fs.existsSync(logsDir)) {
    fs.mkdirSync(logsDir);
  }

  // change the current process to the new Logs directory
  process.chdir(logsDir);

  for (let i = 1; i <= 10; i++) {
    const fileName = `log${i}.txt`;
    fs.writeFileSync(fileName, `This is log file number ${i}`);
    console.log(fileName);
  }

}
// removing log files
function removeLogFiles() {
  if (fs.existsSync(logsDir)) {
    const files = fs.readdirSync(logsDir);

    files.forEach((file) => {
      console.log(`delete files... ${file}`);
      fs.unlinkSync(path.join(logsDir, file));
    });

    fs.rmdirSync(logsDir);
    console.log('Logs directory removed');
  }
}

createLogFiles();
removeLogFiles();
