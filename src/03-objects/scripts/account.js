class Account {
    constructor(accountName, balance) {
        this.accountName = accountName;
        this.balance = balance;
    }

    accountDeposit(valueAdded) {
        this.balance = this.balance + valueAdded;
        return this.balance;
    }

    accountWithdraw(valueWithdrawn) {
        this.balance = this.balance - valueWithdrawn;
        return this.balance;
    }

    accountBalance() {
        return this.balance;
    }
}

export const accountFuncs = {
    addAccount: (div, accountName, balance) => {
        return div + accountName + balance + "test";
        // accountDisplay.appendChild(accountName, balance);
    },
}

export default Account;