export default class UnixTimestamp {
    unixTimestamp: number = 0;
    dateTime: Date = new Date();

    constructor(dt: number | string | Date) {
        switch (typeof dt) {
            case 'number':
                this.unixTimestamp = dt as number;
                this.dateTime = new Date(this.unixTimestamp * 1000);
                break;
            case 'string':
                const parsedInt = +dt;
                if (!isNaN(+dt)) {
                    this.dateTime = new Date(parsedInt * 1000);
                } else {
                    this.dateTime = new Date(Date.parse(dt));
                }
                this.unixTimestamp = Math.floor(this.dateTime.getTime() / 1000);
                break;
            case 'object':
                this.dateTime = dt;
                this.unixTimestamp = Math.floor(this.dateTime.getTime() / 1000);
                break;
            default:
                throw 'Incorrect input data for UnixTimestamp';
        }
    }

    toUnixTimestamp(): number {
        return this.unixTimestamp;
    }

    toIsoDateTimeString(): string {
        return this.dateTime.toISOString();
    }

    toIsoDateString(): string {
        return this.dateTime.toLocaleDateString('sv');
    }
}