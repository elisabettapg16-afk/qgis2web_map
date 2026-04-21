var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_building_house_1 = new ol.format.GeoJSON();
var features_building_house_1 = format_building_house_1.readFeatures(json_building_house_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_house_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_house_1.addFeatures(features_building_house_1);
var lyr_building_house_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_building_house_1, 
                style: style_building_house_1,
                popuplayertitle: 'building_house',
                interactive: true,
                title: '<img src="styles/legend/building_house_1.png" /> building_house'
            });
var format_highway_2 = new ol.format.GeoJSON();
var features_highway_2 = format_highway_2.readFeatures(json_highway_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highway_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highway_2.addFeatures(features_highway_2);
var lyr_highway_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_highway_2, 
                style: style_highway_2,
                popuplayertitle: 'highway',
                interactive: true,
                title: '<img src="styles/legend/highway_2.png" /> highway'
            });

lyr_OSMStandard_0.setVisible(true);lyr_building_house_1.setVisible(true);lyr_highway_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_building_house_1,lyr_highway_2];
lyr_building_house_1.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'addr:street': 'addr:street', 'addr:postcode': 'addr:postcode', 'addr:housenumber': 'addr:housenumber', 'addr:city': 'addr:city', 'address': 'address', });
lyr_highway_2.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'description': 'description', 'footway': 'footway', 'ford': 'ford', 'depth': 'depth', 'oneway': 'oneway', 'sac_scale': 'sac_scale', 'man_made': 'man_made', 'smoothness': 'smoothness', 'railway': 'railway', 'ref': 'ref', 'old_ref': 'old_ref', 'name': 'name', 'lanes': 'lanes', 'bicycle': 'bicycle', 'access': 'access', 'ramp': 'ramp', 'incline': 'incline', 'handrail': 'handrail', 'foot': 'foot', 'service': 'service', 'surface': 'surface', 'layer': 'layer', 'bridge': 'bridge', 'tunnel': 'tunnel', });
lyr_building_house_1.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'building': 'TextEdit', 'addr:street': 'TextEdit', 'addr:postcode': 'TextEdit', 'addr:housenumber': 'TextEdit', 'addr:city': 'TextEdit', 'address': '', });
lyr_highway_2.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'description': '', 'footway': '', 'ford': '', 'depth': '', 'oneway': '', 'sac_scale': '', 'man_made': '', 'smoothness': '', 'railway': '', 'ref': '', 'old_ref': '', 'name': '', 'lanes': '', 'bicycle': '', 'access': '', 'ramp': '', 'incline': '', 'handrail': '', 'foot': '', 'service': '', 'surface': '', 'layer': '', 'bridge': '', 'tunnel': '', });
lyr_building_house_1.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'addr:street': 'no label', 'addr:postcode': 'no label', 'addr:housenumber': 'no label', 'addr:city': 'no label', 'address': 'no label', });
lyr_highway_2.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'description': 'no label', 'footway': 'no label', 'ford': 'no label', 'depth': 'no label', 'oneway': 'no label', 'sac_scale': 'no label', 'man_made': 'no label', 'smoothness': 'no label', 'railway': 'no label', 'ref': 'no label', 'old_ref': 'no label', 'name': 'no label', 'lanes': 'no label', 'bicycle': 'no label', 'access': 'no label', 'ramp': 'no label', 'incline': 'no label', 'handrail': 'no label', 'foot': 'no label', 'service': 'no label', 'surface': 'no label', 'layer': 'no label', 'bridge': 'no label', 'tunnel': 'no label', });
lyr_highway_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});