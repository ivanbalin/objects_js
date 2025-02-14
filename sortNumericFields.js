function sortNumericFields(obj){
    let arr = []

    // по каждому ключу объекта
    for (const key in obj){
        if (typeof obj[key] === 'number'){
            arr.push([key, obj[key]])
        }
    }
    // сортировка по числовому значению в порядке убывания
    arr.sort((a, b) => b[1] - a[1]);

    // извлечение ключей
    return arr.map(arr => arr[0]);

     
}

console.log(sortNumericFields({ name: 'Vasya', friends: 5, likes: 19, projects: 7 }))