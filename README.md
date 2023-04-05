# Cryptozombies-Hardhat

<p align="center">
  <img width="200" height="200" src="https://assets-global.website-files.com/6364e65656ab107e465325d2/638165e43c3735fca5c735ba_LUe2aD4NbPzrShXcVtDMXBj2Jp8aQkvXdf6QDv9UA9Y.jpeg">
</p>

This is a implementaion of the good old Cryptozombies 🧟 (https://cryptozombies.io/) lessons using the Hardhat 👷 development environment (https://hardhat.org/) and modern Solidity 0.8.

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

```
  Kitties dummy contract
    ✔ Should return kittydna1 (1130ms)

  ZombieFactory contract
    ✔ Should emit an event on createRandomZombie (101ms)
    ✔ Zombie owner 1 should be msg.sender
    ✔ The same address should not be able to create a second zombie.

  ZombieFeeding contract
    ✔ Rightful zombie owner should be able to feedAndMultiply (85ms)
    ✔ Event should be emitted after successful feedAndMultiply
    ✔ Wrong zombie owner should not be able to feedAndMultiply
```

## Deploy & verify
```
npx hardhat run scripts/deployKitty.js --network sepolia
npx hardhat verify --network sepolia <address>
npx hardhat run scripts/deployZombies.js --network sepolia
npx hardhat verify --network sepolia <address>
```

## Todo
- Write more (unit) tests
- Create frontend with React/Next.js and ethers.js instead of the old web3.js