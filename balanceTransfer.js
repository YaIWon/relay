const { ethers } = require('ethers');
require('dotenv').config();

async function main() {
  // Connect to the Ethereum network using Infura
  const provider = new ethers.providers.InfuraProvider(process.env.FROM_ID, process.env.FROM);

  // Create a new wallet using the private key of the 'from' address
  const wallet = new ethers.Wallet(process.env.FROM_PRIVATE_KEY, provider);

  // Specify the 'to' address and the amount to transfer
  const toAddress = process.env.TO_ADDRESS;
  const amount = ethers.utils.parseEther('1'); // Transfer 1 Ether (adjust the amount as needed)

  // Transfer the balance
  const transaction = await wallet.sendTransaction({
    to: toAddress,
    value: amount,
  });

  console.log(`Balance transfer successful! Transaction hash: ${transaction.hash}`);
}

main().catch((error) => {
  console.error('Error:', error);
  process.exit(1);
});