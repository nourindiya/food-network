// Update price 

document.getElementById('8gb-btn').addEventListener('click', function () {
    const extraMemoryCost = document.getElementById('extra-memory-cost');
    extraMemoryCost.innerText = 0;
    const totalPrice = document.getElementById('total-cost');
    const totalPriceText = parseFloat(totalPrice.innerText);
    const newTotalPrice = 1299 + 0;
    totalPrice.innerText = newTotalPrice;

})
// 16GB button event Handler
document.getElementById('16gb-btn').addEventListener('click', function () {
    const extraMemoryCost = document.getElementById('extra-memory-cost');
    extraMemoryCost.innerText = 180;

    const totalPrice = document.getElementById('total-cost');
    const totalPriceText = parseFloat(totalPrice.innerText);
    const newTotalPrice = 1299 + 180;
    totalPrice.innerText = newTotalPrice;
})




document.getElementById('256-GB-SSD').addEventListener('click', function () {
    const extraMemoryCost = document.getElementById('extra-storage-cost');
    extraMemoryCost.innerText = 0;

    const totalPrice = document.getElementById('total-cost');
    const totalPriceText = parseFloat(totalPrice.innerText);
    const newTotalPrice = 1299 + 0;
    totalPrice.innerText = newTotalPrice;
})

document.getElementById('512-GB-SSD').addEventListener('click', function () {
    const extraMemoryCost = document.getElementById('extra-storage-cost');
    extraMemoryCost.innerText = 100;


    const totalPrice = document.getElementById('total-cost');
    const totalPriceText = parseFloat(totalPrice.innerText);
    const newTotalPrice = 1299 + 100;
    totalPrice.innerText = newTotalPrice;
})

document.getElementById('1TB-SSD').addEventListener('click', function () {
    const extraMemoryCost = document.getElementById('extra-storage-cost');
    extraMemoryCost.innerText = 1299 + 180;


    const totalPrice = document.getElementById('total-cost');
    const totalPriceText = parseFloat(totalPrice.innerText);
    const newTotalPrice = totalPriceText + 180;
    totalPrice.innerText = newTotalPrice;
})






document.getElementById('late-delivery-btn').addEventListener('click', function () {
    const extraMemoryCost = document.getElementById('delivery-cost');
    extraMemoryCost.innerText = 0;

    const totalPrice = document.getElementById('total-cost');
    const totalPriceText = parseFloat(totalPrice.innerText);
    const newTotalPrice = totalPriceText + 0;
    totalPrice.innerText = newTotalPrice;
})
document.getElementById('fast-delivery-btn').addEventListener('click', function () {
    const extraMemoryCost = document.getElementById('delivery-cost');
    extraMemoryCost.innerText = 20;

    const totalPrice = document.getElementById('total-cost');
    const totalPriceText = parseFloat(totalPrice.innerText);
    const newTotalPrice = totalPriceText + 20;
    totalPrice.innerText = newTotalPrice;
})










// Memory Upgrade Buttons
document.getElementById('8gb-btn').addEventListener('click', function () {
    // const inputMemoryCost = document.getElementById("memory-cost");
    // const memoryText = inputMemoryCost.innerText;
    // let memoryCost = parseInt(memoryText);
    // memoryCost = 0;
    // inputMemoryCost.innerText = memoryCost;
    // // document.getElementById('8gb-btn').disabled = true;

    inputProperties('memory-cost', 0);
})

document.getElementById('16gb-btn').addEventListener('click', function () {
    // const inputMemoryCost = document.getElementById("memory-cost");
    // const memoryText = inputMemoryCost.innerText;
    // let memoryCost = parseInt(memoryText);
    // memoryCost = 180;
    // inputMemoryCost.innerText = memoryCost;
    // // document.getElementById('16gb-btn').disabled = true;
    inputProperties("memory-cost", 180);