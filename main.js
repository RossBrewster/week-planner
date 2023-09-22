const $addEvent = document.querySelector('.add-event');
const $overlay = document.querySelector('.overlay');
const $modalCancel = document.querySelector('#modal-cancel');
const $modalTime = document.querySelector('#event-time');
const $modalEventInfo = document.querySelector('#event-info');
const $modalForm = document.querySelector('.add-event-form');
const $monday = document.querySelector('#monday');
const $tuesday = document.querySelector('#tuesday');
const $wednesday = document.querySelector('#wednesday');
const $thursday = document.querySelector('#thursday');
const $friday = document.querySelector('#friday');
const $saturday = document.querySelector('#saturday');
const $sunday = document.querySelector('#sunday');
const $modalDays = document.querySelector('#event-days');

$addEvent.addEventListener('click', function (event) {
  $overlay.classList.toggle('hidden');
});

$modalCancel.addEventListener('click', function (event) {
  $overlay.classList.toggle('hidden');
});

$modalForm.addEventListener('submit', function (event) {
  event.preventDefault();
  $overlay.classList.toggle('hidden');
  if ($modalDays.value === 'Monday') {
    $monday.appendChild(renderEntry());
  } else if ($modalDays.value === 'Tuesday') {
    $tuesday.appendChild(renderEntry());
  } else if ($modalDays.value === 'Wednesday') {
    $wednesday.appendChild(renderEntry());
  } else if ($modalDays.value === 'Thursday') {
    $thursday.appendChild(renderEntry());
  } else if ($modalDays.value === 'Friday') {
    $friday.appendChild(renderEntry());
  } else if ($modalDays.value === 'Saturday') {
    $saturday.appendChild(renderEntry());
  } else if ($modalDays.value === 'Sunday') {
    $sunday.appendChild(renderEntry());
  }

  $modalForm.reset();
});

function showChosenDay(day) {
  if ($modalDays.value === 'Monday') {
    $monday.classList.toggle('hidden');
  } else if ($modalDays.value === 'Tuesday') {
    $monday.classList.toggle('hidden');
    $wednesday.classList.toggle('hidden');
    $thursday.classList.toggle('hidden');
    $friday.classList.toggle('hidden');
    $saturday.classList.toggle('hidden');
    $sunday.classList.toggle('hidden');

  } else if ($modalDays.value === 'Wednesday') {
    $tuesday.classList.toggle('hidden');
    $monday.classList.toggle('hidden');
    $thursday.classList.toggle('hidden');
    $friday.classList.toggle('hidden');
    $saturday.classList.toggle('hidden');
    $sunday.classList.toggle('hidden');

  } else if ($modalDays.value === 'Thursday') {
    $thursday.appendChild(renderEntry());
  } else if ($modalDays.value === 'Friday') {
    $friday.appendChild(renderEntry());
  } else if ($modalDays.value === 'Saturday') {
    $saturday.appendChild(renderEntry());
  } else if ($modalDays.value === 'Sunday') {
    $sunday.appendChild(renderEntry());
  }

}

function renderEntry() {
  const $tr = document.createElement('tr');
  const $td = document.createElement('td');
  const $p = document.createElement('p');
  const $textContent = document.createTextNode($modalTime.value);
  const $tdTwo = document.createElement('td');
  const $pTwo = document.createElement('p');
  const $textContentTwo = document.createTextNode($modalEventInfo.value);
  const $tdThree = document.createElement('td');
  const $row = document.createElement('div');
  const $buttonEdit = document.createElement('button');
  const $edit = document.createTextNode('EDIT');
  const $buttonDelete = document.createElement('button');
  const $delete = document.createTextNode('DELETE');

  $row.className = 'row justify-around';
  $buttonEdit.setAttribute('class', 'edit-button');
  $buttonDelete.setAttribute('class', 'delete-button');

  $tr.appendChild($td);
  $td.appendChild($p);
  $p.appendChild($textContent);
  $tr.appendChild($tdTwo);
  $tdTwo.appendChild($pTwo);
  $pTwo.appendChild($textContentTwo);
  $tr.appendChild($tdThree);
  $tdThree.appendChild($row);
  $row.appendChild($buttonEdit);
  $row.appendChild($buttonDelete);
  $buttonEdit.appendChild($edit);
  $buttonDelete.appendChild($delete);

  return $tr;
}
