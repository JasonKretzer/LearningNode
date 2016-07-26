var ops = require('./ops');

ops({some: 'args'}, function(err, result) {
    if(err) {
        console.error("ERROR: "+err);
    } else {
        console.log('SUCCESS: ', result);
    }
});
