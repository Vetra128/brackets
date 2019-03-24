module.exports = function check(str, bracketsConfig) {
  // your solution
    let arg = bracketsConfig;
    let bracketsOpen = [];
    let bracketsClose = [];
    arg.map((item) => {
        bracketsOpen.push(item[0]);
        bracketsClose.push(item[1]);
    });
    let i;
    let l=str.length;
    let char;
    let last;
    let stack=[];
    let index;
        // bracketsOpen=["(","{","["],
        // bracketsClose=[")","}","]"];

    for(i=0; i<l; i++){
        char=str[i];

        if(bracketsOpen.indexOf(char) != -1){
            stack.push(last=char);
        }else if((index=bracketsClose.indexOf(char))!=-1){
            if(last && last==bracketsOpen[index]){
                stack.pop();
                last=stack[stack.length-1];
            }else{
                return false;
            }
        }
    }
    return !last;

}
