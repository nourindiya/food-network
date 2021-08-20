document.getElementById('16gb-btn').addEventListener('click', function () {
    const extraMemoryCost = document.getElementById('extra-memory-cost');
    extraMemoryCost.innerText = 180;
    const totalPrice = document.getElementById('total-cost');
    const totalPriceNum = parseInt(totalPrice.innerText);
    const newTotalCost = parseInt(totalPrice.innerText) + parseInt(extraMemoryCost.innerText);
    totalPrice.innerText = newTotalCost;
})
// document.getElementById('8gb-btn').addEventListener('click', function () {
//     const extraMemoryCost = document.getElementById('extra-memory-cost');
//     extraMemoryCost.innerText = 0;
//     const totalPrice = document.getElementById('total-cost');
//     totalPrice.innerText = totalPrice + 0;
// })

// document.getElementById('256-GB-SSD').addEventListener('click', function () {
//     const extraStorageCost = document.getElementById('extra-storage-cost');
//     extraStorageCost.innerText = 0;
//     const totalPrice = document.getElementById('total-cost');
//     const totalPriceNum = parseInt(totalPrice.innerText);
//     const newPrice = totalPriceNum + 0;
//     totalPrice.innerText = newPrice;
// })

// document.getElementById('512-GB-SSD').addEventListener('click', function () {
//     const extraStorageCost = document.getElementById('extra-storage-cost');
//     extraStorageCost.innerText = 0;
//     const totalPrice = document.getElementById('total-cost');
//     const totalPriceNum = parseInt(totalPrice.innerText);
//     const newPrice = totalPriceNum + 100;
//     totalPrice.innerText = newPrice;
// })

