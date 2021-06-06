import './style.css'

const User = {
  id: '1',
  firstName: 'Mark',
  lastName: 'Lynch',
  memberTier: 'office',
  memberSince: '08-07-2017',
  status: 'active',
  nextBillingDate: 'June, 14th',
}
document.querySelector('#member-info').innerHTML = `
  <h1>Member Info</h1>
  <div class='member-section'>
    
  </div>
`
document.querySelector('#app').innerHTML = `
  <h1>Want to update your payment method?</h1>
`
