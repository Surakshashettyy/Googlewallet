function openGoogleWallet() {
    window.location.href = "intent://#Intent;scheme=googlewallet;package=com.google.android.apps.walletnfcrel;end;";
    
    setTimeout(() => {
        window.location.href = "https://play.google.com/store/apps/details?id=com.google.android.apps.walletnfcrel";
    }, 2000); // Redirects to Play Store if the app isn't installed
}
