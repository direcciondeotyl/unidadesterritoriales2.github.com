ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:32720").setExtent([-22299.543368, 7717607.885070, 1412896.064568, 8528722.424130]);
var wms_layers = [];


        var lyr_OpenTopoMap_0 = new ol.layer.Tile({
            'title': 'OpenTopoMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">Kartendaten: © OpenStreetMap-Mitwirkende, SRTM | Kartendarstellung: © OpenTopoMap (CC-BY-SA)</a>',
                url: 'https://a.tile.opentopomap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_MUNICIPIOS_SC_WGS84_2 = new ol.format.GeoJSON();
var features_MUNICIPIOS_SC_WGS84_2 = format_MUNICIPIOS_SC_WGS84_2.readFeatures(json_MUNICIPIOS_SC_WGS84_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32720'});
var jsonSource_MUNICIPIOS_SC_WGS84_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MUNICIPIOS_SC_WGS84_2.addFeatures(features_MUNICIPIOS_SC_WGS84_2);
var lyr_MUNICIPIOS_SC_WGS84_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MUNICIPIOS_SC_WGS84_2, 
                style: style_MUNICIPIOS_SC_WGS84_2,
                interactive: true,
                title: '<img src="styles/legend/MUNICIPIOS_SC_WGS84_2.png" /> MUNICIPIOS_SC_WGS84'
            });
var format_PROVINCIAS_SC_WGS84_3 = new ol.format.GeoJSON();
var features_PROVINCIAS_SC_WGS84_3 = format_PROVINCIAS_SC_WGS84_3.readFeatures(json_PROVINCIAS_SC_WGS84_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32720'});
var jsonSource_PROVINCIAS_SC_WGS84_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PROVINCIAS_SC_WGS84_3.addFeatures(features_PROVINCIAS_SC_WGS84_3);
var lyr_PROVINCIAS_SC_WGS84_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PROVINCIAS_SC_WGS84_3, 
                style: style_PROVINCIAS_SC_WGS84_3,
                interactive: true,
                title: '<img src="styles/legend/PROVINCIAS_SC_WGS84_3.png" /> PROVINCIAS_SC_WGS84'
            });
var format_DEPARTAMENTO_SC_WGS84_4 = new ol.format.GeoJSON();
var features_DEPARTAMENTO_SC_WGS84_4 = format_DEPARTAMENTO_SC_WGS84_4.readFeatures(json_DEPARTAMENTO_SC_WGS84_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32720'});
var jsonSource_DEPARTAMENTO_SC_WGS84_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DEPARTAMENTO_SC_WGS84_4.addFeatures(features_DEPARTAMENTO_SC_WGS84_4);
var lyr_DEPARTAMENTO_SC_WGS84_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DEPARTAMENTO_SC_WGS84_4, 
                style: style_DEPARTAMENTO_SC_WGS84_4,
                interactive: true,
                title: '<img src="styles/legend/DEPARTAMENTO_SC_WGS84_4.png" /> DEPARTAMENTO_SC_WGS84'
            });
var format_LIMITES_PRECISOS_SANTA_CRUZ_WGS84_5 = new ol.format.GeoJSON();
var features_LIMITES_PRECISOS_SANTA_CRUZ_WGS84_5 = format_LIMITES_PRECISOS_SANTA_CRUZ_WGS84_5.readFeatures(json_LIMITES_PRECISOS_SANTA_CRUZ_WGS84_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32720'});
var jsonSource_LIMITES_PRECISOS_SANTA_CRUZ_WGS84_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LIMITES_PRECISOS_SANTA_CRUZ_WGS84_5.addFeatures(features_LIMITES_PRECISOS_SANTA_CRUZ_WGS84_5);
var lyr_LIMITES_PRECISOS_SANTA_CRUZ_WGS84_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LIMITES_PRECISOS_SANTA_CRUZ_WGS84_5, 
                style: style_LIMITES_PRECISOS_SANTA_CRUZ_WGS84_5,
                interactive: true,
                title: '<img src="styles/legend/LIMITES_PRECISOS_SANTA_CRUZ_WGS84_5.png" /> LIMITES_PRECISOS_SANTA_CRUZ_WGS84'
            });

lyr_OpenTopoMap_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_MUNICIPIOS_SC_WGS84_2.setVisible(true);lyr_PROVINCIAS_SC_WGS84_3.setVisible(true);lyr_DEPARTAMENTO_SC_WGS84_4.setVisible(true);lyr_LIMITES_PRECISOS_SANTA_CRUZ_WGS84_5.setVisible(true);
var layersList = [lyr_OpenTopoMap_0,lyr_GoogleSatellite_1,lyr_MUNICIPIOS_SC_WGS84_2,lyr_PROVINCIAS_SC_WGS84_3,lyr_DEPARTAMENTO_SC_WGS84_4,lyr_LIMITES_PRECISOS_SANTA_CRUZ_WGS84_5];
lyr_MUNICIPIOS_SC_WGS84_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'LEY_MUN': 'LEY_MUN', 'F_LEY_MUN': 'F_LEY_MUN', 'COD_MUN': 'COD_MUN', 'MUN_TIOC': 'MUN_TIOC', });
lyr_PROVINCIAS_SC_WGS84_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'PROVINCIA': 'PROVINCIA', 'F_LEY_PROV': 'F_LEY_PROV', 'COD_PROV': 'COD_PROV', });
lyr_DEPARTAMENTO_SC_WGS84_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'DEPARTAMEN': 'DEPARTAMEN', });
lyr_LIMITES_PRECISOS_SANTA_CRUZ_WGS84_5.set('fieldAliases', {'ID_LIMITE': 'ID_LIMITE', 'ID_TRAMO': 'ID_TRAMO', 'DIST_KM': 'DIST_KM', 'FECHA_LEY': 'FECHA_LEY', 'LIMITE': 'LIMITE', 'TIPO_LIMIT': 'TIPO_LIMIT', 'Z_UTM': 'Z_UTM', 'LEY': 'LEY', 'DEPARTAMEN': 'DEPARTAMEN', 'UT_A_': 'UT_A_', 'UT_B_': 'UT_B_', 'LEY_DE_EST': 'LEY_DE_EST', });
lyr_MUNICIPIOS_SC_WGS84_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'LEY_MUN': 'TextEdit', 'F_LEY_MUN': 'DateTime', 'COD_MUN': 'TextEdit', 'MUN_TIOC': 'TextEdit', });
lyr_PROVINCIAS_SC_WGS84_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'PROVINCIA': 'TextEdit', 'F_LEY_PROV': 'DateTime', 'COD_PROV': 'TextEdit', });
lyr_DEPARTAMENTO_SC_WGS84_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'DEPARTAMEN': 'TextEdit', });
lyr_LIMITES_PRECISOS_SANTA_CRUZ_WGS84_5.set('fieldImages', {'ID_LIMITE': 'TextEdit', 'ID_TRAMO': 'TextEdit', 'DIST_KM': 'TextEdit', 'FECHA_LEY': 'DateTime', 'LIMITE': 'TextEdit', 'TIPO_LIMIT': 'TextEdit', 'Z_UTM': 'TextEdit', 'LEY': 'TextEdit', 'DEPARTAMEN': 'TextEdit', 'UT_A_': 'TextEdit', 'UT_B_': 'TextEdit', 'LEY_DE_EST': 'TextEdit', });
lyr_MUNICIPIOS_SC_WGS84_2.set('fieldLabels', {'OBJECTID': 'no label', 'LEY_MUN': 'no label', 'F_LEY_MUN': 'no label', 'COD_MUN': 'no label', 'MUN_TIOC': 'no label', });
lyr_PROVINCIAS_SC_WGS84_3.set('fieldLabels', {'OBJECTID': 'no label', 'PROVINCIA': 'no label', 'F_LEY_PROV': 'no label', 'COD_PROV': 'no label', });
lyr_DEPARTAMENTO_SC_WGS84_4.set('fieldLabels', {'OBJECTID': 'no label', 'DEPARTAMEN': 'no label', });
lyr_LIMITES_PRECISOS_SANTA_CRUZ_WGS84_5.set('fieldLabels', {'ID_LIMITE': 'no label', 'ID_TRAMO': 'no label', 'DIST_KM': 'no label', 'FECHA_LEY': 'no label', 'LIMITE': 'no label', 'TIPO_LIMIT': 'no label', 'Z_UTM': 'no label', 'LEY': 'no label', 'DEPARTAMEN': 'no label', 'UT_A_': 'inline label', 'UT_B_': 'inline label', 'LEY_DE_EST': 'no label', });
lyr_LIMITES_PRECISOS_SANTA_CRUZ_WGS84_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});