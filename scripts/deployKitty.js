async function main() {
    const [deployer] = await ethers.getSigners();
  
    //console.log(process.env.ALCHEMY_API_URL);
    //console.log(process.env.SEPOLIA_PRIVATE_KEY);

    console.log("Deploying contracts with the account:", deployer.address);
  
    console.log("Account balance:", (await deployer.getBalance()).toString());
  
    const Contract = await ethers.getContractFactory("Kitty");
    const contract = await Contract.deploy();
  
    console.log("Contract address:", contract.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });