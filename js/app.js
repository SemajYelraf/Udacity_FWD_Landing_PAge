

function buildNavigation(){
    
    /** Build nav bar */
    document.body.insertAdjacentHTML("afterbegin", "<ul class='flexContainer' id='navList'><li id='sect1'><a id='aSect1'>Section One</a></li><li id='sect2'><a id='aSect2'>Section Two</a></li><li id='sect3'><a id='aSect3'>Section Three</a></li><li id='sect4'><a id='aSect4'>Section Four</a></li></ul>");
    
    /** Hilite first item */
    document.getElementsByTagName('a')[0].style.backgroundColor = '#FF0000'; // RED
    
    /** Hilite first section */
    document.getElementById('sectionOne').classList.add('withBorder');
    
    /** Show navigation */
    document.getElementById('navList').classList.add('navShow');
    
}

/**********************************************************************************************/

function addNavListener(){
    
    const navList = document.getElementById('navList');
    navList.addEventListener('click', moveToSection);
}

/**********************************************************************************************/

function setNavTimer(sectName){
    
    if ( sectName === 'section two' || sectName === 'section three' || sectName === 'section four'){
        
        setTimeout(function(){
            document.getElementById('navList').classList.remove('navShow');
            document.getElementById('navList').classList.add('navHide');
        }, 1000);
        
    } else {

        setTimeout(function(){
            window.scrollTo({top: 0, behavior: 'smooth'});
        }, 500);
    }
    
}

/**********************************************************************************************/

function addPageLoadListener(){
    
    window.addEventListener('load', function(){
        window.scrollTo(0,0);
    });
}

/**********************************************************************************************/

/**
    Description:
            
    -   Upon clicking on a navigation item, an EventListener is triggered.  The page is then scrolled
        to the section reflecting the item chosen.
 */

function moveToSection(evt){
    
    const inactiveBgColor = '#D3D3D3'; // GREY
    const activeBgColor = '#FF0000';   // RED

    const navSectionOne = document.getElementsByTagName('a')[0];
    const navSectionTwo = document.getElementsByTagName('a')[1];
    const navSectionThree = document.getElementsByTagName('a')[2];
    const navSectionFour = document.getElementsByTagName('a')[3];
    
    const firstSection = document.getElementsByClassName('sect')[0];
    const secondSection = document.getElementsByClassName('sect')[1];
    const thirdSection = document.getElementsByClassName('sect')[2];
    const fourthSection = document.getElementsByClassName('sect')[3];
    
    let currentSection = '';
    let yCoord = 0;
    
    target = evt.target.textContent.toLowerCase();
    
    if ( target === 'section one'){

        currentSection = document.getElementById('sectionOne');
        
        evt.target.style.backgroundColor = activeBgColor;
        navSectionTwo.style.backgroundColor = inactiveBgColor;
        navSectionThree.style.backgroundColor = inactiveBgColor;
        navSectionFour.style.backgroundColor = inactiveBgColor;
        
        firstSection.classList.add('withBorder');
        
        secondSection.classList.remove('withBorder');
        thirdSection.classList.remove('withBorder');
        fourthSection.classList.remove('withBorder');
        
        setNavTimer(target);
        
    } else if ( target === 'section two') {

        currentSection = document.getElementById('sectionTwo');
        
        evt.target.style.backgroundColor = activeBgColor;
        navSectionOne.style.backgroundColor = inactiveBgColor;
        navSectionThree.style.backgroundColor = inactiveBgColor;
        navSectionFour.style.backgroundColor = inactiveBgColor;

        secondSection.classList.add('withBorder');
        
        firstSection.classList.remove('withBorder');
        thirdSection.classList.remove('withBorder');
        fourthSection.classList.remove('withBorder');
        
        setNavTimer(target);

    } else if ( target === 'section three') {

        currentSection = document.getElementById('sectionThree');
        
        evt.target.style.backgroundColor = activeBgColor;
        navSectionOne.style.backgroundColor = inactiveBgColor;
        navSectionTwo.style.backgroundColor = inactiveBgColor;
        navSectionFour.style.backgroundColor = inactiveBgColor;
        
        thirdSection.classList.add('withBorder');
        
        firstSection.classList.remove('withBorder');
        secondSection.classList.remove('withBorder');
        fourthSection.classList.remove('withBorder');
        
        setNavTimer(target);

    } else {

        currentSection = document.getElementById('sectionFour');
        
        if (evt.target.id !== 'navList') {
        
            evt.target.style.backgroundColor = activeBgColor;
            navSectionOne.style.backgroundColor = inactiveBgColor;
            navSectionTwo.style.backgroundColor = inactiveBgColor;
            navSectionThree.style.backgroundColor = inactiveBgColor;
            
            fourthSection.classList.add('withBorder');
            
            firstSection.classList.remove('withBorder');
            secondSection.classList.remove('withBorder');
            thirdSection.classList.remove('withBorder');
            
            setNavTimer(target);

        }
        
    }
    
    if (evt.target.id !== 'navList') {

        currentSection.scrollIntoView({behavior: 'smooth'});
     
    }
}

/**********************************************************************************************/

function addScrollListener(){

    var prevPos = window.pageYOffset;  
    window.addEventListener('scroll', function(){
        
        let currPos = window.pageYOffset;
        if ( prevPos > currPos){
            document.getElementById('navList').classList.remove('navHide');
            document.getElementById('navList').classList.add('navShow');
        } else {
            document.getElementById('navList').classList.remove('navShow');
            document.getElementById('navList').classList.add('navHide');
        }
        
        prevPos = currPos;
    })
    
}

/**********************************************************************************************/

function addPagePostionListener(){
 
    const sectionOne = document.getElementById('sectionOne');
    const sectionTwo = document.getElementById('sectionTwo');
    const sectionThree = document.getElementById('sectionThree');
    const sectionFour = document.getElementById('sectionFour');
    
    window.addEventListener('scroll', () => {
    
        let lastPagePosition = window.pageYOffset;    
        setTimeout( () => {
            if ( lastPagePosition <= 600 ){
                sectionOne.classList.add('withBorder');
                sectionTwo.classList.remove('withBorder');
            } else if ( lastPagePosition >= 651 && lastPagePosition <= 1250 ) {
                sectionOne.classList.remove('withBorder');
                sectionTwo.classList.add('withBorder');
                sectionThree.classList.remove('withBorder');
            } else if ( lastPagePosition >= 1251 && lastPagePosition <= 1800 ) {
                sectionTwo.classList.remove('withBorder');
                sectionThree.classList.add('withBorder');
                sectionFour.classList.remove('withBorder');
            } else {
                sectionThree.classList.remove('withBorder');
                sectionFour.classList.add('withBorder');
            }
        }, 500);
            
    })
}

/**********************************************************************************************/

function addExpandCollapseListener(){
    
    const nodes = document.getElementsByClassName('header');
    
    for ( let i = 0; i < nodes.length; i++ ){
    
        document.getElementsByClassName('para')[i].style.display = 'none';
        
    }
    
    for ( let i = 0; i < nodes.length; i++ ){
    
        let header = document.getElementsByTagName('h2')[i];
        let para = document.getElementsByTagName('p')[i];
        let sect = document.getElementsByTagName('section')[i];
        
        header.addEventListener('click', function(){
            if (para.style.display === 'none'){
                
                let pmChildElem = header.firstElementChild;
                header.removeChild(pmChildElem);
                header.insertAdjacentHTML('beforeend', '<i class="plusMinus">&#x002D;</i>');
                
                para.style.display = 'block';
                sect.style.height = '100vh';
            } else {
                
                let pmChildElem = header.firstElementChild;
                header.removeChild(pmChildElem);
                header.insertAdjacentHTML('beforeend', '<i class="plusMinus">&#x002B;</i>');

                para.style.display = 'none';
                sect.style.height = '10vh';
            }
            
        })
    }
}

/** Functions to be executed ******************************************************************/

addPagePostionListener();
addPageLoadListener();
buildNavigation();
addNavListener();
addScrollListener();


