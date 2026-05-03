fetch('https://9m50ug8wgf.execute-api.ap-southeast-2.amazonaws.com/count')
  .then(response => response.json())
  .then(data => {
    document.getElementById('counter').innerText =
      "Visitors: " + data;
  });