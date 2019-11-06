
var welIndex = 1;

function scrollFunc(e) {  
    e = e || window.event;
    var mouseOk = new Boolean(1);
    if (e.wheelDelta){
        var mouseOn = e.wheelDelta; //判断浏览器IE，谷歌滑轮事件
    }else if (e.detail){
        var mouseOn = e.detail; //Firefox滚轮事件
    }else{
        var mouseOk = new Boolean(0);
    }
    
    if (mouseOk){
        if (welIndex == 1){
            if (mouseOn < 0) { //当滑轮向下滚动时  
                $(".welcome").addClass("off");
                $(".welCard").addClass("off");
                $(".profileAvatar").addClass("on");
                $(".profileJob1").addClass("on");
                $(".profileJob2").addClass("on");
                $(".profileName").addClass("on");
                $(".profileBar-btn li a").addClass("on");
                $(".entrance-btn").addClass("on");
                console.log(welIndex);
                welIndex++;
                console.log("+" + welIndex);
                console.log("ok");
            }
        }
        if (welIndex == 2){
            if (mouseOn > 0) { //当滑轮向上滚动时  
                $(".welcome").removeClass("off");
                $(".welCard").removeClass("off");
                $(".profileAvatar").removeClass("on");
                $(".profileJob1").removeClass("on");
                $(".profileJob2").removeClass("on");
                $(".profileName").removeClass("on");
                $(".profileBar-btn li a").removeClass("on");
                $(".entrance-btn").removeClass("on");
                console.log(welIndex);
                welIndex--;
                console.log("-:" + welIndex);
                console.log("ok");
            }
        }
    }
}
window.onmousewheel = document.onmousewheel = scrollFunc;

function enterHome(){
    //$(".profileAvatar").removeClass("on");
    $(".profileJob1").removeClass("on");
    $(".profileJob2").removeClass("on");
    $(".profileName").removeClass("on");
    $(".profileBar-btn li a").removeClass("on");
    $(".entrance-btn").removeClass("on");

    var profileGithubBtn = document.getElementById("github-btn");
    var profileWeiboBtn = document.getElementById("weibo-btn");
    var profileMailBtn = document.getElementById("mail-btn");
    profileGithubBtn.parentNode.removeChild(profileGithubBtn);
    profileWeiboBtn.parentNode.removeChild(profileWeiboBtn);
    profileMailBtn.parentNode.removeChild(profileMailBtn);

    //$(".homeAvatar").addClass("on");
    $(".profileAvatar").addClass("home");
    $(".homeNav-btn li a").addClass("home");
    welIndex++;
    console.log(welIndex);

    /*
    var chartdiv = document.getElementById("atc-ctn");
    var parentDom = chartdiv.parentNode;
    var atcDiv = document.createElement("div");
    atcDiv.innerHTML += "<div class='atc-ctn' id='atc-ctn' style='width:100px;height:100px;border: 1px solid red;'></div>";
    parentDom.appendChild(atcDiv);
    */
    $(".atc-ctn").addClass("home");
}