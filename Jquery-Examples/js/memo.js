/**
 * Created by Administrator on 2017/5/19.
 */
$(function(){
    $("#btn_save").click(function(){
        var con = $("#inp_text").val();/*获取输入内容*/
        var li = $("<li class='show_li'><span></span><button class='modify'>修改</button><button class='del'>删除</button></li>");/*创建一个li存放内容*/
        li.children("span").text(con);
        $("#show_ul").prepend(li);
        $(".del").click(function(){
            $(this).parent().hide();
        });
        $(".modify").click(function(){
            $(this).siblings("span").attr("contentEditable","true");
        })
    });
})



