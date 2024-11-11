window.onload = function (e) {
    
    document.getElementsByTagName('h2')[1].innerHTML = 'Contenido modificado con innerHTML';
  

    let button = document.getElementById('username');
    console.log(button);
  
   
    const allFirst = document.querySelectorAll('article.first')
    for (let item of allFirst) {
      item.style['background-color'] = '#00ccff'
    }
  

    const allLi = document.querySelectorAll('li.item')
    for (let item of allLi){
      console.log(item);
    }
  

    const allButtons = document.querySelectorAll('buttons button')

    document.querySelectorAll('p')[0].style['background-color'] = 'pink';
  
  
  }