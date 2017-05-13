
function textAnalyzer() {
	$('button[type="submit"]').click( function(event) {
		event.preventDefault();


    	var wordsArray = $('#user-text').val().replace(/^[\s,.;]+/, "").replace(/[\s,.;]+$/, "").split(/[\s,.;]+/);
    	var wordCount = wordsArray.length;
    	var uniqueWordCount = jQuery.unique(wordsArray).length;
 		var wordLengthCounter = 0;

 		for(var i = 0; i < wordsArray.length; i++){
 			wordLengthCounter += wordsArray[i].length;
 		}
 		var avgWordLength = wordLengthCounter/wordCount;

 		$(".js-word-count").text(wordCount);
		$(".js-unique").text(uniqueWordCount);
		$(".js-avg-word-length").text(avgWordLength.toFixed(2) + " characters");
		$("dl").removeClass("hidden");
	});
}

$(textAnalyzer);
