var wms_layers = [];


        var lyr_YandexSatellite_0 = new ol.layer.Tile({
            'title': 'Yandex Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="">Yandex Satellite</a>',
                url: 'https://core-sat.maps.yandex.net/tiles?l=sat&v=3.1025.0&x={x}&y={y}&z={z}&scale=1&lang=ru_RU'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_1lab1_2 = new ol.format.GeoJSON();
var features_1lab1_2 = format_1lab1_2.readFeatures(json_1lab1_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1lab1_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1lab1_2.addFeatures(features_1lab1_2);
var lyr_1lab1_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_1lab1_2, 
                style: style_1lab1_2,
                popuplayertitle: "ПР1 — lab1",
                interactive: true,
                title: '<img src="styles/legend/1lab1_2.png" /> ПР1 — lab1'
            });
var format_building_3 = new ol.format.GeoJSON();
var features_building_3 = format_building_3.readFeatures(json_building_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_3.addFeatures(features_building_3);
var lyr_building_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_building_3, 
                style: style_building_3,
                popuplayertitle: "building",
                interactive: true,
                title: '<img src="styles/legend/building_3.png" /> building'
            });
var format_building_4 = new ol.format.GeoJSON();
var features_building_4 = format_building_4.readFeatures(json_building_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_4.addFeatures(features_building_4);
var lyr_building_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_building_4, 
                style: style_building_4,
                popuplayertitle: "building",
                interactive: true,
                title: '<img src="styles/legend/building_4.png" /> building'
            });
var format_highway_5 = new ol.format.GeoJSON();
var features_highway_5 = format_highway_5.readFeatures(json_highway_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highway_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highway_5.addFeatures(features_highway_5);
var lyr_highway_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_highway_5, 
                style: style_highway_5,
                popuplayertitle: "highway",
                interactive: true,
                title: '<img src="styles/legend/highway_5.png" /> highway'
            });
var format_highway_6 = new ol.format.GeoJSON();
var features_highway_6 = format_highway_6.readFeatures(json_highway_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highway_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highway_6.addFeatures(features_highway_6);
var lyr_highway_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_highway_6, 
                style: style_highway_6,
                popuplayertitle: "highway",
                interactive: true,
                title: '<img src="styles/legend/highway_6.png" /> highway'
            });

lyr_YandexSatellite_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_1lab1_2.setVisible(true);lyr_building_3.setVisible(true);lyr_building_4.setVisible(true);lyr_highway_5.setVisible(true);lyr_highway_6.setVisible(true);
var layersList = [lyr_YandexSatellite_0,lyr_OSMStandard_1,lyr_1lab1_2,lyr_building_3,lyr_building_4,lyr_highway_5,lyr_highway_6];
lyr_1lab1_2.set('fieldAliases', {'fid': 'fid', 'name': 'name', });
lyr_building_3.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'addr:postcode': 'addr:postcode', 'addr:city': 'addr:city', 'building:part': 'building:part', });
lyr_building_4.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'addr:street': 'addr:street', 'religion': 'religion', 'training': 'training', 'sport': 'sport', 'leisure': 'leisure', 'building:levels': 'building:levels', 'shop': 'shop', 'name:ru': 'name:ru', 'amenity': 'amenity', 'type': 'type', 'name': 'name', 'addr:postcode': 'addr:postcode', 'addr:housenumber': 'addr:housenumber', 'addr:city': 'addr:city', 'address': 'address', });
lyr_highway_5.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'bench': 'bench', 'public_transport': 'public_transport', 'bus': 'bus', 'name:ru': 'name:ru', 'name': 'name', 'crossing': 'crossing', 'railway': 'railway', });
lyr_highway_6.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'service': 'service', 'footway': 'footway', 'ref': 'ref', 'old_ref': 'old_ref', 'oneway': 'oneway', 'smoothness': 'smoothness', 'name:etymology:wikidata': 'name:etymology:wikidata', 'name': 'name', 'surface': 'surface', 'layer': 'layer', 'lanes': 'lanes', 'bridge': 'bridge', 'bicycle': 'bicycle', 'access': 'access', 'ramp': 'ramp', 'incline': 'incline', 'handrail': 'handrail', 'foot': 'foot', });
lyr_1lab1_2.set('fieldImages', {'fid': 'TextEdit', 'name': 'TextEdit', });
lyr_building_3.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'addr:postcode': '', 'addr:city': '', 'building:part': '', });
lyr_building_4.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'addr:street': '', 'religion': '', 'training': '', 'sport': '', 'leisure': '', 'building:levels': '', 'shop': '', 'name:ru': '', 'amenity': '', 'type': '', 'name': '', 'addr:postcode': '', 'addr:housenumber': '', 'addr:city': '', 'address': '', });
lyr_highway_5.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'bench': '', 'public_transport': '', 'bus': '', 'name:ru': '', 'name': '', 'crossing': '', 'railway': '', });
lyr_highway_6.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'service': '', 'footway': '', 'ref': '', 'old_ref': '', 'oneway': '', 'smoothness': '', 'name:etymology:wikidata': '', 'name': '', 'surface': '', 'layer': '', 'lanes': '', 'bridge': '', 'bicycle': '', 'access': '', 'ramp': '', 'incline': '', 'handrail': '', 'foot': '', });
lyr_1lab1_2.set('fieldLabels', {'fid': 'no label', 'name': 'no label', });
lyr_building_3.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'addr:postcode': 'no label', 'addr:city': 'no label', 'building:part': 'no label', });
lyr_building_4.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'addr:street': 'no label', 'religion': 'no label', 'training': 'no label', 'sport': 'no label', 'leisure': 'no label', 'building:levels': 'no label', 'shop': 'no label', 'name:ru': 'no label', 'amenity': 'no label', 'type': 'no label', 'name': 'no label', 'addr:postcode': 'no label', 'addr:housenumber': 'no label', 'addr:city': 'no label', 'address': 'no label', });
lyr_highway_5.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'bench': 'no label', 'public_transport': 'no label', 'bus': 'no label', 'name:ru': 'no label', 'name': 'no label', 'crossing': 'no label', 'railway': 'no label', });
lyr_highway_6.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'service': 'no label', 'footway': 'no label', 'ref': 'no label', 'old_ref': 'no label', 'oneway': 'no label', 'smoothness': 'no label', 'name:etymology:wikidata': 'no label', 'name': 'no label', 'surface': 'no label', 'layer': 'no label', 'lanes': 'no label', 'bridge': 'no label', 'bicycle': 'no label', 'access': 'no label', 'ramp': 'no label', 'incline': 'no label', 'handrail': 'no label', 'foot': 'no label', });
lyr_highway_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});