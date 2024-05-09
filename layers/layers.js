var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_TrueColourImageRGB_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "True Colour Image (RGB)",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/TrueColourImageRGB_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-7824994.719087, 5409939.341322, -7818288.958717, 5415359.301180]
                            })
                        });
var format_UrbanIndexUI_2 = new ol.format.GeoJSON();
var features_UrbanIndexUI_2 = format_UrbanIndexUI_2.readFeatures(json_UrbanIndexUI_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UrbanIndexUI_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UrbanIndexUI_2.addFeatures(features_UrbanIndexUI_2);
var lyr_UrbanIndexUI_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UrbanIndexUI_2, 
                style: style_UrbanIndexUI_2,
                popuplayertitle: "Urban Index (UI)",
                interactive: true,
    title: 'Urban Index (UI)<br />\
    <img src="styles/legend/UrbanIndexUI_2_0.png" /> 45 - 63<br />\
    <img src="styles/legend/UrbanIndexUI_2_1.png" /> 63 - 68<br />\
    <img src="styles/legend/UrbanIndexUI_2_2.png" /> 68 - 72<br />\
    <img src="styles/legend/UrbanIndexUI_2_3.png" /> 72 - 75<br />\
    <img src="styles/legend/UrbanIndexUI_2_4.png" /> 75 - 78<br />\
    <img src="styles/legend/UrbanIndexUI_2_5.png" /> 78 - 82<br />\
    <img src="styles/legend/UrbanIndexUI_2_6.png" /> 82 - 85<br />\
    <img src="styles/legend/UrbanIndexUI_2_7.png" /> 85 - 88<br />\
    <img src="styles/legend/UrbanIndexUI_2_8.png" /> 88 - 91<br />\
    <img src="styles/legend/UrbanIndexUI_2_9.png" /> 91 - 119<br />'
        });
var format_SimpleRatioVegetationIndexRVI_3 = new ol.format.GeoJSON();
var features_SimpleRatioVegetationIndexRVI_3 = format_SimpleRatioVegetationIndexRVI_3.readFeatures(json_SimpleRatioVegetationIndexRVI_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SimpleRatioVegetationIndexRVI_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SimpleRatioVegetationIndexRVI_3.addFeatures(features_SimpleRatioVegetationIndexRVI_3);
var lyr_SimpleRatioVegetationIndexRVI_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SimpleRatioVegetationIndexRVI_3, 
                style: style_SimpleRatioVegetationIndexRVI_3,
                popuplayertitle: "Simple Ratio Vegetation Index (RVI)",
                interactive: true,
    title: 'Simple Ratio Vegetation Index (RVI)<br />\
    <img src="styles/legend/SimpleRatioVegetationIndexRVI_3_0.png" /> 0 - 3<br />\
    <img src="styles/legend/SimpleRatioVegetationIndexRVI_3_1.png" /> 3 - 3<br />\
    <img src="styles/legend/SimpleRatioVegetationIndexRVI_3_2.png" /> 3 - 4<br />\
    <img src="styles/legend/SimpleRatioVegetationIndexRVI_3_3.png" /> 4 - 5<br />\
    <img src="styles/legend/SimpleRatioVegetationIndexRVI_3_4.png" /> 5 - 6<br />\
    <img src="styles/legend/SimpleRatioVegetationIndexRVI_3_5.png" /> 6 - 7<br />\
    <img src="styles/legend/SimpleRatioVegetationIndexRVI_3_6.png" /> 7 - 8<br />\
    <img src="styles/legend/SimpleRatioVegetationIndexRVI_3_7.png" /> 8 - 11<br />\
    <img src="styles/legend/SimpleRatioVegetationIndexRVI_3_8.png" /> 11 - 15<br />\
    <img src="styles/legend/SimpleRatioVegetationIndexRVI_3_9.png" /> 15 - 92<br />'
        });
var format_TemperatureC_4 = new ol.format.GeoJSON();
var features_TemperatureC_4 = format_TemperatureC_4.readFeatures(json_TemperatureC_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TemperatureC_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TemperatureC_4.addFeatures(features_TemperatureC_4);
var lyr_TemperatureC_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TemperatureC_4, 
                style: style_TemperatureC_4,
                popuplayertitle: "Temperature (C)",
                interactive: true,
    title: 'Temperature (C)<br />\
    <img src="styles/legend/TemperatureC_4_0.png" /> 18 - 21<br />\
    <img src="styles/legend/TemperatureC_4_1.png" /> 21 - 22<br />\
    <img src="styles/legend/TemperatureC_4_2.png" /> 22 - 23<br />\
    <img src="styles/legend/TemperatureC_4_3.png" /> 23 - 23<br />\
    <img src="styles/legend/TemperatureC_4_4.png" /> 23 - 24<br />\
    <img src="styles/legend/TemperatureC_4_5.png" /> 24 - 25<br />\
    <img src="styles/legend/TemperatureC_4_6.png" /> 25 - 26<br />\
    <img src="styles/legend/TemperatureC_4_7.png" /> 26 - 27<br />\
    <img src="styles/legend/TemperatureC_4_8.png" /> 27 - 29<br />\
    <img src="styles/legend/TemperatureC_4_9.png" /> 29 - 34<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_TrueColourImageRGB_1.setVisible(true);lyr_UrbanIndexUI_2.setVisible(true);lyr_SimpleRatioVegetationIndexRVI_3.setVisible(true);lyr_TemperatureC_4.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_TrueColourImageRGB_1,lyr_UrbanIndexUI_2,lyr_SimpleRatioVegetationIndexRVI_3,lyr_TemperatureC_4];
lyr_UrbanIndexUI_2.set('fieldAliases', {'UI': 'UI', });
lyr_SimpleRatioVegetationIndexRVI_3.set('fieldAliases', {'RVI': 'RVI', });
lyr_TemperatureC_4.set('fieldAliases', {'Temperatur': 'Temperatur', });
lyr_UrbanIndexUI_2.set('fieldImages', {'UI': 'Range', });
lyr_SimpleRatioVegetationIndexRVI_3.set('fieldImages', {'RVI': 'Range', });
lyr_TemperatureC_4.set('fieldImages', {'Temperatur': 'Range', });
lyr_UrbanIndexUI_2.set('fieldLabels', {'UI': 'header label - always visible', });
lyr_SimpleRatioVegetationIndexRVI_3.set('fieldLabels', {'RVI': 'header label - always visible', });
lyr_TemperatureC_4.set('fieldLabels', {'Temperatur': 'header label - always visible', });
lyr_TemperatureC_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});