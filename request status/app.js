const btn = document.querySelector('.button')

function getTodos() {
    const request = new XMLHttpRequest()
    request.addEventListener('readystatechange', function () {

        if (request.readyState === 4) {
            console.log(request.responseText);
        } else if (request.readyState === 4) {
            console.log("Malumotlarni olib bo'lmadi");
        }
    })

    request.open('Get', 'https://jsonplaceholder.typicode.com/todos/')
    request.send()
}

btn.addEventListener('click', function () {
    console.log(getTodos());
})
