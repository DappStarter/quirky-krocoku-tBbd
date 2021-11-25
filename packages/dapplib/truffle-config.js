require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'imitate prize frame street name remember situate unaware hunt forum equal giggle'; 
let testAccounts = [
"0x09ef896cfe5bfe43ae6ae247573ffd18aff927ed1a1bde2851491b80b2d93b83",
"0xde475d06af18858742590cc0512b37a7269db0be85cb3e2bbfb3834a05bfb4b7",
"0xa77ff1735e1d92afc176b7919e615dfee69844d678015f3080514b410ab6f592",
"0x714c7ac3ac9d9839f3adf3cdb8a2e6d53bf231a5d632786f37d6e06a2044555e",
"0xd944c1d59aaf7a38633cc213c97769a917f1295e09c6f959e4bc2f6fadd22092",
"0x9fb7caed2b9342a8d31ef4d03d7e9de49b4cee01434d1a81198555a561147130",
"0xd38b8abec8f7ab1169555e112f8f9c176bc86e997a134ad9a48d2ab6582da71e",
"0x1686e501afec81147221a2276be06de520ccf314780da9965756d2fdd1dcae52",
"0xe7d4bb28ec7d442fd8f83fc9681cccc9fdcd34fc4b4c479b36affceaa4944ac4",
"0x724623c2515d03921ac31ecdb4f7896b6240fd7e82f67cb988299d458ce92603"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


