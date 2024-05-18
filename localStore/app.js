//LocalStore

//setItem
const age = '16'
const name = 'Umidbek'
localStorage.setItem('Name', name, age)
localStorage.setItem('Age', age)

//getItem
const getAge = localStorage.getItem('Age')
console.log(getAge);
//clear
localStorage.clear()