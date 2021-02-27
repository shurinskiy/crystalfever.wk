(() => {

	$('.desk__item').on('click', function(e) {
		let $self = $(this);
		let type = $self.data('type')
		
		$self.addClass(`desk__item_${type}`);
	});

})();
