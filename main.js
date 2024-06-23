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
            'EUR': 0.92,
            'GBP': 0.78,
            'INR': 83.20,
            'PKR': 278.06
        },
        'EUR': {
            'USD': 1.09,
            'GBP': 0.85,
            'INR': 90.40,
            'PKR': 302.43
        },
        'GBP': {
            'USD': 1.28,
            'EUR': 1.17,
            'INR': 106.32,
            'PKR': 355.37
        },
        'INR': {
            'USD': 0.012,
            'EUR': 0.011,
            'GBP': 0.0094,
            'PKR': 3.34
        },
        'PKR' : {
            'USD': 0.0036,
            'EUR': 0.0033,
            'GBP': 0.0028,
            'INR': 0.30
        }
        
    };

    const rate = conversionRates[fromCurrency][toCurrency];
    const convertedAmount = (amount * rate).toFixed(2);

    document.getElementById('result').innerText = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
});
