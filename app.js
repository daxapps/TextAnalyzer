
function textAnalyzer() {
	$('button[type="submit"]').click( function(event) {
		event.preventDefault();
    wordsArray = $('#user-text').val().replace(/^[\s,.;]+/, "").replace(/[\s,.;]+$/, "").split(/[\s,.;]+/);

    
    // wordsArray.forEach(function(word) {
    // 	var wordLength = [];
    // 	wordLength.append(word.length)
    // 	alert(wordLength)
    // })

    // total wowrd count
    // alert(wordsArray.length);

    // Unique word count
   	// alert(jQuery.unique(wordsArray).length);

	// alert(wordsArray.forEach(function(word){
	// 	// var wordLength = word.length;
	// 	var wordLengthTotal = 0;		
	// 	wordLengthTotal += word.length;
	// 	return wordLengthTotal;
	// 	 })
	// );
 	// alert(wordLengthTotal);
 	// alert(wordsArray.reduce());

 		$(".js-word-count").text(wordsArray.length);
		$(".js-unique").text(jQuery.unique(wordsArray).length);
		// $(".js-avg-word-length").text(avgWordLength);
		$("dl").removeClass("hidden");
	});
}

// function avgWordLength () {
// 	$('button[type="submit"]').click( function() {
 	
//  });
// }

$(textAnalyzer);
