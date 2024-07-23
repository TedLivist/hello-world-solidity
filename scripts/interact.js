const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;

const { ethers } = require("hardhat");

async function main() {

  const hello_world = await ethers.getContractFactory("HelloWorld");
  
  const contractAttach = await hello_world.attach(CONTRACT_ADDRESS)

  console.log("This is the old message about to be updated")
  const message = await contractAttach.message();
  console.log(message)

  console.log("Updating value...");
  const tx = await contractAttach.update("This is the third greeting from Teddy!!!!")
  await tx.wait();

  const newMessage = await contractAttach.message()
  console.log(newMessage);

}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  })