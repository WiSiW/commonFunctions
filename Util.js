var Util = (function () {
    var that;

    var obj = function () {
        this.ajaxCount = 0;
        that = this;
        that.popId = [];
    };

    obj.prototype = {
        // 数组去重
        delMore: function (arr) {
            console.log(arr.sort(function (a, b) {return a - b}))
            let a = [];
            for (var i = 0; i < arr.length; i++) {
                let isExit = 0;
                if (a.length == 0) {
                    a.push(arr[i]);
                }
                for (var j = 0; j < a.length; j++) {
                    if (arr[i] == a[j]) {
                        isExit = 1;
                    }
                }
                if (!isExit)a.push(arr[i]);
            }
            return (a.sort(function (a, b) {return a - b}));
        },


        // 判断字符出现的次数
        checkAppearNum: function (s, word) {
            let num = 0,
                str = word;
            while (str.length > 0 && str.indexOf(s) >= 0) {
                num += 1;
                str = str.slice(str.indexOf(s) + 1, str.length)
            }
            return num;
        }
    }
    return new obj();
})();

console.log(Util.delMore(["dsasfds","s","fsdfsd","s","dsasfds"]));
console.log(Util.checkAppearNum("s","sdasdaaerwrdcaasdasa"));
