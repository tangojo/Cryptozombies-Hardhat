async function main() {
    const [deployer] = await ethers.getSigners();
  
    //console.log(process.env.ALCHEMY_API_URL);
    //console.log(process.env.SEPOLIA_PRIVATE_KEY);

    console.log("Deploying contracts with the account:", deployer.address);
  
    console.log("Account balance:", (await deployer.getBalance()).toString());
  
    const ZombieFeeding = await ethers.getContractFactory("ZombieFeeding");
    const zombie = await ZombieFeeding.deploy();
  
    console.log("Zombie contract address:", zombie.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });