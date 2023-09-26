// This function clears all the values
function clearScreen() {
    document.getElementById("result").value = "";
}

function display(value) {
    document.getElementById("result").value += value;
}
//Used to calculate the result
function calculate() {
    let p = document.getElementById("result").value;
    let q = eval(p);
    document.getElementById("result").value = q;
}
const themeChangeEle = document.querySelector('.themeChange');
//Function used to change theme
const changeTheme = function(){
    let theme = document.querySelector('.themeChange').value;
    let ele = document.querySelectorAll('.btn-normal');
    if (theme === 'DarkMode') {
        document.querySelector('.calculator').style.backgroundColor = '#212122';
        document.querySelector('.themeChange').value = 'LightMode';
        for (let i = 0; ele.length > i; i++)
        ele[i].style.backgroundColor = '#b0e9f5';
    }
    else{
        theme = 'LightMode';
        document.querySelector('.calculator').style.backgroundColor = '#f8f6d5';
        document.querySelector('.themeChange').value = 'DarkMode';
        for (let i = 0; ele.length > i; i++)
                ele[i].style.backgroundColor = '#f3f0e2';
    }
}//Theme change functionality
themeChangeEle.addEventListener('click', changeTheme);