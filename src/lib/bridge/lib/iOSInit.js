var callbacks = {};
var uniqueId = 1;

let init = {
    call: function(action, params, cb) {
        params = params || {};
        params = JSON.parse(JSON.stringify(params));
        var callbackId = 'cb_'+(uniqueId++)+'_'+new Date().getTime();
        if (cb) {
            callbacks[callbackId] = cb;
        }
        var message = {
            name: action,
            data: params,
            callbackId: callbackId
        };
        window.webkit.messageHandlers.JunhongJSBridge.postMessage(message);
    },
    _handleMessage: function(message) {
        if (message.responseId) {
            var callback = callbacks[message.responseId];
            if (!callback) {
                return;
            }
            callback(message.responseData);
            if (!message.keepCallback) {
                delete callbacks[message.responseId];
            }
        }
    }
}

function execBridge (action, params, cb) {
    window.GTJAJSBridge = {
        call: init.call,
        _handleMessage: init._handleMessage
    };
    return init.call(action, params, cb);
}

export default execBridge



// var _document_addEventListener = document.addEventListener;
// document.addEventListener = function(evt, handler, capture) {
//     if (evt.toLowerCase() == 'deviceready') {
//         if (typeof handler == 'function') {
//             handler();
//         }
//     } else {
//         _document_addEventListener.call(document, evt, handler, capture);
//     }
// };

// document.dispatchEvent(new CustomEvent('deviceready', {}));