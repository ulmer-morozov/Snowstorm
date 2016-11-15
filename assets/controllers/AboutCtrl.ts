module Snowstorm {
    "use strict";

    export class AboutCtrl {

        //DI
        static $inject = [
            "$scope", "$interval", "$timeout", "$routeParams", "$http"
        ];

        constructor(
            private $scope: IAboutCtrlScope,
            private $interval: angular.IIntervalService,
            private $timeout: angular.ITimeoutService,
            private $routeParams: angular.route.IRouteParamsService,
            private $http: ng.IHttpService

        ) {
            $scope.mailIsSending = false;

            this.$scope.employees = [
                { avatar: "assets/images/eye.svg", title: "Иллюстрации", description: "на все случаи жизни от журнальных и текстильных до витринных и фасадных" },
                { avatar: "assets/images/hand.svg", title: "Художественные объекты", description: "для интерьеров, выставок и фестивалей" },
                { avatar: "assets/images/heart.svg", title: "Оформление пространств", description: "от шоурумов до парков" }
            ];

            $scope.sendMail = (): void => {
                $scope.mailIsSending = true;

                var data = {
                    "access_token": "mk81u6vgjnwfrw9wezc5fja5"
                };

                function onSuccess() {
                    $scope.mailIsSending = false;
                    $scope.mailSendingResultText = "Письмо отправлено!";
                }

                function onError(error) {
                    $scope.mailIsSending = false;
                    $scope.mailSendingResultText = "Не удалось отправить письмо, пожалуйста позвоните нам +7 926 726-96-28";
                }

                var message = `Контактное имя : ${this.$scope.contactName}\r\n`;
                message += `Email: ${this.$scope.email}\r\n\r\n`;
                message += `${this.$scope.message}`;

                data['subject'] = "Письмо с сайта Вьюги от " + this.$scope.email;
                data['text'] = message;

                $http.post('https://postmail.invotes.com/send', data).then(onSuccess, onError);
            }
        }

    }
}
