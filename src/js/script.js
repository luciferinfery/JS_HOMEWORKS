'use strict';

function calculatePotatoWeightKg(borshVolumeLiter) {
    const numberPotatosPerLiter = 4;
    const potatoGram = 75;

    const weightPotatoLiter = numberPotatosPerLiter * potatoGram;
    const totalPotatoWeight = borshVolumeLiter * weightPotatoLiter;

    return Math.ceil(totalPotatoWeight / 1000);
}
function calculatePotatoCost(borshVolumeLiter) {
    const potatoCost = 13;
    const potatoWeight = calculatePotatoWeightKg(borshVolumeLiter);
    return (potatoWeight * potatoCost);
}

const borshVolumeLiter = +prompt('Enter the number of liters of borsh:');

alert(`To cook ${borshVolumeLiter} liters of borsh you need to buy ${calculatePotatoWeightKg(borshVolumeLiter)} kg of potato that will cost ${calculatePotatoCost(borshVolumeLiter)} UAH.`);
