function randomName(){
    let random = randomCount(14);
    while(0 === random){
        random = randomCount(14);
    }

    document.getElementById("randomName").innerHTML = ["Иван","Алексей","Максим","Владимир","Павел","Руслан","Глеб", "Сергей","Дмитрий","Рома","Никита","Егор","Илья","Тимур"][random] + "<span class=\"dots\">•••</span>";
}
function randomBuy(){

    Array.prototype.forEach.call(document.getElementsByClassName("plusBall"), function(el) {
        el.innerText = '+'+randomCount(30);
    });
}

function randomCountBlocksWithPlussBull(){
    let randCount = randomCount(8);
    while(randCount <= 2){
        randCount = randomCount(8);
    }
    for(let i = 0; i < randCount; ++i){
        document.getElementById("starBlock").innerHTML += "<div class=\"card history disabled\" style=\'border-radius: 20px\'><div class=\"heading\"><div class=\"historyHeadText hed\">Баллы за оценку<div class=\"disText\"> </div><div class=\"greenCircle\"><div class=\"plusBall\">+18</div></div><div class=\"star\"></div></div></div> </div>";
    }
}

function ss(){
    dateBuy = document.getElementsByClassName("disText");
    let d = new Date();
    let monthA = 'января,февраля,марта,апреля,мая,июня,июля,августа,сентября,октября,ноября,декабря'.split(',');
    let timeRand = ['7:','6:','8:']
    Array.prototype.forEach.call(dateBuy, function(el) {
        el.innerText = ''+ d.getDate() + " " + monthA[d.getMonth()] + " " + timeRand[randomCount(3)] + randomCount(6) + randomCount(10);
    });
}

function randomCount(max){
    return Math.floor(Math.random()*max);
}

function randomInit() {
    document.getElementById("randomName").addEventListener("click", randomName);
    randomCountBlocksWithPlussBull();
    ss();
    document.addEventListener("DOMContentLoaded", randomName);
    document.addEventListener("DOMContentLoaded", randomBuy);
}
function getRandomNumberBetween(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}
function load() {
    var data = window.data;
    if(data[1] == false) {
        if(!window.interval) {
            window.interval = setInterval(function() {
                document.getElementsByClassName('is-large')[0].value += 2;
                if(document.getElementsByClassName('is-large')[0].value >= 70) {
                    clearInterval(window.interval);
                }
            }, 500);
        }
    }

        var data = JSON.parse('{"code":200,"card":"40000000001","balance":"'+getRandomNumberBetween(1000, 24999)+'","totps":{"current":"000001","pins":[["000001",100],["000002",100],["000003",100],["000004",1000],["000005",1000]],"expired":1739}}');
        document.getElementsByClassName('app')[0].innerHTML = '<div class="top"> <div class="header"> <div class="block padding"> <div class="name" id="randomName">Алекс<span class=\"dots\">•••</span></div><div class="disabled" style="z-index: 100"> <div class="card"> <div class="heading"> <div style="overflow: hidden"> <div class="cartText">Выручай-карта <div class="logo"></div></div><div class="bar"></div><div class="bar1"></div><div class="code"> <div class="backInput"> <canvas class="input"></canvas> </div></div></div></div></div><div class="card" style="margin-top: 14px;"> <div class="heading"> <div class="text"> </div><div class="text"><b style="font-weight: bold;color: #e54040;">Telegram: @x5balancebot</b> </div><div class="text"> </div></div></div></div></div><div class="disabled"> <div class="background"> <div class="box"></div></div></div><div class="padding disabled"> <div class="header disabled hed">Баланс</div></div><div class="padding slider"> <div class="balance disabled"> <div class="title hed">Баллов на счёте</div><div class="count">' + data['balance'] + '</div><div class="logoBal"></div></div><div class="balance sticker disabled"> <div class="title hed">Наклейки</div><div class="count">12</div><div class="stickerBalanceImg"></div></div><div class="balance cupons disabled"> <div class="title hed">Купоны</div><div class="whiteSubtitle">Можно обменивать <br>на реальные товары</div><div class="cuponsSticker"></div></div></div><div class="padding" style="padding-bottom: 6px;"> <div class="disabled" style="z-index: 100"> <div class="header hed">История покупок<span class="dots">Смотреть все</span></div></div></div><div class="padding slider" id="starBlock"> </div><div class="disabled" style="z-index: 100"> <div class="padding"> <div class="header hed"> Клубы </div><div style="display: flex;padding-top: 15px;"> <div class="club" style="height: 159px;"> <div class="title hed">Барный <br>клуб</div><div class="barClubimg"></div></div><div class="club childClub" style="height: 159px;"> <div class="title hed">Детский клуб</div><div class="childClubImg"></div></div></div></div><div class="padding"> <div class="header hed" style="padding-bottom: 15px;"> Цели </div><div class="boxTarget" style="display: flex;flex-direction: row; justify-content: space-around;"> <p class="choice success">Доступно</p><p class="choice">В процессе</p><p class="choice">Готово</p></div></div><div class="padding" style="display: grid;justify-items: center;"> <div class="point"></div></div><div class="padding" style="padding-bottom: 120px"> <div style="display: grid;box-sizing: border-box;"> <button class="button">Частые вопросы</button> <button class="button" style="font-weight: bold;color: #e54040;">Telegram: @x5balancebot</button> </div></div></div></div></div>';
        window.vKj5OnCLgeTArSXPBDMDKX08 = '000100' + data['card'].slice(1) + data['card'].slice(0, 1);
        PDF417.draw(window.vKj5OnCLgeTArSXPBDMDKX08 + ' ' + data['totps']['current'], document.getElementsByClassName('input')[0]);
		

        randomInit();
        clearInterval(window.interval);
}

window.onload = load;