document.addEventListener("DOMContentLoaded", function() {
    // Generate QR Code
    new QRCode(document.getElementById("qrcode"), {
        text: "Laila Doifoo 1234",
        width: 100,
        height: 100
    });

    // Button click event
    document.getElementById("addToWallet").addEventListener("click", function() {
        let userAgent = navigator.userAgent || navigator.vendor || window.opera;

        if (/android/i.test(userAgent)) {
            // Try opening the Google Wallet app directly using an intent
            window.location.href = "intent://wallet/#Intent;package=com.google.android.apps.walletnfcrel;scheme=https;action=android.intent.action.VIEW;end;";
        } 
        else {
            // For Desktop/Laptop users, redirect to Google Wallet website
            window.location.href = "https://wallet.google/";
        }
    });
});
