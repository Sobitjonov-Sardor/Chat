const item = document.querySelectorAll('.block__item');
const body = document.querySelector('body')

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
