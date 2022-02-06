//console.log('hello');
(function () {
  //  console.log('deferred');
    const resetBtn = document.querySelector('.btn-reset');
    //removed , '#btn-opt' from 2 arrays
    const eleArray = ['.p1', '.p2', '.p3', '.btn', '#p1-opt', '#p2-opt', '#p3-opt'];
    const optionsList = ['#p1-opt', '#p2-opt', '#p3-opt'];
    let num = 1;

    optionsList.forEach(eleId => {
        const element = document.querySelector(eleId);
        element.checked = false;
    })

//start of new code
    window.onload = function () {
        // window.num = 1
        //console.log('onload');
        eleArray.forEach((eleId, key) => {
            const ele = document.querySelector(eleId);
            if (optionsList.indexOf(eleId) !== -1) {
                ele.addEventListener('click', onClickCheckBox);
            } else {
                ele.addEventListener('click', onClickAction);
            }
        })

        function onClickCheckBox(e) {
            // console.log(e, this)
            const eleToBeChanged = document.querySelector(`.${this.name}`);
            if (e.target.checked) {
                eleToBeChanged.removeEventListener('click', onClickAction, false);
                eleToBeChanged.addEventListener('click', onClickAction, true);
            } else {
                eleToBeChanged.removeEventListener('click', onClickAction, true);
                eleToBeChanged.addEventListener('click', onClickAction, false);
            }
        }

        function onClickAction(e) {
                e.preventDefault();
                //console.log(e.cancelable)
                addColor(this);
        }

        resetBtn.addEventListener('click', () => {
            resetPlayground();
        })
    }

//end of new code


    function addChild(text) {
        const list = document.querySelector('.list');
        const node = document.createElement("LI");
        const textNode = document.createTextNode(text);
        node.appendChild(textNode);
        list.appendChild(node);
    }

    function resetList() {
        const list = document.querySelector('.list')
        if (list) {
            list.remove();
            const order = document.querySelector('.order');
            const node = document.createElement("UL");
            node.classList.add('list');
            order.appendChild(node);
        }
    }

    function resetColors() {
        for (let i = 0; i < 4; i++) {
            const element = document.querySelector(eleArray[i]);
            element.style.backgroundColor = i == 3 ? '#9e33ff' : 'azure'
        }
        num = 1;
    }

    function resetPlayground() {
        resetColors();
        resetList();
    }

    function addColor(element) {
        //console.log(num, 'start');
        resetBtn.disabled = true;
        resetList();

        let color = '';
        if (num == 1) {
            color = '#ff4545';
            resetColors();
        }
        if (num == 2) {
            color = '#00bd94';
        }
        if (num == 3) {
            color = '#c7b600';
        }
        if (num == 4) {
            color = '#fc8403';
        }

        setTimeout((num, color) => {
            element.style.backgroundColor = color;
            addChild(element.classList[0].toString());
            if (num === 4) {
                resetBtn.disabled = false;
            }
        }, num * 500, num, color);

        num = num === 4 ? 1 : ++num;
    }
})()
