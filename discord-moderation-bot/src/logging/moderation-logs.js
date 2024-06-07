const fs = require('fs');

function logModerationAction(action, user, reason) {
  const timestamp = new Date().toISOString();
  const logEntry = `${timestamp} - ${action} - User: ${user} - Reason: ${reason}\n`;

  fs.appendFile('moderation.log', logEntry, (err) => {
    if (err) {
      console.error('Error logging moderation action:', err);
    }
  });
}

module.exports = {
  logModerationAction,
};