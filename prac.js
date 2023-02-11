/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    let count = 0,index = 0,diag=numRows-1, collection = [];
    let i = 0, flag=  false;
    while(i < s.length){
        if(collection.length < numRows){
            collection.push([]);
        }
        collection[index].push(s.charAt(i));
        if (index + 1 < numRows && !flag) {
            index++;
        }
        else {
            index--;
            flag = true;
            if(index <= 0){
                flag = false;
            }
        }
        i++;
    }
    let result = "";
    collection.forEach((item) => {
        result += item.join("");
    })
    return result;
};
console.log(convert("PAYPALISHIRING", 3));