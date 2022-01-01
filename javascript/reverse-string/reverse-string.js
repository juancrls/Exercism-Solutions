export const reverseString = (revString) => {
 
 var x = revString.length;
 var y = 0;
 let z = revString.length;
 let noia = "";
 for(y = 0;y < x; y++) {
  z = z - 1;
  noia = noia + revString.charAt(z);
  };

  return noia;
};
