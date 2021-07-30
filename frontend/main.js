//console.log('main.js loaded')
fetch('')
.then(response => response.json())
.then(data => console.log(data))
