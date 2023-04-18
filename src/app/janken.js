function contractInfo()
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
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "result",
                    "type": "string"
                }
            ],
            "name": "FunctionCompleted",
            "type": "event"
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
            "inputs": [
                {
                    "internalType": "int256",
                    "name": "hand",
                    "type": "int256"
                }
            ],
            "name": "playJanken",
            "outputs": [],
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
  
    var address = "0x40D17270eE45695DDd557853b15EFe5a5b32791d"; //コントラクトアドレス
  
    const web3 = new Web3(Web3.givenProvider || "ws://localhost:7545");
  
    return new web3.eth.Contract(abi, address);
}

export async function walletConect()
{
    const accounts = await ethereum.request({
        method: 'eth_requestAccounts',
      });

    const account = accounts[0];
}

//じゃんけんの実行
export async function janken(hand)
{
    const contract = contractInfo();

    const accounts = await ethereum.request({
        method: 'eth_requestAccounts',
      });

    const account = accounts[0];

    console.log(account);

    //じゃんけんの実行
    await contract.methods.playJanken(hand).send({ from: account });
}

//特定のウォレットアドレスの結果だけ取得する
export async function getResultWalletadress(address)
{
    const contract = contractInfo();

    const accounts = await ethereum.request({
        method: 'eth_requestAccounts',
      });

    const account = accounts[0];

    await contract.methods.findWalletAdressResult(address).send({ from: account });
}

//全ての結果を取得
export function getResultArray()
{
    const contract = contractInfo();
    var results = "";

    contract.methods.getResultArray().call(function(err,res){
        if(!err){
            console.log(res);
            // 結果表示画面に一覧を表示表示させる
            for (let i = 0; i < res.length; i++) {
                results += res[i][1] + " : " + res[i][0] + "\n";
            }
            document.getElementById('log').textContent = results;
        } else {
            console.log(err);
        }
    });

    console.log(walletConect());
}

//結果の配列のwalletAddressをインデックス番号から取り出す
export function getAdress(index)
{
    const contract = contractInfo();

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
    const contract = contractInfo();

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
    const contract = contractInfo();
    var results = "";

    contract.methods.findResult().call(function(err,res){
        if(!err){
            console.log(res);
            // 結果表示画面に一覧を表示表示させる
            for (let i = 0; i < res.length; i++) {
                results += res[i] + "\n";
            }
            document.getElementById('log').textContent = results;
        } else {
            console.log(err);
        }
    });
}

// 
export function getContract()
{
    return contractInfo();
}
