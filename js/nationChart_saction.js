setTimeout(function() {
  calnation(48,71);
var pie = new d3pie("sactionNationpie", {
	"header": {
		"title": {
			"text": "Super Action",
			"fontSize": 24,
			"font": "open sans"
		},
		"subtitle": {
			"color": "#999999",
			"fontSize": 12,
			"font": "open sans"
		},
		"location": "top-left",
		"titleSubtitlePadding": 5
	},
	"footer": {
		"color": "#999999",
		"fontSize": 10,
		"font": "open sans",
		"location": "bottom-left"
	},
	"size": {
		"canvasHeight": 300,
		"canvasWidth": 400,
		"pieInnerRadius": "73%",
		"pieOuterRadius": "100%"
	},
	"data": {
		"content": [
			{
        "label": "한국영화",
				"value": kor,
				"color": "#546BC1"
			},
			{
				"label": "외화",
				"value": forei,
				"color": "#E7823A"
			}
		]
	},
	"labels": {
		"outer": {
			"format": "none",
			"pieDistance": 32
		},
		"inner": {
			"hideWhenLessThanPercentage": 3
		},
		"mainLabel": {
			"fontSize": 11
		},
		"percentage": {
			"color": "#ffffff",
			"decimalPlaces": 0
		},
		"value": {
			"color": "#adadad",
			"fontSize": 11
		},
		"lines": {
			"enabled": true
		},
		"truncation": {
			"enabled": true
		}
	},
	"tooltips": {
		"enabled": true,
		"type": "placeholder",
		"string": "{label}: {percentage}%",
		"styles": {
			"font": "helvetica",
			"fontSize": 15,
			"padding": 15
		}
	},
	"effects": {
		"pullOutSegmentOnClick": {
			"effect": "linear",
			"speed": 400,
			"size": 8
		}
	},
	"misc": {
		"gradient": {
			"enabled": true,
			"percentage": 100
		}
	}
});
}, 1000);
