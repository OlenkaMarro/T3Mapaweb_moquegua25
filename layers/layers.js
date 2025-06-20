var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_CP_MoquDPTO_MOQUEGUAPERU_1 = new ol.format.GeoJSON();
var features_CP_MoquDPTO_MOQUEGUAPERU_1 = format_CP_MoquDPTO_MOQUEGUAPERU_1.readFeatures(json_CP_MoquDPTO_MOQUEGUAPERU_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CP_MoquDPTO_MOQUEGUAPERU_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CP_MoquDPTO_MOQUEGUAPERU_1.addFeatures(features_CP_MoquDPTO_MOQUEGUAPERU_1);
var lyr_CP_MoquDPTO_MOQUEGUAPERU_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CP_MoquDPTO_MOQUEGUAPERU_1, 
                style: style_CP_MoquDPTO_MOQUEGUAPERU_1,
                popuplayertitle: 'CP_MoquDPTO_ MOQUEGUAPERU',
                interactive: true,
                title: '<img src="styles/legend/CP_MoquDPTO_MOQUEGUAPERU_1.png" /> CP_MoquDPTO_ MOQUEGUAPERU'
            });
var format_CP_MoquProvincia_2 = new ol.format.GeoJSON();
var features_CP_MoquProvincia_2 = format_CP_MoquProvincia_2.readFeatures(json_CP_MoquProvincia_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CP_MoquProvincia_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CP_MoquProvincia_2.addFeatures(features_CP_MoquProvincia_2);
var lyr_CP_MoquProvincia_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CP_MoquProvincia_2, 
                style: style_CP_MoquProvincia_2,
                popuplayertitle: 'CP_MoquProvincia',
                interactive: true,
                title: '<img src="styles/legend/CP_MoquProvincia_2.png" /> CP_MoquProvincia'
            });
var format_CP_MoquIE_P_3 = new ol.format.GeoJSON();
var features_CP_MoquIE_P_3 = format_CP_MoquIE_P_3.readFeatures(json_CP_MoquIE_P_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CP_MoquIE_P_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CP_MoquIE_P_3.addFeatures(features_CP_MoquIE_P_3);
var lyr_CP_MoquIE_P_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CP_MoquIE_P_3, 
                style: style_CP_MoquIE_P_3,
                popuplayertitle: 'CP_MoquIE_P',
                interactive: true,
                title: '<img src="styles/legend/CP_MoquIE_P_3.png" /> CP_MoquIE_P'
            });
var format_MOQGA_list_iieecMOQGA_list_iieecopia_4 = new ol.format.GeoJSON();
var features_MOQGA_list_iieecMOQGA_list_iieecopia_4 = format_MOQGA_list_iieecMOQGA_list_iieecopia_4.readFeatures(json_MOQGA_list_iieecMOQGA_list_iieecopia_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MOQGA_list_iieecMOQGA_list_iieecopia_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MOQGA_list_iieecMOQGA_list_iieecopia_4.addFeatures(features_MOQGA_list_iieecMOQGA_list_iieecopia_4);
var lyr_MOQGA_list_iieecMOQGA_list_iieecopia_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MOQGA_list_iieecMOQGA_list_iieecopia_4, 
                style: style_MOQGA_list_iieecMOQGA_list_iieecopia_4,
                popuplayertitle: 'MOQGA_list_iiee - c-MOQGA_list_iiee - copia',
                interactive: true,
                title: 'MOQGA_list_iiee - c-MOQGA_list_iiee - copia'
            });
var format_CP_MoquRios_Quebradas_5 = new ol.format.GeoJSON();
var features_CP_MoquRios_Quebradas_5 = format_CP_MoquRios_Quebradas_5.readFeatures(json_CP_MoquRios_Quebradas_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CP_MoquRios_Quebradas_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CP_MoquRios_Quebradas_5.addFeatures(features_CP_MoquRios_Quebradas_5);
var lyr_CP_MoquRios_Quebradas_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CP_MoquRios_Quebradas_5, 
                style: style_CP_MoquRios_Quebradas_5,
                popuplayertitle: 'CP_MoquRios_Quebradas',
                interactive: true,
                title: '<img src="styles/legend/CP_MoquRios_Quebradas_5.png" /> CP_MoquRios_Quebradas'
            });
var format_CP_MoquRVD_Eje_6 = new ol.format.GeoJSON();
var features_CP_MoquRVD_Eje_6 = format_CP_MoquRVD_Eje_6.readFeatures(json_CP_MoquRVD_Eje_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CP_MoquRVD_Eje_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CP_MoquRVD_Eje_6.addFeatures(features_CP_MoquRVD_Eje_6);
var lyr_CP_MoquRVD_Eje_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CP_MoquRVD_Eje_6, 
                style: style_CP_MoquRVD_Eje_6,
                popuplayertitle: 'CP_MoquRVD_Eje',
                interactive: true,
                title: '<img src="styles/legend/CP_MoquRVD_Eje_6.png" /> CP_MoquRVD_Eje'
            });
var format_CP_MoquRVV_Eje_7 = new ol.format.GeoJSON();
var features_CP_MoquRVV_Eje_7 = format_CP_MoquRVV_Eje_7.readFeatures(json_CP_MoquRVV_Eje_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CP_MoquRVV_Eje_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CP_MoquRVV_Eje_7.addFeatures(features_CP_MoquRVV_Eje_7);
var lyr_CP_MoquRVV_Eje_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CP_MoquRVV_Eje_7, 
                style: style_CP_MoquRVV_Eje_7,
                popuplayertitle: 'CP_MoquRVV_Eje',
                interactive: true,
                title: '<img src="styles/legend/CP_MoquRVV_Eje_7.png" /> CP_MoquRVV_Eje'
            });

lyr_OSMStandard_0.setVisible(true);lyr_CP_MoquDPTO_MOQUEGUAPERU_1.setVisible(true);lyr_CP_MoquProvincia_2.setVisible(true);lyr_CP_MoquIE_P_3.setVisible(true);lyr_MOQGA_list_iieecMOQGA_list_iieecopia_4.setVisible(true);lyr_CP_MoquRios_Quebradas_5.setVisible(true);lyr_CP_MoquRVD_Eje_6.setVisible(true);lyr_CP_MoquRVV_Eje_7.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_CP_MoquDPTO_MOQUEGUAPERU_1,lyr_CP_MoquProvincia_2,lyr_CP_MoquIE_P_3,lyr_MOQGA_list_iieecMOQGA_list_iieecopia_4,lyr_CP_MoquRios_Quebradas_5,lyr_CP_MoquRVD_Eje_6,lyr_CP_MoquRVV_Eje_7];
lyr_CP_MoquDPTO_MOQUEGUAPERU_1.set('fieldAliases', {'fid': 'fid', 'NOMBDEP': 'NOMBRE DEL DEPARTAMENTO:', 'COUNT': 'Numero de distrito del departamento:', 'FIRST_IDDP': 'UBIGEO DEL DEPARTAMENTO:', 'HECTARES': 'SUPERFICIE EN HECTAREAS:', 'FOTOS': 'FOTOS TURISTICOS DEL DPTO:', 'VIDEOS': 'VIDEO PROMOCIONAL DEL DEPARTAMENTO:', 'FOTOS DPT': 'FOTOS TURIS DPTO:', 'LINK': 'INFORMACIÓN DEL DEPARTAMENTO:', });
lyr_CP_MoquProvincia_2.set('fieldAliases', {'fid': 'fid', 'COUNT': 'COUNT', 'FIRST_IDPR': 'FIRST_IDPR', 'NOMBPROV': 'NOMBPROV', 'FIRST_NOMB': 'FIRST_NOMB', 'LAST_DCTO': 'LAST_DCTO', 'LAST_LEY': 'LAST_LEY', 'FIRST_FECH': 'FIRST_FECH', 'LAST_FECHA': 'LAST_FECHA', 'MIN_SHAPE_': 'MIN_SHAPE_', 'ha': 'ha', 'Foto': 'Foto', 'Video': 'Video', 'Link': 'Link', });
lyr_CP_MoquIE_P_3.set('fieldAliases', {'fid': 'fid', 'CODLOCAL': 'CODLOCAL', 'NOMCPSIG': 'NOMCPSIG', 'FUENTE_LOC': 'FUENTE_LOC', 'FTE_LOCD': 'FTE_LOCD', 'X_LONGITUD': 'X_LONGITUD', 'Y_LATITUD': 'Y_LATITUD', 'CORD_YX': 'CORD_YX', 'NALT_LOCAL': 'NALT_LOCAL', 'CEN_EDU_L': 'CEN_EDU_L', 'CODCPSIG': 'CODCPSIG', });
lyr_MOQGA_list_iieecMOQGA_list_iieecopia_4.set('fieldAliases', {'Código Modular': 'Código Modular', 'Anexo': 'Anexo', 'Nombre de SS.EE.': 'Nombre de SS.EE.', 'Ubigeo': 'Ubigeo', 'Departamento': 'Departamento', 'Provincia': 'Provincia', 'Distrito': 'Distrito', 'Código DRE/UGEL': 'Código DRE/UGEL', 'DRE / UGEL': 'DRE / UGEL', 'Centro Poblado': 'Centro Poblado', 'Código Centro Poblado': 'Código Centro Poblado', 'Código Local': 'Código Local', 'Dirección': 'Dirección', 'Nivel / Modalidad': 'Nivel / Modalidad', 'Gestion / Dependencia': 'Gestion / Dependencia', 'Altitud': 'Altitud', 'Fuente de coordenadas': 'Fuente de coordenadas', });
lyr_CP_MoquRios_Quebradas_5.set('fieldAliases', {'fid': 'fid', 'Rasgo_Prin': 'Rasgo_Prin', 'Rasgo_Secu': 'Rasgo_Secu', 'Nombre': 'Nombre', 'Longitud': 'Longitud', });
lyr_CP_MoquRVD_Eje_6.set('fieldAliases', {'fid': 'fid', 'RODADURA': 'RODADURA', 'COD_DS11': 'COD_DS11', 'COD_DS12': 'COD_DS12', 'TRAY_DS12': 'TRAY_DS12', 'TRAY_DS11': 'TRAY_DS11', 'UBIGEO': 'UBIGEO', 'DEP': 'DEP', 'PROV': 'PROV', 'COD_DEP': 'COD_DEP', 'COD_PROV': 'COD_PROV', 'LONG_KM': 'LONG_KM', 'OBS': 'OBS', 'SENTIDO': 'SENTIDO', 'BASE': 'BASE', 'DATA': 'DATA', 'FECHA_ACTU': 'FECHA_ACTU', 'FUENTE': 'FUENTE', 'COD_RODADU': 'COD_RODADU', 'NOMBDIST': 'NOMBDIST', 'CAPITAL': 'CAPITAL', });
lyr_CP_MoquRVV_Eje_7.set('fieldAliases', {'fid': 'fid', 'COD_DS11': 'COD_DS11', 'COD_DS12': 'COD_DS12', 'TRAY_DS12': 'TRAY_DS12', 'TRAY_DS11': 'TRAY_DS11', 'UBIGEO': 'UBIGEO', 'DEP': 'DEP', 'PROV': 'PROV', 'COD_DEP': 'COD_DEP', 'COD_PROV': 'COD_PROV', 'LONG_KM': 'LONG_KM', 'OBS': 'OBS', });
lyr_CP_MoquDPTO_MOQUEGUAPERU_1.set('fieldImages', {'fid': 'TextEdit', 'NOMBDEP': 'TextEdit', 'COUNT': 'TextEdit', 'FIRST_IDDP': 'TextEdit', 'HECTARES': 'TextEdit', 'FOTOS': 'TextEdit', 'VIDEOS': 'TextEdit', 'FOTOS DPT': 'TextEdit', 'LINK': 'TextEdit', });
lyr_CP_MoquProvincia_2.set('fieldImages', {'fid': 'TextEdit', 'COUNT': 'TextEdit', 'FIRST_IDPR': 'TextEdit', 'NOMBPROV': 'TextEdit', 'FIRST_NOMB': 'TextEdit', 'LAST_DCTO': 'TextEdit', 'LAST_LEY': 'TextEdit', 'FIRST_FECH': 'TextEdit', 'LAST_FECHA': 'TextEdit', 'MIN_SHAPE_': 'TextEdit', 'ha': 'TextEdit', 'Foto': 'ExternalResource', 'Video': 'TextEdit', 'Link': 'TextEdit', });
lyr_CP_MoquIE_P_3.set('fieldImages', {'fid': '', 'CODLOCAL': '', 'NOMCPSIG': '', 'FUENTE_LOC': '', 'FTE_LOCD': '', 'X_LONGITUD': '', 'Y_LATITUD': '', 'CORD_YX': '', 'NALT_LOCAL': '', 'CEN_EDU_L': '', 'CODCPSIG': '', });
lyr_MOQGA_list_iieecMOQGA_list_iieecopia_4.set('fieldImages', {'Código Modular': '', 'Anexo': '', 'Nombre de SS.EE.': '', 'Ubigeo': '', 'Departamento': '', 'Provincia': '', 'Distrito': '', 'Código DRE/UGEL': '', 'DRE / UGEL': '', 'Centro Poblado': '', 'Código Centro Poblado': '', 'Código Local': '', 'Dirección': '', 'Nivel / Modalidad': '', 'Gestion / Dependencia': '', 'Altitud': '', 'Fuente de coordenadas': '', });
lyr_CP_MoquRios_Quebradas_5.set('fieldImages', {'fid': 'TextEdit', 'Rasgo_Prin': 'TextEdit', 'Rasgo_Secu': 'TextEdit', 'Nombre': 'TextEdit', 'Longitud': 'TextEdit', });
lyr_CP_MoquRVD_Eje_6.set('fieldImages', {'fid': '', 'RODADURA': '', 'COD_DS11': '', 'COD_DS12': '', 'TRAY_DS12': '', 'TRAY_DS11': '', 'UBIGEO': '', 'DEP': '', 'PROV': '', 'COD_DEP': '', 'COD_PROV': '', 'LONG_KM': '', 'OBS': '', 'SENTIDO': '', 'BASE': '', 'DATA': '', 'FECHA_ACTU': '', 'FUENTE': '', 'COD_RODADU': '', 'NOMBDIST': '', 'CAPITAL': '', });
lyr_CP_MoquRVV_Eje_7.set('fieldImages', {'fid': '', 'COD_DS11': '', 'COD_DS12': '', 'TRAY_DS12': '', 'TRAY_DS11': '', 'UBIGEO': '', 'DEP': '', 'PROV': '', 'COD_DEP': '', 'COD_PROV': '', 'LONG_KM': '', 'OBS': '', });
lyr_CP_MoquDPTO_MOQUEGUAPERU_1.set('fieldLabels', {'fid': 'hidden field', 'NOMBDEP': 'header label - always visible', 'COUNT': 'header label - always visible', 'FIRST_IDDP': 'header label - always visible', 'HECTARES': 'header label - always visible', 'FOTOS': 'hidden field', 'VIDEOS': 'header label - always visible', 'FOTOS DPT': 'header label - always visible', 'LINK': 'header label - always visible', });
lyr_CP_MoquProvincia_2.set('fieldLabels', {'fid': 'hidden field', 'COUNT': 'header label - always visible', 'FIRST_IDPR': 'header label - always visible', 'NOMBPROV': 'header label - always visible', 'FIRST_NOMB': 'header label - always visible', 'LAST_DCTO': 'header label - always visible', 'LAST_LEY': 'header label - always visible', 'FIRST_FECH': 'header label - always visible', 'LAST_FECHA': 'header label - always visible', 'MIN_SHAPE_': 'header label - always visible', 'ha': 'header label - always visible', 'Foto': 'header label - always visible', 'Video': 'header label - always visible', 'Link': 'header label - always visible', });
lyr_CP_MoquIE_P_3.set('fieldLabels', {'fid': 'hidden field', 'CODLOCAL': 'header label - always visible', 'NOMCPSIG': 'header label - always visible', 'FUENTE_LOC': 'header label - always visible', 'FTE_LOCD': 'header label - always visible', 'X_LONGITUD': 'header label - always visible', 'Y_LATITUD': 'header label - always visible', 'CORD_YX': 'header label - always visible', 'NALT_LOCAL': 'header label - always visible', 'CEN_EDU_L': 'header label - always visible', 'CODCPSIG': 'header label - always visible', });
lyr_MOQGA_list_iieecMOQGA_list_iieecopia_4.set('fieldLabels', {'Código Modular': 'header label - always visible', 'Anexo': 'header label - always visible', 'Nombre de SS.EE.': 'header label - always visible', 'Ubigeo': 'header label - always visible', 'Departamento': 'header label - always visible', 'Provincia': 'header label - always visible', 'Distrito': 'header label - always visible', 'Código DRE/UGEL': 'header label - always visible', 'DRE / UGEL': 'header label - always visible', 'Centro Poblado': 'header label - always visible', 'Código Centro Poblado': 'header label - always visible', 'Código Local': 'header label - always visible', 'Dirección': 'header label - always visible', 'Nivel / Modalidad': 'header label - always visible', 'Gestion / Dependencia': 'header label - always visible', 'Altitud': 'header label - always visible', 'Fuente de coordenadas': 'header label - always visible', });
lyr_CP_MoquRios_Quebradas_5.set('fieldLabels', {'fid': 'header label - always visible', 'Rasgo_Prin': 'header label - always visible', 'Rasgo_Secu': 'header label - always visible', 'Nombre': 'header label - always visible', 'Longitud': 'header label - always visible', });
lyr_CP_MoquRVD_Eje_6.set('fieldLabels', {'fid': 'header label - always visible', 'RODADURA': 'header label - always visible', 'COD_DS11': 'header label - always visible', 'COD_DS12': 'header label - always visible', 'TRAY_DS12': 'header label - always visible', 'TRAY_DS11': 'header label - always visible', 'UBIGEO': 'header label - always visible', 'DEP': 'header label - always visible', 'PROV': 'header label - always visible', 'COD_DEP': 'header label - always visible', 'COD_PROV': 'header label - always visible', 'LONG_KM': 'header label - always visible', 'OBS': 'header label - always visible', 'SENTIDO': 'header label - always visible', 'BASE': 'header label - always visible', 'DATA': 'header label - always visible', 'FECHA_ACTU': 'header label - always visible', 'FUENTE': 'header label - always visible', 'COD_RODADU': 'header label - always visible', 'NOMBDIST': 'header label - always visible', 'CAPITAL': 'header label - always visible', });
lyr_CP_MoquRVV_Eje_7.set('fieldLabels', {'fid': 'header label - always visible', 'COD_DS11': 'header label - always visible', 'COD_DS12': 'header label - always visible', 'TRAY_DS12': 'header label - always visible', 'TRAY_DS11': 'header label - always visible', 'UBIGEO': 'header label - always visible', 'DEP': 'header label - always visible', 'PROV': 'header label - always visible', 'COD_DEP': 'header label - always visible', 'COD_PROV': 'header label - always visible', 'LONG_KM': 'header label - always visible', 'OBS': 'header label - always visible', });
lyr_CP_MoquRVV_Eje_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});