try {
    if (!isMobileBrowser()) {
        $("<link>").attr({href: "/assets/waifu.min.css?v=1.4.2", rel: "stylesheet", type: "text/css"}).appendTo('head');
        $('body').append('<div class="waifu"><div class="waifu-tips"></div><canvas id="live2d" class="live2d"/><div class="waifu-tool"><span class="fui-home"/> <span class="fui-chat"/> <span class="fui-eye"/> <span class="fui-user"/> <span class="fui-photo"/> <span class="fui-info-circle"/> <span class="fui-cross"/></div></div>');
        $.ajax({url: '/assets/waifu-tips.min.js?v=1.4.2', dataType: "script", cache: true, async: false});
        $.ajax({url: '/assets/live2d.min.js?v=1.0.5', dataType: "script", cache: true, async: false});
        /* 可直接修改部分参数 */
        live2d_settings['hitokotoAPI'] = 'hitokoto.cn';  // 一言 API
        live2d_settings['modelId'] = 6;                  // 默认模型 ID
        live2d_settings['modelTexturesId'] = 18;         // 默认材质 ID
        live2d_settings['modelStorage'] = false;         // 不储存模型 ID
        live2d_settings['waifuEdgeSide'] = 'right:30';
        live2d_settings['homePageUrl'] = '/';
        /* 在 initModel 前添加 */
        initModel('/assets/waifu-tips.json');
    } else {
        console.log('手机端不显看板娘~！')
    }
} catch (err) {
    console.log('[Error] JQuery is not defined.')
}

function isMobileBrowser() {
    var sUserAgent = navigator.userAgent.toLowerCase();
    var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
    var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
    var bIsMidp = sUserAgent.match(/midp/i) == "midp";
    var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
    var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
    var bIsAndroid = sUserAgent.match(/android/i) == "android";
    var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
    var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
    if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
        return true;
    } else
        return false;
}
