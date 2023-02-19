var image_tracker = 'picture-1';
function changeImage()
{
    var image = document.getElementById('picture');
    
    if(image_tracker=='picture-1')
    {
        image.src='tchaikovsky-2.jpg';
        image_tracker = 'picture-2';
    }
    else if(image_tracker=='picture-2')
    {
        image.src='tchaikovsky-3.jpg';
        image_tracker = 'picture-3';
    }
    else if(image_tracker=='picture-3')
    {
        image.src='tchaikovsky-4.jpg';
        image_tracker='picture-4';
    }
    else if(image_tracker=='picture-4')
    {
        image.src='tchaikovsky-5.jpg';
        image_tracker='picture-5';
    }
    else
    {
        image.src='tchaikovsky-1.jpg';
        image_tracker='picture-1';
    }
}