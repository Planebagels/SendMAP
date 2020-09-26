/** @OnlyCurrentDoc */
function sendMap() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var address = sheet.getRange('A1').getValue();
  var map = Maps.newStaticMap().addMarker(address);
  GmailApp.sendEmail('google@gmail.com', 'Map', 'See below.', {attachments:[map]});//remove the ' google@gmail.com ' part and replace it with another email
}//                   email              email title name    subheading
