require("babel-register");
require("babel-polyfill");

const HDWalletProvider = require("@truffle/hdwallet-provider");
// const infuraURL = "https://rinkeby.infura.io/v3/3976538f765d498d973c789f3b0a5d3f";
const infuraURL = "https://ropsten.infura.io/v3/87e0437f60ab4bab8630d65a96281f4e";
const fs = require("fs");
const mnemonic = fs
  .readFileSync(".secret")
  .toString()
  .trim();

module.exports = {
  networks: {
    // development: {
    //   host: "127.0.0.1",
    //   port: 7545,
    //   network_id: "*", // Match any network id
    // },
    ropsten: {
      provider: () => new HDWalletProvider(mnemonic, infuraURL),
      network_id: 3, // Ropsten's network id
      gas: 5500000,
    },
  },
  contracts_directory: "./src/contracts/",
  contracts_build_directory: "./src/abis/",
  compilers: {
    solc: {
      version: "0.5.0",
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
