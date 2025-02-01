try {
    Intent intent = new Intent(Intent.ACTION_VIEW);
    intent.setData(Uri.parse("googlewallet://"));
    intent.setPackage("com.google.android.apps.walletnfcrel");
    startActivity(intent);
} catch (ActivityNotFoundException e) {
    // Google Wallet app is not installed, redirect to Play Store or handle accordingly
    Intent intent = new Intent(Intent.ACTION_VIEW);
    intent.setData(Uri.parse("https://play.google.com/store/apps/details?id=com.google.android.apps.walletnfcrel"));
    startActivity(intent);
}
