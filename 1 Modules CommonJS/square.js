// module.exports -> {}
// exports        -> ^

// exports.area = (n) => n ** 2;

module.exports = class Square {
    constructor(num) {
        this.num = num;
    }

    area() {
        return this.num ** 2;
    }
}