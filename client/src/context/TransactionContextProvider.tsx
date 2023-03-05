import React, { createContext, PropsWithChildren, useEffect, useState, ChangeEvent} from 'react';
import { ethers } from 'ethers';
import { contractAbi, contractAddress } from '../utils/constants'; 
import { MyFormData } from '../types/types';


const { ethereum } = window;
const getEthereumContract = () => {
	const provider = new ethers.providers.Web3Provider(ethereum!);
	const signer = provider.getSigner();
	const transactionContract = new ethers.Contract(contractAddress,contractAbi, signer);
	
	console.log({provider, signer, transactionContract});
}

type ContextProps = {
	connectWallet : () => Promise<void>;
	currentAccount: string;
	formData: MyFormData;
	setFormData: React.Dispatch<React.SetStateAction<MyFormData>>;
	handleChange: (e: ChangeEvent<HTMLInputElement>, name: keyof MyFormData) => void;
	sendTransaction: () => Promise<void>;
};
export const TransactionContext = createContext({} as ContextProps);


type TransactionContextProviderProps = PropsWithChildren<{}>;
export const TransactionContextProvider = ({ children }: TransactionContextProviderProps) => {
	const [currentAccount, setCurrentAccount] = useState("");
	const [formData, setFormData] = useState({ addressTo: '', amount: '', keyword: '', message : ''});
	
	const handleChange = (e:ChangeEvent<HTMLInputElement>, name: keyof MyFormData) => {
		setFormData((prevState) => ({...prevState, [name]: e.currentTarget.value}))
	};

	const checkIfWalletIsConnected = async () => {
		try {
			if(!ethereum) return alert("Please install Metamask");
			const accounts = await ethereum.request?.({method:'eth_accounts'});
			if(accounts.length){
				setCurrentAccount(accounts[0]);
				
				//getAllTransactions();
			} else {
				console.log("No accounts found");
			}
		} catch (error) {
			console.log(error);
			throw new Error("No ethereum object");
		}
		
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


	const  sendTransaction = async () => {
		try {
			if(!ethereum) return alert("Please install Metamask");
			// get the data from the form

		} catch (error) {
			console.log(error);
			throw new Error("No ethereum object");		}
	};

	useEffect(() => {
		checkIfWalletIsConnected();
	},[]);

	return (
		<TransactionContext.Provider value={{ connectWallet, currentAccount, formData, setFormData, handleChange, sendTransaction }}>
			{children}
		</TransactionContext.Provider>
	)
}