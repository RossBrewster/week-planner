const $addEvent = document.querySelector('.add-event');
const $overlay = document.querySelector('.overlay');
const $modalCancel = document.querySelector('#modal-cancel');
const $modalConfirm = document.querySelector('#modal-confirm');
const $modalDays = document.querySelector('#event-days option:checked');
const $tableBody = document.querySelector('#table-body');
const $modalEventInfo = document.querySelector('#event-info option:checked');

$addEvent.addEventListener('click', function (event) {
  $overlay.classList.toggle('hidden');
});

$modalCancel.addEventListener('click', function (event) {
  $overlay.classList.toggle('hidden');
});

$modalConfirm.addEventListener('click', function (event) {
  $tableBody.appendChild(renderEntry());
});

function renderEntry() {

  const $tr = document.createElement('tr');
  const $td = document.createElement('td');
  const $p = document.createElement('p');
  const $textContent = document.createTextNode($modalDays.value);
  const $tdTwo = document.createElement('td');
  const $pTwo = document.createElement('p');
  const $textContentTwo = document.createTextNode($modalEventInfo.value);
  const $tdThree = document.createElement('td');
  const $buttonEdit = document.createElement('button');
  const $buttonDelete = document.createElement('button');

  $buttonEdit.setAttribute('class', 'edit-button');
  $buttonDelete.setAttribute('class', 'delete-button');

  $tr.appendChild($td);
  $td.appendChild($p);
  $p.appendChild($textContent);
  $tr.appendChild($tdTwo);
  $tdTwo.appendChild($pTwo);
  $pTwo.appendChild($textContentTwo);
  $tr.appendChild($tdThree);
  $tdThree.appendChild($buttonEdit);
  $tdThree.appendChild($buttonDelete);

  return $tr;

}
