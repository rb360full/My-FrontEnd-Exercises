// script.js

const testBtn = document.getElementById('testBtn');

testBtn.addEventListener('click', () => {

  const configInput = document.getElementById('configInput');
  const config = configInput.value;
  
  if(!config) {
    alert('Please enter a config');
    return;
  }

  // Send config to API for testing
  fetch('/test-api', {
    method: 'POST',
    body: JSON.stringify({config}) 
  })
  .then(res => res.json())
  .then(data => {
    const resultDiv = document.getElementById('result');
    if(data.valid) {
      resultDiv.innerText = 'Config is valid';
    } else {
      resultDiv.innerText = 'Config is invalid'; 
    }
  })
  .catch(err => {
    alert('Error testing config');
  });

});