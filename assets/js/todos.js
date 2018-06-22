//Check off specific ToDos  by Clicking
$('ul').on('click','li', function(){
/*	if($(this).css('color')==='rgb(128, 128, 128)'){ /*WE HAVE TO USE RGB VERSION TO COMPARE*/
		/*$(this).css({
			textDecoration: 'none',
			color: 'black'
		});
	}
	else{
	$(this).css({
		textDecoration: 'line-through',
		color: 'grey'
	});
	}*/ //THE NEXT LINE IS THE EQUIVALENT TO ALL THAT IS UP
	$(this).toggleClass('completed');
});

//Delete an item on clicking
$('ul').on('click', 'span', function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});

//ADD NEW TODOS
$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		var textInside = $(this).val();
		$(this).val("");
		//Create new LI and add it to the current UL
		$("ul").append("<li class='tasktext'><span><i class='fa fa-trash'></i></span> "+ textInside + "</li>");
	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
})