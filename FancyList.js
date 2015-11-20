var FancyList = function () {
  this.list = Array.prototype.slice.call(arguments);

  for ( i=1; i<this.list.length; i++ ) {
    if ( typeof this.list[i] !== typeof this.list[0] ) {
      console.log('same type of arguments please' );
    }
  }

  for ( i=1; i<this.list.length; i++ ) {
    if ( typeof this.list[i] !== typeof this.list[0] ) {
      var index = this.list.indexOf(this.list[i]);
      this.list.splice(index,1);
    }
  }
};

FancyList.prototype.getItemAt = function(index) {
  if (this.list[index] > -1) {
    return console.log('Your item is ' + this.list[index])
  } else {
    console.log('There is not item at that index')
  }
};

FancyList.prototype.getItemsAt = function(index, numberOfItems) {

  if (this.list[index] > -1) {
    console.log('Your items are  ' + this.list.slice(index , index + numberOfItems));
  } else {
    console.log('There are items startig from that that index')
  }

};

FancyList.prototype.addItem = function(item) {

  if ( typeof item !== typeof this.list[0] ) {
    console.log('nope, all same type of arguments please' );
  } else {
    this.list.push(item);
  }

};

FancyList.prototype.addItems = function() {

  for (i=0; i<arguments.length; i++)
    if ( typeof arguments[i] === typeof this.list[0] ) {
      this.list.push(arguments[i])
    } else {
      console.log('nope, all same type of arguments please' );
    }

};

FancyList.prototype.insertItemAt = function(index, item) {

  if ( typeof item !== typeof this.list[0] ) {
    console.log('nope, all same type of arguments please' );
  } else {
    this.list.splice(index, 0 , item);
  }

};

FancyList.prototype.insertItemsAt = function(index, items) {

  for (i=1; i<arguments.length; i++)
    if ( typeof arguments[i] === typeof this.list[0] ) {
      this.list.splice(index, 0 , items);
    } else {
      console.log('nope, all same type of arguments please' );
    }

};

FancyList.prototype.removeItemAt = function(index) {

  if (index > this.list.length) {
    console.log('No item at that index')
  } else {
    this.list.splice(index, 1);
  }

};

FancyList.prototype.removeItemsAt = function(index, numberOfItems) {

  if (index > this.list.length) {
    console.log('No item at that index');
  } else if ((numberOfItems + index) > this.list.length) {
    this.list.splice(index, numberOfItems);
    console.log('Not enough items starting from that index')
  } else {
    this.list.splice(index, numberOfItems);
  }

};

FancyList.prototype.removeItem = function(item) {

  for (i = 0; i < this.list.length; i++)
    if (this.list[i] === item) {
      this.list.splice(i, 1);
      return;
    }

};

FancyList.prototype.removeItems = function() {

  for (i=0; i < this.list.length; i++) {
    for (j = 0; j < arguments.length; j++) {
      if (this.list[i] === arguments[j]) {
        this.list.splice(i, 1);
      }
    }
  }

};






