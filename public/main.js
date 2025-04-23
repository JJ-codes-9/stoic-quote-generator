document.getElementById('getQuote').addEventListener('click', function () {
  fetch('/api/stoic-quote')
    .then(function (res) {
      return res.json()
    })
    .then(function (data) {
      document.getElementById('quote').innerText = `"${data.data.quote}" — ${data.data.author}`
    })
    .catch(function (err) {
      console.error(err)
      document.getElementById('quote').innerText = 'Failed to load quote.'
    })
})