// This function clears all the values
function clearScreen() {
    document.getElementById("result").value = "";
}

function display(value) {
    document.getElementById("result").value += value;
}

function calculate() {
    let p = document.getElementById("result").value;
    let q = eval(p);
    document.getElementById("result").value = q;
}
const themeChangeEle = document.querySelector('.themeChange');

//Theme change functionality
themeChangeEle.addEventListener('click', function() {
    let theme = document.querySelector('.themeChange').value;
    if (theme === 'DarkMode') {
        document.querySelector('.calculator').style.backgroundColor = '#212122';
        document.querySelector('.themeChange').value = 'LightMode';
        // #b0e9f5
    } else {
        document.querySelector('.calculator').style.backgroundColor = '#f8f6d5';
        document.querySelector('.themeChange').value = 'DarkMode';
    }

})