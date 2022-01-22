let s = "cbbd";

function checkPalidrom(str) {
  let i = 0;
  let j = str.length - 1;
  while (i < j) {
    if (str[i] !== str[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
}

var longestPalindrome = function (s) {
  let big = 0;
  let ans = "";
  for (let i = 0; i < s.length; i++) {
    for (let j = i; j <= s.length; j++) {
      let str = "";
      for (let k = i; k < j; k++) {
        str += s[k];
      }
      if (checkPalidrom(str) && str.length > big) {
        ans = str;
        big = str.length;
      }
    }
  }
  console.log(ans)
};
longestPalindrome(s);
