document.getElementById("add-to-wallet").addEventListener("click", async () => {
    console.log("Button clicked!"); // Debugging step 1

    const jwt = "YOUR_SIGNED_JWT_HERE"; // Replace with actual JWT token
    if (!jwt) {
        console.error("JWT is missing!");
        return;
    }

    console.log("JWT token:", jwt); // Debugging step 2

    const isMobile = /Android|iPhone|iPad/i.test(navigator.userAgent);
    console.log("Is Mobile:", isMobile); // Debugging step 3

    if (isMobile) {
        console.log("Trying to open Google Wallet app...");

        // Deep link to open Google Wallet app
        const walletDeepLink = `intent://wallet.google.com/gp/v/save/${jwt}#Intent;scheme=https;package=com.google.android.apps.walletnfcrel;end;`;
        window.location.href = walletDeepLink;

        // Fallback: If Wallet app isn't installed, open in browser
        setTimeout(() => {
            console.log("Wallet app not detected, opening in browser...");
            window.location.href = `https://wallet.google/`;
        }, 2000);
    } else {
        // Desktop: Open Google Wallet in a new tab
        console.log("Opening Google Wallet in browser...");
        window.open(`https://wallet.google/`, "_blank");
    }
});
