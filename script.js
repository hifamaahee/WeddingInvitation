const fortunes = [
    "You will dance all night under the stars!",
    "A sweet surprise awaits at the dessert table.",
    "Capture a magical photo at the wedding!",
    "Cherish the love and laughter of the day."
];

function showFortune(option) {
    const fortuneDisplay = document.getElementById('fortune-display');
    fortuneDisplay.innerHTML = fortunes[option - 1];
}
