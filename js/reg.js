

$(document).ready(function () {
    // User.render()
    /* if (JSON.parse(localStorage.getItem("user")).length == 0) {
        $("h2").text("暂无用户注册")
    } */
    $("#mybutton").click(function (e) {
        e.preventDefault()
        // console.log(111)
        var username = $('#username').val().trim()
        var password = $('#password').val().trim()
        var email = $('#email').val().trim()
        var sex
        if ($('#male').is(':checked')) {
            sex = '男'
        } else {
            sex = '女'
        }
        // var sex=$('#male').is(':checked')
        var age = $('#age').val().trim()
        console.log(email, sex)
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
        /* var userlocal = JSON.parse(localStorage.getItem("user"))
        // var users='user'+userlocal.length
        // window[users]=new User($("#username").val(),$("#password").val(),$("#email").val(),$("#age").val())
        var users = new User($("#username").val(), $("#password").val(), $("#email").val(), $('input[name="gender"]:checked').val(), $("#age").val())
        userlocal = [...userlocal, users]
        localStorage.setItem('user', JSON.stringify(userlocal))
        console.log(JSON.parse(localStorage.getItem("user"))) */
        axios.post('http://localhost:3000/users', {
            username, password, email, sex, age
        }).then(res => {
            if (res.data.ok === 1) {
                // location.href='/'
                // console.log('注册成功')
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
            } else {
                alert('注册失败')
            }

        })

    })
    $("#clearbutton").click(function () {
        var userarr = []
        localStorage.setItem('user', JSON.stringify(userarr))
        alert("已清除所有注册记录！")
        location.reload()
    })
})