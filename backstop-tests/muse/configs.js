module.exports = {
    "viewports": [
        {
            "name": "laptop",
            "width": 1280,
            "height": 800
        }
    ],
    "scenarios": [
        {
            "label": "Muse",
            "url": "http://localhost:4000",
            "hideSelectors": [],
            "removeSelectors": [
            ],
            "selectors": [
                ".container"
            ],
            "readyEvent": null,
            "delay": 0,
            "misMatchThreshold" : 0.1,
            "onBeforeScript": "onBefore.js",
            "onReadyScript": "onReady.js"
        }
    ],
    "paths": {
        "bitmaps_reference": "../../backstop-tests/muse/reference",
        "bitmaps_test": "../../backstop-tests/muse/test",
        "compare_data": "../../backstop-tests/muse/test/compare.json",
        "casper_scripts": "../../backstop-tests/muse/casper"
    },
    "engine": "phantomjs",
    "report": ["CLI", "browser"],
    "cliExitOnFail": false,
    "casperFlags": [],
    "debug": false,
    "port": 8001
};
