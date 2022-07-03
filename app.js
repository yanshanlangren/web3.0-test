const Web3 = require('web3')
const rpcURL = 'https://mainnet.infura.io/v3/953247d0c42b419aa3416810d625cc8c'
const web3 = new Web3(rpcURL)

web3.eth.getBlockNumber().then(console.log)