function popup(link,windowname) {
    if (! window.focus)
        return true;
    var href;
    if (typeof(link) == 'string')
        href = link;
    else 
    href = link.href;

    window.open(href, windowname,'width=400,height=200,scrollbars=yes');
    return false
}
