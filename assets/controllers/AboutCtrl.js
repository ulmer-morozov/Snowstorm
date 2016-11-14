var Snowstorm;
(function (Snowstorm) {
    "use strict";
    var AboutCtrl = (function () {
        function AboutCtrl($scope, $interval, $timeout, $routeParams, $http) {
            var _this = this;
            this.$scope = $scope;
            this.$interval = $interval;
            this.$timeout = $timeout;
            this.$routeParams = $routeParams;
            this.$http = $http;
            $scope.mailIsSending = false;
            this.$scope.employees = [
                { avatar: "assets/images/eye.svg", title: "Иллюстрации", description: "на все случаи жизни от журнальных и текстильных до витринных и фасадных" },
                { avatar: "assets/images/hand.svg", title: "Художественные объекты", description: "для интерьеров, выставок и фестивалей." },
                { avatar: "assets/images/heart.svg", title: "Оформление пространств", description: "от шоурумов до парков." }
            ];
            $scope.sendMail = function () {
                $scope.mailIsSending = true;
                var data = {
                    "access_token": "1456brqgoflwgxd7fif1ynu1"
                };
                function onSuccess() {
                    $scope.mailIsSending = false;
                    $scope.mailSendingResultText = "Письмо отправлено!";
                }
                function onError(error) {
                    $scope.mailIsSending = false;
                    $scope.mailSendingResultText = "Не удалось отправить письмо, пожалуйста позвоните нам +7 926 726-96-28";
                }
                var message = "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u043E\u0435 \u0438\u043C\u044F : " + _this.$scope.contactName + "\r\n";
                message += "Email: " + _this.$scope.email + "\r\n\r\n";
                message += "" + _this.$scope.message;
                data['subject'] = "Письмо с сайта Вьюги от " + _this.$scope.email;
                data['text'] = message;
                $http.post('https://postmail.invotes.com/send', data).then(onSuccess, onError);
            };
        }
        return AboutCtrl;
    }());
    AboutCtrl.$inject = [
        "$scope", "$interval", "$timeout", "$routeParams", "$http"
    ];
    Snowstorm.AboutCtrl = AboutCtrl;
})(Snowstorm || (Snowstorm = {}));
