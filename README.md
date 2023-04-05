# Cryptozombies-Hardhat

<p align="center">
  <img width="400" height="400" src="https://assets-global.website-files.com/6364e65656ab107e465325d2/638165e43c3735fca5c735ba_LUe2aD4NbPzrShXcVtDMXBj2Jp8aQkvXdf6QDv9UA9Y.jpeg">
</p>

This is a implementaion of the Cryptozombies 🧟 (https://cryptozombies.io/) using the Hardhat 👷 development environment (https://hardhat.org/) and modern Solidity 0.8.

## Goal
My goal was to learn more about Hardhat testing & debugging. ❤️ it.

## Contracts
The contracts are deployed on the Sepolia Testnet Chain.

Cryptozombies contracts:
https://sepolia.etherscan.io/address/0x9E09c43A1EEcD174E5863c4eDB532eE9345C544e#code

Kitty dummy contract:
https://sepolia.etherscan.io/address/0xA3628909Ed05d297397EF356A579bDEC68609477#code

 
## Tests
```
npx hardhat test --network hardhat
```

## Deploy & verify
```
npx hardhat run scripts/deployKitty.js --network sepolia
npx hardhat verify --network sepolia <address>
npx hardhat run scripts/deployZombies.js --network sepolia
npx hardhat verify --network sepolia <address>
```
