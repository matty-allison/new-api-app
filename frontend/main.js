//console.log('main.js loaded')
fetch('https://immense-plains-88807.herokuapp.com/get-blogs/')
.then(response => response.json())
.then(data => console.log(data))
