function handleProductChange(product, isIncrease){
    const productInput = document.getElementById(product + '-count')
    const productCount = parseInt(productInput.value)

    let newProductCount = productCount
    
    if (isIncrease == true){
        newProductCount = productCount + 1
    }

    if(isIncrease == false && productCount > 1){
        newProductCount = productCount - 1
    }

    productInput.value = newProductCount

    let productTotal

    if(product == 'laptop'){
        productTotal = newProductCount * 950
    }

    else{
        productTotal = newProductCount * 450
    }

    document.getElementById(product + "-total").innerText = productTotal
    handleCheckout()
}

function handleCheckout(){
    const laptopCount = getItems('laptop')
    const headphoneCount = getItems('headphone')

    const totalPrice = laptopCount * 950 + headphoneCount * 450
    document.getElementById("sub-total").innerText = totalPrice
    
    const tax = Math.round(totalPrice * 0.0635)
    document.getElementById("tax-amount").innerText = tax
    
    const grandTotal = totalPrice + tax
    document.getElementById("grand-total").innerText = grandTotal
    
}

function getItems(product){
    const productInput = document.getElementById(product + '-count')
    const productCount = parseInt(productInput.value)
    return productCount
}