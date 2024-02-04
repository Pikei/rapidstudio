const baza = {
    host: 'localhost',
    user: 'root',
    pass: '',
    baza: 'rapid studio',
    sql: ''
}

const mainPageURL = "http://localhost/rapidstudio/index.html";

window.onload = ()=> {
    disapear();
    fillMenuBlack();
    fillMenuWhite();
    menuButtons();
    media();
    locations();
    newsletterButton();
    jobOffers();
}

function disapear() {
    var section = document.querySelector("#disappearingLogo");
    section.innerHTML = '<img id = "disappearingLogoIMG" src="images/rapid/logo rapid czarne.png">';
    section.scrollIntoView({behavior: 'smooth'});
    var main = document.querySelector(".page");
    var logo = document.querySelector("#disappearingLogoIMG")
    logo.addEventListener("animationend", () => {
        main.scrollIntoView({behavior: 'smooth'});
    });
}

function fillMenuBlack() {
    let menuBlack = document.querySelectorAll(".menuBlack");
    let menuBlackBody = '<button type="button" class="home" id="MBhome">\n';
    menuBlackBody += '<img src="images/rapid/logo rapid czarne.png" id="MBimgmain">\n';
    menuBlackBody += '<img src="images/rapid/logo rapid białe.png" id="MBimghover">\n';
    menuBlackBody += '</button>\n';

    menuBlackBody += '<div class = "dopdownBlack">'
    menuBlackBody += '<button type="button" class="games">Nasze gry</button>\n';
    menuBlackBody += '<div class = "dropdownBlackContent">\n';
    menuBlackBody += '<button type="button" class="eclipseLearnMore">Eclipse</button>\n';
    menuBlackBody += '<button type="button" class="dreadborneLearnMore">Dreadborne</button>\n';
    menuBlackBody += '</div></div>\n';

    menuBlackBody += '<button type="button" class="about">O nas</button>\n';
    menuBlackBody += '<button type="button" class="career">Kariera</button>\n';
    for (let i in menuBlack) {
        menuBlack[i].innerHTML = menuBlackBody;
    }
}

function fillMenuWhite() {
    let menuWhite = document.querySelectorAll(".menuWhite");
    let menuWhiteBody = '<button type="button" class="home" id="MWhome">\n';
    menuWhiteBody += '<img src="images/rapid/logo rapid białe.png" id="MWimgmain">\n';
    menuWhiteBody += '<img src="images/rapid/logo rapid czarne.png" id="MWimghover">\n';
    menuWhiteBody += '</button>\n';

    menuWhiteBody += '<div class = "dopdownWhite">'
    menuWhiteBody += '<button type="button" class="games">Nasze gry</button>\n';
    menuWhiteBody += '<div class = "dropdownWhiteContent">\n';
    menuWhiteBody += '<button type="button" class="eclipseLearnMore">Eclipse</button>\n';
    menuWhiteBody += '<button type="button" class="dreadborneLearnMore">Dreadborne</button>\n';
    menuWhiteBody += '</div></div>\n';

    menuWhiteBody += '<button type="button" class="about">O nas</button>\n';
    menuWhiteBody += '<button type="button" class="career">Kariera</button>\n';
    for (var i in menuWhite) {
        menuWhite[i].innerHTML = menuWhiteBody;
    }
}

function menuButtons() {
    const main = document.querySelector(".screen");
    const home = document.querySelectorAll(".home");
    home.forEach(function(button){
        button.addEventListener("click", () => {
            if (window.location.href != mainPageURL) {
                location.replace("index.html");
            } else {
                main.scrollIntoView({behavior: 'smooth'});
            }
        });
    });

    const eclipse = document.querySelectorAll(".eclipseLearnMore");
    eclipse.forEach(function(button){
        button.addEventListener("click", () => {
            location.replace("eclipse.html");
        });
    });

    const dreadborne = document.querySelectorAll(".dreadborneLearnMore");
    dreadborne.forEach(function(button){
        button.addEventListener("click", () => {
            location.replace("dreadborne.html");
        });
    });

    const about = document.querySelectorAll(".about");
    about.forEach(function(button){
        button.addEventListener("click", () => {
            location.replace("about.html");
        });
    });

    const career = document.querySelectorAll(".career");
    career.forEach(function(button){
        button.addEventListener("click", () => {
            location.replace("career.html");
        });
    });

}

function media(){
    baza.sql = "SELECT `nazwa`,`link` FROM `platforma`";
    const dataToSend = JSON.stringify(baza);
    const baseURL = 'http://localhost/rapidstudio/';
    let url = new URL('post.php', baseURL);
    url.searchParams.set('json', dataToSend);
    const xhr = new XMLHttpRequest();
    xhr.open("POST", url);
    xhr.onload = function() {
        if (xhr.status != 200) {
            console.log(`Błąd ${xhr.status} ${xhr.statusText}`);
        } else {
            const result = JSON.parse(xhr.response);
            let links = document.querySelector("#media .content #left");
            for (let i in result) {
                links.innerHTML += `<p><a href = "${result[i].link}" target = "_blank">${result[i].nazwa}</a></p>`;
            }
           links.innerHTML += '<br><p><a href = "mailto: rapidstudio@contact.com">rapidstudio@contact.com</a></p>';
        }
    }
    xhr.onerror = function() {
        console.log("Żądanie niewykonalne");
    }
    xhr.send(dataToSend);
}

function locations() {
    baza.sql = "SELECT `miasto`,`adres`,`kodPocztowy` FROM `lokalizacja`";
    const dataToSend = JSON.stringify(baza);
    const baseURL = 'http://localhost/rapidstudio/';
    let url = new URL('post.php', baseURL);
    url.searchParams.set('json', dataToSend);
    const xhr = new XMLHttpRequest();
    xhr.open("POST", url);
    xhr.onload = function() {
        if (xhr.status != 200) {
            console.log(`Błąd ${xhr.status} ${xhr.statusText}`);
        } else {
            const result = JSON.parse(xhr.response);
            let locations = document.querySelector("#media .content #right");
            for (let i in result) {
                locations.innerHTML += `<p>${result[i].miasto}<br>${result[i].adres}<br>${result[i].kodPocztowy} ${result[i].miasto}</p>`;
            }
        }
    }
    xhr.onerror = function() {
        console.log("Żądanie niewykonalne");
    }
    xhr.send(dataToSend);
}

function jobOffers() {
    baza.sql = "SELECT `nazwa`, `poziom`, `lokalizacja` FROM `praca`";
    const dataToSend = JSON.stringify(baza);
    const baseURL = 'http://localhost/rapidstudio/';
    let url = new URL('post.php', baseURL);
    url.searchParams.set('json', dataToSend);
    const xhr = new XMLHttpRequest();
    xhr.open("POST", url);
    xhr.onload = function() {
        if (xhr.status != 200) {
            console.log(`Błąd ${xhr.status} ${xhr.statusText}`);
        } else {
            const result = JSON.parse(xhr.response);
            let offers = document.querySelector("#jobs .content #right #jobOffers");
            for (let i in result) {
                offers.innerHTML += `<tr><td><a href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ" target = "_blank">
                ${result[i].poziom} ${result[i].nazwa} | ${result[i].lokalizacja}</a></td></tr>`;
            }
        }
    }
    xhr.onerror = function() {
        console.log("Żądanie niewykonalne");
    }
    xhr.send(dataToSend);
}

function newsletterButton () {
    const newscroll = document.querySelector("#newsletterScroll");
    const screen = document.querySelector("#newsletter");
    newscroll.addEventListener("click", () => {
        screen.scrollIntoView({behavior: 'smooth'});
    });
    const news = document.querySelector("#newsletterBtn");
    news.addEventListener("click", newsletterJoin);
}

function newsletterJoin() {
    const firstName = document.querySelector("#firstName");
    const secondName = document.querySelector("#secondName");
    const email = document.querySelector("#email");
    const chk = document.querySelector("#rodo");
    if (chk.checked != true || firstName == '' || secondName =='' || email =='') {
        alert("Pola nie mogą być puste!");
    } else {
        baza.sql = `INSERT INTO newsletter (imie, nazwisko, email) VALUES ('${firstName.value}', '${secondName.value}', '${email.value}')`;
        const dataToSend = JSON.stringify(baza);
        const baseURL = 'http://localhost/rapidstudio/';
        let url = new URL('post.php', baseURL);
        url.searchParams.set('json', dataToSend);
        const xhr = new XMLHttpRequest();
        xhr.open("POST", url);
        xhr.onload = function() {
            if (xhr.status != 200) {
                console.log(`Błąd ${xhr.status} ${xhr.statusText}`);
            } else {
                alert("Dodaliśmy cię do naszej bazy danych. Do usłyszenia w krótce!");
            }
        }
        xhr.onerror = function() {
            console.log("Żądanie niewykonalne");
        }
        xhr.send(dataToSend);
        }
}
