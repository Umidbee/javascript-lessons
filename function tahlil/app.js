// function tahlil

function calcAge(birthYear, lastName, firstName) {
    const age = 2024 - birthYear

    console.log(`${firstName}, ${lastName} siz ${age} yoshga kirdiz`);

    return age
}

const age = calcAge('1980', 'Yusupov', 'Ulugbek')