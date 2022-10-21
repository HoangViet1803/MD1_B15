let products = [];
// document.querySelector("#new").addEventListener('keydown', removeDisabledAdd);
// function removeDisabledAdd() {
//     if(document.querySelector("#new").value.trim() !== "") {
//         if(document.querySelector("#add").hasAttribute("disabled") == true) {
//             document.querySelector("#add").removeAttribute("disabled")
//         };
//     }
// }
document.querySelector("#new").addEventListener('keydown', removeDisabled);

function removeDisabled() {
    let btnAdd = document.querySelector("#add");
    let btnUpdate = document.querySelector("#update")
    if (btnAdd) {
        if (document.querySelector("#new").value.trim() === "") {
            btnAdd.setAttribute("disabled", "")
        } else {
            btnAdd.removeAttribute("disabled")
        }
    }
    if (btnUpdate) {
        if (document.querySelector("#new").value.trim() !== "") {
            btnUpdate.removeAttribute("disabled")
        } else {
            btnUpdate.setAttribute("disabled", "")
        }
    }

}

document.querySelector("#add").addEventListener('click', addNewProduct);

function addNewProduct() {
    let newProduct = document.querySelector("#new").value.trim();
    if (newProduct !== "") {
        products.push(newProduct);
        console.log(products)
        document.querySelector("#new").value = '';
        this.setAttribute('disabled', '')
        display(products)
    }
}

function display(arr) {
    document.querySelector("#amount").innerHTML = `${arr.length} Products`;
    let template = ``
    for (let i = 0; i < arr.length; ++i) {
        template += `<div class="product_item">
      <span id="nameProduct${i}">${arr[i]}</span>
      <div class="button_handle">
        <button type="button" class="btn btn-warning btn-edit" id="${i}" onclick="editProduct(id)">Edit</button>
        <button type="button" class="btn btn-danger btn-delete" >Delete</button>
      </div>
    </div> <hr>`
    }
    document.querySelector(".product").innerHTML = template;

}

function editProduct(id) {
    const nameProduct = document.getElementById(`nameProduct${id}`).innerHTML;
    console.log(nameProduct)
    console.log(products)
    document.querySelector("#new").value = nameProduct;
    document.querySelector("#add").innerHTML = "Update";
    document.querySelector("#add").removeEventListener("click", addNewProduct)
    document.querySelector("#add").id = "update";

    let btnUpdate = document.querySelector("#update");
    // btnUpdate.addEventListener('click', ()=>{
    //     let index = Number(id)
    //     console.log(index)
    //     products[index] = document.querySelector("#new").value;
    //     console.log("Update:"+products)
    //     display(products);
    // });
    btnUpdate.addEventListener('click', updateProduct(id));
}

function updateProduct(id) {
    return  () => {
        let index = Number(id)
        console.log(index)
        products[index] = document.querySelector("#new").value;
        console.log("Update:" + products)
        display(products);
    }
}






