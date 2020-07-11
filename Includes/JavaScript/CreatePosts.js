function CreateFromArray(json)
{
    var generated = "";
    for(var i = 0; i < json.Posts.length; i++)
    { /*creates a post for each entry passed in*/
        generated += CreatePost(
            json.Posts[i].Title,
            json.Posts[i].ShortDesc,
            json.Posts[i].Date,
            json.Posts[i].Language,
            json.Posts[i].ImagePath,
            json.Posts[i].ProjectDesc,
        );
    }
    return generated;
}

function CreatePost(title, shortdesc, date, language, image,projectdesc)
{
    var value = '<div class="card">\n' + 
    '<h2 id = "ProjTitle">' + title + '</h2>\n' +
    '<h5>' + shortdesc + ', ' + date + '<t>Language: ' + language + '</t>Project Type: Self</h5>\n';
    if(image) /*checks to see if the image is undefined*/
    {
        value += '<img class="fakeimg" style="height:200px;" src="' + image + '" alt="project Headder image"></img>\n';
    }
    else
    {
        value += '<div class="fakeimg" style="height:200px;">Project Image</div>';
    }
    value += '<p>'+ projectdesc +'</p>' +
    '</div>\n';
    return value;
}