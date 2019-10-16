window.addEventListener("click",function(){
    document.getElementById("inputTag").focus();
})

function createInput() {
    
    let codeUK = document.createElement("code");
    let spanElmnt = document.createElement("span");
    spanElmnt.setAttribute("class","sym");
    spanElmnt.innerText="> ";
    codeUK.append(spanElmnt);

    let inputElmnt = document.createElement("input");
    inputElmnt.setAttribute("id","inputTag");
    inputElmnt.setAttribute("type","text");
    inputElmnt.setAttribute("onkeydown","onEnter(event,value)");
    inputElmnt.setAttribute("autofocus","autofocus");
    spanElmnt.append(inputElmnt);
    document.getElementById('main').append(codeUK);
    
    let br = document.createElement("br");
    document.getElementById('main').appendChild(br);
    // window.scrollTo(0,document.body.scrollHeight);
    document.getElementById("inputTag").focus();
}

function onEnter(event , val) {
    // console.log(value);
    if(event.key === "Enter"){
        disable();
        let v = val.toLowerCase()
        switch (v) {
            case 'help':
                // console.log("help");
                let help = document.createElement("code");
                // help.setAttribute("id","error");
                help.innerHTML="<span class='cmd'>sn</span> for social networks <br><span  class='cmd'>edu</span> for education<br><span class='cmd'>exp</span> for experience<br><span class='cmd'>light</span> & <span class='cmd'>dark</span> for page themes";
                document.getElementById("main").append(help);
                let hbr = document.createElement("br");
                document.getElementById('main').appendChild(hbr);
                createInput();
                break;

            case 'sn':
                let sn = document.createElement("code");
                sn.innerHTML="<a target='_blank' href='https://github.com/tarunspartan'><img width=80 height=80 src='./images/github.svg'></a> <a target='_blank' href='https://api.whatsapp.com/send?phone=919000163423'><img width=80 height=80 src='./images/whatsapp.svg'></a> <a target='_blank' href='https://www.facebook.com/tarunspartan1'><img width=80 height=80 src='./images/facebook.svg'></a> <a target='_blank' href='https://twitter.com/tarunspartan1'><img width=80 height=80 src='./images/twitter.svg'></a> <a target='_blank' href='https://www.instagram.com/tarunspartan/'><img width=80 height=80 src='./images/instagram.svg'></a> <a target='_blank' href='https://www.linkedin.com/in/tarunspartan/'><img width=80 height=80 src='./images/linkedin.svg'></a> <a target='_blank' href='mailto:tarunspartan1234@outlook.com'><img width=80 height=80 src='./images/mail.svg'></a><br>";
                document.getElementById("main").append(sn);
                // let snbr = document.createElement("br");
                // document.getElementById('main').appendChild(snbr);
                // sn.appendChild(snbr);
                createInput();
                break;

            case 'edu':
                let edu = document.createElement("code");
                edu.setAttribute("class","e");
                edu.innerHTML="<b>Bachelor of Technology in CSE</b><br><i>Miracle Educational Society, VZM.<br>Graduated in 2019</i><br><br><b>Intermediate - MPC</b><br><i>Srinivasa Jr. College, VZM.<br>Graduated in 2015</i>";
                document.getElementById("main").append(edu);
                let edubr = document.createElement("br");
                document.getElementById('main').appendChild(edubr);
                createInput();
                break;

            case 'exp':
                let exp = document.createElement("code");
                exp.setAttribute("class","e");
                exp.innerHTML="<b>Fresher</b><br><br><i>Currently learning React & have moderate knowledge on Angular & Ionic Framework.";
                document.getElementById("main").append(exp);
                let expbr = document.createElement("br");
                document.getElementById('main').appendChild(expbr);
                createInput();
                break;

            case 'light':
                document.documentElement.style.setProperty('--body-background-color', '#f6f6f6');
                document.documentElement.style.setProperty('--body-color', '#121212');
                document.documentElement.style.setProperty('--input-color', 'black');
                document.documentElement.style.setProperty('--input-caret-color', 'black');
                createInput();
                break;

            case 'dark':
                document.documentElement.style.removeProperty('--body-background-color', 'white');
                document.documentElement.style.removeProperty('--body-color', 'black');
                document.documentElement.style.removeProperty('--input-color', 'black');
                document.documentElement.style.removeProperty('--input-caret-color', 'black');
                createInput();
                break;

            case 'clear': 
                    window.location.reload(true);
                break;

            case 'cls': 
                window.location.reload(true);
                break;

            case '':
                createInput();
                break;
        
            default:
                let unknown = document.createElement("code");
                unknown.setAttribute("id","error");
                unknown.innerText=val+" : command not found";
                document.getElementById("main").append(unknown);
                let cnfbr = document.createElement("br");
                document.getElementById('main').appendChild(cnfbr);
                createInput();
                break;
        }
    }
}

function disable() {
    document.getElementById("inputTag").setAttribute("disabled","");
    document.getElementById("inputTag").removeAttribute("autofocus","autofocus");
    document.getElementById("inputTag").removeAttribute("id","inputTag");
}
