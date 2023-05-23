var wms_layers = [];

var lyr_lycee_2022_georeftif_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "lycee_2022_georef.tif",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/lycee_2022_georeftif_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [541793.240792, 5450755.857027, 544052.580204, 5452549.290022]
                            })
                        });
var format_Marche_matinaletracks_1 = new ol.format.GeoJSON();
var features_Marche_matinaletracks_1 = format_Marche_matinaletracks_1.readFeatures(json_Marche_matinaletracks_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Marche_matinaletracks_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Marche_matinaletracks_1.addFeatures(features_Marche_matinaletracks_1);
var lyr_Marche_matinaletracks_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Marche_matinaletracks_1, 
                style: style_Marche_matinaletracks_1,
                interactive: true,
                title: '<img src="styles/legend/Marche_matinaletracks_1.png" /> Marche_matinale — tracks'
            });
var format_oiseaux_mai_2 = new ol.format.GeoJSON();
var features_oiseaux_mai_2 = format_oiseaux_mai_2.readFeatures(json_oiseaux_mai_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_oiseaux_mai_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_oiseaux_mai_2.addFeatures(features_oiseaux_mai_2);
var lyr_oiseaux_mai_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_oiseaux_mai_2, 
                style: style_oiseaux_mai_2,
                interactive: true,
                title: '<img src="styles/legend/oiseaux_mai_2.png" /> oiseaux_mai'
            });

lyr_lycee_2022_georeftif_0.setVisible(true);lyr_Marche_matinaletracks_1.setVisible(true);lyr_oiseaux_mai_2.setVisible(true);
var layersList = [lyr_lycee_2022_georeftif_0,lyr_Marche_matinaletracks_1,lyr_oiseaux_mai_2];
lyr_Marche_matinaletracks_1.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_oiseaux_mai_2.set('fieldAliases', {'noms': 'noms', 'nombre': 'nombre', 'certitude': 'certitude', 'contact': 'contact', });
lyr_Marche_matinaletracks_1.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', });
lyr_oiseaux_mai_2.set('fieldImages', {'noms': 'TextEdit', 'nombre': 'Range', 'certitude': 'Range', 'contact': 'TextEdit', });
lyr_Marche_matinaletracks_1.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_oiseaux_mai_2.set('fieldLabels', {'noms': 'no label', 'nombre': 'no label', 'certitude': 'no label', 'contact': 'no label', });
lyr_oiseaux_mai_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});