{
    "tags": {
        "allowUnknownTags": true,
        "dictionaries": ["jsdoc","closure"]
    },
    "source": {
        "include": ["app/directives/myDirective.js"],
        "exclude": [ /* array of paths to exclude */ ],
        "includePattern": ".+\\.js(doc)?$",
        "excludePattern": "(^|\\/|\\\\)_"
    },
    "plugins": [],
    "templates": {
        "cleverLinks": false,
        "monospaceLinks": false
    }
}
/* $ jsdoc app/app.js -c conf.json -d docs --debug */