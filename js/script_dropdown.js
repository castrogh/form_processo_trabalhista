/*Dropdown Primeiro Estado Civil*/
function dropdown(p){
    var e = document.getElementsByClassName('dropdown')[0];
    var d = ['block','none'];

    e.style.display = d[p];
}

function category(c){
    var item = document.getElementById('item-'+c).innerHTML;
    document.getElementsByTagName('input')[8].value = item;
}



/*Dropdown Segundo Estado Civil*/
function dropdown_2(t){
    var b = document.getElementsByClassName('dropdown_2')[0];
    var z = ['block','none'];

    b.style.display = z[t];
}

function category_2(k){
    var item_2 = document.getElementById('item_dp2-'+k).innerHTML;
    document.getElementsByTagName('input')[32].value = item_2;
}