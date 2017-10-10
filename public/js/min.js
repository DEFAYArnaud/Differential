var $ = function(str)
{
    if(document.querySelectorAll(str).length == 1)
    {
        return document.querySelector(str);
    }
    else
    {
        return document.querySelectorAll(str);
    }
}