module Snowstorm {

    export class Artist {

        constructor(public firstname: string, public lastname: string) {
        }

        get fullname(): string {
            return `${this.lastname} ${this.firstname}`;
        }
    }
}
