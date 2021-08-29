  //文字当てゲーム　開始処理

  //[ルール]
  //1.「あ、か、さ、た、な、は、ま、や、ら、わ」の十文字の中から、ランダムに三文字が決定する。
  //2.ユーザは三文字を入力する。
  //3.botはヒント(あっている文字の数、位置が間違っている文字の数)を出力する。
  //4.2~3を当たるまで繰り返す。

const ADAN = ["あ", "か", "さ", "た", "な", "は", "ま", "や", "ら", "わ"];

//開始処理
function mojiateGameStart() {
  //ランダムな文字列を生成
  const RAND_ADAN = shuffleArray(ADAN);

  //モードを「文字当てゲーム中」に変更(ユーザ名、ランダムな文字列を記憶する。)
  userProperties.setProperty('THEME0', RAND_ADAN[0]);
  userProperties.setProperty('THEME1', RAND_ADAN[1]);
  userProperties.setProperty('THEME2', RAND_ADAN[2]);
  userProperties.setProperty('TURN', '1');

  //開始時メッセージ
  return ('3文字推理開始！！');
}

//配列のシャッフル関数
function shuffleArray(array){
  newArray = [];

  while (array.length > 0) {
    n = array.length;
    k = Math.floor(Math.random() * n);
    newArray.push(array[k]);
    array.splice(k, 1);
  }

  return (newArray);
}