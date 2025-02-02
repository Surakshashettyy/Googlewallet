function openGoogleWallet() {
    let walletIntent = "intent://#Intent;scheme=googlewallet;package=com.google.android.apps.walletnfcrel;end;";
    
    // Create an invisible iframe to attempt opening Google Wallet
    let iframe = document.createElement("iframe");
    iframe.style.display = "none";
    iframe.src = walletIntent;
    document.body.appendChild(iframe);

    // If the app is not installed, redirect to Play Store after 2 seconds
    setTimeout(() => {
        window.location.href = "https://play.google.com/store/apps/details?id=com.google.android.apps.walletnfcrel";
    }, 2000);
}
