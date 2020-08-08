function clickOnTab(event){
    let activeTabs = document.querySelectorAll('.active');

    activeTabs.forEach(function(tab){
        tab.classList.remove('active');
    })
    
    event.target.classList.add('active');
    document.getElementById(event.target.childNodes[0].href.split('#')[1]).classList.add('active');
}

const element = document.getElementById('nav-tabs');

element.addEventListener('click', clickOnTab);