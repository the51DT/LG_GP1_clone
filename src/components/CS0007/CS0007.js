function blockImgAlign() {
  const innerBox = document.querySelectorAll('.CS0007 .type-card__align');
  innerBox.forEach(item => {
    const listCount = item.querySelectorAll('.c-step-option-list__item').length;
    const listItem = item.querySelectorAll('.c-step-option-list__item');
    if (listCount < 4) {
      listItem[0].parentElement.style.justifyContent = 'center';
    }
  });
}
blockImgAlign();

function videoToggle() {
  // const video = document.querySelectorAll('.c-video-box');
  const videoButton = document.querySelectorAll('.c-video-box__button');
  const videoContent = document.querySelectorAll('.c-video-box__content');
  videoButton.forEach((buttonEl, buttonIndex) => {
    buttonEl.addEventListener('click', () => {
      videoContent.forEach((videoEl, videoIndex) => {
        if (buttonIndex === videoIndex) {
          if (videoEl.paused) {
            videoEl.play();
            buttonEl.classList.add('c-video-box__button--pause');
            setTimeout(() => {
              buttonEl.classList.add('c-video-box__button--hidden');
            }, 1500);
          } else {
            videoEl.pause();
            buttonEl.classList.remove('c-video-box__button--pause');
            buttonEl.classList.remove('c-video-box__button--hidden');
          }
        }
      });
    });
    videoContent.forEach((videoEl2, videoIndex2) => {
      videoEl2.addEventListener('click', () => {
        if (buttonIndex === videoIndex2) {
          videoEl2.addEventListener('play', () => {
            videoEl2.play();
            buttonEl.classList.add('c-video-box__button--pause');
            setTimeout(() => {
              buttonEl.classList.add('c-video-box__button--hidden');
            }, 1500);
          });
          videoEl2.addEventListener('pause', () => {
            videoEl2.pause();
            buttonEl.classList.remove('c-video-box__button--pause');
            buttonEl.classList.remove('c-video-box__button--hidden');
          });
        }
      });
    });
  });
}
videoToggle();

function openAndCloseModal() {
  const btnElement = document.querySelectorAll('.CS0007 .c-step-option-list__item .req .cmp-button');
  // open the modal
  for (let i = 0; i < btnElement.length; i++) {
    btnElement[i].addEventListener('click', e => {
      e.target.closest('.c-step-option-list__item').querySelector('.editreq-modal .CS0026').style.display = 'block';
      document.documentElement.style.overflow = 'hidden';
    });

    btnElement[i]
      .closest('.c-step-option-list__item')
      .querySelector('.editreq-modal .CS0026 .c-modal__closebtn')
      .addEventListener('click', e => {
        e.target.parentElement.closest('.editreq-modal .CS0026').style.display = 'none';
        document.documentElement.style.overflow = 'auto';
      });
  }
}
openAndCloseModal();
