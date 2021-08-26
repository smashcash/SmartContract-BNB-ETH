/* global artifacts */
require('dotenv').config({ path: '../.env' })
const ETHSmash = artifacts.require('ETHSmash')
const Verifier = artifacts.require('Verifier')
const hasherContract = artifacts.require('Hasher')


module.exports = function(deployer, network, accounts) {
  return deployer.then(async () => {
    const { MERKLE_TREE_HEIGHT, ETH_AMOUNT } = process.env
    const verifier = await Verifier.deployed()
    const hasherInstance = await hasherContract.deployed()
    await ETHSmash.link(hasherContract, hasherInstance.address)
    const Smash = await deployer.deploy(ETHSmash, verifier.address, ETH_AMOUNT, MERKLE_TREE_HEIGHT, accounts[0])
    console.log('ETHSmash\'s address ', Smash.address)
  })
}
