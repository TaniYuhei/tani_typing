var p = document.getElementById('text');

var textLists = [
    'helloworld',
    'Thisismyapp',
    'Howareyou',
    'HelloHello'
];

var checkTexts = [];
createText()
function createText() {
    if (textLists.length == 0) {
        // タイピング終了
        p.textContent = "終了！"
        return
    }
    checkTexts = textLists[0].split('').map(value => {
        var span = document.createElement('span');
        span.textContent = value;
        p.appendChild(span);
        return span;
    });
}
document.addEventListener('keydown', keyDown);
function keyDown(e) {
    if (e.key === checkTexts[0].textContent) {
        checkTexts[0].className = 'add-green';
        checkTexts.shift();
    }
    if (checkTexts.length == 0) {
        p.textContent = ""
        textLists.shift()
        createText()
    }
}