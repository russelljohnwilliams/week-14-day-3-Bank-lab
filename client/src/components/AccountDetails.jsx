var React = require('react')

var AccountDetails = function(props){

if(!props.account){
  return(
    <h4>please search for an account</h4>)
}
return(
  <div>
  <h4>Account holder Name : {props.account.owner}</h4>
  <p>Account Value : £{props.account.amount}</p>
  <p>Account Type: {props.account.type}</p>
  <p>Account Details: {props.account.details}</p>
  </div>
  )

}

module.exports = AccountDetails