//main.gs
var LINE_URL = "https://api.line.me/v2/bot/message/reply";
var replyMessage = '';
var userProperties = PropertiesService.getUserProperties();//ユーザプロパティ(PropertiesService)

//メッセージ受信時の処理
function doPost(e) {
  var json = JSON.parse(e.postData.contents);

  //受信メッセージを解析、返信メッセージを作成
  var repMess =  parseInputMessage(json);

  //返信オプションを作成
  //(1)ヘッダ
  var headers = {
    "Content-Type" : "application/json; charset=UTF-8",
    'Authorization': 'Bearer ' + ACCESS_TOKEN,
  };
  //(2)ポストデータ
  var postData = {
    "replyToken" : json.events[0].replyToken,
    "messages" : [{
      'type':'text',
      'text':repMess
    }]
  };
  //(3)ヘッダとポストデータを格納
  var options = {
    "method" : "post",
    "headers" : headers,
    "payload" : JSON.stringify(postData)
  };

  //返信
  return UrlFetchApp.fetch(LINE_URL, options);
}