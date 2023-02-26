$(document).ready(function () {
  $(window).scroll(function () {
    // sticky navbar on scroll script
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }

    // scroll-up button show/hide script
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  // slide-up script
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    // removing smooth scroll on slide-up button click
    $("html").css("scrollBehavior", "auto");
  });

  $(".navbar .menu li a").click(function () {
    // applying again smooth scroll on menu items click
    $("html").css("scrollBehavior", "smooth");
  });

  // toggle menu/navbar script
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  // typing text animation script
  var typed = new Typed(".typing", {
    strings: ["Back-End Developer", "Designer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  var typed = new Typed(".typing-2", {
    strings: ["Back-End Developer", "Designer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  // owl carousel script
  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
});

// var link = document.createElement('a');
// link.href = 'https://drive.google.com/file/d/13L6OYIrzC24WZfZszSOmGFauPL3snFEK/view?usp=share_link';
// link.download = 'file.pdf';
// link.dispatchEvent(new MouseEvent('click'));

// let resumeSection= document.getElementById("resumebutton")
//   resumeSection.addEventListener("click",()=>{
//     window.open('https://drive.google.com/file/d/13L6OYIrzC24WZfZszSOmGFauPL3snFEK/view?usp=share_link', '_blank');
 
// })

function download_file(fileURL, fileName) {
  var link = document.createElement('a');
  link.href = fileURL;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}


let resumeSection= document.getElementById("resumebutton")
  resumeSection.addEventListener("click",()=>{
    // window.open('https://drive.google.com/file/d/13L6OYIrzC24WZfZszSOmGFauPL3snFEK/view?usp=share_link', '_blank');
    var fileURL = "https://drive.google.com/file/d/13L6OYIrzC24WZfZszSOmGFauPL3snFEK/view?usp=share_link";
    var fileName = "test.pdf";
    download_file(fileURL, fileName);
 
})