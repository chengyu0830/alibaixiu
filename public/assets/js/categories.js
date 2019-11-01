//当添加分类表单发生提交行为的时候
$('#addCategory').on('submit',function(){
    ///获取用户在表单中输入的内容
    var formData = $(this).serialize()    
    //向服务器发送请求  添加分类
    $.ajax({
        
        url:'http://47.111.184.55:3000/categories',
        type:'post',
        data: formData,
        success:function(data){
           location.reload()
        }
    })
    //阻止表单默认提交行为
    return false
})
//发送ajax请求 向服务器端所有分类列表数据
$.ajax({
    type:'get',
    url:'http://47.111.184.55:3000/categories',
    success:function(response){
        // 将服务器返回的数据和html模板进行拼接
        var html = template("categoryListTpl",{data:response})
        //将拼接好的内容显示在页面中
        $('#categoryBox').html(html)
        
    }
})

//为编辑按钮添加点击事件
$('#categoryBox').on('click','.edit',function(){
    //获取要修改的分类数据的id
    var id = $(this).attr('data-id');
    //根据id获取分类数据的详细信息
    $.ajax({
        type:'get',
        url:'http://47.111.184.55:3000/categories/' + id,
        success:function(response){
            console.log(response);
            var html = template('modityCategoryTpl',response);
            // console.log(html);
            $('#formBox').html(html)
            
        }
    })
})
//当修改分类数据表单发生提交行为的时候
$('#formBox').on('submit','#modityCategory',function(){
    //获取管理员在表单中输入的内容
    var formData = $(this).serialize();
    //获取要修改的分类id
    var id = $(this).attr('data-id')
    //发送请求  修改分类数据
    $.ajax({
        url:'http://47.111.184.55:3000/categories/' + id,
        type:'put',
        data: formData,
        success:function(){
            location.reload()
        }
    })




    // 阻止表单的默认提交行为
    return false
})


$('#categoryBox').on('click','.delete',function(){
    if(confirm('是否确认删除')){
        //获取要删除的分类数据id
        var id = $(this).attr('data-id')
        //向服务器发送请求  删除分类数据
        $.ajax({
            type:'delete',
            url:'http://47.111.184.55:3000/categories/' + id,
            success:function(){
                //刷新页面
                location.reload()
            }
        })
    }
})