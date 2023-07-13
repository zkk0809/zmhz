var searchParams = new URLSearchParams(location.search)
var username = searchParams.get('username')

$(document).ready(function () {

    //渲染页面
    if (username !== null) {
        $(`<p> <span>${username}</span> 欢迎你</p>`).appendTo($('.info'))
        $(`<button id="logout">注销</button>`).appendTo($('.info'))
    }
    else {
        $(`<p>  欢迎你</p>`).appendTo($('.info'))
        $(`<button id="logout">去登录</button>`).appendTo($('.info'))
    }

    //注销
    $("#logout").click(function () {
        location.href = 'login.html'
    })

    //导航栏点击跳转
    $('#index').click(function () {
        location.href = `index.html?username=${username}`
    })
    $('#culture').click(function () {
        location.href = `culture.html?username=${username}`
    })
    $('#travel').click(function () {
        location.href = `travel.html?username=${username}`
    })

    var ool = $(".section").find("ol li")
    var oul = $(".section").find("ul li")
    // ool.eq(0).addClass("active")
    // oul.eq(0).addClass("active")
    oul.click(function () {
        // console.log(this)
        $(this).addClass("active").siblings().removeClass("active")
        ool.eq($(this).index()).addClass('active').siblings().removeClass("active")

    })
    
})