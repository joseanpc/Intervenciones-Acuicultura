var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_DEPARTAMENTOS_2 = new ol.format.GeoJSON();
var features_DEPARTAMENTOS_2 = format_DEPARTAMENTOS_2.readFeatures(json_DEPARTAMENTOS_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DEPARTAMENTOS_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DEPARTAMENTOS_2.addFeatures(features_DEPARTAMENTOS_2);
var lyr_DEPARTAMENTOS_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DEPARTAMENTOS_2, 
                style: style_DEPARTAMENTOS_2,
                popuplayertitle: "DEPARTAMENTOS",
                interactive: true,
                title: '<img src="styles/legend/DEPARTAMENTOS_2.png" /> DEPARTAMENTOS'
            });
var format_DERECHOSACUICOLAS_3 = new ol.format.GeoJSON();
var features_DERECHOSACUICOLAS_3 = format_DERECHOSACUICOLAS_3.readFeatures(json_DERECHOSACUICOLAS_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DERECHOSACUICOLAS_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DERECHOSACUICOLAS_3.addFeatures(features_DERECHOSACUICOLAS_3);
var lyr_DERECHOSACUICOLAS_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DERECHOSACUICOLAS_3, 
                style: style_DERECHOSACUICOLAS_3,
                popuplayertitle: "DERECHOS ACUICOLAS",
                interactive: true,
                title: '<img src="styles/legend/DERECHOSACUICOLAS_3.png" /> DERECHOS ACUICOLAS'
            });
var format_DGA_4 = new ol.format.GeoJSON();
var features_DGA_4 = format_DGA_4.readFeatures(json_DGA_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DGA_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DGA_4.addFeatures(features_DGA_4);
var lyr_DGA_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DGA_4, 
                style: style_DGA_4,
                popuplayertitle: "DGA",
                interactive: true,
                title: '<img src="styles/legend/DGA_4.png" /> DGA'
            });
var format_DEVIDA_5 = new ol.format.GeoJSON();
var features_DEVIDA_5 = format_DEVIDA_5.readFeatures(json_DEVIDA_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DEVIDA_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DEVIDA_5.addFeatures(features_DEVIDA_5);
var lyr_DEVIDA_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DEVIDA_5, 
                style: style_DEVIDA_5,
                popuplayertitle: "DEVIDA",
                interactive: true,
                title: '<img src="styles/legend/DEVIDA_5.png" /> DEVIDA'
            });
var format_FONCODESHAKUWINAY_6 = new ol.format.GeoJSON();
var features_FONCODESHAKUWINAY_6 = format_FONCODESHAKUWINAY_6.readFeatures(json_FONCODESHAKUWINAY_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FONCODESHAKUWINAY_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FONCODESHAKUWINAY_6.addFeatures(features_FONCODESHAKUWINAY_6);
var lyr_FONCODESHAKUWINAY_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FONCODESHAKUWINAY_6, 
                style: style_FONCODESHAKUWINAY_6,
                popuplayertitle: "FONCODES HAKU WINAY",
                interactive: true,
                title: '<img src="styles/legend/FONCODESHAKUWINAY_6.png" /> FONCODES HAKU WINAY'
            });
var format_IIAP_7 = new ol.format.GeoJSON();
var features_IIAP_7 = format_IIAP_7.readFeatures(json_IIAP_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IIAP_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IIAP_7.addFeatures(features_IIAP_7);
var lyr_IIAP_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IIAP_7, 
                style: style_IIAP_7,
                popuplayertitle: "IIAP",
                interactive: true,
                title: '<img src="styles/legend/IIAP_7.png" /> IIAP'
            });
var format_IMARPE_8 = new ol.format.GeoJSON();
var features_IMARPE_8 = format_IMARPE_8.readFeatures(json_IMARPE_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IMARPE_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IMARPE_8.addFeatures(features_IMARPE_8);
var lyr_IMARPE_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IMARPE_8, 
                style: style_IMARPE_8,
                popuplayertitle: "IMARPE",
                interactive: true,
                title: '<img src="styles/legend/IMARPE_8.png" /> IMARPE'
            });
var format_FONCODES_9 = new ol.format.GeoJSON();
var features_FONCODES_9 = format_FONCODES_9.readFeatures(json_FONCODES_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FONCODES_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FONCODES_9.addFeatures(features_FONCODES_9);
var lyr_FONCODES_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FONCODES_9, 
                style: style_FONCODES_9,
                popuplayertitle: "FONCODES",
                interactive: true,
                title: '<img src="styles/legend/FONCODES_9.png" /> FONCODES'
            });
var format_ITP_10 = new ol.format.GeoJSON();
var features_ITP_10 = format_ITP_10.readFeatures(json_ITP_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ITP_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ITP_10.addFeatures(features_ITP_10);
var lyr_ITP_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ITP_10, 
                style: style_ITP_10,
                popuplayertitle: "ITP",
                interactive: true,
                title: '<img src="styles/legend/ITP_10.png" /> ITP'
            });

lyr_OSMStandard_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_DEPARTAMENTOS_2.setVisible(true);lyr_DERECHOSACUICOLAS_3.setVisible(true);lyr_DGA_4.setVisible(true);lyr_DEVIDA_5.setVisible(true);lyr_FONCODESHAKUWINAY_6.setVisible(true);lyr_IIAP_7.setVisible(true);lyr_IMARPE_8.setVisible(true);lyr_FONCODES_9.setVisible(true);lyr_ITP_10.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_GoogleSatellite_1,lyr_DEPARTAMENTOS_2,lyr_DERECHOSACUICOLAS_3,lyr_DGA_4,lyr_DEVIDA_5,lyr_FONCODESHAKUWINAY_6,lyr_IIAP_7,lyr_IMARPE_8,lyr_FONCODES_9,lyr_ITP_10];
lyr_DEPARTAMENTOS_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'CCDD': 'CCDD', 'NOMBDEP': 'NOMBDEP', 'FUENTE': 'FUENTE', 'FUENTE_1': 'FUENTE_1', 'POB_PROYEC': 'POB_PROYEC', 'POBTOTAL': 'POBTOTAL', 'POB_EDAD_T': 'POB_EDAD_T', 'POB_EDAD_1': 'POB_EDAD_1', 'POB_EDAD_E': 'POB_EDAD_E', 'POB_EDAD_2': 'POB_EDAD_2', 'DENSIDAD': 'DENSIDAD', 'POBMASCU': 'POBMASCU', 'POBFEMEN': 'POBFEMEN', 'POBMASCU_P': 'POBMASCU_P', 'POBFEMEN_P': 'POBFEMEN_P', 'R_MASCULIN': 'R_MASCULIN', 'POBURBANA': 'POBURBANA', 'POBRURAL': 'POBRURAL', 'POBURBANA_': 'POBURBANA_', 'POBRURAL_P': 'POBRURAL_P', 'EDAD_PROME': 'EDAD_PROME', 'EDAD_MEDIA': 'EDAD_MEDIA', 'POB_0_14': 'POB_0_14', 'POB_0_14_P': 'POB_0_14_P', 'POB_15_29': 'POB_15_29', 'POB_15_29_': 'POB_15_29_', 'POB_30_59': 'POB_30_59', 'POB_30_59_': 'POB_30_59_', 'POB_60_MAS': 'POB_60_MAS', 'POB_60_M_1': 'POB_60_M_1', 'POB_ANALFA': 'POB_ANALFA', 'POB_ANAL_1': 'POB_ANAL_1', 'HOMBRES_AN': 'HOMBRES_AN', 'HOMBRES__1': 'HOMBRES__1', 'MUJERES_AN': 'MUJERES_AN', 'MUJERES__1': 'MUJERES__1', 'MUJERES_ED': 'MUJERES_ED', 'MUJERES__2': 'MUJERES__2', 'TOTAL_MADR': 'TOTAL_MADR', 'MADRES_SOL': 'MADRES_SOL', 'MADRES_S_1': 'MADRES_S_1', 'MUJERES_AD': 'MUJERES_AD', 'MADRES_ADO': 'MADRES_ADO', 'MADRES_A_1': 'MADRES_A_1', 'AL_MENOS_1': 'AL_MENOS_1', 'AL_MENOS_2': 'AL_MENOS_2', 'SIN_DISCAP': 'SIN_DISCAP', 'SIN_DISC_1': 'SIN_DISC_1', 'ALGUNA_NBI': 'ALGUNA_NBI', 'NBI_PORC': 'NBI_PORC', 'VIV_PARTIC': 'VIV_PARTIC', 'VIV_PART_1': 'VIV_PART_1', 'VIV_PART_2': 'VIV_PART_2', 'HOGARES': 'HOGARES', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'IC_INF': 'IC_INF', 'IC_SUP': 'IC_SUP', 'UBIC_POBMO': 'UBIC_POBMO', 'TOTAL_DEFU': 'TOTAL_DEFU', 'TOTAL_DE_1': 'TOTAL_DE_1', 'TOTAL_DE_2': 'TOTAL_DE_2', 'NAC_BAJOPE': 'NAC_BAJOPE', 'NAC_BAJO_1': 'NAC_BAJO_1', 'MUJERES_NA': 'MUJERES_NA', 'MUJERES__3': 'MUJERES__3', 'HOMBRES_NA': 'HOMBRES_NA', 'HOMBRES__2': 'HOMBRES__2', 'TOTAL_NACI': 'TOTAL_NACI', 'IND_121951': 'IND_121951', 'IND_122042': 'IND_122042', 'IND_122047': 'IND_122047', 'IND_516462': 'IND_516462', 'IND_516484': 'IND_516484', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Ar_1': 'Shape_Ar_1', 'Shape_Le_2': 'Shape_Le_2', 'Shape_Ar_2': 'Shape_Ar_2', });
lyr_DERECHOSACUICOLAS_3.set('fieldAliases', {'CODIGO': 'CODIGO', 'TITULAR': 'TITULAR', 'RESOLUCION': 'RESOLUCION', 'FECHA_EMIS': 'FECHA_EMIS', 'FECHA_VIGE': 'FECHA_VIGE', 'AREA_TOTAL': 'AREA_TOTAL', 'ESPECIE': 'ESPECIE', 'AMBITO': 'AMBITO', 'TIPO_DEREC': 'TIPO_DEREC', 'CATEGORIA_': 'CATEGORIA_', 'ESTADO': 'ESTADO', 'DEPARTAMEN': 'DEPARTAMEN', 'PROVINCIA': 'PROVINCIA', 'DISTRITO': 'DISTRITO', 'ZONA': 'ZONA', 'LATITUD': 'LATITUD', 'LONGITUD': 'LONGITUD', });
lyr_DGA_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'CODIGO': 'CODIGO', 'TITULAR': 'TITULAR', 'RESOLUCION': 'RESOLUCION', 'FECHA_EMIS': 'FECHA_EMIS', 'FECHA_VIGE': 'FECHA_VIGE', 'AREA_TOTAL': 'AREA_TOTAL', 'TIPO_RECUR': 'TIPO_RECUR', 'NOMBRE_REC': 'NOMBRE_REC', 'ESPECIE': 'ESPECIE', 'AMBITO': 'AMBITO', 'TIPO_DEREC': 'TIPO_DEREC', 'CATEGORIA_': 'CATEGORIA_', 'ESTADO': 'ESTADO', 'DEPARTAMEN': 'DEPARTAMEN', 'PROVINCIA': 'PROVINCIA', 'DISTRITO': 'DISTRITO', 'ZONA': 'ZONA', 'RESOLUCI_1': 'RESOLUCI_1', 'FECHA_MODI': 'FECHA_MODI', 'OBS_MODIFI': 'OBS_MODIFI', 'TIPO_COORD': 'TIPO_COORD', 'DATUM': 'DATUM', 'LATITUD': 'LATITUD', 'LONGITUD': 'LONGITUD', 'FLAG': 'FLAG', 'CODIGO_1': 'CODIGO_1', 'RESOLUCI_2': 'RESOLUCI_2', 'AÑO_1': 'AÑO_1', 'ENTIDAD': 'ENTIDAD', });
lyr_DEVIDA_5.set('fieldAliases', {'CODIGO': 'CODIGO', 'TITULAR': 'TITULAR', 'RESOLUCION': 'RESOLUCION', 'FECHA_EMIS': 'FECHA_EMIS', 'FECHA_VIGE': 'FECHA_VIGE', 'AREA_TOTAL': 'AREA_TOTAL', 'ESPECIE': 'ESPECIE', 'AMBITO': 'AMBITO', 'TIPO_DEREC': 'TIPO_DEREC', 'CATEGORIA_': 'CATEGORIA_', 'ESTADO': 'ESTADO', 'DEPARTAMEN': 'DEPARTAMEN', 'PROVINCIA': 'PROVINCIA', 'DISTRITO': 'DISTRITO', 'ZONA': 'ZONA', 'TIPO_COORD': 'TIPO_COORD', 'DATUM': 'DATUM', 'LATITUD': 'LATITUD', 'LONGITUD': 'LONGITUD', 'ENTIDAD': 'ENTIDAD', });
lyr_FONCODESHAKUWINAY_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'UBIGEO': 'UBIGEO', 'DEP': 'DEP', 'PROV': 'PROV', 'DIST': 'DIST', 'CODCP': 'CODCP', 'NOMCP': 'NOMCP', 'MNOMCP': 'MNOMCP', 'CAPITAL': 'CAPITAL', 'CON_IE': 'CON_IE', 'NIVEL': 'NIVEL', 'CPINEI': 'CPINEI', 'CPINEI2': 'CPINEI2', 'CPINEI_BKP': 'CPINEI_BKP', 'FUENTE_G': 'FUENTE_G', 'Z': 'Z', 'XGD': 'XGD', 'YGD': 'YGD', 'Y_X_COORD': 'Y_X_COORD', 'DEPARTAMEN': 'DEPARTAMEN', 'PROVINCIA': 'PROVINCIA', 'DISTRITO': 'DISTRITO', 'CENTRO_POB': 'CENTRO_POB', 'NUCLEO_EJE': 'NUCLEO_EJE', 'NEGOCIOS_R': 'NEGOCIOS_R', 'ENTIDAD': 'ENTIDAD', });
lyr_IIAP_7.set('fieldAliases', {'CODIGO': 'CODIGO', 'TITULAR': 'TITULAR', 'RESOLUCION': 'RESOLUCION', 'FECHA_EMIS': 'FECHA_EMIS', 'FECHA_VIGE': 'FECHA_VIGE', 'AREA_TOTAL': 'AREA_TOTAL', 'ESPECIE': 'ESPECIE', 'AMBITO': 'AMBITO', 'TIPO_DEREC': 'TIPO_DEREC', 'CATEGORIA_': 'CATEGORIA_', 'ESTADO': 'ESTADO', 'DEPARTAMEN': 'DEPARTAMEN', 'PROVINCIA': 'PROVINCIA', 'DISTRITO': 'DISTRITO', 'ZONA': 'ZONA', 'TIPO_COORD': 'TIPO_COORD', 'DATUM': 'DATUM', 'LATITUD': 'LATITUD', 'LONGITUD': 'LONGITUD', 'ENTIDAD': 'ENTIDAD', });
lyr_IMARPE_8.set('fieldAliases', {'Id': 'Id', 'DEPARTAMEN': 'DEPARTAMEN', 'MODULOS_IN': 'MODULOS_IN', 'ASISTENCIA': 'ASISTENCIA', 'ENTIDAD': 'ENTIDAD', });
lyr_FONCODES_9.set('fieldAliases', {'CODIGO': 'CODIGO', 'TITULAR': 'TITULAR', 'RESOLUCION': 'RESOLUCION', 'FECHA_EMIS': 'FECHA_EMIS', 'FECHA_VIGE': 'FECHA_VIGE', 'AREA_TOTAL': 'AREA_TOTAL', 'ESPECIE': 'ESPECIE', 'AMBITO': 'AMBITO', 'TIPO_DEREC': 'TIPO_DEREC', 'CATEGORIA_': 'CATEGORIA_', 'ESTADO': 'ESTADO', 'DEPARTAMEN': 'DEPARTAMEN', 'PROVINCIA': 'PROVINCIA', 'DISTRITO': 'DISTRITO', 'ZONA': 'ZONA', 'TIPO_COORD': 'TIPO_COORD', 'DATUM': 'DATUM', 'LATITUD': 'LATITUD', 'LONGITUD': 'LONGITUD', 'INSTITUCIO': 'INSTITUCIO', });
lyr_ITP_10.set('fieldAliases', {'CODIGO': 'CODIGO', 'TITULAR': 'TITULAR', 'RESOLUCION': 'RESOLUCION', 'FECHA_EMIS': 'FECHA_EMIS', 'FECHA_VIGE': 'FECHA_VIGE', 'AREA_TOTAL': 'AREA_TOTAL', 'ESPECIE': 'ESPECIE', 'AMBITO': 'AMBITO', 'TIPO_DEREC': 'TIPO_DEREC', 'CATEGORIA_': 'CATEGORIA_', 'ESTADO': 'ESTADO', 'DEPARTAMEN': 'DEPARTAMEN', 'PROVINCIA': 'PROVINCIA', 'DISTRITO': 'DISTRITO', 'RESOLUCI_1': 'RESOLUCI_1', 'FECHA_MODI': 'FECHA_MODI', 'TIPO_COORD': 'TIPO_COORD', 'DATUM': 'DATUM', 'LATITUD': 'LATITUD', 'LONGITUD': 'LONGITUD', 'ENTIDAD': 'ENTIDAD', });
lyr_DEPARTAMENTOS_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'CCDD': 'TextEdit', 'NOMBDEP': 'TextEdit', 'FUENTE': 'TextEdit', 'FUENTE_1': 'TextEdit', 'POB_PROYEC': 'TextEdit', 'POBTOTAL': 'TextEdit', 'POB_EDAD_T': 'TextEdit', 'POB_EDAD_1': 'TextEdit', 'POB_EDAD_E': 'TextEdit', 'POB_EDAD_2': 'TextEdit', 'DENSIDAD': 'TextEdit', 'POBMASCU': 'TextEdit', 'POBFEMEN': 'TextEdit', 'POBMASCU_P': 'TextEdit', 'POBFEMEN_P': 'TextEdit', 'R_MASCULIN': 'TextEdit', 'POBURBANA': 'TextEdit', 'POBRURAL': 'TextEdit', 'POBURBANA_': 'TextEdit', 'POBRURAL_P': 'TextEdit', 'EDAD_PROME': 'TextEdit', 'EDAD_MEDIA': 'TextEdit', 'POB_0_14': 'TextEdit', 'POB_0_14_P': 'TextEdit', 'POB_15_29': 'TextEdit', 'POB_15_29_': 'TextEdit', 'POB_30_59': 'TextEdit', 'POB_30_59_': 'TextEdit', 'POB_60_MAS': 'TextEdit', 'POB_60_M_1': 'TextEdit', 'POB_ANALFA': 'TextEdit', 'POB_ANAL_1': 'TextEdit', 'HOMBRES_AN': 'TextEdit', 'HOMBRES__1': 'TextEdit', 'MUJERES_AN': 'TextEdit', 'MUJERES__1': 'TextEdit', 'MUJERES_ED': 'TextEdit', 'MUJERES__2': 'TextEdit', 'TOTAL_MADR': 'TextEdit', 'MADRES_SOL': 'TextEdit', 'MADRES_S_1': 'TextEdit', 'MUJERES_AD': 'TextEdit', 'MADRES_ADO': 'TextEdit', 'MADRES_A_1': 'TextEdit', 'AL_MENOS_1': 'TextEdit', 'AL_MENOS_2': 'TextEdit', 'SIN_DISCAP': 'TextEdit', 'SIN_DISC_1': 'TextEdit', 'ALGUNA_NBI': 'TextEdit', 'NBI_PORC': 'TextEdit', 'VIV_PARTIC': 'TextEdit', 'VIV_PART_1': 'TextEdit', 'VIV_PART_2': 'TextEdit', 'HOGARES': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'IC_INF': 'TextEdit', 'IC_SUP': 'TextEdit', 'UBIC_POBMO': 'TextEdit', 'TOTAL_DEFU': 'TextEdit', 'TOTAL_DE_1': 'TextEdit', 'TOTAL_DE_2': 'TextEdit', 'NAC_BAJOPE': 'TextEdit', 'NAC_BAJO_1': 'TextEdit', 'MUJERES_NA': 'TextEdit', 'MUJERES__3': 'TextEdit', 'HOMBRES_NA': 'TextEdit', 'HOMBRES__2': 'TextEdit', 'TOTAL_NACI': 'TextEdit', 'IND_121951': 'TextEdit', 'IND_122042': 'TextEdit', 'IND_122047': 'TextEdit', 'IND_516462': 'TextEdit', 'IND_516484': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Ar_1': 'TextEdit', 'Shape_Le_2': 'TextEdit', 'Shape_Ar_2': 'TextEdit', });
lyr_DERECHOSACUICOLAS_3.set('fieldImages', {'CODIGO': 'TextEdit', 'TITULAR': 'TextEdit', 'RESOLUCION': 'TextEdit', 'FECHA_EMIS': 'DateTime', 'FECHA_VIGE': 'DateTime', 'AREA_TOTAL': 'TextEdit', 'ESPECIE': 'TextEdit', 'AMBITO': 'TextEdit', 'TIPO_DEREC': 'TextEdit', 'CATEGORIA_': 'TextEdit', 'ESTADO': 'TextEdit', 'DEPARTAMEN': 'TextEdit', 'PROVINCIA': 'TextEdit', 'DISTRITO': 'TextEdit', 'ZONA': 'TextEdit', 'LATITUD': 'TextEdit', 'LONGITUD': 'TextEdit', });
lyr_DGA_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'CODIGO': 'TextEdit', 'TITULAR': 'TextEdit', 'RESOLUCION': 'TextEdit', 'FECHA_EMIS': 'DateTime', 'FECHA_VIGE': 'DateTime', 'AREA_TOTAL': 'TextEdit', 'TIPO_RECUR': 'TextEdit', 'NOMBRE_REC': 'TextEdit', 'ESPECIE': 'TextEdit', 'AMBITO': 'TextEdit', 'TIPO_DEREC': 'TextEdit', 'CATEGORIA_': 'TextEdit', 'ESTADO': 'TextEdit', 'DEPARTAMEN': 'TextEdit', 'PROVINCIA': 'TextEdit', 'DISTRITO': 'TextEdit', 'ZONA': 'TextEdit', 'RESOLUCI_1': 'TextEdit', 'FECHA_MODI': 'DateTime', 'OBS_MODIFI': 'TextEdit', 'TIPO_COORD': 'TextEdit', 'DATUM': 'TextEdit', 'LATITUD': 'TextEdit', 'LONGITUD': 'TextEdit', 'FLAG': 'TextEdit', 'CODIGO_1': 'TextEdit', 'RESOLUCI_2': 'TextEdit', 'AÑO_1': 'TextEdit', 'ENTIDAD': 'TextEdit', });
lyr_DEVIDA_5.set('fieldImages', {'CODIGO': 'TextEdit', 'TITULAR': 'TextEdit', 'RESOLUCION': 'TextEdit', 'FECHA_EMIS': 'DateTime', 'FECHA_VIGE': 'DateTime', 'AREA_TOTAL': 'TextEdit', 'ESPECIE': 'TextEdit', 'AMBITO': 'TextEdit', 'TIPO_DEREC': 'TextEdit', 'CATEGORIA_': 'TextEdit', 'ESTADO': 'TextEdit', 'DEPARTAMEN': 'TextEdit', 'PROVINCIA': 'TextEdit', 'DISTRITO': 'TextEdit', 'ZONA': 'TextEdit', 'TIPO_COORD': 'TextEdit', 'DATUM': 'TextEdit', 'LATITUD': 'TextEdit', 'LONGITUD': 'TextEdit', 'ENTIDAD': 'TextEdit', });
lyr_FONCODESHAKUWINAY_6.set('fieldImages', {'OBJECTID': 'TextEdit', 'UBIGEO': 'TextEdit', 'DEP': 'TextEdit', 'PROV': 'TextEdit', 'DIST': 'TextEdit', 'CODCP': 'TextEdit', 'NOMCP': 'TextEdit', 'MNOMCP': 'TextEdit', 'CAPITAL': 'TextEdit', 'CON_IE': 'TextEdit', 'NIVEL': 'TextEdit', 'CPINEI': 'TextEdit', 'CPINEI2': 'TextEdit', 'CPINEI_BKP': 'TextEdit', 'FUENTE_G': 'TextEdit', 'Z': 'TextEdit', 'XGD': 'TextEdit', 'YGD': 'TextEdit', 'Y_X_COORD': 'TextEdit', 'DEPARTAMEN': 'TextEdit', 'PROVINCIA': 'TextEdit', 'DISTRITO': 'TextEdit', 'CENTRO_POB': 'TextEdit', 'NUCLEO_EJE': 'TextEdit', 'NEGOCIOS_R': 'TextEdit', 'ENTIDAD': 'TextEdit', });
lyr_IIAP_7.set('fieldImages', {'CODIGO': 'TextEdit', 'TITULAR': 'TextEdit', 'RESOLUCION': 'TextEdit', 'FECHA_EMIS': 'DateTime', 'FECHA_VIGE': 'DateTime', 'AREA_TOTAL': 'TextEdit', 'ESPECIE': 'TextEdit', 'AMBITO': 'TextEdit', 'TIPO_DEREC': 'TextEdit', 'CATEGORIA_': 'TextEdit', 'ESTADO': 'TextEdit', 'DEPARTAMEN': 'TextEdit', 'PROVINCIA': 'TextEdit', 'DISTRITO': 'TextEdit', 'ZONA': 'TextEdit', 'TIPO_COORD': 'TextEdit', 'DATUM': 'TextEdit', 'LATITUD': 'TextEdit', 'LONGITUD': 'TextEdit', 'ENTIDAD': 'TextEdit', });
lyr_IMARPE_8.set('fieldImages', {'Id': 'Range', 'DEPARTAMEN': 'TextEdit', 'MODULOS_IN': 'TextEdit', 'ASISTENCIA': 'TextEdit', 'ENTIDAD': 'TextEdit', });
lyr_FONCODES_9.set('fieldImages', {'CODIGO': 'TextEdit', 'TITULAR': 'TextEdit', 'RESOLUCION': 'TextEdit', 'FECHA_EMIS': 'DateTime', 'FECHA_VIGE': 'DateTime', 'AREA_TOTAL': 'TextEdit', 'ESPECIE': 'TextEdit', 'AMBITO': 'TextEdit', 'TIPO_DEREC': 'TextEdit', 'CATEGORIA_': 'TextEdit', 'ESTADO': 'TextEdit', 'DEPARTAMEN': 'TextEdit', 'PROVINCIA': 'TextEdit', 'DISTRITO': 'TextEdit', 'ZONA': 'TextEdit', 'TIPO_COORD': 'TextEdit', 'DATUM': 'TextEdit', 'LATITUD': 'TextEdit', 'LONGITUD': 'TextEdit', 'INSTITUCIO': 'TextEdit', });
lyr_ITP_10.set('fieldImages', {'CODIGO': 'TextEdit', 'TITULAR': 'TextEdit', 'RESOLUCION': 'TextEdit', 'FECHA_EMIS': 'DateTime', 'FECHA_VIGE': 'DateTime', 'AREA_TOTAL': 'TextEdit', 'ESPECIE': 'TextEdit', 'AMBITO': 'TextEdit', 'TIPO_DEREC': 'TextEdit', 'CATEGORIA_': 'TextEdit', 'ESTADO': 'TextEdit', 'DEPARTAMEN': 'TextEdit', 'PROVINCIA': 'TextEdit', 'DISTRITO': 'TextEdit', 'RESOLUCI_1': 'TextEdit', 'FECHA_MODI': 'DateTime', 'TIPO_COORD': 'TextEdit', 'DATUM': 'TextEdit', 'LATITUD': 'TextEdit', 'LONGITUD': 'TextEdit', 'ENTIDAD': 'TextEdit', });
lyr_DEPARTAMENTOS_2.set('fieldLabels', {'OBJECTID': 'hidden field', 'CCDD': 'hidden field', 'NOMBDEP': 'inline label - always visible', 'FUENTE': 'hidden field', 'FUENTE_1': 'hidden field', 'POB_PROYEC': 'hidden field', 'POBTOTAL': 'hidden field', 'POB_EDAD_T': 'hidden field', 'POB_EDAD_1': 'hidden field', 'POB_EDAD_E': 'hidden field', 'POB_EDAD_2': 'hidden field', 'DENSIDAD': 'hidden field', 'POBMASCU': 'hidden field', 'POBFEMEN': 'hidden field', 'POBMASCU_P': 'hidden field', 'POBFEMEN_P': 'hidden field', 'R_MASCULIN': 'hidden field', 'POBURBANA': 'hidden field', 'POBRURAL': 'hidden field', 'POBURBANA_': 'hidden field', 'POBRURAL_P': 'hidden field', 'EDAD_PROME': 'hidden field', 'EDAD_MEDIA': 'hidden field', 'POB_0_14': 'hidden field', 'POB_0_14_P': 'hidden field', 'POB_15_29': 'hidden field', 'POB_15_29_': 'hidden field', 'POB_30_59': 'hidden field', 'POB_30_59_': 'hidden field', 'POB_60_MAS': 'hidden field', 'POB_60_M_1': 'hidden field', 'POB_ANALFA': 'hidden field', 'POB_ANAL_1': 'hidden field', 'HOMBRES_AN': 'hidden field', 'HOMBRES__1': 'hidden field', 'MUJERES_AN': 'hidden field', 'MUJERES__1': 'hidden field', 'MUJERES_ED': 'hidden field', 'MUJERES__2': 'hidden field', 'TOTAL_MADR': 'hidden field', 'MADRES_SOL': 'hidden field', 'MADRES_S_1': 'hidden field', 'MUJERES_AD': 'hidden field', 'MADRES_ADO': 'hidden field', 'MADRES_A_1': 'hidden field', 'AL_MENOS_1': 'hidden field', 'AL_MENOS_2': 'hidden field', 'SIN_DISCAP': 'hidden field', 'SIN_DISC_1': 'hidden field', 'ALGUNA_NBI': 'hidden field', 'NBI_PORC': 'hidden field', 'VIV_PARTIC': 'hidden field', 'VIV_PART_1': 'hidden field', 'VIV_PART_2': 'hidden field', 'HOGARES': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'IC_INF': 'hidden field', 'IC_SUP': 'hidden field', 'UBIC_POBMO': 'hidden field', 'TOTAL_DEFU': 'hidden field', 'TOTAL_DE_1': 'hidden field', 'TOTAL_DE_2': 'hidden field', 'NAC_BAJOPE': 'hidden field', 'NAC_BAJO_1': 'hidden field', 'MUJERES_NA': 'hidden field', 'MUJERES__3': 'hidden field', 'HOMBRES_NA': 'hidden field', 'HOMBRES__2': 'hidden field', 'TOTAL_NACI': 'hidden field', 'IND_121951': 'hidden field', 'IND_122042': 'hidden field', 'IND_122047': 'hidden field', 'IND_516462': 'hidden field', 'IND_516484': 'hidden field', 'Shape_Le_1': 'hidden field', 'Shape_Ar_1': 'hidden field', 'Shape_Le_2': 'hidden field', 'Shape_Ar_2': 'hidden field', });
lyr_DERECHOSACUICOLAS_3.set('fieldLabels', {'CODIGO': 'inline label - always visible', 'TITULAR': 'inline label - always visible', 'RESOLUCION': 'inline label - always visible', 'FECHA_EMIS': 'inline label - always visible', 'FECHA_VIGE': 'inline label - always visible', 'AREA_TOTAL': 'inline label - always visible', 'ESPECIE': 'inline label - always visible', 'AMBITO': 'inline label - always visible', 'TIPO_DEREC': 'inline label - always visible', 'CATEGORIA_': 'inline label - always visible', 'ESTADO': 'inline label - always visible', 'DEPARTAMEN': 'inline label - always visible', 'PROVINCIA': 'inline label - always visible', 'DISTRITO': 'inline label - always visible', 'ZONA': 'inline label - always visible', 'LATITUD': 'inline label - always visible', 'LONGITUD': 'inline label - always visible', });
lyr_DGA_4.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'CODIGO': 'inline label - always visible', 'TITULAR': 'inline label - always visible', 'RESOLUCION': 'inline label - always visible', 'FECHA_EMIS': 'inline label - always visible', 'FECHA_VIGE': 'inline label - always visible', 'AREA_TOTAL': 'inline label - always visible', 'TIPO_RECUR': 'inline label - always visible', 'NOMBRE_REC': 'inline label - always visible', 'ESPECIE': 'inline label - always visible', 'AMBITO': 'inline label - always visible', 'TIPO_DEREC': 'inline label - always visible', 'CATEGORIA_': 'inline label - always visible', 'ESTADO': 'inline label - always visible', 'DEPARTAMEN': 'inline label - always visible', 'PROVINCIA': 'inline label - always visible', 'DISTRITO': 'inline label - always visible', 'ZONA': 'inline label - always visible', 'RESOLUCI_1': 'hidden field', 'FECHA_MODI': 'hidden field', 'OBS_MODIFI': 'hidden field', 'TIPO_COORD': 'inline label - always visible', 'DATUM': 'hidden field', 'LATITUD': 'inline label - always visible', 'LONGITUD': 'inline label - always visible', 'FLAG': 'inline label - always visible', 'CODIGO_1': 'inline label - always visible', 'RESOLUCI_2': 'inline label - always visible', 'AÑO_1': 'inline label - always visible', 'ENTIDAD': 'inline label - always visible', });
lyr_DEVIDA_5.set('fieldLabels', {'CODIGO': 'inline label - always visible', 'TITULAR': 'inline label - always visible', 'RESOLUCION': 'inline label - always visible', 'FECHA_EMIS': 'inline label - always visible', 'FECHA_VIGE': 'inline label - always visible', 'AREA_TOTAL': 'inline label - always visible', 'ESPECIE': 'inline label - always visible', 'AMBITO': 'inline label - always visible', 'TIPO_DEREC': 'inline label - always visible', 'CATEGORIA_': 'inline label - always visible', 'ESTADO': 'inline label - always visible', 'DEPARTAMEN': 'inline label - always visible', 'PROVINCIA': 'inline label - always visible', 'DISTRITO': 'inline label - always visible', 'ZONA': 'inline label - always visible', 'TIPO_COORD': 'hidden field', 'DATUM': 'hidden field', 'LATITUD': 'inline label - always visible', 'LONGITUD': 'inline label - always visible', 'ENTIDAD': 'inline label - always visible', });
lyr_FONCODESHAKUWINAY_6.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'UBIGEO': 'inline label - always visible', 'DEP': 'inline label - always visible', 'PROV': 'inline label - always visible', 'DIST': 'inline label - always visible', 'CODCP': 'hidden field', 'NOMCP': 'hidden field', 'MNOMCP': 'inline label - always visible', 'CAPITAL': 'hidden field', 'CON_IE': 'hidden field', 'NIVEL': 'hidden field', 'CPINEI': 'hidden field', 'CPINEI2': 'hidden field', 'CPINEI_BKP': 'hidden field', 'FUENTE_G': 'hidden field', 'Z': 'hidden field', 'XGD': 'hidden field', 'YGD': 'hidden field', 'Y_X_COORD': 'hidden field', 'DEPARTAMEN': 'hidden field', 'PROVINCIA': 'hidden field', 'DISTRITO': 'hidden field', 'CENTRO_POB': 'hidden field', 'NUCLEO_EJE': 'inline label - always visible', 'NEGOCIOS_R': 'inline label - always visible', 'ENTIDAD': 'inline label - always visible', });
lyr_IIAP_7.set('fieldLabels', {'CODIGO': 'inline label - always visible', 'TITULAR': 'inline label - always visible', 'RESOLUCION': 'inline label - always visible', 'FECHA_EMIS': 'inline label - always visible', 'FECHA_VIGE': 'inline label - always visible', 'AREA_TOTAL': 'inline label - always visible', 'ESPECIE': 'inline label - always visible', 'AMBITO': 'inline label - always visible', 'TIPO_DEREC': 'inline label - always visible', 'CATEGORIA_': 'inline label - always visible', 'ESTADO': 'inline label - always visible', 'DEPARTAMEN': 'inline label - always visible', 'PROVINCIA': 'inline label - always visible', 'DISTRITO': 'inline label - always visible', 'ZONA': 'inline label - always visible', 'TIPO_COORD': 'inline label - always visible', 'DATUM': 'hidden field', 'LATITUD': 'inline label - always visible', 'LONGITUD': 'inline label - always visible', 'ENTIDAD': 'inline label - always visible', });
lyr_IMARPE_8.set('fieldLabels', {'Id': 'no label', 'DEPARTAMEN': 'no label', 'MODULOS_IN': 'no label', 'ASISTENCIA': 'no label', 'ENTIDAD': 'no label', });
lyr_FONCODES_9.set('fieldLabels', {'CODIGO': 'inline label - visible with data', 'TITULAR': 'inline label - always visible', 'RESOLUCION': 'inline label - always visible', 'FECHA_EMIS': 'inline label - always visible', 'FECHA_VIGE': 'inline label - always visible', 'AREA_TOTAL': 'inline label - always visible', 'ESPECIE': 'inline label - always visible', 'AMBITO': 'inline label - always visible', 'TIPO_DEREC': 'inline label - always visible', 'CATEGORIA_': 'inline label - always visible', 'ESTADO': 'inline label - always visible', 'DEPARTAMEN': 'inline label - always visible', 'PROVINCIA': 'inline label - always visible', 'DISTRITO': 'inline label - always visible', 'ZONA': 'inline label - always visible', 'TIPO_COORD': 'inline label - always visible', 'DATUM': 'inline label - always visible', 'LATITUD': 'inline label - always visible', 'LONGITUD': 'inline label - always visible', 'INSTITUCIO': 'inline label - always visible', });
lyr_ITP_10.set('fieldLabels', {'CODIGO': 'inline label - always visible', 'TITULAR': 'inline label - always visible', 'RESOLUCION': 'inline label - always visible', 'FECHA_EMIS': 'inline label - always visible', 'FECHA_VIGE': 'inline label - always visible', 'AREA_TOTAL': 'inline label - always visible', 'ESPECIE': 'inline label - always visible', 'AMBITO': 'inline label - always visible', 'TIPO_DEREC': 'inline label - always visible', 'CATEGORIA_': 'inline label - always visible', 'ESTADO': 'inline label - always visible', 'DEPARTAMEN': 'inline label - always visible', 'PROVINCIA': 'inline label - always visible', 'DISTRITO': 'inline label - always visible', 'RESOLUCI_1': 'hidden field', 'FECHA_MODI': 'hidden field', 'TIPO_COORD': 'hidden field', 'DATUM': 'hidden field', 'LATITUD': 'inline label - always visible', 'LONGITUD': 'inline label - always visible', 'ENTIDAD': 'inline label - always visible', });
lyr_ITP_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});