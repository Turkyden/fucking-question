function init() {
  //生成从minNum到maxNum的随机数
  function randomNum(minNum, maxNum){ 
    switch(arguments.length){ 
      case 1: 
          return parseInt(Math.random()*minNum+1,10); 
      break; 
      case 2: 
          return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10); 
      break; 
          default: 
              return 0; 
          break; 
    } 
  } 

  function randomArray(array) {
    return array.sort((a, b) => (Math.random() > 0.5 ? 1 : -1))
      .slice(0, parseInt(Math.random() * array.length + 1));
  } 
    
  function randomClickRadio(domList) {
    const randomKey = randomNum(0, domList.length - 1);
    domList[randomKey].click();
  }

  function randomClickCheck(domList) {
    const domListIndex = Array.prototype.map.call(domList, (v, i) => i);
    const checkedIndex = randomArray(domListIndex);
    Array.prototype.forEach.call(checkedIndex, element => {
      domList[element].click();
    })
  }

  function runAllQuestion(domUl) {
    Array.prototype.forEach.call(domUl, element => {
      const domList = element.querySelectorAll('li');
      const isRadio = domList[0].querySelector('a').className.includes('jqRadio');
      isRadio 
      ? randomClickRadio(domList)
      : randomClickCheck(domList);
    });
  }

  function randomSomeWord() {
    const words = ['很期待参加', '希望票价低一点啦', '是在上海举办吗？', ''];
    const randomKey = randomNum(0, words.length - 1);
    const word = words[randomKey];
    document.querySelector('textarea[name="q10"]').value = word;
  }

  runAllQuestion(document.querySelectorAll('ul.ulradiocheck'));
  randomSomeWord();
  document.querySelector('#submit_button').click();
}

module.exports