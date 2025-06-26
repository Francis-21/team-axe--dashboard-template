(function ($) {
	$(document).ready(function () {
		$('.stm-try-demo-button').on('click', function (e) {
			e.preventDefault();
			
			$('.stm-try-demo-screen-wrapper').css('display', 'block');
			$('html').css('overflow-y', 'hidden');
			
			if (window._try_demo_data === undefined) {
				var newTab = window.open();
				var divContents = $(".stm-try-demo-screen-wrapper").html();
				var inlineCss = "<style> \n" +
					".stm-try-demo-screen-container  {\n" +
					"    width: 60%;\n" +
					"    height: 100vh;\n" +
					"    justify-content: center;\n" +
					"    display: flex;\n" +
					"    flex-direction: column;\n" +
					"    margin: auto;\n" +
					"    vertical-align: middle;\n" +
					"    position: relative;\n" +
					"}\n" +
					"\n" +
					".stm-try-demo-loading img {\n" +
					"    width: 300px;\n" +
					"}\n" +
					".stm-try-demo-loading-info h3 {\n" +
					"    font-family: 'system-ui';\n" +
					"    font-weight: 700;\n" +
					"    font-size: 30px;\n" +
					"    line-height: 38px;\n" +
					"    text-align: center;\n" +
					"    color: #303442;\n" +
					"    margin-top: -35px;\n" +
					"    margin-bottom: 15px;\n" +
					"}\n" +
					".stm-try-demo-loading-info span {\n" +
					"    font-family: 'system-ui';\n" +
					"    display: flex;\n" +
					"    justify-content: center;\n" +
					"    align-items: center;\n" +
					"    font-weight: 400;\n" +
					"    font-size: 17px;\n" +
					"    line-height: 24px;\n" +
					"    text-align: center;\n" +
					"    color: #303442;\n" +
					"    opacity: 0.7;\n" +
					"}\n" +
					".stm-try-demo-loading {\n" +
					"    text-align: center;\n" +
					"    margin-top: -200px;\n" +
					"}\n" +
					".stm-try-demo-loading video {\n" +
					"    text-align: center;\n" +
					"    margin: 0 auto;\n" +
					"    margin-bottom: 15px;\n" +
					"}\n" +
					".stm-try-demo-loading-info {\n" +
					"    width: 500px;\n" +
					"    margin: 0 auto;\n" +
					"    text-align: center;\n" +
					"}\n" +
					".stm-try-demo-loading-info span {\n" +
					"    margin-bottom: 30px;\n" +
					"}\n" +
					".stm-try-demo-loading-footer {\n" +
					"    display: flex;\n" +
					"    justify-content: center;\n" +
					"    position: fixed;\n" +
					"    bottom: 50px;\n" +
					"    left: 0;\n" +
					"    right: 0;\n" +
					"}\n" +
					"\n" +
					"\n" +
					".stm-try-demo-close {\n" +
					"    position: absolute;\n" +
					"    right: 20px;\n" +
					"    top: 20px;\n" +
					"    z-index: 1;\n" +
					"}\n </style>";
				var css = "<link rel=\"stylesheet\" type=\"text/css\" href=\"" + stm_try_demo_ajax_variable.urlCss + "\" />\n";
				newTab.document.write("<html><head><title>SandBox</title>" +
					"" + inlineCss +
					"</head><body>" + divContents + "</body></html>");
				newTab.document.close();
				jqXHR = $.ajax({
					url: stm_try_demo_ajax_variable.url,
					type: 'post',
					dataType: 'json',
					data: {
						action: 'stm_try_demo_loading_action',
						nonce: stm_try_demo_ajax_variable.nonce,
					},
					success(url) {
						newTab.location = url;
						if (url) {
							
							$('.stm-try-demo-creating, .stm-try-demo-loading img').css('display', 'none');
							$('.stm-try-demo-created, .stm-try-demo-loading video').css('display', 'block');
							
							window._try_demo_data = url
							
							$('.stm-try-demo-screen-wrapper').css('display', 'none');
							$('html').css('overflow-y', 'scroll');
						}
					},
				} );
			}
		});
		$('.stm-try-demo-screen-state').on('click', function () {
			if (window._try_demo_data && $(this).hasClass('explore-btn')) {
				window.open(window._try_demo_data, '_blank');
			} else {
				jqXHR.abort();
			}
			$('.stm-try-demo-screen-wrapper').css('display', 'none');
			$('html').css('overflow-y', 'scroll');
		});
	})
	
})(jQuery);
