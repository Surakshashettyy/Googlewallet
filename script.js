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
            // Open Google Wallet app directly using a well-formed intent
            window.location.href = "intent://wallet/#Intent;package=com.google.android.apps.walletnfcrel;scheme=https;end;";
            setTimeout(function() {
                // Fallback to Play Store if the app is not installed
                window.location.href = "https://play.google.com/store/apps/details?id=com.google.android.apps.walletnfcrel";
            }, 2000); // 2 seconds delay
        } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
            // Open Google Wallet app using Universal Link for iOS
            window.location.href = "https://wallet.google.com/";
            setTimeout(function() {
                // Fallback to App Store if the app is not installed
                window.location.href = "https://apps.apple.com/app/google-wallet/id575923525";
            }, 2000); // 2 seconds delay
        } else {
            // For Desktop/Laptop users, redirect to Google Wallet website
            window.location.href = "https://wallet.google/";
        }
    });
});