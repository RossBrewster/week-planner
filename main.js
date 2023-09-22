const $addEvent = document.querySelector('.add-event');
const $overlay = document.querySelector('.overlay');

$addEvent.addEventListener('click', function (event) {
  $overlay.setAttribute('class', 'overlay');
  console.log('hello');
});
