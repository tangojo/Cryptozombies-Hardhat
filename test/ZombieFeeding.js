const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");

describe("ZombieFeeding contract", function () {

    // Fixture
    async function deployZombieFeedingFixture() {
        const ZombieFeeding = await ethers.getContractFactory("ZombieFeeding");
        const [owner, addr1, addr2] = await ethers.getSigners();
    
        // Contracts are deployed using the first signer/account by default
        const zombieFeedingContract = await ZombieFeeding.deploy();
    
        await zombieFeedingContract.deployed();
        
        //console.log(owner);
        // Fixtures can return anything you consider useful for your tests
        return { zombieFeedingContract, owner, addr1, addr2 };
    }      

    it("Rightful zombie owner should be able to feedAndMultiply", async function () {
        // use fixture
        const { zombieFeedingContract, addr1 } = await loadFixture(deployZombieFeedingFixture);
  
        const test = await zombieFeedingContract.connect(addr1).createRandomZombie("aaaa");
        //console.log(test);

        //expect(await zombieFeedingContract.zombieToOwner(1)).to.equal(addr1.address);

        //const test2 = await zombieFeedingContract.connect(addr1).feedAndMultiply(1, 1234567);
        //console.log(test2);
        
        expect(await zombieFeedingContract.connect(addr1).feedAndMultiply(1, 1234567)).not.to.be.reverted;
    });

    it("Event should be emitted after successful feedAndMultiply", async function () {
        // use fixture
        const { zombieFeedingContract, addr1 } = await loadFixture(deployZombieFeedingFixture);
  
        await expect(zombieFeedingContract.connect(addr1).createRandomZombie("aaaa")).to.emit(zombieFeedingContract, "NewZombie").withArgs(anyValue, anyValue, anyValue);
    });    

    it("Wrong zombie owner should not be able to feedAndMultiply", async function () {
        // use fixture
        
        const { zombieFeedingContract, addr1, addr2 } = await loadFixture(deployZombieFeedingFixture);
  
        //await zombieFeedingContract.connect(addr1).createRandomZombie("aaaa");
       
        //await expect(zombieFeedingContract.connect(addr2).feedAndMultiply(1, 1234567)).to.be.reverted;
        await expect(zombieFeedingContract.connect(addr2).feedAndMultiply(1, 1234567)).to.be.revertedWith("You are not the zombie owner");
    });


});