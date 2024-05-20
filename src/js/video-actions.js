'use strict';

import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

const instance = basicLightbox.create(`
    <iframe class="video-modal" src="https://www.youtube.com/embed/Jh6jZftn2e0" width="960" height="515" frameborder="0"></iframe>
`);

const playVideoBtn = document.querySelector('.video-play-btn');
playVideoBtn.addEventListener('click', () => instance.show());
