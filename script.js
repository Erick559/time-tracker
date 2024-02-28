const cards = document.querySelectorAll('.cards');
const cardsArray = Array.from(cards);
const titles = document.querySelectorAll('.card-title');
const hourCount = document.querySelectorAll('.hour-count');
const prevHourCount = document.querySelectorAll('.previous-count');

const dailyHours  = document.querySelector('.daily');
const weeklyHours = document.querySelector('.weekly');
const monthlyHours = document.querySelector('.monthly');

function init(){
    const tabs = document.querySelectorAll('#btn')
    
    for (let i = 0; i < tabs.length; i++) {
        const tab = tabs[i]; 
        tab.addEventListener('click', () => {
            tab.classList.add('active'); // add active class to current btn

            for (let j = 0; j < tabs.length; j++) {
                if (i != j) {
                    const tab = tabs[j]; 
                    tab.classList.remove('active');
                }
            }
        });
    } 
}

init()


fetch('./data.json')
    .then(res => res.json())
    .then(data =>{
        for (let i = 0; i < titles.length; i++){
            if(data[i]){
                titles[i].textContent = data[i].title;
            }
        }

        dailyHours.addEventListener('click', () =>{
            for (let i = 0; i < hourCount.length; i++){
                if(data[i]){
                    hourCount[i].textContent = data[i].timeframes.daily.current;
                }
            }
        })

        weeklyHours.addEventListener('click', () =>{
            for (let i = 0; i < hourCount.length; i++){
                if(data[i]){
                    hourCount[i].textContent = data[i].timeframes.weekly.current;
                }
            }
        })

        monthlyHours.addEventListener('click', () =>{
            for (let i = 0; i < hourCount.length; i++){
                if(data[i]){
                    hourCount[i].textContent = data[i].timeframes.monthly.current;
                }
            }
        })
    })

  