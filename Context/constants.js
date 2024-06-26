// dh ERC20Generator = 0xDC3A2E74Dfc370E4129d143661D9fDa9D3080537
// dh LookUpContract = 0x5f0dBeF664d9d6D047FeB500E285492eAe8DE644
// usr ERC20Generator = 0x8516A5DD3A761566542461a39aA54CEBbaCBEb77  
// usr LookUpContract = 0x7DeA761E11f1CCecE3C270626aFc21471e3d40c7  

// POLYGON AMOY
// erc20Generator: 0x3511f07eD07270fF95A451afa613FF5Caca9083c
// LookUpContract: 0x002C5Bd07468F4f1578EC14752a3155d1FD2d1f8

import ERC20Generator from "./ERC20Generator.json";
import LookUpContract from "./LookUpContract.json";

export const ERC20Generator_ABI = ERC20Generator.abi;
export const ERC20Generator_BYTECODE = ERC20Generator.bytecode;
export const ERC20Generator_ADDRESS =
  "0x3511f07eD07270fF95A451afa613FF5Caca9083c";

export const LookUpContract_ABI = LookUpContract.abi;
export const LookUpContract_ADDRESS =
  "0x002C5Bd07468F4f1578EC14752a3155d1FD2d1f8";
