document.addEventListener('DOMContentLoaded', () => {
    // Sample images with labels, names, creation dates and download links
    const images = [
		{ label: 'GnwyvRqbYAE_f-D', name: 'x :3', url: 'https://pbs.twimg.com/media/GnwyvRqbYAE_f-D?format=png&name=orig', created: 'Apr 5, 2025' },
		{ label: 'GonA67sX0AA9K7i', name: 'hecking wholesome as frick 4 and x gettin to kno each other', url: 'https://pbs.twimg.com/media/GonA67sX0AA9K7i?format=jpg&name=orig', created: 'Apr 15, 2025' },
		{ label: 'GqY_U6DWYAAVej2', name: 'yaah h four getting babbied again .!!!', url: 'https://pbs.twimg.com/media/GqY_U6DWYAAVej2?format=jpg&name=orig', created: 'May 8, 2025' },
		{ label: 'GrxdeAiWoAA70cq', name: 'cakes cute i had to >.<', url: 'https://pbs.twimg.com/media/GrxdeAiWoAA70cq?format=png&name=orig', created: 'May 25, 2025' },
		{ label: 'GryVXrBXwAAUIlq', name: 'td :3', url: 'https://pbs.twimg.com/media/GryVXrBXwAAUIlq?format=jpg&name=orig', created: 'May 25, 2025' },
		{ label: 'GsB48_sbcAAUANC', name: 'fanny!', url: 'https://pbs.twimg.com/media/GsB48_sbcAAUANC?format=png&name=orig', created: 'May 28, 2025' },
		{ label: 'GsKP6EDaUAQYYKz', name: 'eep time in the exit for liy~ <3', url: 'https://pbs.twimg.com/media/GsKP6EDaUAQYYKz?format=png&name=orig', created: 'May 30, 2025' },
		{ label: 'GsLOR9VaUAMSf84', name: 'four hyper!', url: 'https://pbs.twimg.com/media/GsLOR9VaUAMSf84?format=jpg&name=orig', created: 'May 30, 2025' },
		{ label: 'GsV8seDaMAIr0X_', name: 'tree prevention :3', url: 'https://pbs.twimg.com/media/GsV8seDaMAIr0X_?format=png&name=orig', created: 'Jun 1, 2025' },
		{ label: 'GsbDGCObkAAI13K', name: 'fanny sound asleep :3', url: 'https://pbs.twimg.com/media/GsbDGCObkAAI13K?format=png&name=orig', created: 'Jun 2, 2025' },
		{ label: 'GspF9pHasAAxvw4', name: 'surprise lollipop gyat', url: 'https://pbs.twimg.com/media/GspF9pHasAAxvw4?format=png&name=orig', created: 'Jun 5, 2025' },
		{ label: 'GtAnNdnbEAA2fOK', name: 'puffy :3', url: 'https://pbs.twimg.com/media/GtAnNdnbEAA2fOK?format=png&name=orig', created: 'Jun 9, 2025' },
		{ label: 'GtJu2JkbYAAMuU4', name: 'ohnofirey im about to explode!!1!1', url: 'https://pbs.twimg.com/media/GtJu2JkbYAAMuU4?format=jpg&name=orig', created: 'Jun 11, 2025' },
		{ label: 'GttbM-BXwAA3iqa', name: 'x diaper pail', url: 'https://pbs.twimg.com/media/GttbM-BXwAA3iqa?format=png&name=orig', created: 'Jun 18, 2025' },
		{ label: 'Gtx7yRLXQAAAATH', name: 'doodle of one', url: 'https://pbs.twimg.com/media/Gtx7yRLXQAAAATH?format=png&name=orig', created: 'Jun 19, 2025' },
		{ label: 'GtyXoIyXwAAfGpr', name: 'clock is full of loser-os', url: 'https://pbs.twimg.com/media/GtyXoIyXwAAfGpr?format=jpg&name=orig', created: 'Jun 19, 2025' },
		{ label: 'GueDB4OaoAAU1oc', name: 'early birthday gift for SoftyBnuny', url: 'https://pbs.twimg.com/media/GueDB4OaoAAU1oc?format=png&name=orig', created: 'Jun 27, 2025' },
		{ label: 'Gu46DrkXwAAn2wm', name: '⚠️HYPER pillook', url: 'https://pbs.twimg.com/media/Gu46DrkXwAAn2wm?format=jpg&name=orig', created: 'Jul 3, 2025' },
		{ label: 'GvDO8cibAAAZ3lp', name: 'fanny (part 1)', url: 'https://pbs.twimg.com/media/GvDO8cibAAAZ3lp?format=jpg&name=orig', created: 'Jul 5, 2025' },
		{ label: 'GvMgDm4akAAse0h', name: 'fanny (part 2)', url: 'https://pbs.twimg.com/media/GvMgDm4akAAse0h?format=png&name=orig', created: 'Jul 6, 2025' },
		{ label: 'GvrgP1OXkAEJWwd', name: 'fanny (part 3)', url: 'https://pbs.twimg.com/media/GvrgP1OXkAEJWwd?format=jpg&name=orig', created: 'Jul 12, 2025' },
		{ label: 'GvrgP1LXMAATFbq', name: 'fanny (part 4)', url: 'https://pbs.twimg.com/media/GvrgP1LXMAATFbq?format=jpg&name=orig', created: 'Jul 12, 2025' },
		{ label: 'Gv9mSR-XkAAWAvQ', name: 'zro :3', url: 'https://pbs.twimg.com/media/Gv9mSR-XkAAWAvQ?format=png&name=orig', created: 'Jul 16, 2025' },
		{ label: 'Gwm8ECgaoAAEEiQ', name: 'needy berry', url: 'https://pbs.twimg.com/media/Gwm8ECgaoAAEEiQ?format=jpg&name=orig', created: 'Jul 24, 2025' },
		{ label: 'Gwrgt89bgAIOGCy', name: 'tpot 19 if it was good (Normal)', url: 'https://pbs.twimg.com/media/Gwrgt89bgAIOGCy?format=jpg&name=orig', created: 'Jul 25, 2025' },
		{ label: 'Gwrgy5zbgAM6c3x', name: 'tpot 19 if it was good (Fart Alt.)', url: 'https://pbs.twimg.com/media/Gwrgy5zbgAM6c3x?format=jpg&name=orig', created: 'Jul 25, 2025' },
		{ label: 'Gw_9ECnbwAAicuA', name: 'pillow butt (Normal)', url: 'https://pbs.twimg.com/media/Gw_9ECnbwAAicuA?format=png&name=orig', created: 'Jul 29, 2025' },
		{ label: 'Gw_9BfqbIAAYwk7', name: 'pillow butt (Fart Alt.)', url: 'https://pbs.twimg.com/media/Gw_9BfqbIAAYwk7?format=jpg&name=orig', created: 'Jul 29, 2025' },
		{ label: 'GxUDyUPaIAIhn4C', name: 'booklow (part 1)', url: 'https://pbs.twimg.com/media/GxUDyUPaIAIhn4C?format=jpg&name=orig', created: 'Aug 2, 2025' },
		{ label: 'GxUDyUVaIAIyy0q', name: 'booklow (part 2)', url: 'https://pbs.twimg.com/media/GxUDyUVaIAIyy0q?format=jpg&name=orig', created: 'Aug 2, 2025' },
		{ label: 'Gxnbjo1acAA7wqj', name: 'beeg golfie', url: 'https://pbs.twimg.com/media/Gxnbjo1acAA7wqj?format=jpg&name=orig', created: 'Aug 5, 2025' },
		{ label: 'GyGugjjacAA96b3', name: 'babble for bubble!', url: 'https://pbs.twimg.com/media/GyGugjjacAA96b3?format=png&name=orig', created: 'Aug 11, 2025' },
		{ label: 'GzqmJpIaYAAmko_', name: 'tearpop!', url: 'https://pbs.twimg.com/media/GzqmJpIaYAAmko_?format=jpg&name=orig', created: 'Aug 31, 2025' },
		{ label: 'G0J02GKbUAIF4aj', name: 'my very own teardrop!', url: 'https://pbs.twimg.com/media/G0J02GKbUAIF4aj?format=jpg&name=orig', created: 'Sep 6, 2025' },
		{ label: 'G0Qt6wAaEAEPhVy', name: 'pillowbook!', url: 'https://pbs.twimg.com/media/G0Qt6wAaEAEPhVy?format=jpg&name=orig', created: 'Sep 7, 2025' },
		{ label: 'G08PANCaQAAelmT', name: 'my hand slipped - Book', url: 'https://pbs.twimg.com/media/G08PANCaQAAelmT?format=png&name=orig', created: 'Sep 16, 2025' },
		{ label: 'G1Hk5dtaoAAGmJq', name: 'fanny sketch', url: 'https://pbs.twimg.com/media/G1Hk5dtaoAAGmJq?format=png&name=orig', created: 'Sep 18, 2025' },
		
		{ label: 'G14w8Tob0AEJe5i', name: 'caketag! (Normal)', url: 'https://pbs.twimg.com/media/G14w8Tob0AEJe5i?format=jpg&name=orig', created: 'Sep 27, 2025' },
		{ label: 'G14w8TlbsAAAg2v', name: 'caketag! (Fart Alt.)', url: 'https://pbs.twimg.com/media/G14w8TlbsAAAg2v?format=jpg&name=orig', created: 'Sep 27, 2025' },
		{ label: 'G2FLxABbEAALgxD', name: 'pillow ourp!', url: 'https://pbs.twimg.com/media/G2FLxABbEAALgxD?format=png&name=orig', created: 'Sep 30, 2025' },
		{ label: 'G2xIMcwaAAIyhry', name: 'gem balloon!', url: 'https://pbs.twimg.com/media/G2xIMcwaAAIyhry?format=png&name=orig', created: 'Oct 8, 2025' },
		{ label: 'G2yu8zqa8AALica', name: 'rewby (Normal)', url: 'https://pbs.twimg.com/media/G2yu8zqa8AALica?format=png&name=orig', created: 'Oct 9, 2025' },
		{ label: 'G2yvAbmbQAADIXw', name: 'rewby (Fart Alt.)', url: 'https://pbs.twimg.com/media/G2yvAbmbQAADIXw?format=png&name=orig', created: 'Oct 9, 2025' },
		{ label: 'G4eoK4Hb0AA6sDG', name: 'beeg snowball!', url: 'https://pbs.twimg.com/media/G4eoK4Hb0AA6sDG?format=jpg&name=orig', created: 'Oct 30, 2025' },
		{ label: 'G4fPICDa4AE2x7-', name: 'snowball again!', url: 'https://pbs.twimg.com/media/G4fPICDa4AE2x7-?format=png&name=orig', created: 'Oct 30, 2025' },
		{ label: 'G4yQE9JagAAUYGz', name: 'bouncy pillow!', url: 'https://pbs.twimg.com/media/G4yQE9JagAAUYGz?format=jpg&name=orig', created: 'Nov 2, 2025' },
        { label: 'G471Ad1bQAI3s5i', name: 'pillow again! (Normal)', url: 'https://pbs.twimg.com/media/G471Ad1bQAI3s5i?format=jpg&name=orig', created: 'Nov 4, 2025' },
		{ label: 'G471BuTbQAQ9uF2', name: 'pillow again! (Wet Alt.)', url: 'https://pbs.twimg.com/media/G471BuTbQAQ9uF2?format=jpg&name=orig', created: 'Nov 4, 2025' },
        { label: 'G5DP8A-bIAAwr6Z', name: 'pillow once again!', url: 'https://pbs.twimg.com/media/G5DP8A-bIAAwr6Z?format=jpg&name=orig', created: 'Nov 6, 2025' }
];

    const slidesContainer = document.getElementById('slidesContainer');
    const slideLabel = document.getElementById('slideLabel');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    let currentIndex = 0;

    // Initialize slides
    function initSlides() {
        slidesContainer.innerHTML = '';
        
        images.forEach((image, index) => {
            const slide = document.createElement('div');
            slide.className = 'slide';
            slide.style.backgroundImage = `url(${image.url})`;
            slide.dataset.index = index;
            slidesContainer.appendChild(slide);
        });
        
        updateSlideLabel();
    }

    // Update slide position
    function updateSlidePosition() {
        slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
        updateSlideLabel();
    }
    // Update the label display with additional info
    function updateSlideLabel() {
        const currentImage = images[currentIndex];
        slideLabel.innerHTML = `
                <h3>${currentImage.name}</h3>
                <p><b>Created</b>: ${currentImage.created}</p>
                <a href="${currentImage.url}" download="${currentImage.label}.jpg" class="download-btn" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="butt" stroke-linejoin="arcs"><path d="M3 15v4c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-4M17 9l-5 5-5-5M12 12.8V2.5"></path></svg> Download</a>
        `;
}

    // Go to previous slide
    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
        updateSlidePosition();
    });

    // Go to next slide
    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
        updateSlidePosition();
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            prevBtn.click();
        } else if (e.key === 'ArrowRight') {
            nextBtn.click();
        }
    });

    // Initialize the slideshow
    initSlides();
});