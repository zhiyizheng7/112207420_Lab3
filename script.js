// 初始化遊戲變數
const maxAttempts = 7; // 最大嘗試次數
let lowerBound = 1;    // 初始下界
let upperBound = 100;  // 初始上界
const secretNumber = Math.floor(Math.random() * 98) + 2; // 隨機生成 2 到 99 的密碼
let attempts = 0;      // 已嘗試次數
let isCorrect = false; // 是否猜中

// 遊戲邏輯
while (attempts < maxAttempts) {
    // 顯示提示範圍
    const remainingAttempts = maxAttempts - attempts;
    let promptMessage;

    // 第一個提示顯示 1~100
    if (attempts === 0) {
        promptMessage = `請輸入 1 到 100 之間的數字\n還剩下 ${remainingAttempts} 次機會`;
    } else {
        promptMessage = `請輸入 ${lowerBound + 1} 到 ${upperBound - 1} 之間的數字\n還剩下 ${remainingAttempts} 次機會`;
    }

    let guess = prompt(promptMessage);

    // 檢查是否取消或輸入為空
    if (guess === null || guess.trim() === "") {
        alert("請輸入有效的數字！");
        continue;
    }

    // 轉換為整數並驗證
    guess = parseInt(guess, 10);
    if (isNaN(guess) || guess <= lowerBound || guess >= upperBound) {
        alert(`請輸入有效範圍內的數字！（不能選擇範圍的上下限）`);
        continue;
    }

    attempts++; // 增加嘗試次數

    // 判斷是否猜中
    if (guess === secretNumber) {
        alert(`恭喜！你猜對了！正確答案是 ${secretNumber}，你用了 ${attempts} 次！`);
        isCorrect = true;
        break;
    } else {
        // 更新範圍
        if (guess < secretNumber) {
            lowerBound = guess;
            alert(`密碼在 ${lowerBound + 1} ~ ${upperBound - 1} 之間！`);
        } else {
            upperBound = guess;
            alert(`密碼在 ${lowerBound + 1} ~ ${upperBound - 1} 之間！`);
        }
    }
}

// 顯示結果圖片
const resultDiv = document.getElementById('result');
if (isCorrect) {
    const correctImage = document.getElementById('correctImage');
    correctImage.style.display = 'block';
} else {
    alert(`遊戲結束！正確答案是 ${secretNumber}！`);
    const wrongImage = document.getElementById('wrongImage');
    wrongImage.style.display = 'block';
}
