// template string
// const title = 'Rastamojka qachon ochiladi ?! yohud Monopoliya Respublikasi !'
// const author = "Lag'mon markazi"
// const likes = 3500000

// concatentation way

// let result = 'Bu post nomi ' + title + ' ' + author + ' tomonidan yozilgan. ' + 'va bu postda ' + likes + 'ta like bor'
// console.log(result);


// template string way

// let result = `Bu post nomi ${title}, ${author} tomonidan yozilgan. Va bu postda ${likes} ta like bor`
// console.log(result);

 
// practice template string

const text = 'Data talim stansiyasi qachon ochilgan ?! Uzbekistan Respublikasi Urganch shahar !'
const boss = "Shahzod Sabirov"
const subscriber = 55000

// let result = `Bu talim nomi ${text}, ${boss} tomonidan ochilgan. Va bu talimda ${subscriber} ta subcriber bor`
// console.log(result);

let result = `
 <h2>${text}</h2>
 <p>${boss} tomonidan yozilgan</p>
 <span>${subscriber} ta obunachi ega</span>`
 console.log(result);