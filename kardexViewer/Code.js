function doGet() {
    var template =  HtmlService.createTemplateFromFile('index'); // Método para la creación del  template
    return template.evaluate().addMetaTag('viewport', 'width=device-width, initial-scale=1.0'); // se evalua la metadata de la cabecera
}
function include (filename) {
    return HtmlService.createTemplateFromFile(filename).getRawContent();
}
function completar(){
    var ss = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/1enluaM2mM_8ViIL0IZ-Sw6KRBZ9DijLBRGtDwhrM2tA/edit#gid=0');
    var sheet = ss.getSheetByName('kardex');
    var data = sheet.getRange(1,1).getDataRegion().getValues();
    var nombre = {};
    data.forEach(function(n){
        nombre[n[0]]=null;
    });
    return nombre;
}
function getCKardex(profesor){
    //const alumno = {nombre: "GARCIA PADILLA CARLOS"};
    var ss = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/1enluaM2mM_8ViIL0IZ-Sw6KRBZ9DijLBRGtDwhrM2tA/edit#gid=0');
    var sheet = ss.getSheetByName('kardex');
    var lastrow = sheet.getDataRange().getNumRows();
    var column = sheet.getDataRange();
    var value = column.getValues();
    var arrp = [];
      
    for(var i = 1; i < lastrow; i++){
        const kardex = [];
        if(value[i][0] == profesor.nombre){
            kardex.push( value[i] && value[i][1]);
            kardex.push( value[i] && value[i][2]);
            kardex.push( value[i] && value[i][3]);
            kardex.push( value[i] && value[i][4]);
            kardex.push( value[i] && value[i][5]);
            kardex.push( value[i] && value[i][6]);
            arrp.push(kardex);
       }
    }
    return JSON.stringify(arrp);
}