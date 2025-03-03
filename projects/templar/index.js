const { stakings } = require("../helper/staking");
const { sumTokensExport, nullAddress, } = require("../helper/unwrapLPs");

const bscOwner = "0xEA724deA000b5e5206d28f4BC2dAD5f2FA1fe788";
const bscStaking = "0xa1f61Ca61fe8655d2a204B518f6De964145a9324";
const bscStakingV2 = "0xffC7B93b53BC5F4732b414295E989684702D0eb5";
const bscTreasuryContract = "0xd01e8D805BB310F06411e70Fd50eB58cAe2B4C27";

const bscTokens = {
  BUSD: "0xe9e7cea3dedca5984780bafc599bd69add087d56",
  WBNB: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
  MIM: "0xfe19f0b51438fd612f6fd59c1dbb3ea319f433ba",
  TM: "0x194d1D62d8d798Fcc81A6435e6d13adF8bcC2966",
  DAI: "0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3",
  TEM: "0x19e6BfC1A6e4B042Fb20531244D47E252445df01",
  VBUSD: "0x95c78222B3D6e262426483D42CfA53685A67Ab9D",
  VBTC: "0x882C173bC7Ff3b7786CA16dfeD3DFFfb9Ee7847B",
};

const ethTokens = {
  USDC: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
  USDT: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
};
const ethOwner = "0x4Bd973e98585b003c31f4C8b9d6eAC5d3293B1e5"

module.exports = {
  moonriver: {
    tvl: () => 0,
    staking: () => 0,
  },
  harmony: {
    tvl: () => 0,
    staking: () => 0,
  },
  bsc: {
    tvl: sumTokensExport({ owners: [bscOwner, bscTreasuryContract,], tokens: [bscTokens.TM, bscTokens.DAI, bscTokens.BUSD, bscTokens.WBNB, bscTokens.VBUSD, bscTokens.VBTC], resolveUniV3: true, }),
    staking: stakings([bscStaking, bscStakingV2], bscTokens.TEM, "bsc"),
  },
  ethereum: {
    tvl: sumTokensExport({ owner: ethOwner, tokens: [ethTokens.USDC, ethTokens.USDT, nullAddress, '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599'], resolveUniV3: true, }),
  },
}
