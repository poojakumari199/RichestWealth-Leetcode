var maximumWealth = function(accounts) {
    var maximum = 0;
    for(let i = 0; i<accounts.length; i++){
        let sum = 0;
        for(let j = 0; j<accounts[i].length; j++){
            sum += accounts[i][j];
        }
        maximum = Math.max(maximum, sum);
    }
    console.log(maximum);
    return maximum;
     
};