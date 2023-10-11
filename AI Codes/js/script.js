document.getElementById('testBtn').addEventListener('click', function() {
  var configInput = document.getElementById('configInput');
  var config = configInput.value;

  if (config.trim() === '') {
    alert('Please enter a V2Ray config');
    return;
  }

  var apiUrl = 'http://cachefly.cachefly.net/100mb.test'; // Replace with your own API endpoint

  fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ config: config })
  })
    .then(function(response) {
      if (!response.ok) {
        throw new Error('Failed to test config');
      }
      return response.json();
    })
    .then(function(data) {
      var result = document.getElementById('result');
      result.innerText = data.success ? 'Config is valid' : 'Config is invalid';
    })
    .catch(function(error) {
      alert(error.message);
    });
});