jQuery(document).ready(function($) {
  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $(".back-to-top").fadeIn(1000);
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function() {
    $("html, body").animate({ scrollTop: 0 }, 2000, "easeInOut");
    return false;
  });

  // Header fixed on scroll
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $("#header").addClass("header-scrolled");
    } else {
      $("#header").removeClass("header-scrolled");
    }
  });

  if ($(window).scrollTop() > 100) {
    $("#header").addClass("header-scrolled");
  }

  // Real view height for mobile devices
  if (window.matchMedia("(max-width: 767px)").matches) {
    $("#intro").css({ height: $(window).height() });
  }

  // Initiate the wowjs animation library
  new WOW().init();

  // Initialize Venobox
  $(".venobox").venobox({
    bgcolor: "",
    overlayColor: "rgba(6, 12, 34, 0.85)",
    closeBackground: "",
    closeColor: "#fff"
  });

  // Initiate superfish on nav menu
  $(".nav-menu").superfish({
    animation: {
      opacity: "show"
    },
    speed: 400
  });

  // Mobile Navigation
  if ($("#nav-menu-container").length) {
    var $mobile_nav = $("#nav-menu-container")
      .clone()
      .prop({
        id: "mobile-nav"
      });
    $mobile_nav.find("> ul").attr({
      class: "",
      id: ""
    });
    $("body").append($mobile_nav);
    $("body").prepend(
      '<button type="button" id="mobile-nav-toggle"><i class="fa fa-bars"></i></button>'
    );
    $("body").append('<div id="mobile-body-overly"></div>');
    $("#mobile-nav")
      .find(".menu-has-children")
      .prepend('<i class="fa fa-chevron-down"></i>');

    $(document).on("click", ".menu-has-children i", function(e) {
      $(this)
        .next()
        .toggleClass("menu-item-active");
      $(this)
        .nextAll("ul")
        .eq(0)
        .slideToggle();
      $(this).toggleClass("fa-chevron-up fa-chevron-down");
    });

    $(document).on("click", "#mobile-nav-toggle", function(e) {
      $("body").toggleClass("mobile-nav-active");
      $("#mobile-nav-toggle i").toggleClass("fa-times fa-bars");
      $("#mobile-body-overly").toggle();
    });

    $(document).click(function(e) {
      var container = $("#mobile-nav, #mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($("body").hasClass("mobile-nav-active")) {
          $("body").removeClass("mobile-nav-active");
          $("#mobile-nav-toggle i").toggleClass("fa-times fa-bars");
          $("#mobile-body-overly").fadeOut();
        }
      }
    });
  } else if ($("#mobile-nav, #mobile-nav-toggle").length) {
    $("#mobile-nav, #mobile-nav-toggle").hide();
  }

  // Smooth scroll for the menu and links with .scrollto classes
  $(".nav-menu a, #mobile-nav a, .scrollto").on("click", function() {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      if (target.length) {
        var top_space = 0;

        if ($("#header").length) {
          top_space = $("#header").outerHeight();

          if (!$("#header").hasClass("header-fixed")) {
            top_space = top_space - 20;
          }
        }

        $("html, body").animate(
          {
            scrollTop: target.offset().top - top_space
          },
          1500,
          "easeInOutExpo"
        );

        if ($(this).parents(".nav-menu").length) {
          $(".nav-menu .menu-active").removeClass("menu-active");
          $(this)
            .closest("li")
            .addClass("menu-active");
        }

        if ($("body").hasClass("mobile-nav-active")) {
          $("body").removeClass("mobile-nav-active");
          $("#mobile-nav-toggle i").toggleClass("fa-times fa-bars");
          $("#mobile-body-overly").fadeOut();
        }
        return false;
      }
    }
  });

  // Gallery carousel (uses the Owl Carousel library)
  $(".gallery-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    center: true,
    responsive: {
      0: { items: 1 },
      768: { items: 3 },
      992: { items: 4 },
      1200: { items: 5 }
    }
  });
  // custom code
});

// -----------------------spinning circle----------------------
const wrapperEl = document.querySelector(".wrapper");
const numberOfEls = 90;
const duration = 6000;
const delay = duration / numberOfEls;

let tl = anime.timeline({
  duration: delay,
  complete: function() {
    tl.restart();
  }
});

function createEl(i) {
  let el = document.createElement("div");
  const rotate = (360 / numberOfEls) * i;
  const translateY = -50;
  const hue = Math.round((360 / numberOfEls) * i);
  el.classList.add("el");
  el.style.backgroundColor = "hsl(" + hue + ", 40%, 60%)";
  el.style.transform =
    "rotate(" + rotate + "deg) translateY(" + translateY + "%)";
  tl.add({
    begin: function() {
      anime({
        targets: el,
        backgroundColor: [
          "hsl(" + hue + ", 40%, 60%)",
          "hsl(" + hue + ", 60%, 80%)"
        ],
        rotate: [rotate + "deg", rotate + 10 + "deg"],
        translateY: [translateY + "%", translateY + 10 + "%"],
        scale: [1, 1.25],
        easing: "easeInOutSine",
        direction: "alternate",
        duration: duration * 0.1
      });
    }
  });
  wrapperEl.appendChild(el);
}

for (let i = 0; i < numberOfEls; i++) createEl(i);

//time spent
var seconds = 0;

function startTime() {
  window.setInterval("updateTime()", 1000);
}
function updateTime() {
  ++seconds;
  document.getElementById("screen_time").innerHTML = seconds;
}

// //current time
// function startTime() {
//   var d = new Date();
//   document.getElementById("clock").innerHTML = d.toLocaleString();
//   setTimeout(startTime);
// }
