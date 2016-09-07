var React = require('react')


var AddAccountForm = React.createClass({


  getInitialState: function(){
    return{owner: '', amount: 0, type: '', details: ''}
  },

  handleOwnerChange: function(e){
    this.setState({owner: e.target.value})
  },

  handleAmountChange: function(e){
    this.setState({amount: e.target.value})
  },

  handleTypeChange: function(e){
    this.setState({type: e.target.value})
  },
  
  handleDetailsChange: function(e){
    this.setState({details: e.target.value})
  },

  handleSubmit: function(e){
    e.preventDefault()

    var owner = this.state.owner.trim()
    var amount = this.state.amount
    var type = this.state.type.trim()
    var details = this.state.details.trim()

    if( !owner || !type || !details ){
      return;
    }
    this.props.onAccountSubmit({owner: owner, amount: amount, type: type, details: details})
    this.setState({owner:'', amount:0, type:'', details:''})
  },

  render:function(){
    return(
      <form className="accountForm" onSubmit={this.handleSubmit}>
      <input
      type="text"
      placeholder="enter account name"
      value={this.state.owner}
      onChange={this.handleOwnerChange}
      />
      
      <input
      type="number"
      placeholder="enter total funds"
      value={this.state.amount}
      onChange={this.handleAmountChange}
      />

      <input
      type="text"
      placeholder="enter account type"
      value={this.state.type}
      onChange={this.handleTypeChange}
      />

      <input
      type="text"
      placeholder="enter account details"
      value={this.state.details}
      onChange={this.handleDetailsChange}
      />
      <input
      className ='button'
      type="submit"
      value="Post"
      />
      </form>
      )
  }


})

module.exports = AddAccountForm