/* Copyright 2016 Esri
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.​ */

var express = require('express'),
  app = express(),
  fs = require('fs'),
  cors = require('cors'),
  port = process.env.PORT || 3100;

app.use(cors());

app.use( require('./controllers') );

app.listen(port, function () {
  console.log('loading JSON for SDG Dashboards ..');

  // geographies for geo selector
  GEOGRAPHIES = JSON.parse( fs.readFileSync('data/geographies.json') ); 

  // fake dashboard content
  DASHBOARDS = JSON.parse( fs.readFileSync('data/dashboards.json') );
  DASHBOARDS_CITIES = JSON.parse( fs.readFileSync('data/dashboards-cities.json') );
  DASHBOARDS_SDG_INDEX = JSON.parse( fs.readFileSync('data/dashboards-sdg-index.json') );
  
  console.log('ready!');
});