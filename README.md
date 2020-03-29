/*********************************************************************/
                             README
/*********************************************************************/

Project Name : 
--------------

FWD Landing Page



File list:
----------

- index.html
- style.css
- app.js


Design :
--------

  Page design is incorporates the following:
  - Dynamically built navigation
  - EventListener to scroll to selected navigation item
  - Selected item is identified on the page
  - Navigation bar is hidden but becomes visible when scrolling

  
Issues:
-------

- Page would not scroll to the top when selecting 'Section One' while view a 
    different section of the page. Also, selecting 'Selection Two' when 
    scrolled partly from bottom of page did not bring 'Selection Two' into
    full view nor hide the navigatin bar.
    These actions were forced using setTimout() in setNavTimer() called from moveToSection()

- The ul background color would be changed upon clicking to right of 
    'Selection Three'.  A check was placed the bottom of moveToSection() to verify the target id.
