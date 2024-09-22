// Check is input money is validate or not
function inputValidation(id) {
    let money = document.getElementById(id).value
    money = parseFloat(money)
    let total = document.getElementById('totalBalanceId').innerText
    total = parseFloat(total)
    if (!isNaN(money) && money <= total && money > 0) {
        document.getElementById('my_modal_1').showModal
            ();
        return money;
    } else {
        alert("invalid")
    }
}

// Update individual donated money
function ammountDonatedValidation(id, money) {
    let total = document.getElementById('totalBalanceId').innerText
    total = parseFloat(total)
    if (money <= total) {
        total -= money;
        document.getElementById('totalBalanceId').innerText = total;
        let ammount = document.getElementById(id).innerText;
        ammount = parseFloat(ammount);
        ammount += money;
        document.getElementById(id).innerText = ammount;
    }
    else { return; }

}

// Update donation History
function updateHistory(id, money) {
    let total = document.getElementById('totalBalanceId').innerText
    total = parseFloat(total)
    if (money > 0) {
        let date = new Date();
        const p = document.getElementById(id).innerText;
        const div = document.createElement('div');
        div.innerHTML = `<div class="border-2 rounded-lg px-8 py-4 container mx-auto mb-4">
       <h1 class="text-lg font-semibold">${money} Taka is ${p}</h1>
       <p class="opacity-50">Date : ${date}</p>
        </div>`
        document.getElementById('historyContainerId').appendChild(div);

    } else { return; }

}
