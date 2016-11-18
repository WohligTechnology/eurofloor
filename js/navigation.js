var adminURL = "";
if (isproduction) {
    adminURL = "http://www.wohlig.co.in/demo/index.php";
} else {
    adminURL = "http://localhost/demo/index.php";
}

var navigationservice = angular.module('navigationservice', [])

.factory('NavigationService', function () {
    var navigation = [{
        name: "Home",
        classis: "",
        anchor: "home",

    }, {
        name: "Company",
        classis: "",
        anchor: "about-us",

    }, {
        name: "collection",
        classis: "",
        anchor: "collection",
        subnav: [{
            name: "Challet",
            classis: "",
            anchor: "collection",
        }, {
            name: "Vintage Loft",
            classis: "",
            anchor: "collection",
        }, {
            name: "Salt Box",
            classis: "",
            anchor: "collection",
        }, {
            name: "Gallery",
            classis: "",
            anchor: "collection",
        }, {
            name: "Brick & Board",
            classis: "",
            anchor: "collection",
        }, {
            name: "Storehouse Plank",
            classis: "",
            anchor: "collection",
        }, {
            name: "Eighteen Seventy Five",
            classis: "",
            anchor: "collection",
        }, {
            name: "Ponderosa",
            classis: "",
            anchor: "collection",
        }]

    }, {
        name: "VIRTUAL ROOM",
        classis: "",
        anchor: "home",


    }, {
        name: "CONTACT",
        classis: "",
        anchor: "contact",

    }];

    return {
        getnav: function () {
            return navigation;
        },
        makeactive: function (menuname) {
            for (var i = 0; i < navigation.length; i++) {
                if (navigation[i].name == menuname) {
                    navigation[i].classis = "active";
                } else {
                    navigation[i].classis = "";
                }
            }
            return menuname;
        },

    };
});