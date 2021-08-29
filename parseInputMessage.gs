//受信文字列を解析し、各返信メッセージ作成関数で返信メッセージを作成。
function parseInputMessage(data) {
  var inputMessage = data.events[0].message.text;
  
  //ゲーム中の場合(turn==NULL以外)、文字当てゲームのメイン処理のみを行う。
  var turn = userProperties.getProperty('TURN');
  if(turn >= 1){
    return mojiateGameMain(inputMessage);
  }

  //文字当てゲームの開始
  if(inputMessage == "推理開始"){
    replyMessage = mojiateGameStart();
  }else{
    replyMessage = '未実装ワードです。';
  }
  return replyMessage;
}