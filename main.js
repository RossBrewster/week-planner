const $addEvent = document.querySelector('.add-event');
const $overlay = document.querySelector('.overlay');
const $modalCancel = document.querySelector('#modal-cancel');
const $modalTime = document.querySelector('#event-time option:checked');
const $tableBody = document.querySelector('#table-body');
const $modalEventInfo = document.querySelector('#event-info');
const $modalForm = document.querySelector('.add-event-form');

$addEvent.addEventListener('click', function (event) {
  $overlay.classList.toggle('hidden');
});

$modalCancel.addEventListener('click', function (event) {
  $overlay.classList.toggle('hidden');
});

$modalForm.addEventListener('submit', function (event) {
  event.preventDefault();
  $overlay.classList.toggle('hidden');
  $tableBody.appendChild(renderEntry());
  $modalForm.reset();
});

function renderEntry() {
  const $tr = document.createElement('tr');
  const $td = document.createElement('td');
  const $p = document.createElement('p');
  const $textContent = document.createTextNode($modalTime.value);
  const $tdTwo = document.createElement('td');
  const $pTwo = document.createElement('p');
  const $textContentTwo = document.createTextNode($modalEventInfo.value);
  const $tdThree = document.createElement('td');
  const $buttonEdit = document.createElement('button');
  const $edit = document.createTextNode('EDIT');
  const $buttonDelete = document.createElement('button');
  const $delete = document.createTextNode('DELETE');

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
  $buttonEdit.appendChild($edit);
  $tdThree.appendChild($buttonDelete);
  $buttonDelete.appendChild($delete);

  return $tr;
}
