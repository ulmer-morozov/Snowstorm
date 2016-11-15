module Snowstorm {
    "use strict";

    export interface IAboutCtrlScope extends ng.IScope {

        email: string;
        contactName: string;
        message: string;
        employees: IEmployee[];

        mailIsSending: boolean;
        mailSendingResultText: string;

        sendMail(): void;
    }
}
