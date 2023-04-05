const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");

describe("ZombieFactory contract", function () {

    // Fixture
    async function deployZombieFactoryFixture() {
        const ZombieFactory = await ethers.getContractFactory("ZombieFactory");
        const [owner, addr1, addr2] = await ethers.getSigners();
    
        // Contracts are deployed using the first signer/account by default
        const zombieFactoryContract = await ZombieFactory.deploy();
    
        await zombieFactoryContract.deployed();
    
        // Fixtures can return anything you consider useful for your tests
        return { zombieFactoryContract, owner, addr1, addr2 };
    }    


    it("Should emit an event on createRandomZombie", async function () {
        // use fixture
        const { zombieFactoryContract, owner } = await loadFixture(deployZombieFactoryFixture);
  
        expect(await zombieFactoryContract.createRandomZombie("aaaa")).to.emit(zombieFactoryContract, "NewZombie").withArgs(anyValue, anyValue, anyValue);
    });

    it("Zombie owner 1 should be msg.sender", async function () {
        
        // use fixture
        const { zombieFactoryContract, owner } = await loadFixture(deployZombieFactoryFixture);

        await zombieFactoryContract.createRandomZombie("aaaa");
  
        expect(await zombieFactoryContract.zombieToOwner(1)).to.equal(owner.address);
    });

    it("The same address should not be able to create a second zombie.", async function () {
        
        // use fixture
        const { zombieFactoryContract, owner } = await loadFixture(deployZombieFactoryFixture);
  
        expect(await zombieFactoryContract.createRandomZombie("bbbb")).to.be.revertedWith("Only one zombie creation per address");
    });   
    
    

}); 

