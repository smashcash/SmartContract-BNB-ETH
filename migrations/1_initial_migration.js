/* global artifacts */
const Migrations = artifacts.require('Migrations')

module.exports = function(deployer) {
  if(deployer.network === 'testnet') {
    return
  }
  deployer.deploy(Migrations)
}
