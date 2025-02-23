const badgeEl = document.querySelector('header .badges')

window.addEventListener('scroll', _.throttle(function () {
  console.log(window.scrollY)
  if (window.scrollY > 500) {
    // Hide badges
    // gsap.to(function, time, option)
    gsap.to(badgeEl, 0.4, {
      opacity: 0,
      display: 'none'
    })
    //show btn
    gsap.to('.to-top', 0.4, {
      x: 0
    })
  } else {
    //Show badges
    gsap.to(badgeEl, 0.4, {
      opacity: 1,
      display: 'block'
    })
    //hide btn
    gsap.to('.to-top', 0.4, {
      x: 100
    })
  }
}, 300))
// _.throttle(function, time)

const toTopEl = document.querySelector('.to-top')
toTopEl.addEventListener('click', function () {
  gsap.to(window, 0.7, {
    scrollTo: 0
  })
})


const fadeEl = document.querySelectorAll('.visual .fade-in')
fadeEl.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * 0.7,
    opacity: 1
  })
})


new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  loop: true
})

new Swiper('.promotion .swiper-container', {
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 4000
  },
  pagination: {
    el: '.promotion .swiper-pagination',
    clickable: true
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
})

new Swiper('.awards .swiper-container', {
  direction: 'horizontal',
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }
})

const promotionEl = document.querySelector('.promotion')
const promotionToggleBtn = document.querySelector('.toggle-promotion')
let isHidePromotion = false
promotionToggleBtn.addEventListener('click', function () {
  isHidePromotion = !isHidePromotion
  if (isHidePromotion) {
    //hide
    promotionEl.classList.add('hide')
  } else {
    //show
    promotionEl.classList.remove('hide')
  }
})


// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubeIframeAPIReady() {
  new YT.Player('player', {
    videoId: 'An6LvWQuj_8',
    playerVars: {
      autoplay: true,
      loop: true,
      playlist: 'An6LvWQuj_8'
    },
    events: {
      onReady: function (event) {
        event.target.mute()
      }
    }
  });
}

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selcetor, delay, size) {
  gsap.to(
    selcetor,
    random(1.5, 2.5), {
      y: size,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      delay: random(0, delay)
    })
}
floatingObject('.floating1', 1, 15)
floatingObject('.floating2', 0.5, 15)
floatingObject('.floating3', 1.5, 20)


const spyEls = document.querySelectorAll('section.scroll-spy')
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl,
      triggerHook: 0.8
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller())
})