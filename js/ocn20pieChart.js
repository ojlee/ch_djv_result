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
        "label": "베테랑",
        "value": 52,
        "color": "#2484c1"
      },
      {
        "label": "가디언즈오브갤럭시",
        "value": 48,
        "color": "#0c6197"
      },
      {
        "label": "루시",
        "value": 46,
        "color": "#4daa4b"
      },
      {
        "label": "암살",
        "value": 46,
        "color": "#90c469"
      },
      {
        "label": "킹스맨 시크릿에이전트",
        "value": 45,
        "color": "#daca61"
      },
      {
        "label": "검사외전",
        "value": 41,
        "color": "#e4a14b"
      },
      {
        "label": "신세계",
        "value": 39,
        "color": "#e98125"
      },
      {
        "label": "미션임파서블5 로그네이션",
        "value": 37,
        "color": "#cb2121"
      },
      {
        "label": "어벤져스2 에이지오브울트론",
        "value": 37,
        "color": "#830909"
      },
      {
        "label": "엑스맨 데이즈오브퓨처패스트",
        "value": 37,
        "color": "#923e99"
      },
      {
        "label": "인터스텔라",
        "value": 35,
        "color": "#ae83d5"
      },
      {
        "label": "아이언맨3",
        "value": 34,
        "color": "#bf273e"
      },
      {
        "label": "캡틴아메리카 윈터솔저",
        "value": 34,
        "color": "#ce2aeb"
      },
      {
        "label": "터미네이터5 제니시스",
        "value": 34,
        "color": "#bca44a"
      },
      {
        "label": "어벤져스",
        "value": 32,
        "color": "#618d1b"
      },
      {
        "label": "쥬라기월드",
        "value": 32,
        "color": "#1ee67b"
      },
      {
        "label": "신의한수",
        "value": 30,
        "color": "#b0ec44"
      },
      {
        "label": "아저씨",
        "value": 30,
        "color": "#a4a0c9"
      },
      {
        "label": "겨울왕국",
        "value": 29,
        "color": "#322849"
      },
      {
        "label": "쿵푸팬더3",
        "value": 29,
        "color": "#86f71a"
      },
      {
        "label": "메이즈러너",
        "value": 28,
        "color": "#d1c87f"
      },
      {
        "label": "앤트맨",
        "value": 28,
        "color": "#7d9058"
      },
      {
        "label": "잭리처",
        "value": 28,
        "color": "#44b9b0"
      },
      {
        "label": "맨오브스틸",
        "value": 27,
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
