const $addEvent = document.querySelector('.add-event');
const $overlay = document.querySelector('.overlay');
const $modalCancel = document.querySelector('#modal-cancel');
const $modalConfirm = document.querySelector('#modal-confirm');
const $modalTime = document.querySelector('#event-time option:checked');
const $tableBody = document.querySelector('#table-body');

$addEvent.addEventListener('click', function (event) {
  $overlay.classList.toggle('hidden');
});

$modalCancel.addEventListener('click', function (event) {
  $overlay.classList.toggle('hidden');
});

$modalConfirm.addEventListener('click', function (event) {

});
