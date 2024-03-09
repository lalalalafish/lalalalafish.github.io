let myImage=document.querySelector('img');

myImage.onclick=function(){
    let mySrc= myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.jpg') {
        myImage.setAttribute('src','images/avatar.jpg');
    }else{
        myImage.setAttribute('src','images/firefox-icon.jpg');
    }
};


let myButton=document.querySelector('button');
let myHeading=document.querySelector('h1');

function setUserName(){
    let myName=prompt('Please enter you name');
    if(!myName || myName === null){
        setUserName();
    }else{
        localStorage.setItem('name',myName);
        myHeading.innerHTML='Mozilla is COOL!' + myName;
    }
}

if(!localStorage.getItem('name')){
    setUserName();
}else{
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is COOL!' + storedName;
}
myButton.onclick=function(){
    setUserName();
}