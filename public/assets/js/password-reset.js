$('#modifyForm').on('submit',function(){
    //获取用户在表单中输入的内容
    var formData = $(this).serialize()
    console.log(formData);
    
    //调用接口  实现密码修改功能
    $.ajax({
        url:'http://47.111.184.55:3000/users/password',
        type:'put',
        data:formData,
        success:function(data){
            location.href="http://47.111.184.55:3000/admin/login.html"
        }
    })
    //阻止表单的默认提交行为
    return false;
})