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

render: function(){
  return(
    <div>
    <h1> Bank</h1>
    <AccountSelect onCommentSubmit={this.handleOwnerSubmit}/>
    <AccountDetails account={this.state.selectedAccount}/>
    <AddAccountForm onAccountSubmit={this.handleAccountSubmit}/>
    </div>
    )
}


})

module.exports = BankBox