// console.log(document);


// // console.log(item.style);

// item.style = 'transition: 0.4s';


// item.addEventListener("click", function () {
//             let random = Math.floor(Math.random() * 300) + 150;
//             item.style.width = `${random}px`;
//             item.style.height = `${random}px`;
//     item.style.background = `rgb(${randColor()}, ${randColor()}, ${randColor()})`;



// });

// function randColor() {
//     let random = Math.floor(Math.random() * 256);

//     return random;
// }

// const items = document.querySelectorAll('.block__item');

// console.log(items);

// for (let i = 0; i < items.length; i++) {

//     items[i].innerHTML = i + 1;

//     console.log(items[i].getAttribute('data-bg'));

//     if (items[i].getAttribute('data-bg') == 'random') {

//         items[i].style.background = `rgb(${randColor()}, ${randColor()}, ${randColor()})`
//     }

// }

const item = document.querySelectorAll('.block__item');
const body = document.querySelector('body')


// item.style.background = item.getAttribute('data-bg')
// if (item.getAttribute('data-bg') == 'red') {
//     body.style.background = 'red';
// } else if (item.getAttribute('data-bg') == "blue") {
//     body.style.background = 'blue';
// } else if (item.getAttribute('data-bg') == 'green') {
//     body.style.background = 'green';
// } else if (item.getAttribute('data-bg') == 'yellow') {
//     body.style.background = 'yellow';
// } else if (item.getAttribute('data-bg') == 'white') {
//     body.style.background = 'white';
// }
for (let i = 0; i < item.length; i++) {
    console.log(item[i]);
    item.innerHTML = i + 1;

    console.log(item[i].getAttribute('data-bg'));
    item[i].style.background = item[i].getAttribute('data-bg')

    item[i].addEventListener("click", function () {
        if (item[i].style.background == item[i].getAttribute('data-bg')) {
            body.style.background = item[i].getAttribute('data-bg');
        }
    })
}