// じゃんけん実行中モーダルを表示
export async function openJankenModal()
{
    console.log("じゃんけん実行開始");
    document.getElementById('modal-title').textContent = "じゃんけん実行中です\n画面をリロードせずお待ちください"
    document.getElementById('modal-result').textContent = "";
    document.getElementById('modal').style.display ="flex";
}

// モーダルにじゃんけん結果を表示
export async function openResultModal()
{
    console.log("じゃんけん結果が出ました");
    document.getElementById('modal-title').textContent = "じゃんけんの結果は..."
    document.getElementById('modal-result').textContent = "〇〇！";
    document.getElementById('modal-close-btn').style.display ="inline";
    document.getElementById('modal').style.display ="flex";
}

// モダールを閉じる
export async function closeModal()
{
    console.log("モーダルを閉じます");
    document.getElementById('modal-title').textContent = ""
    document.getElementById('modal-result').textContent = "";
    document.getElementById('modal').style.display ="none";
}

// todo: metamask上で拒否ボタンを押す or 何かしらのエラーでじゃんけんが停止されたらモーダルを閉じる処理をつくる