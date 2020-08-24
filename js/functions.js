/*****************************************************************************/
/*                                                                           */
/*  Dynamic Document Creation                                                */
/*  Created by Tayfun Oezhoroz on 20017                                      */
/*                                                                           */
/*****************************************************************************/

function getSetOfLottoNumbersReadyToDisplay(){
    var getSetofLottoNumbers1 = detectDoubleNumbersAndChangeThem();
    return sortedSetofLottoNumbers1 = getSetofLottoNumbers1.sort(function(a, b){return a-b});
}

function getSetofLottoNumbers(){
    var lottoNumberSet = [];
    //console.log(lottoNumberSet); 
    for(var i=0; i < 6; ++i){
        lottoNumberSet.push(randomNumberWithRange(1, 45));
    }
    //console.log(lottoNumberSet);
    return lottoNumberSet;
}
  
function randomNumberWithRange(numberRangeBegin, numberRangeEnd){
    var randomNumber = Math.floor((Math.random() * numberRangeEnd) + numberRangeBegin);
    //console.log("Random Number: " + randomNumber); 
    return randomNumber;
}
    
function detectDoubleNumbersAndChangeThem(){
        var results = [];
        var setOfNumbersHasDoubleNumbers = false;
        var sorted_arr = [];
        do{
            var arr = getSetofLottoNumbers();
            //sort numbers in array
            sorted_arr = arr.slice().sort(function(a, b){return a-b});
            // JS by default uses a crappy string compare.
            // (we use slice to clone the array so the original array won't be modified)
            
            //detect double number in array
            for (var i = 0; i < arr.length - 1; i++) {
                if (sorted_arr[i + 1] == sorted_arr[i]) {
                    setOfNumbersHasDoubleNumbers = true;

                    // double number in array detected > new iteration
                    console.log("Double Number: true -> " + sorted_arr);

                    // clear array
                    sorted_arr = [];
                }else{
                    setOfNumbersHasDoubleNumbers = false;
                    //console.log("Double Number: false -> " + sorted_arr);
                }
            }
        }while(setOfNumbersHasDoubleNumbers);

        var setOfNumbersWithoutDoubleNumbers = sorted_arr;
        console.log("--------------------------------------------");
        console.log(setOfNumbersWithoutDoubleNumbers);
        return setOfNumbersWithoutDoubleNumbers;
    }

    function arrayOfNmubersToString(arrayOfNumbers){ 
        var stringOfNUmbers = "";
        for(var i=0; i < arrayOfNumbers.length; i++){
            stringOfNUmbers += "  " + arrayOfNumbers[i];
        }
        console.log(stringOfNUmbers);
        return stringOfNUmbers;
    }

    function arrayOfNmubersToTemplate(arrayOfNumbers){
        var stringOfNUmbers = '<div class="oneLineContainer">';
        for(var i=0; i < arrayOfNumbers.length; i++){
            stringOfNUmbers += '<div class="oneLine">' + arrayOfNumbers[i] + '</div>'; 
        }
        stringOfNUmbers += '</div>';
        //console.log(stringOfNUmbers);
        return stringOfNUmbers;
    }