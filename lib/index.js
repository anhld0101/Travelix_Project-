$(window).scroll(function () {
  // event fixed navbar when scroll
  var breakpointFixed = 195; // giá trị khi sự kiện fixed navbar bắt đầu
  var currentScrollTop = $(this).scrollTop(); //vị trí (giá trị) hiện tại của scroll(trục Oy)
  if (currentScrollTop > breakpointFixed) {
    $("nav.navBar").addClass("navbarFixed"); // thêm classList navbarFixed vào navbar
    $(".back-to-top-button").removeClass("d-none"); // xóa classList d-none vào button back-to-top
  } else {
    $("nav.navBar").removeClass("navbarFixed"); // xóa classList navbarFixed vào navbar
    $(".back-to-top-button").addClass("d-none"); // xóa classList d-none vào button back-to-top
  }
});
// event back-to-top button click
$(".back-to-top-button").click(function () {
  $("html, body").animate({ scrollTop: 0 }, 200);
});

//hiện toggle khi giao diện chuyển sang mobile

var defaultNavbar = document.querySelector(".navBarCenter"); // đặt biến cho phần navbar mặc định
var breakMobile = window.matchMedia("(max-width: 576px)"); //đặt biến để check phần breakpoint khi giao diện chuyển sang mobile
var toggleNav = document.querySelector(".toggleNavbar"); // 

// Function to be executed when the breakpoint is reached
function handleMobileChange(event) {
  // Check if the breakpoint is currently active
  if (event.matches) {
    console.log("mobile breakpoint reached");
    // ẩn thanh navbar menu
    defaultNavbar.style.display = "none";
    // hiện toggle navbar kế bên nút search
    toggleNav.style.visibility = "visible";
  } else {
    console.log("mobile breakpoint not reached");
    // hiện lại thanh navbar menu mặc định
    defaultNavbar.style.display = "block";
    // ẩn toggle navbar kế bên nút search
    toggleNav.style.visibility = "hidden";
  }
}


// Add the event listener for the media query
breakMobile.addListener(handleMobileChange);

// Initial check
handleMobileChange(breakMobile);

