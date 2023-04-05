# Cryptozombies-Hardhat

This is a implementaion of the Cryptozombies 🧟 (https://cryptozombies.io/) using the Hardhat 👷 development environment (https://hardhat.org/) and modern Solidity 0.8.18.

## Goal
My goal was to learn more about Hardhat testing & debugging. ❤️ it.

This contract is deployed on the Sepolia Testnet Chain.
Kitty contract:
https://sepolia.etherscan.io/address/0xA3628909Ed05d297397EF356A579bDEC68609477#code

Zombie contracts:
https://sepolia.etherscan.io/address/0x9E09c43A1EEcD174E5863c4eDB532eE9345C544e#code

 
## Tests
npx hardhat test --network hardhat

## Deploy & verify
1. npx hardhat run scripts/deployKitty.js --network sepolia
2. npx hardhat verify --network sepolia <address>
3. npx hardhat run scripts/deployZombies.js --network sepolia
4. npx hardhat verify --network sepolia <address>
