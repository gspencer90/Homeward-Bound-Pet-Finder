angular
    .module("MyNewPet.factories", [])
    .factory("ContactForm", [
        "$resource",
        function($resource) {
            return $resource("/api/contactform/:id", { id: "@id" });
        }
    ])
    .factory("Products", [
        "$resource",
        function($resource) {
            return $resource("/api/products/:id", { id: "@id" }, {
                queryByCategory: {
                    method: "GET",
                    url: "/api/products/category/:categoryid",
                    isArray: true
                },
                queryBySubcategory: {
                    method: "GET",
                    url: "/api/products/subcategory/:subcategoryid",
                    isArray: true
                }
            });
        }
    ]);