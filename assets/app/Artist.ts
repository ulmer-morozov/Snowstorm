module Snowstorm {

    export class Artist {

        constructor(public id: number, public firstname: string, public lastname: string, public mascotName: string, public radius: number) {
        }

        get fullname(): string {
            return `${this.lastname} ${this.firstname}`;
        }
    }
}
