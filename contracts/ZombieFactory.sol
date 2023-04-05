// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.18;

// Uncomment this line to use console.log
//import "hardhat/console.sol";

contract ZombieFactory {

    // events
    event NewZombie(uint zombieId, string name, uint dna);

    // state variables stored on the blockchain
    uint dnaDigits = 16;
    uint dnaModulus = 10 ** dnaDigits;

    struct Zombie {
        string name;
        uint dna;
    }

    // Array
    Zombie[] public zombies;

    // Mappings
    mapping (uint => address) public zombieToOwner;
    mapping (address => uint) ownerZombieCount;   

    function _createZombie(string memory _name, uint _dna) internal {
        zombies.push(Zombie(_name, _dna));
        uint id = zombies.length;
        //console.log("Zombie id is %s ", id);
        
        // assign ownership of the zombie to msg.sender
        zombieToOwner[id] = msg.sender;
        //console.log("Address of zombie owner is %s ", zombieToOwner[id]);
        
        // increase ownerZombieCount for this msg.sender by 1
        ownerZombieCount[msg.sender]++;
        emit NewZombie(id, _name, _dna);
    }

    function _generateRandomDna(string memory _str) private view returns (uint) {
        uint rand = uint(keccak256(abi.encodePacked(_str)));
        // log
        //console.log("Zombie rand %s ", rand);
        //console.log("Zombie dns %s ", rand  % dnaModulus);
        return rand % dnaModulus;
    }

    function createRandomZombie(string memory _name) public {
        require(ownerZombieCount[msg.sender] == 0, "Only one zombie creation per address");
        uint randDna = _generateRandomDna(_name);
        _createZombie(_name, randDna);
    }

}