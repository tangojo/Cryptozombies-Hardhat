// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.18;

// Uncomment this line to use console.log
//import "hardhat/console.sol";

import "./ZombieFactory.sol";

// Interface
// https://solidity-by-example.org/interface/
interface ICounter {
    function getKittyDNA(uint _id) external view returns (uint);
}


contract ZombieFeeding is ZombieFactory {

// Initialize address from Kitty contract 
address private kittyAddress = 0x2112CBCaB73755EE6a7B78D1b1Ce6fAE5eCC0723;

  function feedAndMultiply(uint _zombieId, uint _targetDna) public {
    //console.log(zombieToOwner[_zombieId]); 
     require(msg.sender == zombieToOwner[_zombieId], "You are not the zombie owner");
    // console.log("till here it works");

    // https://solidity-by-example.org/structs/
    Zombie storage myZombie = zombies[_zombieId - 1];
    _targetDna = _targetDna % dnaModulus;
    uint newDna = (myZombie.dna + _targetDna) / 2;
    _createZombie("NoName", newDna);
  }

    function getKitty(uint _id) external view returns (uint) {
        uint kittydna = ICounter(kittyAddress).getKittyDNA(_id);
        return kittydna;
    }

  function feedOnKitty(uint _zombieId,uint kittyId) public {
    uint kittyDna = ICounter(kittyAddress).getKittyDNA(kittyId);
    // And modify function call here:
    feedAndMultiply(_zombieId, kittyDna);
  }

}