require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();
require("@nomicfoundation/hardhat-verify");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  settings: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  mocha: {
    timeout: 40000
  },
  networks: {
    arbitrum_sepolia: {
      url: 'https://sepolia-rollup.arbitrum.io/rpc',
      chainId:421614,
      accounts: [
        `0x77f27452f46e8195d366e8b99ea4586aeb47e0f30e9951eef8da59cd5c46e213`
      ],
    },
  },
  sourcify: {
    enabled:false
  }
};









