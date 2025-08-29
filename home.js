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
      // parent theke h1 ar p dhora
    const title = parentCard.querySelector("h1").innerText;
    const span = parentCard.querySelector("span").innerText;
    alert(title + span)
    // clear histry add
    const callHistoryDiv = document.getElementById('call-histry')
    const histryTitle = callHistoryDiv.querySelector('h1')
    const clearBtn = callHistoryDiv.querySelector('button');
    const histryH1 = document.createElement('h1');
    histryH1.innerText = title;
    histryTitle.appendChild(histryH1)
    
    clearBtn.addEventListener('click', function(){
        if (histryH1.parentNode) {
        histryH1.parentNode.removeChild(histryH1);
    }
    })
    // coin section add
    coin = coin - 20;
    coinElement.innerText = coin;
  });
}
