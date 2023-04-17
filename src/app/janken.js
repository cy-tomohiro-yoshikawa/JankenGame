async function janken(hand){
    var abi = [
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "walletAdress",
                    "type": "address"
                }
            ],
            "name": "findWalletAdressResult",
            "outputs": [
                {
                    "internalType": "string[]",
                    "name": "",
                    "type": "string[]"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "int256",
                    "name": "hand",
                    "type": "int256"
                }
            ],
            "name": "janken",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "findResult",
            "outputs": [
                {
                    "internalType": "string[]",
                    "name": "",
                    "type": "string[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "i",
                    "type": "uint256"
                }
            ],
            "name": "getAdress",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "i",
                    "type": "uint256"
                }
            ],
            "name": "getResult",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getResultArray",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "address",
                            "name": "walletAddress",
                            "type": "address"
                        },
                        {
                            "internalType": "string",
                            "name": "result",
                            "type": "string"
                        }
                    ],
                    "internalType": "struct Janken.Result[]",
                    "name": "",
                    "type": "tuple[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "sender",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ];
  
    var address = "0x6aA495ebECC91958B28314bf870D8eAD1C7AF24C"; //コントラクトアドレス
    var account = "0xF8AEeAf2A2c10C00AaB4eedd2736651Ed1767312"; //ウォレットアドレス
  
    const web3 = new Web3(Web3.givenProvider || "ws://localhost:7545");
  
    var contract = new web3.eth.Contract(abi, address);

    //じゃんけんの実行
    await contract.methods.janken(hand).send({ from: account });
}