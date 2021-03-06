module.exports = function check(str, bracketsConfig) {
    const configAsArrayOfStrings = [];
    bracketsConfig.forEach(item => {
        configAsArrayOfStrings.push(item[0] + item[1]);
    });
    while (str.length > 0) {
        let testStr = str;
        configAsArrayOfStrings.forEach(pattern => {
            testStr = testStr.replace(pattern, '');
        });
        if (testStr === str) {
            return false;
        }
        str = testStr;
    }
    return true;
}