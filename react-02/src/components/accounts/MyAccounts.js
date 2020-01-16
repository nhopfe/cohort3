import React from 'react';
import AccountCreateDisplay from './MyAccountsCreateDisplay.js'
import AccountCardsList from './MyAccountsCardsList.js';
import AccountBalancesDisplay from './MyAccountsInfoDisplay.js'
// import { AccountController } from './account.js';
import './account-index.css';
import { ThemeContext } from '../MyTheme.js';
import { AppContext } from '../AppContext.js';

class Accounts extends React.Component {
    static contextType = AppContext;
    static contextType = ThemeContext;

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = (event) => {
        let array = this.context.accounts.listArray;
        let accountNames = array.map(array => array.accountName);
        let matchingName = accountNames.find(account => account === this.context.state.acctName);
        if (this.context.state.acctName === matchingName || this.context.state.acctName === "") {
            alert("Duplicate or no account name entered!");
        }
        else {
            this.context.accounts.addAccount(this.context.state.acctName, this.context.state.acctBalance);
        }
        this.context.handleStateChange([
            { state: "acctName", newState: "" },
            { state: "acctBalance", newState: "" },
        ]);
        this.balanceChecker(this.context.accounts.listArray);
        event.preventDefault();
    }

    handleDelete = (i) => {
        this.context.accounts.listArray.splice(i, 1);
        this.balanceChecker(this.context.accounts.listArray);
    }

    balanceChecker = (array) => {
        if (this.context.accounts.listArray.length > 0) {
            this.context.handleStateChange([
                { state: "highestName", newState: this.context.accounts.highestBalance(array) },
                { state: "highestBalance", newState: this.context.accounts.highestBalanceNumber(array) },
                { state: "lowestName", newState: this.context.accounts.lowestBalance(array) },
                { state: "lowestBalanceNumber", newState: this.context.accounts.lowestBalanceNumber(array) },
                { state: "totalBalance", newState: this.context.accounts.totalBalances(array) },
            ]);
        } else this.context.handleStateChange([
                { state: "highestName", newState: "" },
                { state: "highestBalance", newState: "" },
                { state: "lowestName", newState: "" },
                { state: "lowestBalanceNumber", newState: "" },
                { state: "totalBalance", newState: "" },
        ]);
    };

    render() {
        return (
            <div className="wrapper" style={{ background: this.context.theme.background }}>
                <div className="container-left">
                    <span className="container-left-header display-header">Create New Account</span>
                    <AccountCreateDisplay
                        handleSubmit={this.handleSubmit}
                    />
                </div>
                <div className="container-middle">
                    <span className="container-middle-header display-header">Accounts Display</span>
                    <AccountCardsList
                        handleDelete={this.handleDelete}
                        balanceChecker={this.balanceChecker}
                    />
                </div>
                <div className="container-right">
                    <span className="container-right-header display-header">Accounts Information</span>
                    <AccountBalancesDisplay
                    />
                </div>
            </div>
        )
    }
}

export default Accounts;