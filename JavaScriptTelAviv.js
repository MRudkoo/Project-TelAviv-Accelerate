'use strict'

/*JS for Show more*/
        const spekersBlockTwo = document.getElementById('spekersBlockTwo');
        const buttonShowMoreWrap = document.getElementById('buttonShowMoreWrap');

        function showMore() {
            if(spekersBlockTwo.style.display === 'none') {
                spekersBlockTwo.style.display = 'none';
                buttonShowMoreWrap.innerHTML = 'SHOW MORE';
            }else {
                spekersBlockTwo.style.display = 'flex';
                buttonShowMoreWrap.style.display = 'none';
            }
        }
        /*JS for scroll screen1*/
