// const slider = document.getElementById('sizeSlider');
// slider.addEventListener('input', handleChange);

// function handleChange(e) {
//     const imgs = document.getElementsByClassName("img");
//     for (let i = 0; i < imgs.length; i++) {
//         const { value, max } = e.target;
//         imgs[i].style.width = `${value * max}px`;
//         // imgs[i].style.height = `${value * max}px`;
//     }
// }

// document.getElementById("sizeSlider").oninput = function changeImageSize() {
//     var x = document.getElementById("sizeSlider").value;
//     document.getElementById("DSE2022CP1Q1EEMS").style.height = String(x * 10) + "px";
// }

function showhide(idVar) {
    if (document.getElementById(idVar).style.display == 'none') {
        document.getElementById(idVar).style.display = 'block'
    } else {
        document.getElementById(idVar).style.display = 'none'
    };
}

/usr/local / share / tessdata /

    function showhideByClass(classVar) {
        const collection = document.getElementsByClassName(classVar);

        var flag = false;
        for (let i = 0; i < collection.length; i++) {
            if (collection[i].style.display == 'none') {
                flag = true;
            }
        }

        var status
        if (flag == true) {
            status = "block"
        } else {
            status = "none"
        }

        for (let i = 0; i < collection.length; i++) {
            collection[i].style.display == status
        }

    }


function showhideAll(idVar, classVar, labelShow, labelHide) {
    const collection = document.getElementsByClassName(classVar);
    const btn = document.getElementById(idVar);
    if (btn.textContent == labelShow) {
        for (let i = 0; i < collection.length; i++) {
            collection[i].style.display = '';
            btn.classList.add('btnShown')
            btn.classList.remove('btnHidden')
        }
        btn.textContent = labelHide;
    } else {
        for (let i = 0; i < collection.length; i++) {
            collection[i].style.display = 'none';
            btn.classList.add('btnHidden')
            btn.classList.remove('btnShown')
        }
        btn.textContent = labelShow;
    }
}


