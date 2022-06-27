describe('Board', function() {

  describe('Empty board', function() {
    var matrix = [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ];
    var board = new Board(matrix);

    it('should not find a row conflict', function() {
      expect(board.hasAnyRowConflicts()).to.be.equal(false);
    });

    it('should not find a col conflict', function() {
      expect(board.hasAnyColConflicts()).to.be.equal(false);
    });

    it('should not find a rooks conflict', function() {
      expect(board.hasAnyRooksConflicts()).to.be.equal(false);
    });

    it('should not find a majorDiagonal conflict', function() {
      expect(board.hasAnyMajorDiagonalConflicts()).to.be.equal(false);
    });

    it('should not find a minorDiagonal conflict', function() {
      expect(board.hasAnyMinorDiagonalConflicts()).to.be.equal(false);
    });

    it('should not find a queens conflict', function() {
      expect(board.hasAnyQueensConflicts()).to.be.equal(false);
    });
  });

  describe('Board with row conflicts', function() {
    var matrix = [
      [0, 0, 0, 0],
      [1, 1, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ];
    var board = new Board(matrix);

    it('should find a row conflict', function() {
      expect(board.hasAnyRowConflicts()).to.be.equal(true);
    });

    it('should not find a col conflict', function() {
      expect(board.hasAnyColConflicts()).to.be.equal(false);
    });

    it('should find a rooks conflict', function() {
      expect(board.hasAnyRooksConflicts()).to.be.equal(true);
    });

    it('should not find a majorDiagonal conflict', function() {
      expect(board.hasAnyMajorDiagonalConflicts()).to.be.equal(false);
    });

    it('should not find a minorDiagonal conflict', function() {
      expect(board.hasAnyMinorDiagonalConflicts()).to.be.equal(false);
    });

    it('should find a queens conflict', function() {
      expect(board.hasAnyQueensConflicts()).to.be.equal(true);
    });
  });

  describe('Board with col conflicts', function() {
    var matrix = [
      [1, 0, 0, 0],
      [0, 0, 0, 0],
      [1, 0, 0, 0],
      [0, 0, 0, 0]
    ];
    var board = new Board(matrix);

    it('should not find a row conflict', function() {
      expect(board.hasAnyRowConflicts()).to.be.equal(false);
    });

    it('should find a col conflict', function() {
      expect(board.hasAnyColConflicts()).to.be.equal(true);
    });

    it('should find a rooks conflict', function() {
      expect(board.hasAnyRooksConflicts()).to.be.equal(true);
    });

    it('should not find a majorDiagonal conflict', function() {
      expect(board.hasAnyMajorDiagonalConflicts()).to.be.equal(false);
    });

    it('should not find a minorDiagonal conflict', function() {
      expect(board.hasAnyMinorDiagonalConflicts()).to.be.equal(false);
    });

    it('should find a queens conflict', function() {
      expect(board.hasAnyQueensConflicts()).to.be.equal(true);
    });
  });

  describe('Board with major diagonal conflicts', function() {
    var matrix = [
      [0, 1, 0, 0],
      [0, 0, 1, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ];
    var board = new Board(matrix);

    it('should not find a row conflict', function() {
      expect(board.hasAnyRowConflicts()).to.be.equal(false);
    });

    it('should not find a col conflict', function() {
      expect(board.hasAnyColConflicts()).to.be.equal(false);
    });

    it('should not find a rooks conflict', function() {
      expect(board.hasAnyRooksConflicts()).to.be.equal(false);
    });

    it('should find a majorDiagonal conflict', function() {
      expect(board.hasAnyMajorDiagonalConflicts()).to.be.equal(true);
    });

    it('should not find a minorDiagonal conflict', function() {
      expect(board.hasAnyMinorDiagonalConflicts()).to.be.equal(false);
    });

    it('should find a queens conflict', function() {
      expect(board.hasAnyQueensConflicts()).to.be.equal(true);
    });

    matrix = [
      [0, 0, 0, 0],
      [1, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 1, 0]
    ];
    board = new Board(matrix);

    it('should not find a row conflict', function() {
      expect(board.hasAnyRowConflicts()).to.be.equal(false);
    });

    it('should not find a col conflict', function() {
      expect(board.hasAnyColConflicts()).to.be.equal(false);
    });

    it('should not find a rooks conflict', function() {
      expect(board.hasAnyRooksConflicts()).to.be.equal(false);
    });

    it('should find a majorDiagonal conflict', function() {
      expect(board.hasAnyMajorDiagonalConflicts()).to.be.equal(true);
    });

    it('should not find a minorDiagonal conflict', function() {
      expect(board.hasAnyMinorDiagonalConflicts()).to.be.equal(false);
    });

    it('should find a queens conflict', function() {
      expect(board.hasAnyQueensConflicts()).to.be.equal(true);
    });
  });

  describe('Board with minor diagonal conflicts', function() {
    var matrix = [
      [0, 0, 1, 0],
      [0, 0, 0, 0],
      [1, 0, 0, 0],
      [0, 0, 0, 0]
    ];
    var board = new Board(matrix);

    it('should not find a row conflict', function() {
      expect(board.hasAnyRowConflicts()).to.be.equal(false);
    });

    it('should not find a col conflict', function() {
      expect(board.hasAnyColConflicts()).to.be.equal(false);
    });

    it('should not find a rooks conflict', function() {
      expect(board.hasAnyRooksConflicts()).to.be.equal(false);
    });

    it('should not find a majorDiagonal conflict', function() {
      expect(board.hasAnyMajorDiagonalConflicts()).to.be.equal(false);
    });

    it('should find a minorDiagonal conflict', function() {
      expect(board.hasAnyMinorDiagonalConflicts()).to.be.equal(true);
    });

    it('should find a queens conflict', function() {
      expect(board.hasAnyQueensConflicts()).to.be.equal(true);
    });

    matrix = [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 1],
      [0, 0, 1, 0]
    ];
    board = new Board(matrix);

    it('should not find a row conflict', function() {
      expect(board.hasAnyRowConflicts()).to.be.equal(false);
    });

    it('should not find a col conflict', function() {
      expect(board.hasAnyColConflicts()).to.be.equal(false);
    });

    it('should not find a rooks conflict', function() {
      expect(board.hasAnyRooksConflicts()).to.be.equal(false);
    });

    it('should not find a majorDiagonal conflict', function() {
      expect(board.hasAnyMajorDiagonalConflicts()).to.be.equal(false);
    });

    it('should find a minorDiagonal conflict', function() {
      expect(board.hasAnyMinorDiagonalConflicts()).to.be.equal(true);
    });

    it('should find a queens conflict', function() {
      expect(board.hasAnyQueensConflicts()).to.be.equal(true);
    });
  });
});
