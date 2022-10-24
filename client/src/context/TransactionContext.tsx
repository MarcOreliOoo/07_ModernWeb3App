import React, { createContext, PropsWithChildren, useEffect, useState} from 'react';
import { ethers } from 'ethers';
import { contractAbi, contractAddress } from '../utils/constants'; 

export const TransactionContext = createContext<null>(null);

const { ethereum } = window;

const getEthereumContract = () => {
	const provider = new ethers.providers.Web3Provider(ethereum!);
	const signer = provider.getSigner();
	const transactionContract = new ethers.Contract(contractAddress,contractAbi, signer);
	console.log({provider, signer, transactionContract});
}

export const TransactionProvider = ({ children }: PropsWithChildren) => {
	return (
		<TransactionContext.Provider value={null}>
			{children}
		</TransactionContext.Provider>
	)
}