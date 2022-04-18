require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom problem brown turtle chaos rare remind concert harvest drip flee teach'; 
let testAccounts = [
"0xcc6a1cb8850caaa35a836f4e55ada3ebd16884fa60eeffaee8623e30eb1ea3e2",
"0xc30c96a23973318e8d4a331fe3f3af83a796c9dca3525104a88bb4d5e030d8d7",
"0x1d5c7d7604ec662d3c60cb1b6412c82ed77868ca0601c318afb393a0b26608de",
"0xa05fb62530ade6946e7c4e621b240e2fb0e2e0c16072b7ae5c64d21e30f6daaf",
"0xa1f292465f417174ff3e09cc1d19826d1a1ab4e25e286431a2381cece79ad370",
"0xb188676a2eece222d283ce4876a87972e9f3b14501099f654ca2cf93e2a8f662",
"0x751d8fae3b7e65291542c2aeb7c2cb5a3b9094d431fa2cca54fc21aac99016b9",
"0x38653cfc449ab3e62bcd50c1b993afbc42d0e4ec0e50166c31f07430e60fe69c",
"0xfa917be8989e4d19190b6027cfb6158e46900f861f36d76871fa700dafc5914b",
"0x51f7f1e90d62657dc663df880352f677decbdf1d623a38aebbbfe3c766784253"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

