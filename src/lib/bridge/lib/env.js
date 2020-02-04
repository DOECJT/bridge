var env = {}
var NA = window.navigator;
var UA = NA.userAgent.toLowerCase();

function test(needle) {
  return needle.test(UA);
}
var IsAndroid = test(/android|htc/) || /linux/i.test(NA.platform + "");
var IsIOS = !IsAndroid && /iphone|ipad|ipad/i.test(UA);

if (typeof navigator === 'undefined') {
    // In node
    env = {
        isAndroid: IsAndroid,
        isiOS: IsIOS,
        node: true
    };
} else {
    env = {
        isAndroid: IsAndroid,
        isiOS: IsIOS,
        node: false
    }
}

export default env

