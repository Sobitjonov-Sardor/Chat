let users = {};

for (let i = 1; i < 11; i++) {
    let name = prompt(`Введите имя пользователя ${i}`)
    let age = +prompt(`Введите возраст пользователя ${i}`)

    let user = {
        id: i,
        name: name,
        age: age,
    }
    users[i] = user;


    console.log(`Пользователь: ${user.id}`);
    console.log(`Имя: ${user.name}`);
    console.log(`Возраст: ${user.age}`);

}



console.log(users);