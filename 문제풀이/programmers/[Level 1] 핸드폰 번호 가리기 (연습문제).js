function solution(phone_number) {
  /*
    /\d(?=\d{4})/g 정규표현식으로 처리할 수  있음 
  */
  return phone_number.slice(0, -4).replace(/\d/g, '*') + phone_number.slice(-4);
}

solution('01033334444');
solution('027778888');
