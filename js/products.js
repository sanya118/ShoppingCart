

function getProductListHTML(){
    productListDOM='';
    productList.forEach(product=> 
        {
          productListDOM+= 
          '<div class="col">'
          +'<div class="card isolated-card">'
          +'<center><img class="card-img-top" alt="'+product.name+'" src="images/dummyproduct.jpg"></center>'
          +'<div class="card-body">'
          +'<center><h5 class="card-title">'+product.name+'</h5> '
          +'<p class="card-text">'+product.description+'</p>'
          +'<hr><p class="card-title">Rs.'+product.price+'</p> <hr> </center> '
          + '<button id="'+ product.id+'" class="btn btn-primary">Add to Cart</button>'
          +'</div>'
         + '</div>'
          +'</div>'
    });
    return productListDOM;
}
document.getElementById('list_of_products').innerHTML=getProductListHTML();