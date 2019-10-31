//当表单发生提交行为的时候
$('#userForm').on('submit', function () {
    //获取到用户在表单输入的内容并将内容格式转化为参数字符串
    var formData = $(this).serialize()
    //向服务器端发送添加用户的请求
    $.ajax({
        type: 'post',
        url: 'http://47.111.184.55:3000/users',
        data: formData,
        success: function () {
            //刷新页面
            location.reload()
        },
        error: function () {
            alert('添加失败')
        }
    })
    console.log(formData);

    //阻止表单默认提交行为
    return false;
})
//  当用户选择文件的时候
$('#avatar').on('change', function () {
    //用户选择到的文件
    //  this.files[0]
    var formData = new FormData()
    formData.append('avatar', this.files[0])
    $.ajax({
        type: 'post',
        url: 'http://47.111.184.55:3000/upload',
        data: formData,
        //告诉$.ajax方法不要解析请求参数
        processData: false,
        //告诉$.ajax方法不要设置请求参数的类型
        contentType: false,
        success: function (response) {
            var imgData = 'http://47.111.184.55:3000' + response[0].avatar;
            console.log(response)
            //实现头像预览功能
            $('#preview').attr('src',imgData)
            $('#hiddenAvatar').val(response[0].avatar)
        }
    })

})