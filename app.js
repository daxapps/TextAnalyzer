// Word Count
// split word using regex
// put words in an array
// array.length
function wordCount() {
	$('button[type="submit"]').click( function() {
		$('.hidden').removeClass
    var numOfWords = $('#user-text').val().replace(/^[\s,.;]+/, "").replace(/[\s,.;]+$/, "").split(/[\s,.;]+/);
    alert(numOfWords.length);
	});
}

$(function() {
	wordCount();
})