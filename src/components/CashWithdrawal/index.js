// Write your code here
import {Component} from 'react'
import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {money: 2000}

  onchangemovey = value => {
    this.setState(prevstate => ({money: prevstate.money - value}))
  }

  getnamofthis = name => name.slice(0, 1)

  render() {
    const {denominationsList} = this.props
    const {money} = this.state
    const name = 'Saibabu'
    const initial = this.getnamofthis(name)
    return (
      <div className="cashwithdrawalapp">
        <div className="cashwithdrawalcon">
          <div className="usernamecon">
            <div className="userlogo">
              <p className="">{initial}</p>
            </div>
            <h1 className="username">{name}</h1>
          </div>
          <div className="balancecon">
            <p className="balanceheading">Your Balance</p>
            <div className="currentmoneycon">
              <h1 className="currentmoney">{money}</h1>
              <p className="currency">In Rupees</p>
            </div>
          </div>
          <h1 className="currentmoney">Withdrawal</h1>
          <p className="balanceheading">CHOOSE SUM (IN RUPEES)</p>
          <ul className="unorderdenominations">
            {denominationsList.map(each => (
              <DenominationItem
                denominationis={each}
                onchangemovey={this.onchangemovey}
                key={each.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default CashWithdrawal
