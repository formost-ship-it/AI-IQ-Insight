function parseSignal() {
    const text = document.getElementById("signalInput").value;

    // Pair
    const pairMatch = text.match(/([A-Z]+(?:\/)?[A-Z]+-OTC|[A-Z]+(?:\/)?[A-Z]+)/);

    // Timeframe
    const tfMatch = text.match(/M\d+/);

    // BUY / SELL
    const signalMatch = text.match(/BUY|SELL/i);

    // Time
    const timeMatch = text.match(/\d{2}:\d{2}/);

    document.getElementById("pair").innerText =
        pairMatch ? pairMatch[0] : "-";

    document.getElementById("tf").innerText =
        tfMatch ? tfMatch[0] : "-";

    document.getElementById("signal").innerText =
        signalMatch ? signalMatch[0].toUpperCase() : "-";

    document.getElementById("time").innerText =
        timeMatch ? timeMatch[0] : "-";
}
