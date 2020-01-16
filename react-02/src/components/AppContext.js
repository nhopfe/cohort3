import React from 'react';
import App from '../App.js';
import { AccountController } from './accounts/account.js';
import { LinkedList } from './linkedlist/linkedlist.js';

export const AppContext = React.createContext();

export class ContextProvider extends React.Component {

    accounts = new AccountController("My Accounts");
    linkedList = new LinkedList();

    state = {
        // Accounts
        acctName: "",
        acctBalance: "",
        highestName: "",
        highestBalance: "",
        lowestName: "",
        lowestBalance: "",
        totalBalance: "",
        // Linked-List
        current: "",
    };

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    };

    handleStateChange = (states) => {
        for (let i = 0; i < states.length; i++) {
            this.setState({
                [states[i].state]: states[i].newState,
            })
        }
    }

    render() {
        return (
            <AppContext.Provider
                value={{
                    accounts: this.accounts,
                    linkedList: this.linkedList,
                    state: this.state,
                    handleOnChange: this.handleOnChange,
                    handleStateChange: this.handleStateChange,
                }}
            >
                <App />
            </AppContext.Provider>
        );
    }
}