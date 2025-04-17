document.getElementById('convert-button').addEventListener('click', function() {
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('from-currency').value;
    const toCurrency = document.getElementById('to-currency').value;

    if (amount === '' || isNaN(amount)) {
        alert('Please enter a valid amount');
        return;
    }

    const conversionRates = {
        'USD': {
            'EUR': 0.8796,
            'GBP': 0.7585,
            'INR': 85.62,
            'PKR': 280.35
        },
        'EUR': {
            'USD': 1.1355,
            'GBP': 0.85618,
            'INR': 97.2595,
            'PKR': 319.853
        },
        'GBP': {
            'USD': 1.3214,
            'EUR': 1.1643,
            'INR': 114.74,
            'PKR': 372.50
        },
        'INR': {
            'USD': 0.0117,
            'EUR': 0.0103,
            'GBP': 0.00885,
            'PKR': 3.2735
        },
        'PKR' : {
            'USD': 0.00356,
            'EUR': 0.00313,
            'GBP': 0.00268,
            'INR': 0.3055
        }
        
    };

    const rate = conversionRates[fromCurrency][toCurrency];
    const convertedAmount = (amount * rate).toFixed(2);

    document.getElementById('result').innerText = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
});
