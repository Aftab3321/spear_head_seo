let yearly = document.getElementById("yearly-toggle");
let Monthlyprices = [299, 499, 1999];
let price = document.getElementsByClassName("pack-price");
let perMonth = document.getElementsByClassName("per-month");


let toggleBtn = document.getElementById("navbar-toggle");
let toggleArea = document.getElementById("navbarSupportedContent");
let darkdiv = document.getElementById("dark-div");
let closeToggle = document.getElementById("cross");
let htmlTag = document.getElementsByTagName("html");

for (i in Monthlyprices) {
    price[i].innerText = Monthlyprices[i];
    perMonth[i].innerText = "/ Month";
}

yearly.addEventListener("click", () => {
    if (yearly.checked) {

        for (i in Monthlyprices) {
            let yearlyCalculationsBasic = Monthlyprices[i] * 12;
            let percent = yearlyCalculationsBasic / 100;
            percent *= 20;
            yearlyCalculationsBasic -= percent;
            price[i].innerText = Math.round(yearlyCalculationsBasic);
            perMonth[i].innerText = "/ Year";
        }
    } else {
        for (i in Monthlyprices) {
            price[i].innerText = Monthlyprices[i];
            perMonth[i].innerText = "/ Month";
        }
    }
})


//scroll to top functionality

    let scrollButton = document.getElementById("scrollToTop");  
    window.onscroll = function() {detectScroll()};

    function detectScroll() {
        if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
            scrollButton.classList.remove("scrollToTophidden");
            scrollButton.classList.add("scrollToTopVisible");
        } else if (document.body.scrollTop < 500 || document.documentElement.scrollTop < 500) {
            scrollButton.classList.add("scrollToTophidden");
            scrollButton.classList.remove("scrollToTopVisible");
        }
    } 

    //when user clicks on the button
    scrollButton.addEventListener("click", function() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    })



//Underline functionality on navigation menu
// let navBar = document.getElementsByClassName("nav-list-item");
// let navBarList = document.getElementById("navbar-list");
// let navBarListItem = navBarList.children;

// for(i in navBarListItem) {
//     navBarListItem[i].onclick = function() {setActive(this)};
// }
    
// function setActive(e) {
//     for(let i = 0; i < navBarListItem.length; i++) {
//         if(navBarListItem[i].classList.contains("active")) {
//             navBarListItem[i].classList.remove("active");
//         }
//     }
//     e.classList.add("active");
//     toggleArea.classList.remove("show2");
//     toggleArea.classList.add("hidden");

// }
    
//navbar customization


// toggleArea.style.display = "none";

// let innerWidthWindow = window.innerWidth;
// console.log(innerWidthWindow);
// if (innerWidthWindow < 1000) {
//     toggleArea.style.display = "block";
// }


toggleBtn.addEventListener("click", function() {
    toggleArea.classList.add("show");
    darkdiv.classList.remove("display-none");
    htmlTag[0].style.overflow = "hidden";
    
    // if (toggleArea.classList.contains("show")) {
    //     toggleArea.classList.add("hidden");
    //     toggleArea.classList.remove("show");
        
    // } else {
    //     toggleArea.classList.add("show");
    //     toggleArea.classList.remove("hidden");
    // }
})

closeToggle.addEventListener("click", function() {
    toggleArea.classList.remove("show");
    darkdiv.classList.add("display-none");
    htmlTag[0].style.overflow = "";
})




