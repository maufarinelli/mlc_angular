define([
        'mlcApp'
], function(
        mlcApp
    ) {
        return mlcApp.controller('LastDrawController', function($scope, $rootScope) {
            // I18n texts for some UI items
            $scope.lastDrawTitle = translateApp.i18n.i18nTranslated.lastdraw_title;
            $scope.guaranteedLastDrawTitle = translateApp.i18n.i18nTranslated.guaranteed_title;

            // Watcher of lastDraw. When its updated by Ajax call, it resets values below
            $rootScope.$watch('lastDraw.length', function() {
                $scope.extraLastDrawTitle = translateApp.i18n.i18nTranslated.extra_title[$scope.province];
            });
        });
    }
);