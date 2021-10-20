/* eslint-disable no-param-reassign */
export {};

const leftColor = '#feed23';
const rightColor = '#ffffff';

const rangeElList = document.querySelectorAll('.js-range');

const processRange = document.querySelector(
  '.js-process-range',
) as HTMLInputElement;
const checkinRange = document.querySelector(
  '.js-checkin-range',
) as HTMLInputElement;
const workshopRange = document.querySelector(
  '.js-workshop-range',
) as HTMLInputElement;

const resultLabelEl = document.querySelector(
  '.js-calc-result',
) as HTMLSpanElement;

let result: number;

let processCurrentStep = 3;
let checkinCurrentStep = 3;
let workshopCurrentStep = 3;

const processEndpointElList = document.querySelectorAll(
  '.js-process-endpoints .calc__endpoint-dot',
);
const checkinEndpointElList = document.querySelectorAll(
  '.js-checkin-endpoints .calc__endpoint-dot',
);
const workshopEndpointElList = document.querySelectorAll(
  '.js-workshop-endpoints .calc__endpoint-dot',
);

const calcResult = () => {
  result = (Number(processRange.value) * 4500
      + Number(checkinRange.value) * 10500
      + Number(workshopRange.value) * 10500)
    * 0.2;
  resultLabelEl.textContent = result.toLocaleString();
  return result;
};

calcResult();

rangeElList.forEach(el => {
  const rangeEl = el as HTMLInputElement;

  const steps = (Number(rangeEl.max) - Number(rangeEl.min)) / Number(rangeEl.step);

  const currentStep = (Number(rangeEl.value) - Number(rangeEl.min)) / Number(rangeEl.step);

  rangeEl.style.background = `linear-gradient(to right, ${leftColor} 0%, ${leftColor} ${String(
    (currentStep / steps) * 100,
  )}%, ${rightColor} ${String(
    (currentStep / steps) * 100,
  )}%, ${rightColor} 100%)`;
});

processRange.addEventListener('input', e => {
  const rangeEl = e.currentTarget as HTMLInputElement;

  const steps = (Number(rangeEl.max) - Number(rangeEl.min)) / Number(rangeEl.step);

  const processPrevStep = processCurrentStep;

  processCurrentStep = (Number(rangeEl.value) - Number(rangeEl.min)) / Number(rangeEl.step);

  if (processPrevStep < processCurrentStep) {
    processEndpointElList[processCurrentStep].classList.add(
      'calc__endpoint-dot_active',
    );
  } else {
    processEndpointElList[processPrevStep].classList.remove(
      'calc__endpoint-dot_active',
    );
  }

  rangeEl.style.background = `linear-gradient(to right, ${leftColor} 0%, ${leftColor} ${String(
    (processCurrentStep / steps) * 100,
  )}%, ${rightColor} ${String(
    (processCurrentStep / steps) * 100,
  )}%, ${rightColor} 100%)`;

  calcResult();
});

checkinRange.addEventListener('input', e => {
  const rangeEl = e.currentTarget as HTMLInputElement;

  const steps = (Number(rangeEl.max) - Number(rangeEl.min)) / Number(rangeEl.step);

  const checkinPrevStep = checkinCurrentStep;

  checkinCurrentStep = (Number(rangeEl.value) - Number(rangeEl.min)) / Number(rangeEl.step);

  if (checkinPrevStep < checkinCurrentStep) {
    checkinEndpointElList[checkinCurrentStep].classList.add(
      'calc__endpoint-dot_active',
    );
  } else {
    checkinEndpointElList[checkinPrevStep].classList.remove(
      'calc__endpoint-dot_active',
    );
  }

  rangeEl.style.background = `linear-gradient(to right, ${leftColor} 0%, ${leftColor} ${String(
    (checkinCurrentStep / steps) * 100,
  )}%, ${rightColor} ${String(
    (checkinCurrentStep / steps) * 100,
  )}%, ${rightColor} 100%)`;

  calcResult();
});

workshopRange.addEventListener('input', e => {
  const rangeEl = e.currentTarget as HTMLInputElement;

  const steps = (Number(rangeEl.max) - Number(rangeEl.min)) / Number(rangeEl.step);

  const workshopPrevStep = workshopCurrentStep;

  workshopCurrentStep = (Number(rangeEl.value) - Number(rangeEl.min)) / Number(rangeEl.step);

  if (workshopPrevStep < workshopCurrentStep) {
    workshopEndpointElList[workshopCurrentStep].classList.add(
      'calc__endpoint-dot_active',
    );
  } else {
    workshopEndpointElList[workshopPrevStep].classList.remove(
      'calc__endpoint-dot_active',
    );
  }

  rangeEl.style.background = `linear-gradient(to right, ${leftColor} 0%, ${leftColor} ${String(
    (workshopCurrentStep / steps) * 100,
  )}%, ${rightColor} ${String(
    (workshopCurrentStep / steps) * 100,
  )}%, ${rightColor} 100%)`;

  calcResult();
});
