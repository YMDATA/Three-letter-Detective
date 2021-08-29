//文字当てゲーム　２回目以降の処理

function mojiateGameMain(inputMessage){
  //1.input文字列を解析
  //1-1.特殊ルール文字の処理

  //1-2.3文字以外が入力された時の処理
  if(inputMessage.length != 3){
    //処理終了
    return ('入力に誤りがあるよ。3文字入力してね！');
  }

  //1-3.配列にある文字以外が入力された時の処理
  //1-3-1.inputデータを3文字に分割
  const INPUT_3LETTERS = [inputMessage.slice(0,1),inputMessage.slice(1,2),inputMessage.slice(2,3)]
  
  //1-3-2.あ段のひらがなであるか判定する。
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 10; j++) {
      if (INPUT_3LETTERS[i] == ADAN[j]){
        break;　//入力文字があ段のひらがなであれば、次の入力文字へ。
      }
      if (j == 9){　//入力文字があ段のひらがな全てと一致しない→入力エラー
        return ('入力に誤りがあるよ。あ段のひらがなを入力してね！');
      }
    }
  }
  
  
  //2判定
  //2-1.eatの判定
  var eat = 0;
  if (INPUT_3LETTERS[0] == userProperties.getProperty('THEME0')){
    eat += 1;
  }
  if (INPUT_3LETTERS[1] == userProperties.getProperty('THEME1')){
    eat += 1;
  }
  if (INPUT_3LETTERS[2] == userProperties.getProperty('THEME2')){
    eat += 1;
  }
  
  //2-2.biteの判定
  var bite = 0;
    if (INPUT_3LETTERS[0] == userProperties.getProperty('THEME1')
      ||INPUT_3LETTERS[0] == userProperties.getProperty('THEME2')){
    bite += 1;
  }
  if (INPUT_3LETTERS[1] == userProperties.getProperty('THEME0')
      ||INPUT_3LETTERS[1] == userProperties.getProperty('THEME2')){
    bite += 1;
  }
  if (INPUT_3LETTERS[2] == userProperties.getProperty('THEME0')
      ||INPUT_3LETTERS[2] == userProperties.getProperty('THEME1')){
    bite += 1;
  }

  //2-3.出力文字列の決定
  var outputMessage;
  var turn = Number(userProperties.getProperty('TURN'));
  if (eat == 3){ //正解！ゲーム終了！！
    outputMessage = '正解!!かかったターン数は' + turn;
    userProperties.setProperty('TURN', ''); //turnをリセット(=「文字当てゲーム中」をオフ)
  }else{
    outputMessage = eat + 'eat,' + bite + 'bite';
    turn += 1;
    userProperties.setProperty('TURN', turn);
  }
  return('「'+ inputMessage +'」　\n' + outputMessage);
}
