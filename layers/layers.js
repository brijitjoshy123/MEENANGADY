ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32643").setExtent([615853.110325, 1282250.187969, 640498.958715, 1298774.749933]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_PANCHAYAT_1 = new ol.format.GeoJSON();
var features_PANCHAYAT_1 = format_PANCHAYAT_1.readFeatures(json_PANCHAYAT_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32643'});
var jsonSource_PANCHAYAT_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PANCHAYAT_1.addFeatures(features_PANCHAYAT_1);
var lyr_PANCHAYAT_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PANCHAYAT_1, 
                style: style_PANCHAYAT_1,
                popuplayertitle: "PANCHAYAT",
                interactive: false,
                title: '<img src="styles/legend/PANCHAYAT_1.png" /> PANCHAYAT'
            });
var format_clip_GEOMORPHOLOGY_2 = new ol.format.GeoJSON();
var features_clip_GEOMORPHOLOGY_2 = format_clip_GEOMORPHOLOGY_2.readFeatures(json_clip_GEOMORPHOLOGY_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32643'});
var jsonSource_clip_GEOMORPHOLOGY_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_clip_GEOMORPHOLOGY_2.addFeatures(features_clip_GEOMORPHOLOGY_2);
var lyr_clip_GEOMORPHOLOGY_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_clip_GEOMORPHOLOGY_2, 
                style: style_clip_GEOMORPHOLOGY_2,
                popuplayertitle: "clip_GEOMORPHOLOGY",
                interactive: false,
    title: 'clip_GEOMORPHOLOGY<br />\
    <img src="styles/legend/clip_GEOMORPHOLOGY_2_0.png" /> Piedmont Zone<br />\
    <img src="styles/legend/clip_GEOMORPHOLOGY_2_1.png" /> Residual Hill<br />\
    <img src="styles/legend/clip_GEOMORPHOLOGY_2_2.png" /> Rock Exposure<br />\
    <img src="styles/legend/clip_GEOMORPHOLOGY_2_3.png" /> Upper Plateau (Lateritic)- Dissected<br />\
    <img src="styles/legend/clip_GEOMORPHOLOGY_2_4.png" /> Valley<br />\
    <img src="styles/legend/clip_GEOMORPHOLOGY_2_5.png" /> Valley Fill<br />'
        });
var format_clip_DRAINAGE_3 = new ol.format.GeoJSON();
var features_clip_DRAINAGE_3 = format_clip_DRAINAGE_3.readFeatures(json_clip_DRAINAGE_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32643'});
var jsonSource_clip_DRAINAGE_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_clip_DRAINAGE_3.addFeatures(features_clip_DRAINAGE_3);
var lyr_clip_DRAINAGE_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_clip_DRAINAGE_3, 
                style: style_clip_DRAINAGE_3,
                popuplayertitle: "clip_DRAINAGE",
                interactive: false,
                title: '<img src="styles/legend/clip_DRAINAGE_3.png" /> clip_DRAINAGE'
            });
var format_clip_Road_4 = new ol.format.GeoJSON();
var features_clip_Road_4 = format_clip_Road_4.readFeatures(json_clip_Road_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32643'});
var jsonSource_clip_Road_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_clip_Road_4.addFeatures(features_clip_Road_4);
var lyr_clip_Road_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_clip_Road_4, 
                style: style_clip_Road_4,
                popuplayertitle: "clip_Road",
                interactive: false,
                title: '<img src="styles/legend/clip_Road_4.png" /> clip_Road'
            });
var format_clip_Junctions_5 = new ol.format.GeoJSON();
var features_clip_Junctions_5 = format_clip_Junctions_5.readFeatures(json_clip_Junctions_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32643'});
var jsonSource_clip_Junctions_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_clip_Junctions_5.addFeatures(features_clip_Junctions_5);
var lyr_clip_Junctions_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_clip_Junctions_5, 
                style: style_clip_Junctions_5,
                popuplayertitle: "clip_Junctions",
                interactive: true,
                title: '<img src="styles/legend/clip_Junctions_5.png" /> clip_Junctions'
            });

lyr_OSMStandard_0.setVisible(true);lyr_PANCHAYAT_1.setVisible(true);lyr_clip_GEOMORPHOLOGY_2.setVisible(true);lyr_clip_DRAINAGE_3.setVisible(true);lyr_clip_Road_4.setVisible(true);lyr_clip_Junctions_5.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_PANCHAYAT_1,lyr_clip_GEOMORPHOLOGY_2,lyr_clip_DRAINAGE_3,lyr_clip_Road_4,lyr_clip_Junctions_5];
lyr_PANCHAYAT_1.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'KERBLPAPRJ': 'KERBLPAPRJ', 'KERBLPAP_1': 'KERBLPAP_1', 'CODE': 'CODE', 'PANCHAYAT': 'PANCHAYAT', });
lyr_clip_GEOMORPHOLOGY_2.set('fieldAliases', {'NAME': 'NAME', 'TYPE1': 'TYPE1', 'TYPE2': 'TYPE2', });
lyr_clip_DRAINAGE_3.set('fieldAliases', {'ORDER1': 'ORDER1', });
lyr_clip_Road_4.set('fieldAliases', {'NAME': 'NAME', 'Length': 'Length', });
lyr_clip_Junctions_5.set('fieldAliases', {'Id': 'Id', 'Jn_Name': 'Jn_Name', 'District': 'District', 'Name': 'Name', });
lyr_PANCHAYAT_1.set('fieldImages', {'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'KERBLPAPRJ': 'Range', 'KERBLPAP_1': 'Range', 'CODE': 'Range', 'PANCHAYAT': 'TextEdit', });
lyr_clip_GEOMORPHOLOGY_2.set('fieldImages', {'NAME': 'TextEdit', 'TYPE1': 'TextEdit', 'TYPE2': 'TextEdit', });
lyr_clip_DRAINAGE_3.set('fieldImages', {'ORDER1': 'Range', });
lyr_clip_Road_4.set('fieldImages', {'NAME': 'TextEdit', 'Length': 'TextEdit', });
lyr_clip_Junctions_5.set('fieldImages', {'Id': 'Range', 'Jn_Name': 'TextEdit', 'District': 'TextEdit', 'Name': 'TextEdit', });
lyr_PANCHAYAT_1.set('fieldLabels', {'AREA': 'inline label - visible with data', 'PERIMETER': 'no label', 'KERBLPAPRJ': 'no label', 'KERBLPAP_1': 'no label', 'CODE': 'no label', 'PANCHAYAT': 'no label', });
lyr_clip_GEOMORPHOLOGY_2.set('fieldLabels', {'NAME': 'no label', 'TYPE1': 'no label', 'TYPE2': 'no label', });
lyr_clip_DRAINAGE_3.set('fieldLabels', {'ORDER1': 'no label', });
lyr_clip_Road_4.set('fieldLabels', {'NAME': 'no label', 'Length': 'no label', });
lyr_clip_Junctions_5.set('fieldLabels', {'Id': 'no label', 'Jn_Name': 'inline label - always visible', 'District': 'no label', 'Name': 'no label', });
lyr_clip_Junctions_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});