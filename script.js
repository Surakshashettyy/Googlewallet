document.getElementById("add-to-wallet").addEventListener("click", async () => {
    const jwt = "YOUR_SIGNED_JWT_HERE"; // Replace this with your JWT logic

    if (!jwt) return;

    const isMobile = /Android|iPhone|iPad/i.test(navigator.userAgent);
    
    if (isMobile) {
        // Try opening Google Wallet app
        const walletDeepLink = `intent://wallet.google.com/gp/v/save/${jwt}#Intent;scheme=https;package=com.google.android.apps.walletnfcrel;end;`;
        window.location.href = walletDeepLink;

        // If Wallet app isn't installed, fallback to browser after 2 sec
        setTimeout(() => {
            window.location.href = `https://wallet.google/`;
        }, 2000);
    } else {
        // On desktop, open Google Wallet in browser
        window.open(`https://wallet.google/`, "_blank");
    }
});
