export default class UnixTimestamp {
    unixTimestamp = 0;
    dateTime = new Date();
    constructor(dt) {
        switch (typeof dt) {
            case 'number':
                this.unixTimestamp = dt;
                this.dateTime = new Date(this.unixTimestamp * 1000);
                break;
            case 'string':
                const parsedInt = +dt;
                if (!isNaN(+dt)) {
                    this.dateTime = new Date(parsedInt * 1000);
                }
                else {
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
    toUnixTimestamp() {
        return this.unixTimestamp;
    }
    toIsoDateTimeString() {
        return this.dateTime.toISOString();
    }
    toIsoDateString() {
        return this.dateTime.toLocaleDateString('sv');
    }
}
//# sourceMappingURL=unixtimestamp.js.map