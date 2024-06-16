// Return if the phrase is a palindrome

function isPalindrome(s) {
  let L = 0;
  let R = s.length - 1;
  while (R > L) {
    let char1 = s[L].toLowerCase();
    let char2 = s[R].toLowerCase();
    if (isValid(char1) && isValid(char2)) {
      if (char1 === char2) {
        L++;
        R--;
      } else {
        return false;
      }
    } else if (!isValid(char1)) {
      L++;
    } else if (!isValid(char2)) {
      R--;
    }
  }
  return true;

  function isValid(char) {
    return isNumber(char) || isLetter(char);
  }

  function isNumber(char) {
    return char >= "0" && char <= "9";
  }

  function isLetter(char) {
    return char >= "a" && char <= "z";
  }
}
