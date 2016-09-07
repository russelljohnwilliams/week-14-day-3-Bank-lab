var React = require('react')

var AccountSelect = React.createClass({

  getInitialState: function(){
    return {owner: '', amount: 0, type: ''}
  },

  handleOwnerChange: function(e){
    this.setState({owner: e.target.value})
  },

  handleSubmit: function(e){
    e.preventDefault()
    var owner = this.state.owner.trim()
    console.log(owner)
    if (!owner){
      return
    }
    this.props.onCommentSubmit(owner)
  },




  render:function(){
    return(
        <form className="selectAccount" onSubmit={this.handleSubmit}>
        <input
        type="text"
        placeholder="enter account name"
        value={this.state.owner}
        onChange={this.handleOwnerChange}
        />
        <input
        className ='button'
        type="submit"
        value="post"
        />
        </form>
      )
  }

})

module.exports = AccountSelect
