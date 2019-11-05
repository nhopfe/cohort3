import Account from './account.js'
import { accountFuncs } from './account.js'

describe('class Account tests', () => {
    const testAccount = new Account("test name", 0);
    beforeEach(() => {
        testAccount.balance = 0;
    });
    
    test('testing accountDeposit', () => {
        expect(testAccount.accountDeposit(10)).toEqual(10);
        expect(testAccount.accountDeposit(20)).toEqual(30);
    });
    
    test('testing accountWithdraw', () => {
        testAccount.balance = 100;
        expect(testAccount.accountWithdraw(10)).toEqual(90);
        expect(testAccount.accountWithdraw(10)).toEqual(80);
    });
    
    test('testing accountBalance', () => {
        expect(testAccount.accountBalance()).toEqual(0);
        testAccount.accountDeposit(10);
        expect(testAccount.accountBalance()).toEqual(10);
    });
})


test('testing addAccount', () => {
    myDiv = document.createElement("div")
    expect(accountFuncs.addAccount(myDiv, "NewAccount"))
})