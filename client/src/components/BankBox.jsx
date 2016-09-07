var React = require('react');
var AccountSelect = require ('./AccountSelect')
var AccountDetails = require('./AccountDetails')
var AddAccountForm = require('./AddAccountForm')

var Bank = require('../models/bank/bank')


var BankBox = React.createClass({

getInitialState: function(){
  var sampleData = [{ owner: "Nico", amount: 1000, type:"personal", details:"alert" }, { owner: "Russell", amount: 500, type:"business", details:"gold star customer" }]
  var bank = new Bank()

  bank.addAccount(sampleData[0]);
  bank.addAccount(sampleData[1]);

  return {bank: bank, selectedAccount: null}
},

handleOwnerSubmit: function(owner){
  var result = this.state.bank.findAccountByOwnerName(owner);
  console.log(result);
  this.setState({selectedAccount: result})
},

handleAccountSubmit: function(account){
  this.state.bank.addAccount(account);
},

payInterest: function(){
  this.state.bank.payInterest()
},

render: function(){
  return(
    <div>
    <h1> Bank</h1>
    <AccountDetails account={this.state.selectedAccount}/>
    <AccountSelect onCommentSubmit={this.handleOwnerSubmit}/>
    <AddAccountForm onAccountSubmit={this.handleAccountSubmit}/>
    <button onClick={this.payInterest} className="button"> pay interest </button> 
    </div>
    )
}


})

module.exports = BankBox