import React, { createContext, PropsWithChildren, useEffect, useState} from 'react';
import { ethers } from 'ethers';
import { contractAbi, contractAddress } from '../utils/constants'; 

type ContextProps = {
	connectWallet : () => Promise<void>
};
export const TransactionContext = createContext({} as ContextProps);

const { ethereum } = window;
const getEthereumContract = () => {
	const provider = new ethers.providers.Web3Provider(ethereum!);
	const signer = provider.getSigner();
	const transactionContract = new ethers.Contract(contractAddress,contractAbi, signer);
	
	console.log({provider, signer, transactionContract});
}

type TransactionContextProviderProps = PropsWithChildren<{}>;
export const TransactionContextProvider = ({ children }: TransactionContextProviderProps) => {
	const [currentAccount, setCurrentAccount] = useState("");

	const checkIfWalletIsConnected = async () => {
		if(!ethereum) return alert("Please install Metamask");
		const accounts = await ethereum.request?.({method:'eth_accounts'});

		console.log(accounts);
	};

	const connectWallet = async () => {
		try {
			if(!ethereum) return alert("Please install Metamask");
			const accounts = await ethereum.request?.({method:'eth_requestAccounts'});
			setCurrentAccount(accounts[0]);
		} catch (error){
			console.log(error);
			throw new Error("No ethereum object");
		}
	};

	useEffect(() => {
		checkIfWalletIsConnected();
	},[]);

	return (
		<TransactionContext.Provider value={{ connectWallet }}>
			{children}
		</TransactionContext.Provider>
	)
}