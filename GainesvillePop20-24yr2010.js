//The dp value used detects 20-24 2010 age group locations: dp0010006
var dataset = ee.FeatureCollection('TIGER/2010/Tracts_DP1');
var visParams = {
  min: 0,
  max: 4000,
  opacity: 0.8,
};
// Turn the strings into numbers
dataset = dataset.map(function (f) {
  return f.set('shape_area', ee.Number.parse(f.get('dp0010006')));
});

Map.setCenter(-82.32, 29.65, 10);
var image = ee.Image().float().paint(dataset, 'dp0010006');

Map.addLayer(image, visParams, 'TIGER/2010/Tracts_DP1');
Map.addLayer(dataset, null, 'for Inspector', false);