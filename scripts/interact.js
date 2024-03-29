const { Web3 } = require('web3');
const abi = require('../artifacts/contracts/Tracker.sol/TransactionTracker.json');

// Assuming you have the ABI of the TransactionTracker contract
const transactionTrackerAbi = [abi.abi]; 

const web3 = new Web3(new Web3.providers.HttpProvider('https://sepolia-rollup.arbitrum.io/rpc'));

async function trackWalletBalanceAndTransactions() {
    try {
        // Replace with the deployed address of your TransactionTracker contract
        const walletAddress = '0x8D3C011B8285a9a0dfb06CA5Fe23ca8046360984';

        // Interact with the deployed TransactionTracker contract
        // const transactionTrackerContract = new web3.eth.Contract(transactionTrackerAbi, contractAddress);

        // Get the balance of the wallet address before the transfer
        const balanceBeforeWei = await web3.eth.getBalance(walletAddress);
        const balanceBeforeEther = web3.utils.fromWei(balanceBeforeWei, 'ether');
        console.log('Wallet balance before transfer:', balanceBeforeEther, 'ETH')

    } catch (error) {
        console.error('Error:', error.message);
    }
}

trackWalletBalanceAndTransactions();









// -------------------------------------Deployed Address------------------------------------


// const {Web3} = require('web3');
// const contractABI = require('../artifacts/contracts/Tracker.sol/TransactionTracker.json');

// async function main() {
//   const web3 = new Web3('https://sepolia-rollup.arbitrum.io/rpc');

//   // 0xe8faf1a3193b79ff93d3859d13d585d7bb24157f
//   const contractAddress = "0xe8faf1a3193b79ff93d3859d13d585d7bb24157f";

//   try {
//     const contract = new web3.eth.Contract(contractABI.abi, contractAddress);
//     console.log('Contract Address', contractAddress);
//     const balance = await contract.methods.getBalance().call();

//     console.log('Contract balance:', balance.toString());
//   } catch (error) {
//     console.error('Error:', error.message);
//   }
// }

// main();




