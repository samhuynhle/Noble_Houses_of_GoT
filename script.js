$(document).ready(function(){

    $(".image_containers").click(function(){
        var api = `https://anapioficeandfire.com/api/houses/${$(this).attr('id')}`;
        console.log($(this).attr('id'));
        console.log(api);

        $.get(api, function(data){
            
            var all_the_titles = "";
            for (var looper = 0; looper < data['titles'].length; looper++){
                all_the_titles += data['titles'][looper];
                if (looper < data['titles'].length - 1){
                    all_the_titles += ", ";
                }
            }

            var all_the_information = "";
            all_the_information += `<h5>Name:</h5> <p>${data['name']}</p>`;
            all_the_information += `<h5>Words:</h5> <p>${data['words']}</p>`;
            all_the_information += `<h5>Titles:</h5> <p>${all_the_titles}</p>`;
            $("#box_of_information").hide().html(all_the_information).fadeIn();

        })
    });

})
