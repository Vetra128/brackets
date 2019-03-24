module.exports = function check(str, bracketsConfig) {
  // your solution
    let arg = bracketsConfig;
    let bracketsOpen = [];
    let bracketsClose = [];
    let bracketsSame = [];
    arg.map((item) => {
        if (item[0] != item[1]) {
            bracketsOpen.push(item[0]);
            bracketsClose.push(item[1]);
        } else {
            bracketsSame.push(item[0])
        }
    });
    let l=str.length;
    let char;
    let last;
    let stack=[];

    for (let i = 0; i < l; i++) {
        char = str[i];
        if (bracketsClose.indexOf(char) > -1) {
            last = bracketsOpen[bracketsClose.indexOf(char)];
            if (stack.length === 0 || (stack.pop() !== last)) {
                return false;
            }

        }
        else if (bracketsSame.indexOf(char) > -1){
            if (stack[stack.length-1] === char) {
                stack.pop();
            }
            else {
                stack.push(char);
            }
        }
        else {
            stack.push(char);
        }
    }

    return (stack.length === 0);

}
