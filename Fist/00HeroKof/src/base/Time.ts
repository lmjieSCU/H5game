class Time {

    public static getMonth(): number {
        let now = new Date();
        let nowYear = now.getFullYear();
        let nowMonth = now.getMonth() + 1;
        let nowweekday = now.getDate();
        return nowMonth;
    }
    public static getDay(): number {
        let now = new Date();
        let nowYear = now.getFullYear();
        let nowMonth = now.getMonth() + 1;
        let nowweekday = now.getDate();
        return nowweekday;
    }
}