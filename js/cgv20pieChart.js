setTimeout(function() {
var pie = new d3pie("cgv20pieChart", {
  "header": {
    "title": {
      "text": "CGV TOP20",
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
    "text": "7889개 데이터",
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
        "label": title[0],
        "value": value[0],
        "color": "#2484c1"
      },
      {
        "label": title[1],
        "value": value[1],
        "color": "#0c6197"
      },
      {
        "label": title[2],
        "value": value[2],
        "color": "#4daa4b"
      },
      {
        "label": title[3],
        "value": value[3],
        "color": "#90c469"
      },
      {
        "label": title[4],
        "value": value[4],
        "color": "#daca61"
      },
      {
        "label": title[5],
        "value": value[5],
        "color": "#e4a14b"
      },
      {
        "label": title[6],
        "value": value[6],
        "color": "#e98125"
      },
      {
        "label": title[7],
        "value": value[7],
        "color": "#cb2121"
      },
      {
        "label": title[8],
        "value": value[8],
        "color": "#830909"
      },
      {
        "label": title[9],
        "value": value[9],
        "color": "#923e99"
      },
      {
        "label": title[10],
        "value": value[10],
        "color": "#ae83d5"
      },
      {
        "label": title[11],
        "value": value[11],
        "color": "#bf273e"
      },
      {
        "label": title[12],
        "value": value[12],
        "color": "#ce2aeb"
      },
      {
        "label": title[13],
        "value": value[13],
        "color": "#bca44a"
      },
      {
        "label": title[14],
        "value": value[14],
        "color": "#618d1b"
      },
      {
        "label": title[15],
        "value": value[15],
        "color": "#1ee67b"
      },
      {
        "label": title[16],
        "value": value[16],
        "color": "#b0ec44"
      },
      {
        "label": title[17],
        "value": value[17],
        "color": "#a4a0c9"
      },
      {
        "label": title[18],
        "value": value[18],
        "color": "#322849"
      },
      {
        "label": title[19],
        "value": value[19],
        "color": "#86f71a"
      },
      {
        "label": title[20],
        "value": value[20],
        "color": "#d1c87f"
      },
      {
        "label": title[21],
        "value": value[21],
        "color": "#7d9058"
      },
      {
        "label": title[22],
        "value": value[22],
        "color": "#44b9b0"
      },
      {
        "label": title[23],
        "value": value[23],
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
