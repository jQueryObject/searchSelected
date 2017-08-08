(function($) {
	var selects = $('select');
	for (var i = 0; i < selects.length; i++) {
		createSelect(selects[i], i)
	}
	function createSelect(select_container, index) {
		var tag_select = $('<div></div>');
		tag_select.attr('class', 'select_box');
		tag_select.insertBefore(select_container);
		var select_showbox = $('<div></div>');
		select_showbox.css('cursor', 'pointer').attr('class', 'select_showbox').appendTo(tag_select);
		var ul_option = $('<ul></ul>');
		ul_option.attr('class', 'select_option');
		ul_option.appendTo(tag_select);
		createOptions(index, ul_option);
		tag_select.toggle(function() {
			ul_option.show();
			ul_option.parent().find(".select_showbox").addClass("active")
		}, function() {
			ul_option.hide();
			ul_option.parent().find(".select_showbox").removeClass("active")
		});
		var li_option = ul_option.find('li');
		li_option.on('click', function() {
			$(this).addClass('selected').siblings().removeClass('selected');
			var value = $(this).text();
			select_showbox.text(value);
			ul_option.hide()
		});
		li_option.hover(function() {
			$(this).addClass('hover').siblings().removeClass('hover')
		}, function() {
			li_option.removeClass('hover')
		})
	}
	function createOptions(index, ul_list) {
		var options = selects.eq(index).find('option'),
			selected_option = options.filter(':selected'),
			selected_index = selected_option.index(),
			showbox = ul_list.prev();
		showbox.text(selected_option.text());
		for (var n = 0; n < options.length; n++) {
			var tag_option = $('<li></li>'),
				txt_option = options.eq(n).text();
			tag_option.text(txt_option).appendTo(ul_list);
			if (n == selected_index) {
				tag_option.attr('class', 'selected')
			}
		}
	}
})(jQuery);
