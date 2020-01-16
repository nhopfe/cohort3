import React from 'react';
import AccountCard from './MyAccountsCard.js';
import { AppContext } from '../AppContext.js';

class AccountCardsList extends React.Component {
    static contextType = AppContext;

    render() {
        const cardList = this.context.accounts.listArray.map((account, i) => {
            return (
                <AccountCard
                    index={i}
                    key={i}
                    account={account}
                    handleDelete={this.props.handleDelete}
                    balanceChecker={this.props.balanceChecker}
                />
            )
        })

        return (
            <div className="account-display">
                {cardList}
            </div>
        )
    };
};

export default AccountCardsList;