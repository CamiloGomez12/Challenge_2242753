var socialMedia = {
    facebook: 'http://facebook.com',
    twitter: 'http://twitter.com',
    flickr: 'http://flickr.com',
    youtube: 'http://youtube.com',
    wordpress:'https://wordpress.com/es/',
    linkedin:'https://co.linkedin.com/',
    meetup:'https://www.meetup.com/lp/how-to-group-start?utm_medium=SEM&utm_source=google&utm_campaign=mmrk_adwords_orgacq_es_branded&utm_term=group&utm_content=lp_grp_v2&gclid=CjwKCAjwtfqKBhBoEiwAZuesiI_D9tHabRLXFyIYgVQm1cFRsspmwKnmWHGh4L76VGMLiNXOfuQX2BoCM_IQAvD_BwE',
   google:'https://www.google.com/'
};
var socialList = function() {
    var  output = '<ul>', 
      myList = document.querySelectorAll('.socialmediaicons');
  
    for (var key in arguments[0]) {
      output+= '<li><a href="' + socialMedia[key] + '">' +
        '<img src="images/' + key + '.png" alt="icon for '+key+'">' +
        '</a></li>';
    }
    output+= '</ul>';
    
    for (var i = myList.length - 1; i >= 0; i--) {
      myList[i].innerHTML = output;
    };
  }(socialMedia);