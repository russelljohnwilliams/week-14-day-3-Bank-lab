var React = require('react');
var AccountSelect = require ('./AccountSelect')
var AccountDetails = require('./AccountDetails')
var Bank = require('../models/bank/bank')



var BankBox = React.createClass({

getInitialState: function(){
  var sampleData = [{ owner: "Nico", amount: 1000, type:"personal" }, { owner: "Russell", amount: 500, type:"business" }]
  var bank = new Bank()

  //add some accounts to the bank
  bank.addAccount(sampleData[0]);
  bank.addAccount(sampleData[1]);
  // console.log(sampleData[0]) 
  // console.log(sampleData[1]) 
  //loop and add accounts to bank

  return {bank: bank, selectedAccount: null}
},




handleOwnerSubmit: function(owner){
  // var owners = this.state.accounts.owner;
  var result = this.state.bank.findAccountByOwnerName(owner);
  console.log(result);
  this.setState({selectedAccount: result})
},



render: function(){
  return(
    <div>
    <h1> Bank</h1>
    <AccountSelect onCommentSubmit={this.handleOwnerSubmit}/>
    <AccountDetails account={this.state.selectedAccount}/>
    </div>
    )
}


})

module.exports = BankBox