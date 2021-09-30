function doReloadWithCashe(){
    window.location.reload(false);
}

window.addEventListener('load', function(){

    this.setTimeout(doReloadWithCashe,5000);

});

function WriteDo(ch,action){
    var strCh = ch.toString(10);
    var strCommand = '<DL_CMD><DO><CH' + strCh + '>' + action + '</CH' + strCh + '></DO></DL_CMD>';

    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/command.xml', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send(strCommand);

    gDoRequest = 1;
}

function onDo(ch){
    if(window.confirm("オンしますか？")){
      WriteDo(ch,'ON');
    }
}

function offDo(ch){
    if(window.confirm("オフしますか？")){
        WriteDo(ch,'OFF');
    }
}

