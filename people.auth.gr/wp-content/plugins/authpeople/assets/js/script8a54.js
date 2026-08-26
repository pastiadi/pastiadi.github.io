/*
	jQuery(document).ready(function() {
		jQuery('.select-taxonomy').select2();	

		UIkit.util.ready(function() {
			let {$: e, $$: t} = UIkit.util, i = e("#tab-switcher");
			document.querySelectorAll("#tab-switcher li").forEach((e, t) => {
				e.addEventListener("mouseover", e => {
					setTimeout(() => {
						UIkit.switcher(i).show(t)
					}, 200)
				}, !1)
			});
			document.querySelectorAll("#tab-switcher li a").forEach((e, t) => {
				e.addEventListener("click", e => {
					window.location = e.target.href;
				}, !1)
			});
		});
	});
	*/	
	/*
	jQuery('thematiko_pedio').select2({
		minimumResultsForSearch: -1,
		placeholder: function(){
			$(this).data('placeholder');
		}
	});
	*/
	
/*	
	jQuery('#submit_btn').click(function() {
		var search_text = jQuery('#search-pro-text').val();	
		var thematiko_pedio = jQuery('#thematiko_pedio').val();	
		var methodos_ylopoihshs = jQuery('#methodos_ylopoihshs').val();	
		var grid_columns = jQuery('#grid_columns').val();	
		var glwssa = jQuery('#glwssa').val();	
		var select_order = jQuery('#select_order').val();	
		var program_status = jQuery('#program_status').val();
		jQuery.ajax({
			url: adminscripts.ajax_url,
			type: 'POST',
			data: { 
				action: 'kedivim_display_programs_grid', 
				search_text: search_text, 
				thematiko_pedio: thematiko_pedio, 	
				methodos_ylopoihshs: methodos_ylopoihshs,
				grid_columns: grid_columns,
				glwssa: glwssa,
				select_order: select_order,
				program_status: program_status
			},
			success: function (response) {			
				jQuery('#program-results').html(response); 			
			}
		});
		
		return false;
	});
*/	
	
	
	jQuery('#reset_button').click(function() {
		jQuery(".select-taxonomy").val('').trigger('change');
		jQuery("#search-pro-text").val("");
		jQuery('#search-pro-text').removeAttr('value');
		
	});
	
	
	jQuery(document).ready(function() {
		jQuery('.program-info-box').readmore({embedCSS: true, collapsedHeight: 300, moreLink: '<a href="#">Εμφάνιση περισσότερων</a>', lessLink: '<a href="#" class="readmore-showless">Εμφάνιση λιγότερων</a>'});
	});


	/* Μετατροπή ημερομηνίας ώστε να περιέχει / αντί για - */
	
	jQuery( ".start-date" ).each(function() {
		start_date = jQuery(this).text(); 
		var dateAr = start_date.split('-');
		var newStartDate = dateAr[2] + '/' + dateAr[1] + '/' + dateAr[0];
		jQuery(this).text(newStartDate);
	});

	jQuery( ".end-date" ).each(function() {
		end_date = jQuery(this).text(); 
		var dateAr2 = end_date.split('-');
		var newEndDate = dateAr2[2] + '/' + dateAr2[1] + '/' + dateAr2[0];
		jQuery(this).text(newEndDate);
	});
	/* Τέλος μετατροπής ημερομηνίας */
	
	
	
	if(jQuery('.ecs-posts').find('.elementor-posts-nothing-found').length == 1) {
		jQuery('#hidden-alert').removeClass('uk-hidden');
	} else {
		jQuery('#hidden-alert').addClass('uk-hidden');
	}
	
	
	//WCAG
	jQuery('.hfe-search-submit').attr('aria-label','search button');
	jQuery('.cat-item-icon').attr('alt','icon');
	jQuery('.eael-load-more-button').attr('aria-label','button load more');
	jQuery('.checkbox-toggle').attr('id','checkbox-toggle-id');
	jQuery("<label for='checkbox-toggle-id' class='uk-hidden'>checkbox</label>").insertBefore(".checkbox-toggle");
	jQuery('.program-image img').attr('alt','post feature image');
	jQuery('.kedivim-tax-title img').attr('alt','taxonomy icon');
	 