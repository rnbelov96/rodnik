/* eslint-disable no-param-reassign */
export {};

const openedModalList: Element[] = [];

const modalFormInfoList = [
  {
    title: 'Оставьте заявку на бесплатную консультацию',
    button: 'Получить консультацию',
  },
  {
    title: 'Оставьте заявку на презентацию франшизы и финансовую модель',
    button: 'Получить презентацию',
  },
  {
    title: 'Зафиксируйте вашу прибыль',
    button: 'Зафиксировать прибыль',
  },
  {
    title: 'Оставьте заявку и узнайте о формате подробнее',
    button: 'Узнать о формате подробнее',
  },
  {
    title: 'Оставьте заявку и получите финансовую модель',
    button: 'Получить финансовую модель',
  },
];

const closeModal = (modalEl: HTMLDivElement) => {
  modalEl.style.opacity = '0';
  modalEl.style.overflowY = 'inherit';
  modalEl.style.pointerEvents = 'none';
  document.body.style.overflowY = 'auto';
  document.body.style.paddingRight = '0px';
};

const openModal = (modalEl: HTMLDivElement) => {
  if (window.innerWidth > document.body.clientWidth) {
    document.body.style.paddingRight = `${window.innerWidth - document.body.clientWidth}px`;
  }
  modalEl.style.opacity = '1';
  modalEl.style.overflowY = 'auto';
  modalEl.style.pointerEvents = 'auto';
  document.body.style.overflowY = 'hidden';
};

const modalElList = document.querySelectorAll('.modal');
const [formModalEl, policyModalEl, youtubeAdvModalEl] = modalElList;

const youtubeAdvModalWrapperEl = youtubeAdvModalEl?.querySelector(
  '.modal__center-wrapper',
) as HTMLDivElement;
let isYoutubeAdvModalOpened = false;

const formTitleEl = formModalEl.querySelector('.js-modal-form-title') as HTMLSpanElement;
const formBtnEl = formModalEl.querySelector('.js-modal-form-btn') as HTMLButtonElement;

const modalWrapperElList = document.querySelectorAll('.modal__center-wrapper');
modalElList.forEach(modalEl => {
  modalEl.addEventListener('click', (e: Event) => {
    if (e.target === e.currentTarget || [...modalWrapperElList].includes(e.target as Element)) {
      const clickedModal = e.currentTarget as HTMLDivElement;
      if (clickedModal === youtubeAdvModalEl) {
        const iframe = clickedModal.querySelector('iframe');
        if (iframe) {
          const iframeSrc = iframe.src;
          iframe.src = iframeSrc;
        }
      }
      closeModal(clickedModal);
    }
  });
});

const closeModalElList = document.querySelectorAll('.modal__close');
closeModalElList.forEach(closeEl => {
  closeEl.addEventListener('click', () => {
    closeModal(openedModalList[0] as HTMLDivElement);
    openedModalList.shift();
  });
});

// Найти кнопки и прописать события
const policyBtnElList = document.querySelectorAll('.js-policy');
policyBtnElList.forEach(el => {
  el.addEventListener('click', () => {
    openedModalList.unshift(policyModalEl);
    openModal(policyModalEl as HTMLDivElement);
  });
});

const callbackBtnElList = document.querySelectorAll('.js-callback');
callbackBtnElList.forEach(btn => {
  btn.addEventListener('click', () => {
    openedModalList.unshift(formModalEl);
    formTitleEl.textContent = modalFormInfoList[0].title;
    formBtnEl.textContent = modalFormInfoList[0].button;
    openModal(formModalEl as HTMLDivElement);
  });
});

const presentBtnElList = document.querySelectorAll('.js-present');
presentBtnElList.forEach(btn => {
  btn.addEventListener('click', () => {
    openedModalList.unshift(formModalEl);
    formTitleEl.textContent = modalFormInfoList[1].title;
    formBtnEl.textContent = modalFormInfoList[1].button;
    openModal(formModalEl as HTMLDivElement);
  });
});

const fixBtnElList = document.querySelectorAll('.js-fix');
fixBtnElList.forEach(btn => {
  btn.addEventListener('click', () => {
    openedModalList.unshift(formModalEl);
    formTitleEl.textContent = modalFormInfoList[2].title;
    formBtnEl.textContent = modalFormInfoList[2].button;
    openModal(formModalEl as HTMLDivElement);
  });
});

const formatBtnElList = document.querySelectorAll('.js-format');
formatBtnElList.forEach(btn => {
  btn.addEventListener('click', () => {
    openedModalList.unshift(formModalEl);
    formTitleEl.textContent = modalFormInfoList[3].title;
    formBtnEl.textContent = modalFormInfoList[3].button;
    openModal(formModalEl as HTMLDivElement);
  });
});

const finBtnElList = document.querySelectorAll('.js-fin');
finBtnElList.forEach(btn => {
  btn.addEventListener('click', () => {
    openedModalList.unshift(formModalEl);
    formTitleEl.textContent = modalFormInfoList[4].title;
    formBtnEl.textContent = modalFormInfoList[4].button;
    openModal(formModalEl as HTMLDivElement);
  });
});

const youtubeAdvBtnCallEl = document.querySelector('.js-youtube-adv');
youtubeAdvBtnCallEl?.addEventListener('click', () => {
  if (!isYoutubeAdvModalOpened) {
    isYoutubeAdvModalOpened = true;
    youtubeAdvModalWrapperEl.innerHTML = `
      <iframe
        class="modal__video"
        width="1520"
        height="855"
        src="https://www.youtube.com/embed/LwY_hrxLHVY"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    `;
  }
  openedModalList.unshift(youtubeAdvModalEl);
  openModal(youtubeAdvModalEl as HTMLDivElement);
});
