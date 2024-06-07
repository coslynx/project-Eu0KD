const fs = require('fs');
const path = require('path');

const userBehaviorLogFile = path.join(__dirname, 'user-behavior-logs.txt');

const logUserBehavior = (userId, action) => {
  const timestamp = new Date().toISOString();
  const logEntry = `${timestamp} - User ID: ${userId}, Action: ${action}\n`;

  fs.appendFile(userBehaviorLogFile, logEntry, (err) => {
    if (err) {
      console.error('Error logging user behavior:', err);
    }
  });
};

module.exports = {
  logUserBehavior,
};