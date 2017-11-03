angular.module("MyNewPet", [
        "ngRoute",
        "ngResource",
        "MyNewPet.controllers",
        "MyNewPet.factories",
        "MyNewPet.directives",
        // "MyNewPet.services"
    ])
    .config([
        "$locationProvider",
        "$routeProvider",
        function($locationProvider, $routeProvider) {
            $locationProvider.html5Mode(true);
            $routeProvider
                .when('/', {
                    templateUrl: 'views/welcome.html',
                    controller: ''
                })
                .when('/about', {
                    templateUrl: 'views/about.html',
                    controller: ''
                })
                .when('/apply', {
                    templateUrl: 'views/apply.html',
                    controller: 'ApplyController'
                })
                .when('/products', {
                    templateUrl: 'views/products.html',
                    controller: 'ProductsController'
                })
                .when('/products/subcategory/:id', {
                    templateUrl: 'views/multiproduct.html',
                    controller: 'SubCatController'
                })
                .when('/products/:id', {
                    templateUrl: 'views/singleproduct.html',
                    controller: 'SingleProductController'
                })
                .when('/contact', {
                    templateUrl: 'views/contact.html',
                    controller: 'ContactController'
                })
                .when('/services', {
                    templateUrl: 'views/services.html',
                    controller: ''
                })
                .when('/vets', {
                    templateUrl: 'views/vets.html',
                    controller: ''
                })
                .when('/dogwalkers', {
                    templateUrl: 'views/dogwalkers.html',
                    controller: ''
                })
                .when('/obedience', {
                    templateUrl: 'views/obedience.html',
                    controller: ''
                })
                .when('/grooming', {
                    templateUrl: 'views/grooming.html',
                    controller: ''
                })
                .when('/cart', {
                    templateUrl: 'views/cart.html',
                    controller: ''
                })
                .when('/checkout', {
                    templateUrl: 'views/checkout.html',
                    controller: 'CheckoutController'
                })
                .when('/payment', {
                    templateUrl: 'views/payment.html',
                    controller: 'PaymentController'
                })
                //.when('/multiproduct', {
                //     templateUrl: 'views/multiproduct.html',
                //     controller: ''
                // })
                // .when('/summary', {
                //     templateUrl: 'views/summary.html',
                //     controller: 'SummaryController'
                // })
                // .when('/login', {
                //     templateUrl: 'views/login.html',
                //     controller: 'LoginController'
                // })
                // collar
                // .when('/dogs', {
                //     templateUrl: 'views/animals.html',
                //     controller: 'AnimalsController'
                // })
                // .when('/cats', {
                //     templateUrl: 'views/animals.html',
                //     controller: 'AnimalsController'
                // })
                // .when('/dogs/:id', {
                //     templateUrl: 'views/single_animal.html',
                //     controller: 'SingleAnimalController'
                // })
                // .when('/cats/:id', {
                //     templateUrl: 'views/single_animal.html',
                //     controller: 'SingleAnimalController'
                // })
                .otherwise({
                    redirectTo: '/'
                });
        }
    ]);