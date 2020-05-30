const {spawnSync} = require('child_process');
const express = require('express');

const app = express();

app.get('/temperature', (_req, res) => {
  res.send({
    cpu: spawnSync('/opt/vc/bin/vcgencmd measure_temp'),
  })
});

app.listen(4000);
