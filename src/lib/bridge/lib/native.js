/* eslint-disable */
import env from './env'
import execBridgeCallAndroid from './androidInit'
import execBridgeCallIOS from './iOSInit'

let execBridgeCall = env.isAndroid ? execBridgeCallAndroid : execBridgeCallIOS;
let bridge;
if (typeof process === "undefined" || process.env.RUNTIME !== 'miniapp') {
    if(navigator.userAgent.toLowerCase().indexOf('gtja') > -1) {
        bridge = {
            call(action, params, cb) {
                if (window.GtjaJSBridge&&window.GtjaJSBridge.call) {
                    window.GtjaJSBridge.call(action, params, cb)
                } else {
                    execBridgeCall(action, params, cb);
                }
            }
        }
    } else {
        // TODO,mock数据
        // cb()
    }
} else if (process.env.RUNTIME === 'miniapp') {
    bridge = LightJSBridge
}

/**
 * GTJASDK，原生API调用模块
 * @module native
 */
export default {
    /**
     * native方法调用通用方法(用户根据已有native方法自己调用)
     * @deprecated
     * @param method
     * @param params
     * @param cb
    */
    callNative: function (method, params, cb) {
        bridge.call(method, params, function (data) {
            cb && cb(data);
        });
    }
}
