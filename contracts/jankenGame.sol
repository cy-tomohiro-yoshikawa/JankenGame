pragma solidity 0.8.18;

contract Janken{
    
    //string[] results;

    //じゃんけんの結果を保存する構造体
    struct Result{ 
    int myHand; //1:グー、2:チョキ、3:パー
    uint256 opponentHand; //1:グー、2:チョキ、3:パー
    int result;  //0:あいこ、1:勝ち、2:負け
    }

    //じゃんけんの結果を保存する構造体の配列
    Result[] results;

    //関数などを実行した人のウォレットアドレス
    address public sender;

    string[] resultWalletAddress;

    //じゃんけんの実行
    function janken(int hand) public returns(string memory){
        //実行した人のウォレットアドレスを保存
        sender = msg.sender;

        //乱数生成
        uint256 rd = (uint(keccak256(abi.encodePacked(blockhash(block.number - 1), msg.sender, block.timestamp))) % 3) + 1;

        //結果の保存
        if(hand == 1) //グー
        {
            if(rd == 1) //グー、あいこ
            {
                Result memory result = Result(hand,rd,0);
                results.push(result);
            }
            else if(rd == 2) //チョキ、勝ち
            {
                Result memory result = Result(hand,rd,1);
                results.push(result);
            }
            else //パー、負け
            {
                Result memory result = Result(hand,rd,2);
                results.push(result);
            }
        }
        else if(hand == 2) //チョキ
        {
            if(rd == 1) //グー、負け
            {
                Result memory result = Result(hand,rd,2);
                results.push(result);
            }
            else if(rd == 2) //チョキ、あいこ
            {
                Result memory result = Result(hand,rd,0);
                results.push(result);
            }
            else //パー、勝ち
            {
                Result memory result = Result(hand,rd,1);
                results.push(result);
            }
        }
        else if(hand == 3) //パー
        {
            if(rd == 1) //グー、勝ち
            {
                Result memory result = Result(hand,rd,1);
                results.push(result);
            }
            else if(rd == 2) //チョキ、負け
            {
                Result memory result = Result(hand,rd,2);
                results.push(result);
            }
            else //パー、あいこ
            {
                Result memory result = Result(hand,rd,0);
                results.push(result);
            }
        }
        else
        {
            return unicode"エラー";
        }
    }

    // //Resultの配列結果のウォレットアドレスをインデックス番号から取り出す。
    // function getAdress(uint256 i) public view returns (address){
    //     return results[i].walletAddress;
    // }

    // //Resultの配列結果の結果をインデックス番号から取り出す。
    // function getResult(uint256 i) public view returns (string memory){
    //     return results[i].result;
    // }

    //Resultの配列全体を取り出す。
    function getResultArray() public view returns (Result[] memory){
        return results;
    }
    
    // //特定のウォレットアドレスの結果を取得
    // function findWalletAdressResult(address walletAdress) public{
    //     delete resultWalletAddress;

    //     for(uint256 i = 0; i < results.length; i++){
    //         if(results[i].walletAddress == walletAdress)
    //         {
    //             resultWalletAddress.push(results[i].result);
    //         }
    //     }
    // }

    //特定のウォレットアドレスの結果を表示
    function findResult() public view returns (string[] memory){
        return resultWalletAddress;
    }

    //イベント定義
    event FunctionCompleted(string result);

    //じゃんけん実行
    function playJanken(int hand) public {
        string memory result = janken(hand);

        emit FunctionCompleted(result);
    }
}
