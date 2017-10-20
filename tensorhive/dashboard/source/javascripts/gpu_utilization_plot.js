// Using smoothie library

// Random data
var line1 = new TimeSeries();
var line2 = new TimeSeries();
setInterval(function() {
    line1.append(new Date().getTime(), Math.random());
    line2.append(new Date().getTime(), Math.random());
}, 1000);

var smoothie = new SmoothieChart({
    grid: {
        strokeStyle: "rgb(125, 0, 0)",
        fillStyle: "rgb(60, 0, 0)",
        lineWidth: 1,
        millisPerLine: 250,
        verticalSections: 6
    }
});
smoothie.addTimeSeries(line1, {
    strokeStyle: "rgb(0, 255, 0)",
    fillStyle: "rgba(0, 255, 0, 0.4)",
    lineWidth: 3
});
smoothie.addTimeSeries(line2, {
    strokeStyle: "rgb(255, 0, 255)",
    fillStyle: "rgba(255, 0, 255, 0.3)",
    lineWidth: 3
});

smoothie.streamTo(document.getElementById("gpu_utilization_plot"), 1000);