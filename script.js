var table = document.querySelector('table');
var addProduct = document.getElementById('addProduct');
var editText = document.getElementById('editText');
var createNeme = document.getElementById('Ok');

var editName = document.getElementById('editName');
var editQuantity = document.getElementById('editQuantity');
var editPrice = document.getElementById('editPrice');
var editCategory = document.getElementById('editCategory');

var makeIndexation = document.getElementById('makeIndexation');
var paragrIndexation = document.getElementById('paragrIndexation');
var goIndexation = document.getElementById('GoIndexation');
var sumIndexation = document.getElementById('sumIndexation');



addProduct.addEventListener('click', addProductFun);



 function addProductFun(){
	editName.value = '';
	editQuantity.value = '';
	editPrice.value = '';
	editCategory.value = 'Товар';
	
	editText.style.display = 'block';

	createNeme.addEventListener('click', textProduct);

	this.removeEventListener('click', addProductFun);

}

function textProduct(){
		newProduct = document.createElement('tr');
		newProduct.innerHTML = '<td>'+editName.value+'</td><td>'+editQuantity.value+'</td><td class="price">'+editPrice.value+'</td><td>'+editCategory.value+'</td> <input type="submit" class="Delete" value="Удалить">';
		table.appendChild(newProduct);
		editText.style.display = 'none';
		DeleteProduct('Delete');
		

		this.removeEventListener('click', textProduct);
		addProduct.addEventListener('click', addProductFun);
	}


function DeleteProduct(className){
var Delete = document.getElementsByClassName(className);
for (var i = 0; i < Delete.length; i++) {
	Delete[i].addEventListener('click', function(){
		table.removeChild(this.parentNode);
		})
	}
}



makeIndexation.addEventListener('click', function makeIndexationFun(){
paragrIndexation.style.display = 'block';
	this.removeEventListener('click', makeIndexationFun);
		goIndexation.addEventListener('click',function goIndexationFun(){
			var price = document.getElementsByClassName('price');
			for (var i = 0; i < price.length; i++) {

				var text = +price[i].innerHTML;
				price[i].innerHTML = '*' + text*(+sumIndexation.value + 1);
			}
			paragrIndexation.style.display = 'none';
	})
})

