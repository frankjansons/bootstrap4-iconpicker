$.fn.iconPicker = function() {
	
    return this.each(function() {

		//////////YOUR SETTINGS/////////////
		//Add more list files in the folder data/ for more icons
		var $files = ["fa-regular","fa-solid","fa-brands"];
		//Name of the navtab with icons
		var $categories = ["Regular","Solid","Brands"];
		//Prefix for icon class
		var $prefix = ["far fa-","fas fa-","fab fa-"];
		//Number of icons in a row
		var $nrOfIconsPerRow = 10;
		
		//////////STAY AWAY IF YOU DON'T KNOW WHAT YOU DO/////////////
		var $first = true;
		var $selected = "";
		var $button = $(this);
		var $iconPicker = $button.attr('id');
		
		$button.after('<input type="hidden" name="'+$iconPicker+'" id="iconHiddenInput'+$iconPicker+'" value=""><div id="iconMenu'+$iconPicker+'" class="iconMenu" aria-labelledby="chooseIcon"><ul class="nav nav-tabs" id="iconTab'+$iconPicker+'" role="tablist"></ul><div class="tab-content" id="iconTabContent'+$iconPicker+'"></div></div>');
		$('#iconMenu'+$iconPicker+'').hide();
		
		if($button.attr('placeholder') > "") {
			$button.html('<i class="'+$button.attr('placeholder')+'"></i>');
			$('#iconHiddenInput'+$iconPicker).val($button.attr('placeholder'));
		}
		
		$.each($files,function($idx,$file) {
			$.get("data/"+$file+".list",function($data, $status){
				$icons = $data.split("\n");
				$class = $first ? "nav-link active" : "nav-link";
				$('ul#iconTab'+$iconPicker).append('<li class="nav-item"><a class="'+$class+'" id="'+$file+'-tab" data-toggle="tab" href="#'+$file+$iconPicker+'" role="tab" aria-controls="'+$file+$iconPicker+'" aria-selected="false">'+$categories[$idx]+'</a></li>');
				$('div#iconTabContent'+$iconPicker).append(iconTab($icons,$file,$idx));
				$('#table'+$iconPicker+'>tbody>tr>td.iconOption').css('cursor','pointer');
				$('#table'+$iconPicker+'>tbody>tr>td.iconOption').click(function(){
					$click = $(this).html();
					if ($selected != $click) {
						$selected = $click;
						$button.html($click);
						$return = $click.split('"');
						$('#iconHiddenInput'+$iconPicker).val($return[1]);
						$('#iconMenu'+$iconPicker).hide();
					}
				});
				$('#myInput'+$file+$iconPicker).on("keyup", function() {
					var value = $(this).val().toLowerCase();
					$('#table'+$iconPicker+' td').filter(function() {
					  $(this).toggle($(this).html().toLowerCase().indexOf(value) > -1)
					});
				});
			});
		});
		
		function iconTab($icons,$file,$idx) {
			$class = $first ? "iconTabPane tab-pane fade show active" : "iconTabPane tab-pane fade";
			$html = '<div class="'+$class+'" id="'+$file+$iconPicker+'" role="tabpanel" aria-labelledby="'+$file+$iconPicker+'-tab"><table class="table" id="table'+$iconPicker+'">';
			$html += '<input id="myInput'+$file+$iconPicker+'" type="text" class="form-control" placeholder="Search..">';
			$last = 0;
			$.each($icons,function($rnr,$icon){
				$icon = $icon.slice(0,-1); //remove linebreak
				if($rnr % $nrOfIconsPerRow == 0) {
					$html += '<tr>';
				}
				$html += '<td class="iconOption"><i class="'+$prefix[$idx]+$icon+'"></i></td>';
				
				if($rnr % $nrOfIconsPerRow == $nrOfIconsPerRow - 1) {
					$html += '</tr>';
				}
				$last = $rnr % $nrOfIconsPerRow;
			});
			for($i=$last; $i<$nrOfIconsPerRow-1; $i++) {
				$html += '<td>&nbsp;</td>';
			}
			if($last < $nrOfIconsPerRow-1) {
				$html += '</tr>';
			}
			$html += '</table></div>';
			$first = false;
			return $html;
		}
		
		$button.click(function() {
			$('#iconMenu'+$iconPicker).toggle();
		});


	});
 
};