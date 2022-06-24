// 날짜(dd)를 seed로 이용한 suffle 함수
const shuffle = (array: number[], seed: number) => {
  let newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    let j = Math.floor((0.1 * seed + Math.random() * 0.1) * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};
// 날짜(YYYMMDD)와 질문의 답변에 기반한 번호 picker
const pick = (array: number[], answers: boolean[]) => {
  const today = +new Date().toISOString().substring(0, 10).replace(/-/g, "");
  const endOfNoL = 45;
  const numberOfGroups = 6;
  const quotient = Math.floor(endOfNoL / numberOfGroups);
  const reminder = endOfNoL % numberOfGroups;

  const lottoNumbers = [];
  let numbers = [];
  for (let i = 0; i < numberOfGroups; i++) {
    if (i === numberOfGroups - 1) {
      numbers = array.slice(quotient * i, array.length);
      let positionToAnswer = i % answers.length;
      if (answers[positionToAnswer]) {
        lottoNumbers.push(numbers[today % reminder]);
      } else {
        lottoNumbers.push(numbers[reminder - (today % reminder)]);
      }
    } else {
      numbers = array.slice(quotient * i, quotient * (i + 1));
      let positionToAnswer = i % answers.length;
      if (answers[positionToAnswer]) {
        lottoNumbers.push(numbers[today % quotient]);
      } else {
        lottoNumbers.push(numbers[quotient - (today % quotient)]);
      }
    }
  }
  return lottoNumbers;
};

export const numberPicker = (answers: boolean[]) => {
  const NoL = [];
  for (let i = 1; i < 46; i++) {
    NoL.push(i);
  }
  const today = new Date().getDate();
  const seed = today % 10;
  const shuffledNoL = shuffle(NoL, seed);
  return pick(shuffledNoL, answers);
};
