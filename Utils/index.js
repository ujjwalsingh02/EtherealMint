import {ethers} from "ethers";
import Web3Modal from "web3modal";

import {
    LookUpContract_ABI,
    LookUpContract_ADDRESS,
    ERC20Generator_ADDRESS,
    ERC20Generator_ABI,
} from "../Context/constants";
    
export const CheckIfWalletConnected = async () => {
    try {
        if (!window.ethereum) return console.log("Install MetaMask");
    
        const accounts = await window.ethereum.request ({
        method: "eth accounts",
        });
    
        const firstAccount = accounts[0];
        return firstAccount;
    } catch (error) {
        console.log(error);
    }
};

export const ConnectWallet = async () => {
    try {
        if (!window.ethereum) return console.log("Install MetaMask");
    
        const accounts = await window.ethereum.request ({
            method: "eth requestAccounts",
        });
        const firstAccount = accounts[0];
        return firstAccount;
    } catch (error) {
        console.log(error);
    }
};






