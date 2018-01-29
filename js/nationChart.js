setTimeout(function() {
window.onload = function () {

var totalVisitors = 883000;
var visitorsData = {
	"New vs Returning Visitors": [{
		click: visitorsChartDrilldownHandler,
		cursor: "pointer",
		explodeOnClick: false,
		innerRadius: "75%",
		legendMarkerType: "square",
		name: "New vs Returning Visitors",
		radius: "100%",
		showInLegend: true,
		startAngle: 90,
		type: "doughnut",
		dataPoints: [
			{ y: 519960, name: "New Visitors", color: "#E7823A" },
			{ y: 363040, name: "Returning Visitors", color: "#546BC1" }
		]
	}]
};

var newVSReturningVisitorsOptions = {
	animationEnabled: true,
	theme: "light2",
	title: {
		text: "New VS Returning Visitors"
	},
	subtitles: [{
		text: "Click on Any Segment to Drilldown",
		backgroundColor: "#2eacd1",
		fontSize: 16,
		fontColor: "white",
		padding: 5
	}],
	legend: {
		fontFamily: "calibri",
		fontSize: 14,
		itemTextFormatter: function (e) {
			return e.dataPoint.name + ": " + Math.round(e.dataPoint.y / totalVisitors * 100) + "%";
		}
	},
	data: []
};

}
}, 1000);
