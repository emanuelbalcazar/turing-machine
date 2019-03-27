var app = angular.module('app');

app.constant('routes', getRoutes());

// config route module.
app.config(['$routeProvider', 'routes', routeConfigurator]);

// register all routes.
function routeConfigurator($routeProvider, routes) {

    routes.forEach(function (r) {
        $routeProvider.when(r.url, r.config);
    });

    $routeProvider.otherwise({
        redirectTo: '/'
    });
}

// declare all routes.
function getRoutes() {
    return [{
        url: '/',
        config: {
            title: 'Principal',
            templateUrl: 'app/home/home.html',
            controller: 'homeCtrl'
        }
    }
    ];
}
