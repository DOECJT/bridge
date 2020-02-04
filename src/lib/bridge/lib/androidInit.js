
var init = {
    call: function (action, params, cb) {
      var uniqueId = Math.floor(Math.random() * 40000 + 1000);
      var url = window.location.href;
      var callbackId = "gtcb_" + uniqueId;
      if (cb) {
        window[callbackId] = cb;
      }
      window.JunhongJSBridge.exec(url, action, callbackId, JSON.stringify(params));
    },
    callbackFromNative: function (callbackid, result) {
      if (callbackid) {
          var callback = window[callbackid];
          if (!callback) {
              return;
          }
          callback(result);
      }
    },
    sendDeviceReadyEvent: function () {
      var event = document.createEvent("Events");
      event.initEvent("deviceready", false, false);
      document.dispatchEvent(event);
    },

 }

  function execBridge (action, params, cb) {
    window.GtjaJSBridge = {
      call: init.call,
      callbackFromNative: init.callbackFromNative
    }
    return init.call(action, params, cb)
  }

 export default execBridge
  