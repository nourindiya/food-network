// Update All extra Cost
function inputProperties(button, cost) {
    const inputCost = document.getElementById(button);
    const costText = inputCost.innerText;
    let totalCost = parseInt(costText);
    totalCost = cost;
    inputCost.innerText = totalCost;
    totalAmount();

}

// Sum of Total cost 
function totalAmount() {
    const bestPrice = document.getElementById('Best-price').innerText;
    const memoryCost = document.getElementById('memory-cost').innerText;
    const storageCost = document.getElementById('storage-cost').innerText;
    const deliveryCost = document.getElementById('delivery-cost').innerText;

    const inputTotalCost = document.getElementById('total-cost');
    const totalCost = parseInt(bestPrice) + parseInt(memoryCost) + parseInt(storageCost) + parseInt(deliveryCost);
    inputTotalCost.innerText = totalCost;


    const finalPrice = document.getElementById('final-price');
    finalPrice.innerText = totalCost;
}


// Memory Upgrade Buttons
document.getElementById('8gb-btn').addEventListener('click', function () {
    inputProperties('memory-cost', 0);
});

document.getElementById('16gb-btn').addEventListener('click', function () {
    inputProperties("memory-cost", 180);
});


// Storage Upgrade Buttons
document.getElementById('256-GB-SSD').addEventListener('click', function () {
    inputProperties("storage-cost", 0);
});

document.getElementById('512-GB-SSD').addEventListener('click', function () {
    inputProperties("storage-cost", 100);
});

document.getElementById('1TB-SSD').addEventListener('click', function () {
    inputProperties("storage-cost", 180);
});


// Delivery Options
document.getElementById('late-delivery-btn').addEventListener('click', function () {
    inputProperties("delivery-cost", 0);
});
document.getElementById('fast-delivery-btn').addEventListener('click', function () {
    inputProperties("delivery-cost", 20);
});


// Promo Button And Apply
document.getElementById('promo-btn').addEventListener('click', function () {
    const promoInput = document.getElementById('promo-code');
    const promoText = promoInput.value;

    const finalPrice = document.getElementById('final-price');
    const previousPrice = finalPrice.innerText;
    const previousPriceNum = parseFloat(previousPrice);

    if (promoText == 'stevekaku') {
        let discountPrice = previousPrice - previousPrice * 0.2;
        finalPrice.innerText = discountPrice;
        promoInput.value = '';
        document.getElementById('promo-btn').disabled = true;
    }

});