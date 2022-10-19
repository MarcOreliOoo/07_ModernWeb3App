import { ethers } from "hardhat";

const main = async () => {
	const transactionsFactory = await ethers.getContractFactory("Transactions");
	const transactions = await transactionsFactory.deploy();
	await transactions.deployed();
	console.log(`Deployed to: ${transactions.address}`);
	//console.log(await transactions.signer);
}

const runMain = async () => {
	try {
		await main();
		process.exitCode = 0;
	} catch (error) {
		console.error(error);
		process.exitCode = 1;
	}
};

runMain();
