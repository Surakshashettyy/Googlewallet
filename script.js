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
            // Check if Google Wallet app is installed
            window.location.href = "intent://wallet.google.com/#Intent;scheme=https;package=com.google.android.apps.walletnfcrel;end;";
            setTimeout(function() {
                // If the app is not installed, redirect to the Google Wallet website
                window.location.href = "https://wallet.google/";
            }, 2000); // 2 seconds delay to allow intent to work
        } 
        else if (/windows|macintosh|mac os x/i.test(userAgent)) {
            // For Windows or Mac users, redirect to Google Wallet website
            window.location.href = "https://wallet.google/";
        } 
        else {
            // For other operating systems, redirect to Google Wallet website
            window.location.href = "https://wallet.google/";
        }
    });
});