const hour = document.querySelector('.h'),
    min = document.querySelector('.m'),
    sec = document.querySelector('.s'),
    minNumber = document.querySelector('.minutes'),
    hourNumber = document.querySelector('.hours');

function clock() {
    const time = new Date();

    const seconds = time.getSeconds() * 6;
    const hours = time.getHours() * 30;
    const minutes = time.getMinutes() * 6;

    sec.style = `transform: rotate(${seconds}deg); transition: 1s linear`;
    hour.style = `transform: rotate(${hours}deg); transition: 1s linear`;
    min.style = `transform: rotate(${minutes}deg); transition: 1s linear`;

    minNumber.innerHTML = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes();
    hourNumber.innerHTML = time.getHours() < 10 ? '0' + time.getHours() : time.getHours();

    setTimeout(() => clock(), 1000);
}

clock();

const links = document.querySelectorAll('.tabsItem'),
    contents = document.querySelectorAll('.tabsContentItem');

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function (e) {
        // preventDefault() - метод для отключения функционала HTML
        e.preventDefault();

        for (let ix = 0; ix < links.length; ix++) {
            links[ix].classList.remove('active');
            contents[ix].classList.remove('active');
        }
        tabs(this, contents[i]);
    })
}

function tabs(link, content) {
    link.classList.add('active');
    content.classList.add('active');
}

//секундомер

// const btn = document.querySelector('.stopwatch__btn'),
//     secondWatch = document.querySelector('.stopwatch__seconds'),
//     minuteWatch = document.querySelector('.stopwatch__minutes'),
//     houreWatch = document.querySelector('.stopwatch__hours');

// function counter() {
//     secondWatch.innerHTML++
//     if (secondWatch.innerHTML == 60) {
//         minuteWatch.innerHTML++
//         secondWatch.innerHTML = 0
//     }
//     setTimeout(() => counter(), 1000);
// }

// counter()

const btn = document.querySelector('.stopwatch__btn'),
    secondWatch = document.querySelector('.stopwatch__seconds'),
    minuteWatch = document.querySelector('.stopwatch__minutes'),
    hourWatch = document.querySelector('.stopwatch__hours');
    
btn.addEventListener("click", function () {
    if (btn.innerHTML == 'start') {
        btn.innerHTML = 'stop'
        let i = 0;
    } 
     else if (btn.innerHTML == 'stop') {
        btn.innerHTML = 'clear'
    } else {
        btn.innerHTML = 'start'
        
        secondWatch.innerHTML = 0
        minuteWatch.innerHTML = 0
        hourWatch.innerHTML = 0
    }
});

function stopWatch(el, i) {
    if (btn.innerHTML == 'stop') {
        secondWatch.innerHTML++
        if (secondWatch.innerHTML == 60) {
            minuteWatch.innerHTML = +1
            secondWatch.innerHTML = 0
            
            if (minuteWatch.innerHTML == 59) {
                minuteWatch.innerHTML = +1
                hourWatch++
            } else {
                
            }
        }
    }
     else {
        
    }
    setTimeout(() => stopWatch(), 1000);
}

stopWatch()
