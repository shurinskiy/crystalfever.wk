(() => {

	let $minesboard = $('input[name="minesboard"]');

	$('.panel__button').on('click', function(e) {
		let mines = $(this).find('input[name="mines"]').val();
		$minesboard.val(mines);
	})

})();
