export default async function () {
    // var abi = [
    //     {
    //         "inputs": [
    //             {
    //                 "internalType": "address",
    //                 "name": "walletAdress",
    //                 "type": "address"
    //             }
    //         ],
    //         "name": "findWalletAdressResult",
    //         "outputs": [
    //             {
    //                 "internalType": "string[]",
    //                 "name": "",
    //                 "type": "string[]"
    //             }
    //         ],
    //         "stateMutability": "nonpayable",
    //         "type": "function"
    //     },
    //     {
    //         "inputs": [
    //             {
    //                 "internalType": "int256",
    //                 "name": "hand",
    //                 "type": "int256"
    //             }
    //         ],
    //         "name": "janken",
    //         "outputs": [
    //             {
    //                 "internalType": "string",
    //                 "name": "",
    //                 "type": "string"
    //             }
    //         ],
    //         "stateMutability": "nonpayable",
    //         "type": "function"
    //     },
    //     {
    //         "inputs": [],
    //         "name": "findResult",
    //         "outputs": [
    //             {
    //                 "internalType": "string[]",
    //                 "name": "",
    //                 "type": "string[]"
    //             }
    //         ],
    //         "stateMutability": "view",
    //         "type": "function"
    //     },
    //     {
    //         "inputs": [
    //             {
    //                 "internalType": "uint256",
    //                 "name": "i",
    //                 "type": "uint256"
    //             }
    //         ],
    //         "name": "getAdress",
    //         "outputs": [
    //             {
    //                 "internalType": "address",
    //                 "name": "",
    //                 "type": "address"
    //             }
    //         ],
    //         "stateMutability": "view",
    //         "type": "function"
    //     },
    //     {
    //         "inputs": [
    //             {
    //                 "internalType": "uint256",
    //                 "name": "i",
    //                 "type": "uint256"
    //             }
    //         ],
    //         "name": "getResult",
    //         "outputs": [
    //             {
    //                 "internalType": "string",
    //                 "name": "",
    //                 "type": "string"
    //             }
    //         ],
    //         "stateMutability": "view",
    //         "type": "function"
    //     },
    //     {
    //         "inputs": [],
    //         "name": "getResultArray",
    //         "outputs": [
    //             {
    //                 "components": [
    //                     {
    //                         "internalType": "address",
    //                         "name": "walletAddress",
    //                         "type": "address"
    //                     },
    //                     {
    //                         "internalType": "string",
    //                         "name": "result",
    //                         "type": "string"
    //                     }
    //                 ],
    //                 "internalType": "struct Janken.Result[]",
    //                 "name": "",
    //                 "type": "tuple[]"
    //             }
    //         ],
    //         "stateMutability": "view",
    //         "type": "function"
    //     },
    //     {
    //         "inputs": [],
    //         "name": "sender",
    //         "outputs": [
    //             {
    //                 "internalType": "address",
    //                 "name": "",
    //                 "type": "address"
    //             }
    //         ],
    //         "stateMutability": "view",
    //         "type": "function"
    //     }
    // ];
  
    // var address = "0x6aA495ebECC91958B28314bf870D8eAD1C7AF24C"; //コントラクトアドレス
    // var account = "0xF8AEeAf2A2c10C00AaB4eedd2736651Ed1767312"; //ウォレットアドレス
  
    // const web3 = new Web3(Web3.givenProvider || "ws://localhost:7545");
  
    // var contract = new web3.eth.Contract(abi, address);

    // const accounts = await ethereum.request({
    //     method: 'eth_requestAccounts',
    //   });

    //await contract.methods.findWalletAdressResult(address).send({ from: account });

    //結果の配列のresultをインデックス番号から取り出す
    // contract.methods.findResult().call(function(err,res){
    //     if(!err){
    //         console.log(res);
    //     } else {
    //         console.log(err);
    //     }
    // });
}

function base()
{
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
            "outputs": [],
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
  
    var address = "0xDf8CaCD6526272e9522cC257faC1417B2A27783D"; //コントラクトアドレス
  
    const web3 = new Web3(Web3.givenProvider || "ws://localhost:7545");
  
    return new web3.eth.Contract(abi, address);
}

export async function walletConect()
{
    const accounts = await ethereum.request({
        method: 'eth_requestAccounts',
      });

    const account = accounts[0];
    setWalletAddress(account);
}

//じゃんけんの実行
export async function janken(hand)
{
    const contract = base();

    const accounts = await ethereum.request({
        method: 'eth_requestAccounts',
      });

    const account = accounts[0];

    console.log(account);

    //じゃんけんの実行
    await contract.methods.janken(hand).send({ from: account });
}

//特定のウォレットアドレスの結果だけ取得する
export async function getResultWalletadress(address)
{
    const contract = base();

    const accounts = await ethereum.request({
        method: 'eth_requestAccounts',
      });

    const account = accounts[0];

    await contract.methods.findWalletAdressResult(address).send({ from: account });
}

//全ての結果を取得
export function getResultArray()
{
    const contract = base();

    contract.methods.getResultArray().call(function(err,res){
        if(!err){
            console.log(res);
        } else {
            console.log(err);
        }
    });

    console.log(walletConect());
}

//結果の配列のwalletAddressをインデックス番号から取り出す
export function getAdress(index)
{
    const contract = base();

    contract.methods.getAdress(index).call(function(err,res){
        if(!err){
            console.log(res);
        } else {
            console.log(err);
        }
    });
}

//結果の配列のresultをインデックス番号から取り出す
export function getResult(index)
{
    const contract = base();

    contract.methods.getResult(index).call(function(err,res){
        if(!err){
            console.log(res);
        } else {
            console.log(err);
        }
    });
}

//特定ウォレットアドレスの結果の配列のresultを取り出す
export function findResult()
{
    const contract = base();

    contract.methods.findResult().call(function(err,res){
        if(!err){
            console.log(res);
        } else {
            console.log(err);
        }
    });
}
