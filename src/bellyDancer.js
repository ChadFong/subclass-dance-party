var makeBellyDancer = function(top, left, timeBetweenSteps){
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('bellydancer');
};

makeBellyDancer.prototype = Object.create(makeDancer.prototype);
makeBellyDancer.prototype.constructor = makeBellyDancer;
makeBellyDancer.prototype.step = function(){
  makeDancer.prototype.step.call(this);
  // Add belly dancing below.

};
