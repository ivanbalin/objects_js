function sumNumericFields(obj){
    let sum = 0

    // по каждому ключу объекта
    for (const key in obj){
        // проверка является ли ключ числом
        if (typeof obj[key] === 'number'){
            sum += obj[key]
        }
    }
    return sum
}

console.log(sumNumericFields({ name: 'Vasya', friends: 5, likes: 19, projects: 7 }))