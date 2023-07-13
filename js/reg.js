// console.log(localStorage.getItem("user"))
/* if (JSON.parse(localStorage.getItem("user")) == null) {
    var userarr = []
    localStorage.setItem('user', JSON.stringify(userarr))
} */





class User {
    constructor(username, password, email, sex, age) {
        this.username = username
        this.password = password
        this.email = email
        this.sex = sex
        this.age = age
    }
    static render() {
        /* console.log(111)
        var newfooter = $(`<div class="footer">`).html("请完整输入所有内容！")
        console.log(newfooter) */
        var renderlist = JSON.parse(localStorage.getItem("user"))
        if (renderlist.length === 0) return
        var newfooter = $(`<div class="footer">`)
        var newul = $("<ul></ul>").html(renderlist.map(item => `<li>${item.username}</li>`).join(""))
        newul.appendTo(newfooter)
        var newol = $(`<ol></ol>`).html(renderlist.map(item => `<li><p>用户名: ${item.username}</p><p>年龄: ${item.age}</p><p>性别: ${item.sex}</p><p>邮箱: ${item.email}</p><button>收起</button></li>`).join(""))
        newol.appendTo(newfooter)
        newfooter.appendTo($('body'))

        var ool = newfooter.find("ol li")
        var oul = newfooter.find("ul li")
        // ool.eq(0).addClass("active")
        // oul.eq(0).addClass("active")
        oul.click(function () {
            // console.log(this)
            $(this).addClass("active").siblings().removeClass("active")
            ool.eq($(this).index()).slideDown().siblings().css("display",'none')
            
        })
        ool.find($("button")).click(function(){
            // ool.removeClass("active")
            oul.removeClass("active")
            ool.slideUp()

        })
    }
}

$(document).ready(function () {
    User.render()
    if(JSON.parse(localStorage.getItem("user")).length==0){
        $("h2").text("暂无用户注册")
    }
    $("#mybutton").click(function (e) {
        e.preventDefault()
        // console.log(111)
        var username = $('#username').val().trim()
        var password = $('#password').val().trim()
        var email = $('#email').val().trim()
        var age = $('#age').val().trim()
        if (username === '' || password === '' || email === '' || age === '') {
            var newdiv = $("<div>").text("请完整输入所有内容！")
            newdiv.insertAfter($("#sign")).css({
                'color': 'red',
                'fontWeight': 'bold',
                'fontSize': '20px'
            })
            newdiv.animate({ marginLeft: '-20px' }, 100);
            newdiv.animate({ marginLeft: '20px' }, 100);
            newdiv.animate({ marginLeft: '-20px' }, 100);
            newdiv.animate({ marginLeft: '0px' }, 100);
            setTimeout(function () {
                $("#sign").next().remove()
            }, 3000)
            // console.log('user'+userarr.length)
            return
        }
        var userlocal = JSON.parse(localStorage.getItem("user"))
        // var users='user'+userlocal.length
        // window[users]=new User($("#username").val(),$("#password").val(),$("#email").val(),$("#age").val())
        var users = new User($("#username").val(), $("#password").val(), $("#email").val(), $('input[name="gender"]:checked').val(), $("#age").val())
        userlocal = [...userlocal, users]
        localStorage.setItem('user', JSON.stringify(userlocal))
        console.log(JSON.parse(localStorage.getItem("user")))
        var count = 3
        var newdiv = $("<div>").text(`注册成功！即将进入登陆页面...${count}`)
        newdiv.insertAfter($("#sign")).css({
            'color': 'red',
            'fontWeight': 'bold',
            'fontSize': '16px'
        })
        newdiv.animate({ marginLeft: '-20px' }, 100);
        newdiv.animate({ marginLeft: '20px' }, 100);
        newdiv.animate({ marginLeft: '-20px' }, 100);
        newdiv.animate({ marginLeft: '0px' }, 100);
       
        setInterval(function () {
            count--
            newdiv.text(`注册成功！即将进入登陆页面...${count}`)
            if (count === 0) {
                location.href = `login.html`
            }
        }, 1000)
        // location.reload()
    })
    $("#clearbutton").click(function () {
        var userarr = []
        localStorage.setItem('user', JSON.stringify(userarr))
        alert("已清除所有注册记录！")
        location.reload()
    })
})