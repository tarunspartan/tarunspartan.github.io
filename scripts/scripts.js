function createInput() {
    
    let codeUK = document.createElement("code");
    let spanElmnt = document.createElement("span");
    spanElmnt.setAttribute("class","sym");
    spanElmnt.innerText="> ";
    codeUK.append(spanElmnt);

    let inputElmnt = document.createElement("input");
    inputElmnt.setAttribute("id","help");
    inputElmnt.setAttribute("type","text");
    // inputElmnt.setAttribute("placeholder","Type here...");
    inputElmnt.setAttribute("onkeydown","onEnter(event,value)");
    // inputElmnt.autofocus = true;
    // document.getElementById("help");
    inputElmnt.setAttribute("autofocus","autofocus");
    spanElmnt.append(inputElmnt);
    document.getElementById('main').append(codeUK);
    
    let br = document.createElement("br");
    document.getElementById('main').appendChild(br);
    window.scrollTo(0,document.body.scrollHeight);
}

function onEnter(event , val) {
    // console.log(value);
    // let val = document.getElementById('help').value;
    if(event.key === "Enter"){
        disable();
        let v = val.toLowerCase()
        switch (v) {
            case 'help':
                // console.log("help");
                let help = document.createElement("code");
                // help.setAttribute("id","error");
                help.innerHTML="<span class='help'>sn</span> for social networks <br><span  class='help'>edu</span> for education";
                document.getElementById("main").append(help);
                let hbr = document.createElement("br");
                document.getElementById('main').appendChild(hbr);
                createInput();
                break;

            case 'sn':
                let sn = document.createElement("code");
                sn.innerHTML="<a target='_blank' href='https://github.com/tarunspartan'><img width=80 height=80 src='./images/github.svg'></a> <a target='_blank' href='https://api.whatsapp.com/send?phone=9000163423'><img width=80 height=80 src='./images/whatsapp.svg'></a> <a target='_blank' href='https://www.facebook.com/tarunspartan1'><img width=80 height=80 src='./images/facebook.svg'></a> <a target='_blank' href='https://twitter.com/tarunspartan1'><img width=80 height=80 src='./images/twitter.svg'></a> <a target='_blank' href='https://www.instagram.com/tarunspartan/'><img width=80 height=80 src='./images/instagram.svg'></a> <a target='_blank' href='https://www.linkedin.com/in/tarunspartan/'><img width=80 height=80 src='./images/linkedin.svg'></a><br>";
                document.getElementById("main").append(sn);
                // let snbr = document.createElement("br");
                // document.getElementById('main').appendChild(snbr);
                // sn.appendChild(snbr);
                createInput();
                break;

            case 'edu':
                let edu = document.createElement("code");
                edu.innerHTML="Still working on this...";
                document.getElementById("main").append(edu);
                let edubr = document.createElement("br");
                document.getElementById('main').appendChild(edubr);
                createInput();
                break;

            case '':
                console.log("empty");
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
    document.getElementById("help").setAttribute("disabled","");
    document.getElementById("help").removeAttribute("autofocus","autofocus");
    document.getElementById("help").removeAttribute("id","help");
}