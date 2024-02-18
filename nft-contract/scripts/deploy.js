const { ethers } = require("hardhat");

async function main() {
  const Ilyas = await ethers.getContractFactory("Ilyas");
  const ilyas = await Ilyas.deploy("Ilyas", "ILICH");

  
    await ilyas.deployed();
    console.log(`Contract successfully deployed to ${ilyas.address}`);
  
  

    const newItemId = await ilyas.mint("https://ipfs.io/ipfs/QmZHyAM8FQBWMVn9FMio8kTV25rmba9M96WyB9bVfged1C");
    console.log(`NFT minted successfully :: ${newItemId}`);}
  
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
