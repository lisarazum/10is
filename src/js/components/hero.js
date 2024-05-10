const heroVideo = document.querySelector('.js-hero-video')
if (window.innerWidth > 569) {
  heroVideo.setAttribute('poster', '/img/main/video.jpg')
} else {
  heroVideo.setAttribute('poster', '/img/main/video-mob.jpg')
}
