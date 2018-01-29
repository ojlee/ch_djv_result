setTimeout(function() {
var pie = new d3pie("ocn20pieChart", {
  "header": {
    "title": {
      "text": "OCN TOP20",
      "fontSize": 24,
      "font": "open sans"
    },
    "subtitle": {
      "color": "#999999",
      "fontSize": 12,
      "font": "open sans"
    },
    "titleSubtitlePadding": 6
  },
  "footer": {
    "text": "5219개 데이터",
    "color": "#999999",
    "font": "open sans",
    "location": "bottom-left"
  },
  "size": {
    "canvasHeight": 600,
    "canvasWidth": 800,
    "pieInnerRadius": "19%",
    "pieOuterRadius": "90%"
  },
  "data": {
    "sortOrder": "value-desc",
    "content": [
      {
        "label": title[24],
        "value": value[24],
        "color": "#2484c1"
      },
      {
        "label": title[25],
        "value": value[25],
        "color": "#0c6197"
      },
      {
        "label": title[26],
        "value": value[26],
        "color": "#4daa4b"
      },
      {
        "label": title[27],
        "value": value[27],
        "color": "#90c469"
      },
      {
        "label": title[28],
        "value": value[28],
        "color": "#daca61"
      },
      {
        "label": title[29],
        "value": value[29],
        "color": "#e4a14b"
      },
      {
        "label": title[30],
        "value": value[30],
        "color": "#e98125"
      },
      {
        "label": title[31],
        "value": value[31],
        "color": "#cb2121"
      },
      {
        "label": title[32],
        "value": value[32],
        "color": "#830909"
      },
      {
        "label": title[33],
        "value": value[33],
        "color": "#923e99"
      },
      {
        "label": title[34],
        "value": value[34],
        "color": "#ae83d5"
      },
      {
        "label": title[35],
        "value": value[35],
        "color": "#bf273e"
      },
      {
        "label": title[36],
        "value": value[36],
        "color": "#ce2aeb"
      },
      {
        "label": title[37],
        "value": value[37],
        "color": "#bca44a"
      },
      {
        "label": title[38],
        "value": value[38],
        "color": "#618d1b"
      },
      {
        "label": title[39],
        "value": value[39],
        "color": "#1ee67b"
      },
      {
        "label": title[40],
        "value": value[40],
        "color": "#b0ec44"
      },
      {
        "label": title[41],
        "value": value[41],
        "color": "#a4a0c9"
      },
      {
        "label": title[42],
        "value": value[42],
        "color": "#322849"
      },
      {
        "label": title[43],
        "value": value[43],
        "color": "#86f71a"
      },
      {
        "label": title[44],
        "value": value[44],
        "color": "#d1c87f"
      },
      {
        "label": title[45],
        "value": value[45],
        "color": "#7d9058"
      },
      {
        "label": title[46],
        "value": value[46],
        "color": "#44b9b0"
      },
      {
        "label": title[47],
        "value": value[47],
        "color": "#7c37c0"
      }
    ]
  },
  "labels": {
    "outer": {
      "pieDistance": 32
    },
    "inner": {
      "format": "value",
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
      "color": "#ffffff",
      "fontSize": 14
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
    "string": "{label}: {value}회, {percentage}%",
    "styles": {
      "fadeInSpeed": 129,
      "backgroundOpacity": 0.74,
      "borderRadius": 4,
      "fontSize": 18,
      "padding": 19
    }
  },
  "effects": {
    "pullOutSegmentOnClick": {
      "effect": "bounce",
      "speed": 400,
      "size": 20
    },
    "highlightSegmentOnMouseover": true,
    "highlightLuminosity": -0.7
  },
  "misc": {
    "gradient": {
      "enabled": true,
      "percentage": 85
    }
  },
  "callbacks": {}
});
}, 3000);
