var BellyDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('bellydancer');
};

BellyDancer.prototype = Object.create(Dancer.prototype);
BellyDancer.prototype.constructor = BellyDancer;
BellyDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  // Add belly dancing below.

};
