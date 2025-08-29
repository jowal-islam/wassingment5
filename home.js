// love count functionalty add
const loves = document.getElementsByClassName("love");
const loveCount = document.getElementById("love-count");
let count = 0;
for (const love of loves) {
  love.addEventListener("click", function () {
    count++;
    loveCount.innerText = count;
  });
}

// call funtionaly add
const calls = document.getElementsByClassName("call");
let coinElement = document.getElementById("coin");
let coin = parseInt(coinElement.innerText);
for (const call of calls) {
  call.addEventListener("click", function () {
    // button theke parent card khuje ber kora
    const parentCard = call.closest(".card");

    // coin check
    if (coin < 20) {
      alert("আপনার কাছে পর্যাপ্ত কয়েন নেই!");
      return; // coin কম হলে এখানেই থেমে যাবে
    }
    // parent theke h1 ar p dhora
    const title = parentCard.querySelector("h1").innerText;
    const span = parentCard.querySelector("span").innerText;

    // clear histry add
    const callHistoryDiv = document.getElementById("call-histry");
    const histryTitle = callHistoryDiv.querySelector("h1");
    const clearBtn = callHistoryDiv.querySelector("button");
    const histryH1 = document.createElement("h1");
    histryH1.innerText = title;
    histryTitle.appendChild(histryH1);

    clearBtn.addEventListener("click", function () {
      if (histryH1.parentNode) {
        histryH1.parentNode.removeChild(histryH1);
      }
    });
    // coin section add

    coin = coin - 20;
    coinElement.innerText = coin;
    alert(title + span);
  });
}

// copyBtn add

const copyButtons = document.getElementsByClassName("copy");
 let countNumber = 0; // click counter tracker

for (const copyBtn of copyButtons) {
  copyBtn.addEventListener("click", function () {
    const parentCard = copyBtn.closest(".card");
    const copyNumber = parentCard.querySelector("span").innerText;

    // clipboard এ copy করা
    navigator.clipboard.writeText(copyNumber).then(() => {
      alert("কপি হয়েছে: " + copyNumber);
    });

    // copy count update
    countNumber++;                     // tracker update
    const copyCount = document.getElementById('copy-count');
    copyCount.innerText = countNumber; // display update
    console.log("Copy count:", countNumber);
  });
}
