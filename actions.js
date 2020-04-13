
  function addtocart(id){
    var b=document.getElementById(id);
    var new_b=document.createElement('div');
    new_b.setAttribute('class','btn-group mr-2');
    var minus=document.createElement('button');
    minus.setAttribute('class','material-icons align-bottom');
    minus.innerHTML='remove';
    new_b.appendChild(minus);

    var val=document.createElement('button');
    val.setAttribute('class','btn btn-secondary');
    val.innerHTML=1;
    new_b.appendChild(val);

    var add=document.createElement('button');
    add.setAttribute('class','material-icons align-bottom');
    add.innerHTML='add';
    new_b.appendChild(add);

    
 
                              b.replaceWith(new_b);
  }