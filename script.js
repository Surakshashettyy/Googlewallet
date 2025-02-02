function openGoogleWallet() {
    let link = document.createElement("a");
    link.href = "intent://#Intent;scheme=googlewallet;package=com.google.android.apps.walletnfcrel;end;";
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();

    setTimeout(() => {
        window.location.href = "https://play.google.com/store/apps/details?id=com.google.android.apps.walletnfcrel";
    }, 2000);
}
