export const clean = (num) => {
  const filterFunction = (str) => {
    str = str.replace(/[().-]/g, '');
    str = str.replace(/[\s+]/g, '');
    return str;
  }
  let formated = filterFunction(num);

  if(formated.length == 11 && formated.charAt(0) == 1){formated = formated.slice(1, formated.length)};

  if(num.length == 9){throw new Error('Incorrect number of digits')};

  if(num.length == 11 && num.charAt(0) != 1){throw new Error('11 digits must start with 1')};

  if(formated.length > 11){throw new Error('More than 11 digits')};

  if(/[a-zA-Z]/.test(num) == true){throw new Error('Letters not permitted')};

  if(/[!@#$%¨&*()_=a-zA-Z.:><=-]/.test(formated) == true){throw new Error('Punctuations not permitted')};

  if(formated.length == 10 && formated.charAt(0) == 0){throw new Error('Area code cannot start with zero')};

  if(formated.length == 10 && formated.charAt(0) == 1){throw new Error('Area code cannot start with one')};  

  if(num.charAt(6) == 0){throw new Error('Exchange code cannot start with zero')};

  if(num.charAt(6) == 1){throw new Error('Exchange code cannot start with one')};

  if(formated.length == 11 && formated.charAt(1) == 0){throw new Error('Area code cannot start with zero')};

  if(formated.length == 11 && formated.charAt(1) == 1){throw new Error('Area code cannot start with one')};

  if(formated.charAt(3) == 0){throw new Error('Exchange code cannot start with zero')};

  if(num.charAt(8) == 1){throw new Error('Exchange code cannot start with one')};

  return formated;
};
