document.getElementById("addToWallet").addEventListener("click", function() {
    let userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/android/i.test(userAgent)) {
        // Open Google Wallet app directly
        window.location.href = "intent://wallet.google.com/#Intent;package=com.google.android.apps.walletnfcrel;action=com.google.android.apps.wallet.additem.ADD_ITEM;end;";
    } 
    else {
        // Fallback for desktop users
        window.location.href = "https://pay.google.com";
    }
});
