GitHubCalendar(".calendar", "Chetan-bhagat");
GitHubCalendar(".calendar", "Chetan-bhagat", { responsive: true });


document.getElementById('resume-link-1').addEventListener("click", () => {
    window.location.assign("https://drive.google.com/drive/folders/1Y2SeLoGQG90y3e-DMdpMWb_BXFOapuuJ?usp=share_link", "_blank");
})

document.getElementById('resume-link-2').addEventListener("click", () => {
    // console.log("OPENinig.....")
    window.location.assign("https://drive.google.com/drive/folders/1Y2SeLoGQG90y3e-DMdpMWb_BXFOapuuJ?usp=share_link", "_blank");
})


// let theme = document.querySelector(".theme");
let theme1 = document.querySelector(".theme1");
let themeslip = 1;
let display = document.querySelectorAll(".display2");
let mang = document.querySelector("#nav-menu>div:nth-child(2)")
let bodys = document.querySelector("body");
let nav = document.querySelector("#nav-menu");
let tabs = document.querySelectorAll(".blackwhite");
let project = document.querySelector("#projects");
let about = document.querySelector("#about");
let bar = document.querySelector("#query1");
let border=document.querySelector(".abouts");
let resume=document.querySelector("#resume-button-1");
bar.addEventListener("click", () => {
    if (bar.innerHTML == `<i class="fa-solid fa-bars"></i>`) {
        bar.innerHTML = `<i class="fa-solid fa-xmark"></i>`
        for (let i = 0; i < display.length; i++) {
            display[i].style.display = "inline"
        }
        theme1.style.display = "block"
        mang.style.display = "flex"
    } else {
        bar.innerHTML = `<i class="fa-solid fa-bars"></i>`
        for (let i = 0; i < display.length; i++) {
            display[i].style.display = "none";
        }
        theme1.style.display = "none"
        mang.style.display = "none"
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
    border.style.borderColor="rgb(234, 246, 249)"
    bodys.style.backgroundColor = "rgb(234, 246, 249)";
    resume.style.backgroundColor = "rgb(234, 246, 249)";
    nav.style.backgroundColor = "rgb(234, 246, 249)";
    theme1.innerHTML = `<i class="fa-solid fa-moon"></i>`;
} else {
    border.style.borderColor="rgb(18, 29, 48)"
    about.style.backgroundColor = "rgb(18, 29, 48)";
    project.style.backgroundColor = "rgb(18, 29, 48)";
    bodys.style.backgroundColor = "rgb(18, 29, 48)";
    resume.style.backgroundColor = "rgb(18, 29, 48)";
    nav.style.backgroundColor = "rgb(18, 29, 48)";
    tabs.forEach((item) => {
        item.style.color = "white"
    });
    theme1.innerHTML = `<i class="fa-solid fa-sun" ></i>`;

};

themeslip = sessionStorage.getItem("theme") || 0;
if (themeslip % 2 == 0) {
    bodys.style.backgroundColor = "rgb(234, 246, 249)";
    nav.style.backgroundColor = "rgb(234, 246, 249)";
    
} else {
    bodys.style.backgroundColor = "rgb(18, 29, 48)";
    nav.style.backgroundColor = "rgb(18, 29, 48)";
    tabs.forEach((item) => {
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
};
let A = setInterval(imgflip4, 3000);
let a = 0;
function imgflip4() {
    let img = ["./Images/project4.png", "./Images/slide42.png", "./Images/slide43.png", "./Images/slide44.png"]
    document.querySelector("#slide4").setAttribute("src", img[i]);
    a++;
    if (a == img.length) {
        a = 0
    }
};

let y = setInterval(imgflip2, 4000);
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


let loader = document.querySelector("#loading")
function loadkar() {
    loader.style.display = "none"
}
