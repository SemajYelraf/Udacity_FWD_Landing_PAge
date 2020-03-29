

function buildNavigation(){
    
    /** Build nav bar */
    document.body.insertAdjacentHTML("afterbegin", "<ul class='flexContainer' id='navList'><li id='sect1'><a>Section One</a></li><li id='sect2'><a>Section Two</a></li><li id='sect3'><a>Section Three</a></li></ul>");
    
    /** Bring page to top position, hilite first item */
    document.getElementById('sectionOne').scrollIntoView({behavior: 'smooth'});
    document.getElementsByTagName('a')[0].style.backgroundColor = '#FF0000';
    
    /** Hilite first section */
    document.getElementsByTagName('section')[0].style.border = "1.5px solid red";
    document.getElementsByTagName('section')[0].style.borderRadius = "10px";
    
}

/**********************************************************************************************/

function addNavListener(){
    
    const navList = document.getElementById('navList');
    navList.addEventListener('click', moveToSection);
}

/**********************************************************************************************/

function setNavTimer(sectName){
    
    if ( sectName === 'section two' ){
        
        setTimeout(function(){
            document.getElementById('navList').style.top = "-50px";
        }, 1000);
        
    } else {

        setTimeout(function(){
            window.scrollTo(0,0);
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
    
    const activeBorder = "1.5px solid red";
    const activeBorderRadius = "10px";
    const inactiveBorder = "none";

    const navSectionOne = document.getElementsByTagName('a')[0];
    const navSectionTwo = document.getElementsByTagName('a')[1];
    const navSectionThree = document.getElementsByTagName('a')[2];
    
    const firstSection = document.getElementsByClassName('sect')[0];
    const secondSection = document.getElementsByClassName('sect')[1];
    const thirdSection = document.getElementsByClassName('sect')[2];
    
    let currentSection = '';
    
    target = evt.target.textContent.toLowerCase();
    
    if ( target === 'section one'){

        currentSection = document.getElementById('sectionOne');
        
        evt.target.style.backgroundColor = activeBgColor;
        navSectionTwo.style.backgroundColor = inactiveBgColor;
        navSectionThree.style.backgroundColor = inactiveBgColor;
        
        firstSection.style.border = activeBorder;
        firstSection.style.borderRadius = activeBorderRadius;
        
        secondSection.style.border = inactiveBorder;
        thirdSection.style.border = inactiveBorder;
        
        setNavTimer(target);
        
    } else if ( target === 'section two') {

        currentSection = document.getElementById('sectionTwo');
        
        evt.target.style.backgroundColor = activeBgColor;
        navSectionOne.style.backgroundColor = inactiveBgColor;
        navSectionThree.style.backgroundColor = inactiveBgColor;

        secondSection.style.border = activeBorder;
        secondSection.style.borderRadius = activeBorderRadius;
        
        firstSection.style.border = inactiveBorder;
        thirdSection.style.border = inactiveBorder;
        
        setNavTimer(target);

    } else {

        currentSection = document.getElementById('sectionThree');
        
        if (evt.target.id !== 'navList') {
        
            evt.target.style.backgroundColor = activeBgColor;
            navSectionOne.style.backgroundColor = inactiveBgColor;
            navSectionTwo.style.backgroundColor = inactiveBgColor;
            
            thirdSection.style.border = activeBorder;
            thirdSection.style.borderRadius = activeBorderRadius;
            
            firstSection.style.border = inactiveBorder;
            secondSection.style.border = inactiveBorder;

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
            document.getElementById('navList').style.top = "0";
        } else {
            document.getElementById('navList').style.top = "-50px";            
        }
        
        prevPos = currPos;
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

addPageLoadListener();
buildNavigation();
addNavListener();
addScrollListener();


