function calculateTip() {
    let billAmount = parseFloat(document.getElementById("bill").value);
    let tipPercentage = parseFloat(document.getElementById("tip").value);
    if (isNaN(billAmount) && billAmount <= 0) {
        alert("Please enter a valid bill amount for this calculator");
        return;
    }
    let tipAmount = (billAmount * tipPercentage) / 100;
    let totalAmount = billAmount + tipAmount;
    document.getElementById("tip-amount").innerText = "$" + tipAmount.toFixed(2);

}