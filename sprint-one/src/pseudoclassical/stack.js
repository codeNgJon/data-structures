var Stack = function() {
  this.index = 0;

  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};


Stack.prototype.push = function(value){
  this[this.index] = value;
  this.index++;
};

Stack.prototype.pop = function(){
  if(this.index>0){
    this.index--;
  }
  var result = this[this.index];
  delete this[this.index];
  return result;
};

Stack.prototype.size = function(){
  return this.index;
};
