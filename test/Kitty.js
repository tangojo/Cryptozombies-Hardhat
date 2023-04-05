const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");

describe("Kitties dummy contract", function () {

    // Fixture
    async function deployKittyFixture() {
        const Kitty = await ethers.getContractFactory("Kitty");
        const [owner, addr1, addr2] = await ethers.getSigners();
    
        // Contracts are deployed using the first signer/account by default
        const contract = await Kitty.deploy();
    
        await contract.deployed();
    
        // Fixtures can return anything you consider useful for your tests
        return { contract, owner, addr1, addr2 };
    }    

    it("Should return kittydna1", async function () {
        // use fixture
        const { contract, addr1 } = await loadFixture(deployKittyFixture);
  
        expect(await contract.connect(addr1).getKittyDNA(1)).to.equal(2345534598873982);
    });     

}); 