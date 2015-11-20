describe('FancyList', function () {

  describe('When you initialize a Fancy List', function() {

    it('it can be empty', function() {
      fancylist = new FancyList();
      expect(fancylist.list.length).toEqual(0);
    });

    it('it can be initialized with any type of data: numbers, arrays, booleans...', function() {
      fancylist = new FancyList('hello', 'wow');
      expect(fancylist.list.length).toEqual(2);

      fancylist = new FancyList(true, false);
      expect(fancylist.list.length).toEqual(2);

      fancylist = new FancyList(12, 3, 5);
      expect(fancylist.list.length).toEqual(3);

      fancylist = new FancyList(['hi', 'wow'],[true],[2,'hi']);
      expect(fancylist.list.length).toEqual(3);
    });

    it('it can contain only one type of element at time', function() {
      fancylist = new FancyList('hello', 2);
      expect(fancylist.list.length).toEqual(1);
    });

  });

  describe('Have lots of methods available', function() {

    var list;
    beforeEach(function() {
      fancylist = new FancyList(1,2,3);
    });

    it('it can add an item', function() {
      fancylist.addItem(1);
      expect(fancylist.list).toEqual([1,2,3,1]);
    });

    it('it can add a list of items', function() {
      fancylist.addItems(1,4);
      expect(fancylist.list).toEqual([1,2,3,1,4]);
    });

    it('it can insert a item or more in a specific position', function() {
      fancylist.insertItemAt(0,5);
      expect(fancylist.list).toEqual([5,1,2,3]);

      fancylist.insertItemsAt(0,1,1,1,1);
      expect(fancylist.list).toEqual([1,1,1,1,5,1,2,3]);
    });

    it('given a position, it can remove one item', function() {
      fancylist.removeItemAt(0);
      expect(fancylist.list).toEqual([2,3]);
    });

    it('given a position, it can remove a list of item\'s', function() {
      fancylist.removeItemsAt(0,2);
      expect(fancylist.list).toEqual([3]);
    });

    it('it can remove a specific item', function() {
      fancylist.removeItems(2);
      expect(fancylist.list).toEqual([1,3]);
    });

    it('it can remove more than one specific item', function() {
      fancylist.removeItems(1,3);
      expect(fancylist.list).toEqual([2]);
    });

  });

  describe('mixing a bit', function() {

    fancylist2 = new FancyList(['hi',2],[3,4,5],[true,false]);

    it('it can contain arrays ', function() {
      fancylist2.addItem([1]);
      expect(fancylist2.list).toEqual([['hi',2],[3,4,5],[true,false],[1]]);
    });

  });

});

