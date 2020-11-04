// objects are used for namespaces here
var RNG = RNG || {
  // all are important for the "random" formula using the time
  pRandom: new Date().getMilliseconds(),
  a: new Date().getMilliseconds()+100000,
  b: new Date().getMilliseconds()+(new Date().getSeconds()+100000),
  m: new Date().getMilliseconds()+100,
  nextRandom: function(min=0, max=1, onlyInt=false){
    // formula
    let val = ((((this.a * this.pRandom) + this.b) %  this.m));
    this.pRandom = val;
    //mapping the value
    let mapped =  Math.min(min, max)+(val%abs(max-min));
    // returning for use
    return mapped;
  }
}
