function doPost(e) {
  doctypes = new Array();
  urls = eval(e.parameter.sites);
 var regExp = new RegExp("<!doctype\\s+[^>]*>","i");
  for(var i = 0; i < urls.length; i++){
  var response = UrlFetchApp.fetch('www.' + urls[i],{muteHttpExceptions: true});
  var doctype = regExp.exec(response);
    doctypes.push({"site":urls[i],"doctype":doctype});
  }
  return ContentService.createTextOutput(JSON.stringify(doctypes))
    .setMimeType(ContentService.MimeType.JSON);
  }
