var React = require('react')

var AccountDetails = function(props){

if(!props.account){
  return(
    <h4>please search for an account</h4>)
}
return(
  <div>
  <h4>{props.account.owner}</h4>
  <p>{props.account.amount}</p>
  <p>{props.account.type}</p>
  </div>
  )

}

module.exports = AccountDetails