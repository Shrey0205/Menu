$.ajax({
    type: 'get',
    url: 'https://themealdb.com/api/json/v1/1/filter.php?a=Canadian',
    success: function (response) {
        for (var i = 0; i < response.meals.length; i++) {
            // Check if the image URL is valid
            var imageUrl = response.meals[i].strMealThumb;
            if (imageUrl && imageUrl !== 'null' && imageUrl !== 'undefined') {
                var newitem = `<div class='col-md-3 m-2 shadow-lg p-3 mb-5 bg-white rounded text-center'>
                    <p>${response.meals[i].strMeal}</p>
                    <img src="${imageUrl}" alt="${response.meals[i].strMealThumb}" class='img-fluid'/>
                    <p>${response.meals[i].idMeal}</p>
                </div>`;

                $('#myitems').append(newitem);
            }
        }
    },

    error: function (error) {
        console.log(error);
    }
});
