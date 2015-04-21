// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps){
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"><img src="http://fc09.deviantart.net/fs70/f/2011/182/2/6/nyan_cat_by_bricu-d3ko0ax.png" height="42" width="42"></span>');

  this.timeBetweenSteps = timeBetweenSteps;
  this.step();
  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.setPosition(top, left);
};

Dancer.prototype.step = function(){
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left){
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.lineUp = function(location){
  this.$node.animate({
    top: '50%',
    left: location + '%'
  }, 2000);
};

Dancer.prototype.makeFriends = function(quadrant){

  this.$node.animate({
    top: quadrant.top + '',
    left: quadrant.left + ''
  }, 2000);
};
