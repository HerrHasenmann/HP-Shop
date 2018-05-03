app.config(["$mdIconProvider", function ($mdIconProvider) {
    $mdIconProvider
        .defaultIconSet('./assets/icons/mdi.svg')
}]);

// Disable aria warnings
app.config(["$mdAriaProvider", function ($mdAriaProvider) {
    $mdAriaProvider.disableWarnings();
}]);

// Fix for not working inputs on mobile devices
app.config(["$mdGestureProvider", function ($mdGestureProvider) {
    $mdGestureProvider.skipClickHijack();
}]);

// Sets the theme for the app
app.config(["$mdThemingProvider", function ($mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette("teal", {
            'default': "700"
        })
        .accentPalette("green", {
            'default': "500"
        });
}]);

// Sets the different routes for the app
app.config(["$routeProvider", function ($routeProvider) {
    $routeProvider
        .when("/", {
            template : "<default></default>"
        })
        .when("/search", {
            template : "<search-result></search-result>",
            reloadOnSearch: false
        })
        .otherwise("/");
}]);