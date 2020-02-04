# GTJABridge
> 君弘注入桥的项目

## 使用方法
> 1、在package.json中加入："GTJABridge": "git+ssh://git@10.181.100.104:7999/ydptjhhf/bridge-new.git"

> 2、 npm install GTJABridge
```js
import GTJABridge from 'GTJABridge'

/**
 * @param  {String}   api       客户端提供的方法名
 * @param  {Object}   params    json形式的入参
 * @param  {Function} callback  回调函数
 * /
GTJABridge.callNative('tmkj.sendGmJson', params, function (data) {
})

```

## 低延时调用实例
```js
 let params = {
    function: 'trade/entrust/v1/30200002',
    params: {
        'securityId':'600000',
        'custId':'6885959',
        'fundAccountId':'149683',
        'clientFeatureCode':'MA;IMEI:a000005900529e;MPN:11103200001;@GTJA|V8.32.0',
        "userInfo":"xkZyI?qG&A>'dS)KQCZ?S`rahC2.?1A,9M}?+5#UVpaf<QXh#SjuaNd2_`3*~(Nv",
        "password":"+0K8mU%)"
        }
    }
GTJABridge.callNative('TmkjJsApi.sendGmJson', params, function (data) {
    // do something
})

```

## GMAS接口调用
```js
let param = {
  'func_id': '13100031',
  'pagenum': '5',
  'pagesize': '1'
}
window.GTJABridge.callNative('TmkjJsApi.nativeTransmit', {
  'id': 'assetAnalysis',
  'tranCode': 'GT1003',
  'isEncrypt': 'false',
  'transmitMode': 'post',
  'param': param,
  'publicParameter': {
      'client_id': 'customer_no'
   }
}, function (data) {
  // do something
})
···
