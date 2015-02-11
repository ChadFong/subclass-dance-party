var BlueBlinkyDancer = function(top, left, timeBetweenSteps){
  BlinkyDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('blueBlinky');
};

BlueBlinkyDancer.prototype = Object.create(BlinkyDancer.prototype);
BlueBlinkyDancer.prototype.constructor = BlueBlinkyDancer;
BlueBlinkyDancer.prototype.step = function() {
  BlinkyDancer.prototype.step.call(this);
}
