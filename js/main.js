document.addEventListener("DOMContentLoaded", function (e) {
  /*
  Vars
*/
var $rocket_container = document.querySelector(".rocketContainer"),
    $ring = document.querySelector(".ringPiece img"),
    $ring_text = document.querySelector(".ringText"),
    $rocket_base = document.querySelector(".basePiece"),
    $nose = (".nosePiece"),
    $elective_1 = document.querySelector(".electivePiece img:first-child"),
    $elective_2 = document.querySelector(".electivePiece img:nth-child(2)"),
    $elective_3 = document.querySelector(".electivePiece img:nth-child(3)"),
    $elective_4 = document.querySelector(".electivePiece img:nth-child(4)"),
    wh = window.innerHeight;
/*
  ScrollMagic Controller
*/
var rocket_controller = new ScrollMagic.Controller();
/*
  Tweens and scenes for:
    --> Making the rocket container visible.
*/
var rocket_container_tween = TweenLite.from($rocket_container, .25, {
      yPercent: 50,
      autoAlpha: 0
    })
var ring_text_tween = TweenLite.from($ring_text, .75, {
  yPercent: 65,
  autoAlpha: 0
})
var rocket_container_scene = new ScrollMagic.Scene()
  .setTween(rocket_container_tween)
  .triggerHook(.5)
  .triggerElement("#sectionOne")
  .addTo(rocket_controller)
var ring_text_scene = new ScrollMagic.Scene()
  .setTween(ring_text_tween)
  .triggerHook(.5)
  .triggerElement("#sectionOne")
  .addTo(rocket_controller)
/*
  Tween and scene for:
    --> Making ePort ring appear
*/
var ring_tween = TweenLite.from($ring, .5, {
  yPercent: -100,
  autoAlpha: 0,
  scale: 2
})
var ring_scene = new ScrollMagic.Scene()
  .setTween(ring_tween)
  .triggerElement(".ringText h2")
  .offset(-100)
  .triggerHook(.5)
//  .addIndicators()
  .addTo(rocket_controller)
/*
  Tween and scene for:
    --> Making rocket base appear
*/
var base_tween = TweenLite.from($rocket_base, .6, {
  yPercent: -200,
  autoAlpha: 0,
  scale: 1.5,
  // delay: .3
})
var base_scene = new ScrollMagic.Scene()
  .setTween(base_tween)
  .triggerElement(".coreText h2")
  .triggerHook(.5)
  // .addIndicators()
  .addTo(rocket_controller)
/*
  Tween and scene for:
    --> Make rocket nose appear
*/
var nose_tween = TweenLite.from($nose, .65, {
  yPercent: -300,
  scale: 1.75,
  autoAlpha: 0,
  delay: .3
})
var nose_scene = new ScrollMagic.Scene()
  .setTween(nose_tween)
  .triggerHook(.5)
  .triggerElement(".trackText h2")
  // .addIndicators()
  .addTo(rocket_controller)
/*
  Tween and scene for:
    --> Making elective pieces appear
*/
var electives_TL = new TimelineLite()
  .from($elective_4, .25, {
    autoAlpha: 0,
    scale: .5,
    yPercent: -100
  })
  .from($elective_2, .15, {
    autoAlpha: 0,
    scale: .5,
    yPercent: -100
  }, "+=.02")
  .from($elective_3, .25, {
    autoAlpha: 0,
    scale: .5,
    yPercent: -100
  }, "+=.02")
  .from($elective_1, .2, {
    autoAlpha: 0,
    scale: .5,
    yPercent: -100
  }, "+=.02")
var electives_scene = new ScrollMagic.Scene()
  .setTween(electives_TL)
  .triggerHook(.5)
  .triggerElement(".electiveText h2")
  // .addIndicators()
  .addTo(rocket_controller)
/*
  Tween and scene to:
    --> Make rocket container disappear
*/
var rocket_disappear_tween = TweenLite.to($rocket_container, .25, {
  autoAlpha: 0
})
var rocket_disappear_scene = new ScrollMagic.Scene()
  .setTween(rocket_disappear_tween)
  .triggerHook(.5)
  .triggerElement(".spacer")
  // .addIndicators()
  .addTo(rocket_controller)
});