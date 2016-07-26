module.exports = function someCall(args, ultimateCB) {
    var pending = 0;
    var results = new Array();
    var calledBack = false;

    call1(args, handleResult());
    call2(args, handleResult());
    call3(args, handleResult());

    function handleResult() {
        var order = pending;
        pending++;
        return function(err, result) {
            pending--;
            if(err) {
                callback(err);
            } else {
                results[order] = result;
                if(!pending) {
                    callback(null, results);
                }
            }
        };
    }
    function callback(err, value) {
        if(!calledBack) {
            calledBack = true;
            ultimateCB(err, value);
        }
    }



};

var call1 = function(args, cb) {
    var to = randomTimeout();
    setTimeout(cb, to, null, 'c1_'+to);
}
var call2 = function(args, cb) {
    var to = randomTimeout();
    setTimeout(cb, to, null, 'c2_'+to);
}
var call3 = function(args, cb) {
    var to = randomTimeout();
    setTimeout(cb, to, null, 'c3_'+to);
}

var randomTimeout = function() {
    return Math.floor(Math.random() * 1e3);
}
var randomValue = function() {
    return Math.floor(Math.random() * 1e10);
}
