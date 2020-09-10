function doGet() {
    var template =  HtmlService.createTemplateFromFile('index'); // Método para la creación del  template
    return template.evaluate().addMetaTag('viewport', 'width=device-width, initial-scale=1.0'); // se evalua la metadata de la cabecera
}
function include (filename) {
    return HtmlService.createTemplateFromFile(filename).getRawContent();
}
function autocompletar(clase){
    var ss = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/16PoeOrXVkD46N3tOzxNbtBHSOdHuw6cB9oW12AO8gHY/edit#gid=0');
    var sheet = ss.getSheetByName('Profesores');
    var data = sheet.getRange(1,1).getDataRegion().getValues();
    var nombre = {};
    data.forEach(function(n){
        nombre[n[1]] = null;
        });
    return nombre;
}
function enviarKardex(infKardex){
    var sskar = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/1enluaM2mM_8ViIL0IZ-Sw6KRBZ9DijLBRGtDwhrM2tA/edit#gid=0');
    var sheet = sskar.getSheetByName('kardex');
    var lastrow = sheet.getDataRange().getNumRows();
    var row = lastrow + 1;
    sheet.getRange("A" + row).setValue(infKardex.nombre);
    sheet.getRange("B" + row).setValue(infKardex.sesion);
    sheet.getRange("C" + row).setValue(infKardex.fecha);
    sheet.getRange("D" + row).setValue(infKardex.grupos);
    sheet.getRange("E" + row).setValue(infKardex.tema);
    sheet.getRange("F" + row).setValue(infKardex.act);
    sheet.getRange("G" + row).setValue(infKardex.obs);
}