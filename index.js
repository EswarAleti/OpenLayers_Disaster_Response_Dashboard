import 'ol/ol.css';
import {Map, View, Feature} from 'ol';
import TileLayer from 'ol/layer/Tile';
import * as olLayer from  'ol/layer';
import * as olSource from 'ol/source';
import {Point} from 'ol/geom';
import OSM from 'ol/source/OSM';
import * as olCoordinate from 'ol/coordinate';
import {toLonLat,fromLonLat} from 'ol/proj';

const map = new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new OSM()
    })
  ],
  view: new View({
    center: fromLonLat([79.4192,13.6288]),
    zoom: 8
  })
});

map.on('click',function(e){
  var layer = new olLayer.Vector({
    source: new olSource.Vector({
        features: [
            new Feature({
                geometry: new Point(e.coordinate)
            })
        ]
    })
});
map.addLayer(layer);
  // console.log('Longitude: '+toLonLat(e.coordinate)[0]+' Lattitude: '+toLonLat(e.coordinate)[1]);
})