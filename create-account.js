function createAccount(pin, amount = 0) {
    //need to return an object with 4 methods
    //so create a return function that has each method
    return {
        checkBalance(input) {
            if (input !== pin) return "Invalid PIN.";
            return `$${amount}`;
        },
        deposit(input, newAmount) {
            if (input !== pin) return "Invalid PIN.";
            amount = amount + newAmount;
            return `Succesfully deposited $${newAmount}. Current balance: $${amount}.`;
        },
        withdraw(input, withdrawalAmount) {
            if (input !== pin) return "Invalid PIN.";
            if (withdrawalAmount > amount) return 'Withdrawal amount exceeds account balance. Transaction cancelled.';
            amount = amount - withdrawalAmount;
            return `Succesfully withdrew $${withdrawalAmount}. Current balance: $${amount}.`
        },
        changePin(input, newPin) {
            if (input !== pin) return "Invalid PIN.";
            pin = newPin;
            return 'PIN successfully changed!';
        }
    }
}

module.exports = { createAccount };
