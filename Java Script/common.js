// GitHubCalendar(".calendar", "Chetan-bhagat");

// // or enable responsive functionality:
// GitHubCalendar(".calendar", "Chetan-bhagat", { responsive: true });

// // Use a proxy
// GitHubCalendar(".calendar", "Chetan-bhagat", {
//    proxy (username) {
//      return fetch(`https://your-proxy.com/github?user=${Chetan-bhagat}`)
//    }
// })
function downloadresume() {
    window.open("https://export-download.canva.com/7XU8E/DAFa2X7XU8E/4/0-47195213441.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJHKNGJLC2J7OGJ6Q%2F20230217%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230217T172553Z&X-Amz-Expires=5235&X-Amz-Signature=74219797c88eca3b63bef0f83dfbd405612d81a9916fc47d41efe57eaa2b72da&X-Amz-SignedHeaders=host&response-content-disposition=attachment%3B%20filename%2A%3DUTF-8%27%27Designation%2520Analyst%2520Role%2520%26%2520Responsibility-%2520%25E2%2596%25AA%2520Data%2520Visualization%2520and%2520data%2520milling%2520by%2520using%2520different%2520data%2520visualization%2520tools.%2520Provide%2520technical%2520consulting%2520to%2520the%2520customer%2520category%2520managers%2520around%2520th%2520industry%2520best%2520pra.pdf&response-expires=Fri%2C%2017%20Feb%202023%2018%3A53%3A08%20GMT");
}
let theme = document.querySelector(".theme");
let theme1 = document.querySelector(".theme1");
let themeslip = 1;
let bodys = document.querySelector("body");
let nav = document.querySelector("#nav-menu");
let tabs = document.querySelectorAll(".blackwhite");
let project = document.querySelector("#projects");
let about = document.querySelector("#about");
// let nighttheme=document.querySelector(".theme");
let bar = document.querySelector("#togglebar");
let toogle = document.querySelector("#toogle");
let toogleAll = document.querySelectorAll("#toogle>a");
bar.addEventListener("click", () => {
    if (bar.innerHTML == `<i class="fa-solid fa-bars"></i>`) {
        bar.innerHTML = `<i class="fa-solid fa-xmark"></i>`
    } else {
        bar.innerHTML = `<i class="fa-solid fa-bars"></i>`
    }
});
theme1.addEventListener("click", function (event) {
    themeslip++;
    sessionStorage.setItem("theme", themeslip);
    themeslip = sessionStorage.getItem("theme") || 0;
    location.reload()
});
themeslip = sessionStorage.getItem("theme") || 0;
if (themeslip % 2 == 0) {
    about.style.backgroundColor = "white";
    project.style.backgroundColor = "white";
    bodys.style.backgroundColor = "rgb(234, 246, 249)";
    nav.style.backgroundColor = "rgb(234, 246, 249)";
    theme1.innerHTML = `<i class="fa-solid fa-moon"></i>`;
    toogle.style.backgroundColor = "rgb(234, 246, 249)"
} else {
    about.style.backgroundColor = "rgb(18, 29, 48)";
    project.style.backgroundColor = "rgb(18, 29, 48)";
    bodys.style.backgroundColor = "rgb(18, 29, 48)";
    nav.style.backgroundColor = "rgb(18, 29, 48)";
    tabs.forEach((item) => {
        item.style.color = "white"
    });
    theme1.innerHTML = `<i class="fa-solid fa-sun" ></i>`;
    toogle.style.backgroundColor = "rgb(18, 29, 48)";
    toogleAll.forEach((item) => {
        item.style.color = "white"
    });

};
theme.addEventListener("click", function (event) {
    themeslip++;
    sessionStorage.setItem("theme", themeslip);
    themeslip = sessionStorage.getItem("theme") || 0;
    location.reload()
});
themeslip = sessionStorage.getItem("theme") || 0;
if (themeslip % 2 == 0) {
    bodys.style.backgroundColor = "rgb(234, 246, 249)";
    nav.style.backgroundColor = "rgb(234, 246, 249)";
    theme.innerHTML = `<i class="fa-solid fa-moon"></i>`;
    toogle.style.backgroundColor = "rgb(234, 246, 249)"
} else {
    bodys.style.backgroundColor = "rgb(18, 29, 48)";
    nav.style.backgroundColor = "rgb(18, 29, 48)";
    tabs.forEach((item) => {
        item.style.color = "white"
    });
    theme.innerHTML = `<i class="fa-solid fa-sun"></i>`;
    toogle.style.backgroundColor = "rgb(18, 29, 48)";
    toogleAll.forEach((item) => {
        item.style.color = "white"
    });

};

let x = setInterval(imgflip, 2000);
let i = 0;
function imgflip() {
    let img = ["./Images/project3.png", "./Images/slide12.png", "./Images/slide13.png", "./Images/slide14.png"]
    document.querySelector("#slide1").setAttribute("src", img[i]);
    i++;
    if (i == img.length) {
        i = 0
    }
}
let y = setInterval(imgflip2, 3300);
let j = 0;
function imgflip2() {
    let img = ["./Images/project2.png", "./Images/slide21.png", "./Images/slide22.png"]
    document.querySelector("#slide2").setAttribute("src", img[j]);
    j++;
    if (j == img.length) {
        j = 0
    }
}

let z = setInterval(imgflip3, 4500);
let k = 0;
function imgflip3() {
    let img = ["./Images/project1.png", "./Images/slide31.png", "./Images/slide32.png"]
    document.querySelector("#slide3").setAttribute("src", img[k]);
    k++;
    if (k == img.length) {
        k = 0
    }
}

