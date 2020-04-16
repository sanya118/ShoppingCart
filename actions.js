
 cart_val=1;
 total_cart=document.getElementById('cart_value');
 function addtocart(id){
     
    var b=document.getElementById(id);
    var new_b=document.createElement('div');
    new_b.setAttribute('class','btn-group mr-2');
    var minus=document.createElement('button');
    minus.setAttribute('class','material-icons align-bottom');
    minus.innerHTML='remove';
    minus.onclick=function minus(){
     
    if(cart_val>1){
    cart_val--;
    
    val.innerHTML=cart_val;

    }
    else if(cart_val<=1){
      new_b.replaceWith(b);
      cart_val=0;
    }
    total_cart.innerHTML=cart_val;
    }
    new_b.appendChild(minus);
    
    cart_val=1;
    var val=document.createElement('button');
    val.setAttribute('class','btn btn-secondary');
    val.innerHTML=cart_val;
    new_b.appendChild(val);

    var add=document.createElement('button');
    add.setAttribute('class','material-icons align-bottom');
    add.innerHTML='add';
    add.onclick=function add(){
      
      if(cart_val<5){
      cart_val++;
      val.innerHTML=cart_val;
    }
    else{
      alert('You have reached the maximum buying quantity for the product');
    }
    total_cart.innerHTML=cart_val;
  }
    new_b.appendChild(add);
    
    b.replaceWith(new_b);
    total_cart.innerHTML=cart_val;
    
  }

