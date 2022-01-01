export const isPangram = (str) => {
  var letters = '';
  var reg = /[a-z]/i;
  var splited = str.split('');
    
  for(let x = 0; x < splited.length; x++){   
    if(reg.test(splited[x]) === true){
      letters = letters + splited[x];
    }
  }
  
  letters = letters.toLowerCase();
  splited = letters.split('');
  var result = [...new Set(splited)];
  result.sort();
  result = result.toString();

    
  if(result === 'a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z'){return true} else {return false};

}