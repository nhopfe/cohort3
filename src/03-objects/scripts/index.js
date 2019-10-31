import Account, { accountFuncs } from './account.js'

projectContainer.addEventListener("click", () => {
    // console.log(event.target.textContent);
    inputValue = document.getElementById("createAccountInput");
    switch (event.target.textContent) {
        case "Create Account":
            accountFuncs.addAccount(projectContainer, inputValue, 0);
            break;
        // case "Deposit":
        //     Account.accountDeposit();
        //     break;
        // case "Withdraw":
        //     Account.accountWithdraw();
        //     break;
        // case "Show Balance":
        //     Account.accountBalance();
        //     break;
        // case "Delete":
        //     cards.deleteCard(event.target.parentElement);
        //     break;
    }

});