// test/Ilyas.test.js
const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Ilyas contract", function () {
  let Ilyas;
  let ilyas;

  beforeEach(async function () {
    Ilyas = await ethers.getContractFactory("Ilyas");
    ilyas = await Ilyas.deploy("Ilyas", "ILY");
    await ilyas.deployed();
  });

  it("Should mint a new NFT", async function () {
    const tokenURI = "https://ipfs.io/ipfs/QmZHyAM8FQBWMVn9FMio8kTV25rmba9M96WyB9bVfged1C";
    
    // Minting a new NFT
    await ilyas.mint(tokenURI);
    
    // Getting the total supply of NFTs
    const totalSupply = await ilyas.totalSupply();

    // Getting the URI of the newly minted NFT
    const uri = await ilyas.tokenURI(totalSupply);
    
    // Asserting the token URI
    expect(uri).to.equal(tokenURI);
  });
});
