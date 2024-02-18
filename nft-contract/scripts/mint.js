const { ethers } = require("hardhat")
const ilyasJSON = require("../artifacts/contracts/Ilyas.sol/Ilyas.json")

async function main() {
  const abi = ilyasJSON.abi
  const provider = new ethers.providers.JsonRpcProvider(process.env.MUMBAI_URL)
  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider)
  const signer = wallet.connect(provider)
  const ilyas = new ethers.Contract(process.env.CONTRACT_ADDRESS, abi, signer)
  await ilyas.mint("https://ipfs.io/ipfs/QmXXQagMsBVAX9zFaHLVbNcHaGYxxLsYAhgypMa7WwpDEf")
  console.log('NFT succesfuly minted')
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });