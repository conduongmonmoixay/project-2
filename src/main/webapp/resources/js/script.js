$(document).ready(function() {
	$("input[value='Search']").on('click', function(){
		var userName = $("#sea").val();
		$.ajax({url: "/admin/search",type: "POST",dataType: "json",
			data: {userName: userName.toString()},
			success: function(data){
				console.log(data);
				var html = '';
				$.each(data, function(key, value){
					html += '<tr><td>'+value.id+'</td>'
					+ '<td>'+value.username+'</td>'
					+ '<td>'+value.password+'</td>'
					+ '<td>'+value.role+'</td>'
					+ '<td>'+value.status+'</td>'
					
					+ '<td><a href="${pageContext.request.contextPath}/edituser?id='+value.id+'">Edit</a></td><td>'
					+ '<a href="${pageContext.request.contextPath}/deleteuser?id='+value.id+'">Delete</a></td></tr>'
				});
				$('tbody:first').html(html);
			}
		});
	})
});

function logout() {
	$('#logoutForm').submit();
};