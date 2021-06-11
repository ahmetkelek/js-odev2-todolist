

function newElement() {

    let li = document.createElement("li");
    let textValue = document.querySelector("#task").value
    let t = document.createTextNode(textValue);


//localstroge ekleme start

    let localItems = JSON.parse(localStorage.getItem('localItem'))
    if (localItems === null) {
        taskList = []
    }
    else {
        taskList = localItems;
    }

    taskList.push(task.value)
    localStorage.setItem('localItem',JSON.stringify(taskList))

    document.querySelector('#task').innerHTML=localStorage.getItem('localItem')
    
    //localstroge ekleme end

    li.appendChild(t);
    if (textValue === "" || textValue.replace(/^\s+|\s+$/g, "").length == 0) {
        $(".error").toast("show"); // boşsa hata mesajı göster
    } else {
        $(".success").toast("show"); // doluysa eklendi mesajı göster
        document.querySelector("#list").appendChild(li);
    }


    document.querySelector("#task").value = "";

    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            let div = this.parentElement;
            div.style.display = "none";
        };
    }
}




let myInput = document.querySelectorAll("#li");
for (i = 0; i < myInput.length; i++) {
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myInput[i].appendChild(span);
}

let close = document.getElementsByClassName("close");
for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        let div = this.parentElement;
        div.style.display = "none";
    };
}

let list = document.querySelector("ul");
list.addEventListener(
    "click",
    function (event) {
        if (event.target.tagName === "li") {
            event.target.classList.toggle("checked");
        }
    },
    false
);