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
            // Try opening Google Wallet app directly
            window.location.href = "googlewallet://";

            // Fallback: If the app doesn't open in a few seconds, redirect to Play Store
            setTimeout(() => {
                window.location.href = "https://play.google.com/store/apps/details?id=com.google.android.apps.walletnfcrel";
            }, 2000); // 2-second delay before fallback
        } 
        else {
            // For Desktop/Laptop users, redirect to Google Wallet website
            window.location.href = "https://wallet.google/";
        }
    });
});
