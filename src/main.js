// all data will be stored using localStorage

// default text
document.getElementById('heading').innerHTML = localStorage['title'] || 'writer';
document.getElementById('content').innerHTML = localStorage['text'] || 'Write something here! It gets automatically saved';

setInterval(function() {
  // heading div
  localStorage['title'] = document.getElementById('heading').innerHTML;
  // content div
  localStorage['text'] = document.getElementById('content').innerHTML;
}, 1000);
