function Elliot() {

  var chalk = require('chalk');

  this.success = function(cmd) {
    console.log(chalk.bgGreen.white('>> SUCCESS: ') + ' ' + chalk.white(cmd) + '\n');
  };

  this.info = function(cmd) {
    console.log(chalk.bgBlue.white('>> INFO:    ') + ' ' + chalk.white(cmd) + '\n');
  };

  this.warning = function(cmd) {
    console.log(chalk.bgYellow.white('>> WARNING: ') + ' ' + chalk.white(cmd) + '\n');
  };

  this.error = function (cmd) {
    console.log(chalk.bgRed.white('>> ERROR:   ') + ' ' + chalk.white(cmd) + '\n');
  };

}

module.exports = new Elliot();
