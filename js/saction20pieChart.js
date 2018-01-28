var pie = new d3pie("saction20pieChart", {
  "header": {
    "title": {
      "text": "SACTION TOP20",
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
    "text": "7872개 데이터",
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
        "label": title[48],
        "value": value[48],
        "color": "#2484c1"
      },
      {
        "label": title[48],
        "value": value[48],
        "color": "#0c6197"
      },
      {
        "label": title[49],
        "value": value[49],
        "color": "#4daa4b"
      },
      {
        "label": title[50],
        "value": value[50],
        "color": "#90c469"
      },
      {
        "label": title[51],
        "value": value[51],
        "color": "#daca61"
      },
      {
        "label": title[52],
        "value": value[52],
        "color": "#e4a14b"
      },
      {
        "label": title[53],
        "value": value[53],
        "color": "#e98125"
      },
      {
        "label": title[54],
        "value": value[54],
        "color": "#cb2121"
      },
      {
        "label": title[55],
        "value": value[55],
        "color": "#830909"
      },
      {
        "label": title[56],
        "value": value[56],
        "color": "#923e99"
      },
      {
        "label": title[57],
        "value": value[57],
        "color": "#ae83d5"
      },
      {
        "label": title[58],
        "value": value[58],
        "color": "#bf273e"
      },
      {
        "label": title[59],
        "value": value[59],
        "color": "#ce2aeb"
      },
      {
        "label": title[60],
        "value": value[60],
        "color": "#bca44a"
      },
      {
        "label": title[61],
        "value": value[61],
        "color": "#618d1b"
      },
      {
        "label": title[62],
        "value": value[62],
        "color": "#1ee67b"
      },
      {
        "label": title[63],
        "value": value[63],
        "color": "#b0ec44"
      },
      {
        "label": title[64],
        "value": value[64],
        "color": "#a4a0c9"
      },
      {
        "label": title[65],
        "value": value[65],
        "color": "#322849"
      },
      {
        "label": title[66],
        "value": value[66],
        "color": "#86f71a"
      },
      {
        "label": title[67],
        "value": value[67],
        "color": "#d1c87f"
      },
      {
        "label": title[68],
        "value": value[68],
        "color": "#7d9058"
      },
      {
        "label": title[69],
        "value": value[69],
        "color": "#44b9b0"
      },
      {
        "label": title[70],
        "value": value[70],
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
    "string": "{label}: {value}, {percentage}%",
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
