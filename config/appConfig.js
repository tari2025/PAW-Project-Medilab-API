const path = require('path');

module.exports = {
  appName: 'Medilab',
  port: process.env.PORT || 3025,
  logDir: path.join(__dirname, '..', 'logs'),
  logFile: 'logger.md'
};
