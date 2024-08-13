// ************************** SHOPPING CART SYSTEM **************************
// **** Global Array ****
// myCart - 
let myCart = [
    {
        product_category: "G",
        product_name: "No Name",
        product_size: "No size",
        product_quatity: 1,
        product_price: 0,
        product_total: 0
    },
    {
        product_category: "O",
        product_name: "No Name",
        product_quatity: 1,
        product_price: 0,
        product_total: 0
    }
];

// ******** OPERATIONAL FUNCTIONS *******

// **** Add Product Function ****
function addProduct() {
    let exitAddingProduct = false;
    let addYorN;
    let whatKindOfProduct;

    while (!exitAddingProduct) {
        let name = '';
        let size = '';
        let quantity = 1;
        let price = 0;
        let total = 1;

        addYorN = prompt("Enter 'y' to add product otherwise 'n' to not add the product.");
        if (addYorN.toLowerCase().trim() === 'y') {
            whatKindOfProduct = prompt("Type 'g' if its garment product otherwise 'o' for other type of product.");
            if (whatKindOfProduct.toLowerCase().trim() === 'g') {
                name = prompt("Enter the name of product to add", "No Name");
                size = prompt("Enter the size of the product.", "No Size");
                quantity = Number(prompt("Enter the number of quantities you want to add, only in numbers.", 1));
                price = Number(prompt("Enter the product price only in numbers", 0));
                total = quantity * price;
                if (typeof (total) !== "number" || total===0) {
                    alert("!Product price or quantites has to be in number and cannot be empty!");
                }
                else {
                    myCart.push({
                        product_category: "G",
                        product_name: name,
                        product_size: size,
                        product_quatity: quantity,
                        product_price: price,
                        product_total: total
                    });
                }
            }
            else if (whatKindOfProduct.toLowerCase().trim() === 'o') {
                name = prompt("Enter the name of product to add", "No Name");
                quantity = Number(prompt("Enter the number of quantites you want to add, only in numbers.", 1));
                price = Number(prompt("Enter the product price only in numbers", 0));
                total = quantity * price;
                if (typeof (total) !== "number" || total<=0) {
                    alert("!Product price or quantites has to be in number and cannot be empty!");
                }
                else {
                    myCart.push({
                        product_category: "G",
                        product_name: name,
                        product_size: size,
                        product_quatity: quantity,
                        product_price: price,
                        product_total: total
                    });
                    alert("Prodcut Added Successfully!");
                }
            }
            else {
                alert("No such kind of option available");
            }
        }
        else if (addYorN.toLowerCase().trim() === 'n') {
            exitAddingProduct = true;
        }
        else {
            alert("No such kind of option available");
        }
    }
}

// **** Remove Prduct Function ****
function removeProduct() {
    let exitRemovingProduct = false;
    let removeYorN;
    let name = '';
    let removedSuccess = false;
    while (!exitRemovingProduct) {
        removeYorN = prompt("Type 'y' to remove product otherwise 'n'");

        if (removeYorN.toLowerCase().trim() === 'y') {
            name = prompt("Enter the name of product to remove", "No Name");

            if (name !== "No Name") {
                myCart.forEach((item, index) => {
                    if (item["product_name"].toLowerCase().trim() === name.toLowerCase().trim()) {
                        myCart.splice(index, 1);
                        alert("Successfully Removed!");
                    }
                });
            }
            else {
                alert("Product name must be provided");
            }
        }
        else {
            exitRemovingProduct = true;
        }
    }
}

// **** List Product Function ****
function viewCart() {
    let totalCostInCart = 0;
    document.write("<h2>My Cart</h2>");
    myCart.forEach((item) => {
        if (item.product_name !== "No Name") {
            totalCostInCart += item.product_total;
            if (item["product_category"] === "G") {
                document.write(`<h3>Product Name : ${item.product_name}</h3><h3>Product Size : ${item.product_size}</h3><h3>Product Quantity : ${item.product_quatity}</h3><h3>Product Price : RS${item.product_price}</h3><h3>Product Total : RS ${item.product_total}</h3><br>`);
            }
            else{
                if (item["product_category"] === "O") {
                    document.write(`<h3>Product Name : ${item.product_name}</h3><h3>Product Quantity : ${item.product_quatity}</h3><h3>Product Price : RS${item.product_price}</h3><h3>Product Total : RS ${item.product_total}</h3><br>`);
                }
            }
        }
    });
    document.write(`<h3> Total Cost : RS ${totalCostInCart}`);
}

// ********* APPLICATION FLOW FUNCTION **********
function shoppingCartManagementSyste(){
    let usersChoice;
    let exitApplication = false;
    alert("We’re excited to have you here. With our system, you can easily add products to your cart, remove any items you don’t want, and view everything you’ve selected.");
    
    while(!exitApplication){
        usersChoice = prompt("User's Instructions:\n - Type 1 to view your cart.\n - Type 2 to add products to your cart.\n - Type 3 to remove products.\n - Type 4 to exit the application.");
        switch(usersChoice){
            case '1':
                viewCart();
                exitApplication = true;
                break;
            case '2':
                addProduct();
                break;
            case '3':
                removeProduct();
                break;
            case '4':
                exitApplication = true;
                break;
            default:
                alert("No such option avaialble.");
                break;
        }
    }
    document.write(`<h2>Thank You! for your time and efforts.</h2>`);
}

// ** CALLING FUNCTION TO RUN THE APPLICATION **
shoppingCartManagementSyste();

// ******************************* CODE ENDS HERE, BUT THOUGHTS ARE LIMITLESS ***********************************