let array = [];
for (let i = 0; i < Infinity; i++) {
    var command = prompt('Введите команду: add/delete/stop');
    var commandArr = command.split(", ")
    if (commandArr[0] == "add") {
        array.push(commandArr[1])
    } else if (commandArr[0] == "delete") {
        console.clear(commandArr[1])
    } else if ( commandArr[0] == "stop"){
        break;
    }
}
console.log(array);