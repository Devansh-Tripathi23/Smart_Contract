const { Web3 } = require('web3');
const abi = require('../artifacts/contracts/Tracker.sol/TransactionTracker.json')

// Assuming you have the ABI of the SimpleWalletTracker contract
const walletTrackerAbi = [abi.abi]; // Replace with the actual ABI

const web3 = new Web3(new Web3.providers.HttpProvider('https://sepolia-rollup.arbitrum.io/rpc'));

async function trackWalletBalanceAndTransactions() {
    try {
        // Replace with the deployed address of your SimpleWalletTracker contract
        const contractAddress = '0xe8faf1a3193b79ff93d3859d13d585d7bb24157f';
        const walletAddress = '0x8D3C011B8285a9a0dfb06CA5Fe23ca8046360984';

        // Get the balance of the wallet address
        const balanceWei = await web3.eth.getBalance(walletAddress);
        const balanceEther = web3.utils.fromWei(balanceWei, 'ether');

        console.log('Wallet address:', walletAddress);
        console.log('Wallet balance:', balanceEther, 'ETH');

        // Interact with the deployed SimpleWalletTracker contract
        const walletTrackerContract = new web3.eth.Contract(walletTrackerAbi, contractAddress);

        // Get past events for FundsReceived
        const fundsReceivedEvents = await walletTrackerContract.getPastEvents('FundsReceived', {
            filter: { sender: walletAddress },
            fromBlock: 0, // Adjust the starting block as needed
            toBlock: 'latest',
        });

        fundsReceivedEvents.forEach(event => {
            console.log('Funds received from:', event.returnValues.sender);
            console.log('Amount:', web3.utils.fromWei(event.returnValues.amount, 'ether'), 'ETH');
        });

        // Similar steps can be done for FundsWithdrawn and FundsSent events

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




