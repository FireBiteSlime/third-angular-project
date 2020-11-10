const express = require('express');
const app = express();

app.use(express.static('./dist/third-angular-project'));

app.get('/*', function(req, res) {
  res.sendFile('index.html', {root: 'dist/third-angular-project/'});
});

app.listen(process.env.PORT || 8080);
