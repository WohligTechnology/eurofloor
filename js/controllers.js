angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'ngAnimate', 'ngSanitize', 'angular-flexslider', 'ksSwiper'])

.controller('HomeCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.changecontent("home"); //Use same name of .html file
    $scope.menutitle = NavigationService.makeactive("Home"); //This is the Title of the Website
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    //

    // $scope.showBorder = function (id) {

    //     if (id == 1) {
    //         $scope.giveBorder1 = "4px solid #4e4c75";
    //         $scope.giveBorder2 = " border-bottom:0";
    //         $scope.giveBorder3 = " border-bottom:0";
    //         $scope.giveBorder4 = " border-bottom:0";
    //         $scope.giveBorder5 = " border-bottom:0";

    //     } else if (id == 2) {
    //         $scope.giveBorder1 = " border-bottom:0";
    //         $scope.giveBorder2 = " border-bottom:4px solid #4e4c75;";
    //         $scope.giveBorder3 = " border-bottom:0";
    //         $scope.giveBorder4 = " border-bottom:0";
    //         $scope.giveBorder5 = " border-bottom:0";
    //     } else if (id == 3) {
    //         $scope.giveBorder1 = " border-bottom:0";
    //         $scope.giveBorder2 = " border-bottom:0";
    //         $scope.giveBorder3 = " border-bottom:4px solid #4e4c75;";
    //         $scope.giveBorder4 = " border-bottom:0";
    //         $scope.giveBorder5 = " border-bottom:0";
    //     } else if (id == 4) {
    //         $scope.giveBorder1 = " border-bottom:0";
    //         $scope.giveBorder2 = " border-bottom:0";
    //         $scope.giveBorder3 = " border-bottom:0";
    //         $scope.giveBorder4 = " border-bottom:4px solid #4e4c75;";
    //         $scope.giveBorder5 = " border-bottom:0";
    //     } else if (id == 5) {
    //         $scope.giveBorder1 = " border-bottom:0";
    //         $scope.giveBorder2 = " border-bottom:0";
    //         $scope.giveBorder3 = " border-bottom:0";
    //         $scope.giveBorder4 = " border-bottom:0";
    //         $scope.giveBorder5 = " border-bottom:4px solid #4e4c75;";
    //     }

    // }
    // $scope.showBorder = function (id) {

    //     if (id == 1) {
    //         $scope.shownDash1 = true;
    //         $scope.shownDash2 = false;
    //         $scope.shownDash3 = false;
    //         $scope.shownDash4 = false;
    //         $scope.shownDash5 = false;

    //     } else if (id == 2) {
    //         $scope.shownDash1 = false;
    //         $scope.shownDash2 = true;
    //         $scope.shownDash3 = false;
    //         $scope.shownDash4 = false;
    //         $scope.shownDash5 = false;
    //     } else if (id == 3) {
    //         $scope.shownDash1 = false;
    //         $scope.shownDash2 = false;
    //         $scope.shownDash3 = true;
    //         $scope.shownDash4 = false;
    //         $scope.shownDash5 = false;
    //     } else if (id == 4) {
    //         $scope.shownDash1 = false;
    //         $scope.shownDash2 = false;
    //         $scope.shownDash3 = false;
    //         $scope.shownDash4 = true;
    //         $scope.shownDash5 = false;
    //     } else if (id == 5) {
    //         $scope.shownDash1 = false;
    //         $scope.shownDash2 = false;
    //         $scope.shownDash3 = false;
    //         $scope.shownDash4 = false;
    //         $scope.shownDash5 = true;
    //     }

    // }
    $scope.mySlides = [{
        img: "img/banner.jpg",
        head1: "INTERIOR REMODELING WITH EXCELLENT FLOORING MAKES",
        head2: "YOUR LIFE EASIER",
        button: "OUR PORTFOLIO"

    }, {
        img: "img/banner.jpg",
        head1: "INTERIOR REMODELING WITH EXCELLENT FLOORING MAKES",
        head2: "YOUR LIFE EASIER",
        button: "OUR PORTFOLIO"
    }, {
        img: "img/banner.jpg",
        head1: "INTERIOR REMODELING WITH EXCELLENT FLOORING MAKES",
        head2: "YOUR LIFE EASIER",
        button: "OUR PORTFOLIO"
    }];
    $scope.mySlides2 = [{
        head: "RESIDENTIAL DESIGN",
        para: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia "

    }, {
        head: "RESIDENTIAL DESIGN",
        para: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia "
    }, {
        head: "RESIDENTIAL DESIGN",
        para: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia "
    }];
    $scope.mySlides3 = [{
        img: "img/slide1.jpg",
    }, {
        img: "img/slide1.jpg",
    }, {
        img: "img/slide1.jpg",
    }];
    $scope.mySlides4 = [{
        para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    }, {
        para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    }, {
        para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    }];
})

.controller('ContactCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.changecontent("contact"); //Use same name of .html file
        $scope.menutitle = NavigationService.makeactive("Contact"); //This is the Title of the Website
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();


    })
    .controller('AboutUsCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.changecontent("about-us"); //Use same name of .html file
        $scope.menutitle = NavigationService.makeactive("Company"); //This is the Title of the Website
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();




    })
    .controller('CollectionCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.changecontent("collection"); //Use same name of .html file
        $scope.menutitle = NavigationService.makeactive("Collection"); //This is the Title of the Website
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();


    })
    .controller('ProductCatCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.changecontent("product-cat"); //Use same name of .html file
        $scope.menutitle = NavigationService.makeactive("Product-cat"); //This is the Title of the Website
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();


    })
    .controller('ProductDetailCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.changecontent("product-detail"); //Use same name of .html file
        $scope.menutitle = NavigationService.makeactive("Product-detail"); //This is the Title of the Website
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        $scope.showArrow = function (id) {

            if (id == 1) {
                $scope.bkimage = '../img/whistler-swatch.jpg';
                $scope.arrow1 = true;
                $scope.arrow2 = false;
                $scope.changeColor1 = " background-color: #ffffff; ";
                $scope.changeColor2 = " background-color: #f1eeee; ";

            } else if (id == 2) {
                $scope.bkimage = '../img/whistler-texture.jpg';
                $scope.arrow1 = false;
                $scope.arrow2 = true;
                $scope.changeColor1 = " background-color: #f1eeee; ";
                $scope.changeColor2 = " background-color: #ffffff; ";
            }
        }
        $scope.showArrow(1);

    })

.controller('FormCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.changecontent("form"); //Use same name of .html file
    $scope.menutitle = NavigationService.makeactive("Form"); //This is the Title of the Website
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    $scope.formSubmitted = false;

    $scope.submitForm = function (data) {
        console.log(data);
        $scope.formSubmitted = true;
    }
})

.controller('headerctrl', function ($scope, TemplateService) {
    $scope.template = TemplateService;
    $scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
        $(window).scrollTop(0);
    });
    $scope.testFun = function () {
        console.log('ddddddddd');
    }
    $.fancybox.close(true);
    console.log('inside headerc');
    $scope.showBorder = function (id) {
        console.log('in fun');
        if (id == 1) {
            $scope.giveBorder1 = "4px solid #4e4c75";
            $scope.giveBorder2 = " border-bottom:0";
            $scope.giveBorder3 = " border-bottom:0";
            $scope.giveBorder4 = " border-bottom:0";
            $scope.giveBorder5 = " border-bottom:0";

        } else if (id == 2) {
            $scope.giveBorder1 = " border-bottom:0";
            $scope.giveBorder2 = " border-bottom:4px solid #4e4c75;";
            $scope.giveBorder3 = " border-bottom:0";
            $scope.giveBorder4 = " border-bottom:0";
            $scope.giveBorder5 = " border-bottom:0";
        } else if (id == 3) {
            $scope.giveBorder1 = " border-bottom:0";
            $scope.giveBorder2 = " border-bottom:0";
            $scope.giveBorder3 = " border-bottom:4px solid #4e4c75;";
            $scope.giveBorder4 = " border-bottom:0";
            $scope.giveBorder5 = " border-bottom:0";
        } else if (id == 4) {
            $scope.giveBorder1 = " border-bottom:0";
            $scope.giveBorder2 = " border-bottom:0";
            $scope.giveBorder3 = " border-bottom:0";
            $scope.giveBorder4 = " border-bottom:4px solid #4e4c75;";
            $scope.giveBorder5 = " border-bottom:0";
        } else if (id == 5) {
            $scope.giveBorder1 = " border-bottom:0";
            $scope.giveBorder2 = " border-bottom:0";
            $scope.giveBorder3 = " border-bottom:0";
            $scope.giveBorder4 = " border-bottom:0";
            $scope.giveBorder5 = " border-bottom:4px solid #4e4c75;";
        }

    }

})

.controller('languageCtrl', function ($scope, TemplateService, $translate, $rootScope) {

    $scope.changeLanguage = function () {
        console.log("Language CLicked");

        if (!$.jStorage.get("language")) {
            $translate.use("hi");
            $.jStorage.set("language", "hi");
        } else {
            if ($.jStorage.get("language") == "en") {
                $translate.use("hi");
                $.jStorage.set("language", "hi");
            } else {
                $translate.use("en");
                $.jStorage.set("language", "en");
            }
        }
        //  $rootScope.$apply();
    };


})

;