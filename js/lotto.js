
function initLotto(){
    detectDoubleNumbersAndChangeThem();
    var arrayTemplatedNumbers = [];

    function addNumbersToViewBox(){
        var lottoNumbers = getSetOfLottoNumbersReadyToDisplay();

        //view on top
        $("#lottoZahl1").html(lottoNumbers[0]);
        $("#lottoZahl2").html(lottoNumbers[1]);
        $("#lottoZahl3").html(lottoNumbers[2]);
        $("#lottoZahl4").html(lottoNumbers[3]);
        $("#lottoZahl5").html(lottoNumbers[4]);
        $("#lottoZahl6").html(lottoNumbers[5]);

        //view in box

        //save templated lotto numbers in array
        arrayTemplatedNumbers.push(arrayOfNmubersToTemplate(lottoNumbers));

        //clear div container
        $("#displayTipps").html("");

        // reverse iteration to show last set on top
        for(i=arrayTemplatedNumbers.length; i >= 0; i--){
            $("#displayTipps").append(arrayTemplatedNumbers[i]);
        }
    }
    
    $("#newLottoTipp").click(function(){
        addNumbersToViewBox();
    });

    setInterval(function(){
        addNumbersToViewBox();
    }, 2000); 
    
}