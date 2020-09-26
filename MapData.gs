//NOTE: run the sendMap() function for this code to work

/** @OnlyCurrentDoc */
function sendMap() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var source = sheet.getRange('A1').getValue();
  var destination = sheet.getRange('A2').getValue();
  var map = Maps.newStaticMap().beginPath().addAddress(source).addAddress(destination).endPath();
  //add the email address where you want to send the mail
  GmailApp.sendEmail('google@gmail.com', 'MapDirection', 'Check the below map', {attachments:[map]});//replace ' google@gmail.com ' with one of yours
}//                   email             email title header  subheading
