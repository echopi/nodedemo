'use strict'

const yargsParser = require('yargs-parser');

const flags = '--disable-network-throrrling --tdbank true --tdbank=fasle --no-login --user.name jiewei.ljw --user.id=10086';

const parsed = yargsParser(
  flags.trim(), {
    configuration: {
      'camel-case-expansion': true,
      'duplicate-arguments-array': false,
      'boolean-negation': true
    }
  });

/**
 { _: [],
  'disable-network-throrrling': true,
  disableNetworkThrorrling: true,
  tdbank: 'fasle',
  login: false,
  user: { name: 'jiewei.ljw', id: 10086 } } 
 */

console.log(parsed);
