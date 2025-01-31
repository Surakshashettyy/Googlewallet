document.addEventListener("DOMContentLoaded", function() {
    // Generate QR Code with text "Laila Doifoo 1234"
    new QRCode(document.getElementById("qrcode"), {
        text: "Laila Doifoo 1234",
        width: 100,
        height: 100
    });

    // Button click event
    document.getElementById("addToWallet").addEventListener("click", function() {
        let userAgent = navigator.userAgent || navigator.vendor || window.opera;

        if (/android/i.test(userAgent)) {
            // Redirect Android users to the QR link
            window.location.href = "YOUR_ANDROID_QR_LINK_HERE"; // Replace with your QR link
        } else {
            // Redirect others to Google Wallet
            window.location.href = "https://wallet.google/";
        }
    });
});