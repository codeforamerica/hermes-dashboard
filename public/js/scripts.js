window.addEventListener('DOMContentLoaded', main, false);

function addTextMessageCounter(el) {
  var counterEl = document.createElement('span');
  counterEl.classList.add('text-counter');
  counterEl.innerHTML = '0';

  el.parentNode.insertBefore(counterEl, el);

  el.counterEl = counterEl;

  el.addEventListener('input', onTextCounterInput, false);
}

function onTextCounterInput(event) {
  var el = event.target;

  el.counterEl.innerHTML = el.value.length;

  if (el.value.length > 160) {
    el.counterEl.classList.add('warning'); 
  } else {
    el.counterEl.classList.remove('warning');
  }
}

function addTextMessageCounters() {
  var els = document.querySelectorAll('[text-message]');
  for (var i = 0, el; el = els[i]; i++) {
    addTextMessageCounter(el);
  }
}

function main() {
  addTextMessageCounters(); 
}