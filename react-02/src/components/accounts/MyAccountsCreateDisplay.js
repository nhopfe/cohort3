import React from 'react';
import { AppContext } from '../AppContext.js';

class AccountCreateDisplay extends React.Component {
		static contextType = AppContext;
		
		onChangeFuncs = (event) => {
			this.context.handleOnChange(event);
			this.context.resetNamingError();
		}

    render() {
        return (
            <div className="create-account-display">
                <form onSubmit={(event) => this.props.handleSubmit(event)}>
                    <label className="create-account-text">
                        Name:
                    </label>
                    <input type="text" name="acctName" className="create-account-name-input" 
                        value={this.context.state.acctName} onChange={(event) => this.onChangeFuncs(event)}/>
										<label className="create-account-error-field" placeholder="">
												{this.context.state.namingError}
										</label>
                    <label className="create-account-text">
                        Balance:
                    </label>
                    <input type="number" maxLength="15" name="acctBalance" className="create-account-balance-input" 
                        value={this.context.state.acctBalance} onChange={(event) => this.context.handleOnChange(event)} />
                    <input type="submit" value="Submit" className="button create-account-button" />
                </form>
            </div>
        )
    }
}

export default AccountCreateDisplay;