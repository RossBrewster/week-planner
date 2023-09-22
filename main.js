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
const $dayOfWeek = document.querySelector('#dropdown-days');
const $eventTable = document.querySelector('.event-table');

const data = {
  currentDay: $monday,
  time: null,
  eventInfo: null,
  day: null,
  row: null
};

$addEvent.addEventListener('click', function (event) {
  $overlay.classList.toggle('hidden');
});

$modalCancel.addEventListener('click', function (event) {
  $overlay.classList.toggle('hidden');
});

$modalForm.addEventListener('submit', function (event) {
  event.preventDefault();
  $overlay.classList.toggle('hidden');
  if (data.time === null && data.eventInfo === null) {
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
  } else if (data.time !== null && data.eventInfo !== null) {
    data.row.remove();

    if (data.day === 'Monday') {
      $monday.appendChild(renderEntry());
    } else if (data.day === 'Tuesday') {
      $tuesday.appendChild(renderEntry());
    } else if (data.day === 'Wednesday') {
      $wednesday.appendChild(renderEntry());
    } else if (data.day === 'Thursday') {
      $thursday.appendChild(renderEntry());
    } else if (data.day === 'Friday') {
      $friday.appendChild(renderEntry());
    } else if (data.day === 'Saturday') {
      $saturday.appendChild(renderEntry());
    } else if (data.day === 'Sunday') {
      $sunday.appendChild(renderEntry());
    }
  }
  $modalForm.reset();
  data.time = null;
  data.eventInfo = null;
  data.day = null;
  data.row = null;
});

$dayOfWeek.addEventListener('change', function (event) {

  showChosenDay($dayOfWeek.value);
});

function showChosenDay(day) {
  if (day === 'Monday') {
    data.currentDay.classList.toggle('hidden');
    data.currentDay = $monday;
  } else if (day === 'Tuesday') {
    data.currentDay.classList.toggle('hidden');
    $tuesday.classList.toggle('hidden');
    data.currentDay = $tuesday;
  } else if (day === 'Wednesday') {
    data.currentDay.classList.toggle('hidden');
    $wednesday.classList.toggle('hidden');
    data.currentDay = $wednesday;
  } else if (day === 'Thursday') {
    data.currentDay.classList.toggle('hidden');
    $thursday.classList.toggle('hidden');
    data.currentDay = $thursday;
  } else if (day === 'Friday') {
    data.currentDay.classList.toggle('hidden');
    $friday.classList.toggle('hidden');
    data.currentDay = $friday;
  } else if (day === 'Saturday') {
    data.currentDay.classList.toggle('hidden');
    $saturday.classList.toggle('hidden');
    data.currentDay = $saturday;
  } else if (day === 'Sunday') {
    data.currentDay.classList.toggle('hidden');
    $sunday.classList.toggle('hidden');
    data.currentDay = $sunday;
  }

}

function renderEntry() {
  const $tr = document.createElement('tr');
  const $td = document.createElement('td');
  const $textContent = document.createTextNode($modalTime.value);
  const $tdTwo = document.createElement('td');
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
  $td.appendChild($textContent);
  $tr.appendChild($tdTwo);
  $tdTwo.appendChild($textContentTwo);
  $tr.appendChild($tdThree);
  $tdThree.appendChild($row);
  $row.appendChild($buttonEdit);
  $row.appendChild($buttonDelete);
  $buttonEdit.appendChild($edit);
  $buttonDelete.appendChild($delete);

  return $tr;
}

$eventTable.addEventListener('click', function (event) {
  if (event.target.className === 'edit-button') {
    $overlay.classList.toggle('hidden');
    data.time = event.target.closest('tr').childNodes[0].textContent;
    data.day = event.target.closest('tbody').getAttribute('id');
    data.eventInfo = event.target.closest('tr').childNodes[1].textContent;
    data.row = event.target.closest('tr');
    $modalForm[0].value = data.time;
    $modalForm[1].value = capitalize(data.day);
    $modalForm[2].value = data.eventInfo;
  }
});

function capitalize(string) {
  const firstLetter = string[0].toUpperCase();
  const existingWord = string.slice(1).toLowerCase();
  return firstLetter + existingWord;
}
