function doGet() {
  return HtmlService.createTemplateFromFile('index').evaluate()
  .addMetaTag('viewport', 'width=device-width, initial-scale=1')
  .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
}

var url = 'https://docs.google.com/spreadsheets/d/1lbh8SP212H3cM5fjUTPXGlhoezbtEU_XTHnUUjq32d0/edit#gid=0'
var sh = 'File'
var folderId = '1vO89Debxpt5flxiS5lWTEpxTnI3TXMEI'

function processForm(formdata){
  var superscript = SuperScript.initSuper(url,sh)
  var formObject = {}
  formdata.forEach(element => formObject[element.name] = element.value)
  var file = superscript.uploadFile(folderId,formObject.myfile.data,formObject.myfile.name)
  var ss= SpreadsheetApp.openByUrl(url);
  var ws=ss.getSheets()[0]
   ws.appendRow([
     new Date(),
    formObject.name,
    formObject.gender,
    "'"+formObject.dob,
    formObject.email,
    formObject.pno,
    file.getUrl()
  ]);
}
