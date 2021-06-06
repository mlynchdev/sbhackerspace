const User = {
  id: '1',
  firstName: 'Mark',
  lastName: 'Lynch',
  memberTier: 'CO-WORKER',
  memberSince: '08-07-2017',
  status: 'active',
  nextBillingDate: 'June, 14th',
}
document.getElementById(
  'name'
).textContent = `${User.firstName} ${User.lastName}`
document.getElementById('tier').textContent = `${User.memberTier}`
document.getElementById('since').textContent = `${User.memberSince}`
document.getElementById('billing').textContent = `${User.nextBillingDate}`
document.getElementById('status').textContent = `${User.status}`
document.addEventListener('DOMContentLoaded', function () {
  const logout = () => {
    console.log(`The user id ${User.id} is now logged out`)
    setTimeout(function () {
      document.location.href = 'https://www.sbhackerspace.com'
    }, 1000)
  }
  document.getElementById('logout').addEventListener('click', logout)
})
