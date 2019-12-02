import { AccountController } from './account.js';
import functions from './account-functions.js';

export const accountList = new AccountController("Account List");

const accountCreateButton = () => {
    let array = accountList.listArray;
    let accountNames = array.map(array => array.accountName);
    let matchingName = accountNames.filter(account => account == idAccountNameInput.value)
    if (String(idAccountNameInput.value) == matchingName) {
        idAccountNameInput.value = "";
        idAccountBalanceInput.value = "";
        return alert("Duplicate Account Name! Please choose another name.");
    } else {
        const newAccount = accountList.addAccount(String(idAccountNameInput.value), idAccountBalanceInput.value);
        console.log(newAccount);
        functions.createAccountDiv(idAccountDisplay, newAccount);
        balanceChecker();
        idAccountNameInput.value = "";
        idAccountBalanceInput.value = "";
    }
}

const accountButtonSelector = (event) => {
    if (event.target.textContent == "Deposit") {
        let accountID = event.target.parentNode.getAttribute("counter");
        let index = accountList.findAccount(accountID);
        let input = Number(event.target.parentNode.children[2].value);
        accountList.listArray[index].accountDeposit(input);
        let balance = event.target.parentNode.children[1]
        balance.textContent = "$" + Number(accountList.listArray[index].accountBalance()).toFixed(2);
        balanceChecker();
        event.target.parentNode.children[2].value = "";
    } if (event.target.textContent == "Withdraw") {
        let accountID = event.target.parentNode.getAttribute("counter");
        let index = accountList.findAccount(accountID);
        let input = Number(event.target.parentNode.children[2].value);
        accountList.listArray[index].accountWithdraw(input);
        let balance = event.target.parentNode.children[1]
        balance.textContent = "$" + Number(accountList.listArray[index].accountBalance()).toFixed(2);
        balanceChecker();
        event.target.parentNode.children[2].value = "";
    } if (event.target.textContent == "Delete Account") {
        let accountID = event.target.parentNode.getAttribute("counter");
        accountList.deleteAccount(accountID);
        functions.deleteAccountCard(event.target);
        balanceChecker();
    }
}

const balanceChecker = () => {
    idHighest.textContent = accountList.highestBalance();
    idHighestNumber.textContent = accountList.highestBalanceNumber();
    idLowest.textContent = accountList.lowestBalance();
    idLowestNumber.textContent = accountList.lowestBalanceNumber();
}

idMiddleContainer.addEventListener("click", accountButtonSelector);
idCreateAcctButton.addEventListener("click", accountCreateButton);