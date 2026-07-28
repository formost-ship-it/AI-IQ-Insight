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
function analyzeData(data) {

    let result = "";

    let length = data.length;

    if (length > 50) {
        result = "ระดับข้อมูล: สูง<br>รูปแบบ: มีข้อมูลจำนวนมาก";
    } 
    else if (length > 20) {
        result = "ระดับข้อมูล: กลาง<br>รูปแบบ: ข้อมูลปานกลาง";
    } 
    else {
        result = "ระดับข้อมูล: ต่ำ<br>รูปแบบ: ข้อมูลน้อย";
    }

    document.getElementById("analysisResult").innerHTML = result;
}
analyzeData(text);
