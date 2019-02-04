document.addEventListener('DOMContentLoaded', function(){
  
  //id="elem"がついたHTMLの要素をJavascript用に連想配列にして変数に格納
  let elem = document.getElementById('elem');
  
  //elemがもしマウスオーバーされたらメソッドを実行しなさい。
  elem.addEventListener('mouseover', function(){
    
    //thisはイベントの発生元のこと
    
    //this=elem(連想配列)の、キー「style」の中に格納されたキー「color」の値を変更。
    
    this.style.color = '#ff0000';
  });
  
  elem.addEventListener('mouseout', function(){
    
    this.style.color = '';
    
  });
  
  //クラス名を追加して変更する方法
  let elem2 = document.getElementById('elem2');
  elem2.addEventListener('mouseover',function(){
    
    this.className = 'blue';
    
  })
  
  elem2.addEventListener('mouseout',function(){
    
    this.className = '';
    
  })
  
  
  let elem3 = document.getElementById('elem3');
  elem3.addEventListener('click', function(){
    
    if(this.className === 'blue'){
        elem3.className = '';
       }else{
        elem3.className = 'blue';
       }
  })
  
  
  
  let elem4 = document.getElementById('elem4');
  elem4.addEventListener('click', function(){
    
    this.classList.toggle('blue');
    
  })
  
  
  
  
  
  
});