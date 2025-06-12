// Close Top-bar
$(".top_bar .btn_close").on("click", () => {
  $(".top_bar").hide();
});

// Open & Close popup menu
const openPopup = () => {
  $(".popup_menu").append($(".header_list"));
  $(".header").addClass("menu_open");
};

const closePopup = () => {
  $(".header_menu").append($(".header_list"));
  $(".header").removeClass("menu_open");
};

$(".icon_bars").on("click", openPopup);
$(".popup .icon_close, .dimmed").on("click", closePopup);

$(window).on("resize", () => {
  const width = $(window).width();
  if ($(".header").hasClass("menu_open") && width >= 770) {
    closePopup();
  }
});

const swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  spaceBetween: 10,
  touchReleaseOnEdges: true,
  loop: true,
  centeredSlides: true,
  mousewheel: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const swiperr = new Swiper(".product_slides", {
  slidesPerView: "auto",
  spaceBetween: 16,
  touchReleaseOnEdges: true,
  breakpoints: {
    768: {
      spaceBetween: 24,
    },
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },
  mousewheel: true,
});

// Update Banner Image
const updateBannerImage = () => {
  const windowWidth = $(window).width();

  if ($(".img_sale").length) {
    if (windowWidth <= 768) {
      $(".img_sale").attr("src", "/src/img/banner_sale_mobile.png");
      $(".img_banner").each((i) => {
        $(this).attr("src", `/src/img/banner_img_${i + 1}_mobile.png`);
      });
    } else {
      $(".img_sale").attr("src", "/src/img/banner_sale.png");
      $(".img_banner").each((i) => {
        $(this).attr("src", `/src/img/banner_img_${i + 1}.png`);
      });
    }
  }

  if (windowWidth <= 380) {
    $(".slide_bar .swiper_img").attr("src", "/src/img/slide_img_mobile.png");
  } else {
    $(".slide_bar .swiper_img").attr("src", "/src/img/palaholder_img.png");
  }
};

$(window).on("load resize", updateBannerImage);