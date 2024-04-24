require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */

const NEXT_PUBLIC_POLYGON_AMOY_RPC = "https://rpc.ankr.com/polygon_amoy";
const NEXT_PUBLIC_PRIVATE_KEY = "4d78f69a2be0cc6d7d5e8ee7a06ad99a15107cc17b855b4f9be3e3f2ce1f1cf9";
// usr - 4d78f69a2be0cc6d7d5e8ee7a06ad99a15107cc17b855b4f9be3e3f2ce1f1cf9
module.exports = {
  solidity: "0.8.0",
  defaultNetwork: "matic",
  networks: {
    hardhat: {},
    polygon_amoy: {
      url: NEXT_PUBLIC_POLYGON_AMOY_RPC,
      accounts: [`0x${NEXT_PUBLIC_PRIVATE_KEY}`],
    },
  },
};
