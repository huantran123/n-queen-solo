// This file is a Backbone Model (don't worry about what that means)
// It's part of the Board Visualizer
// The only portions you need to work on are the helper functions (below)

(function() {

  window.Board = Backbone.Model.extend({

    initialize: function (params) {
      if (_.isUndefined(params) || _.isNull(params)) {
        console.log('Good guess! But to use the Board() constructor, you must pass it an argument in one of the following formats:');
        console.log('\t1. An object. To create an empty board of size n:\n\t\t{n: %c<num>%c} - Where %c<num> %cis the dimension of the (empty) board you wish to instantiate\n\t\t%cEXAMPLE: var board = new Board({n:5})', 'color: blue;', 'color: black;', 'color: blue;', 'color: black;', 'color: grey;');
        console.log('\t2. An array of arrays (a matrix). To create a populated board of size n:\n\t\t[ [%c<val>%c,%c<val>%c,%c<val>%c...], [%c<val>%c,%c<val>%c,%c<val>%c...], [%c<val>%c,%c<val>%c,%c<val>%c...] ] - Where each %c<val>%c is whatever value you want at that location on the board\n\t\t%cEXAMPLE: var board = new Board([[1,0,0],[0,1,0],[0,0,1]])', 'color: blue;', 'color: black;', 'color: blue;', 'color: black;', 'color: blue;', 'color: black;', 'color: blue;', 'color: black;', 'color: blue;', 'color: black;', 'color: blue;', 'color: black;', 'color: blue;', 'color: black;', 'color: blue;', 'color: black;', 'color: blue;', 'color: black;', 'color: blue;', 'color: black;', 'color: grey;');
      } else if (params.hasOwnProperty('n')) {
        this.set(makeEmptyMatrix(this.get('n')));
      } else {
        this.set('n', params.length);
      }
    },

    rows: function() {
      return _(_.range(this.get('n'))).map(function(rowIndex) {
        return this.get(rowIndex);
      }, this);
    },

    togglePiece: function(rowIndex, colIndex) {
      this.get(rowIndex)[colIndex] = + !this.get(rowIndex)[colIndex];
      this.trigger('change');
    },

    _getFirstRowColumnIndexForMajorDiagonalOn: function(rowIndex, colIndex) {
      return colIndex - rowIndex;
    },

    _getFirstRowColumnIndexForMinorDiagonalOn: function(rowIndex, colIndex) {
      return colIndex + rowIndex;
    },

    hasAnyRooksConflicts: function() {
      return this.hasAnyRowConflicts() || this.hasAnyColConflicts();
    },

    hasAnyQueenConflictsOn: function(rowIndex, colIndex) {
      return (
        this.hasRowConflictAt(rowIndex) ||
        this.hasColConflictAt(colIndex) ||
        this.hasMajorDiagonalConflictAt(this._getFirstRowColumnIndexForMajorDiagonalOn(rowIndex, colIndex)) ||
        this.hasMinorDiagonalConflictAt(this._getFirstRowColumnIndexForMinorDiagonalOn(rowIndex, colIndex))
      );
    },

    hasAnyQueensConflicts: function() {
      return this.hasAnyRooksConflicts() || this.hasAnyMajorDiagonalConflicts() || this.hasAnyMinorDiagonalConflicts();
    },

    _isInBounds: function(rowIndex, colIndex) {
      return (
        0 <= rowIndex && rowIndex < this.get('n') &&
        0 <= colIndex && colIndex < this.get('n')
      );
    },


/*
         _             _     _
     ___| |_ __ _ _ __| |_  | |__   ___ _ __ ___ _
    / __| __/ _` | '__| __| | '_ \ / _ \ '__/ _ (_)
    \__ \ || (_| | |  | |_  | | | |  __/ | |  __/_
    |___/\__\__,_|_|   \__| |_| |_|\___|_|  \___(_)

 */
    /*=========================================================================
    =                 TODO: fill in these Helper Functions                    =
    =========================================================================*/

    // ROWS - run from left to right
    // --------------------------------------------------------------
    //
    // test if a specific row on this board contains a conflict
    hasRowConflictAt: function(rowIndex) {
      var row = this.get(rowIndex);
      if (row.indexOf(1) === -1) {
        return false;
      } else {
        if (row.slice(row.indexOf(1) + 1).indexOf(1) !== -1) {
          return true;
        } else {
          return false;
        }
      }
    },

    // test if any rows on this board contain conflicts
    hasAnyRowConflicts: function() {
      var hasRowConflict = false;
      var n = this.get('n');
      for (var i = 0; i < n; i++) {
        hasRowConflict = hasRowConflict || this.hasRowConflictAt(i);
      }
      return hasRowConflict;
    },



    // COLUMNS - run from top to bottom
    // --------------------------------------------------------------
    //
    // test if a specific column on this board contains a conflict
    hasColConflictAt: function(colIndex) {
      var n = this.get('n');
      var col = [];
      for (var i = 0; i < n; i++) {
        // In each row, add the value at colIndex to col array
        col.push(this.get(i)[colIndex])
      }

      if (col.indexOf(1) === -1) {
        return false;
      } else {
        if (col.slice(col.indexOf(1) + 1).indexOf(1) !== -1) {
          return true;
        } else {
          return false;
        }
      }
    },

    // test if any columns on this board contain conflicts
    hasAnyColConflicts: function() {
      var hasColConflict = false;
      var n = this.get('n');
      for (var i = 0; i < n; i++) {
        hasColConflict = hasColConflict || this.hasColConflictAt(i);
      }
      return hasColConflict;
    },



    // Major Diagonals - go from top-left to bottom-right
    // --------------------------------------------------------------
    //
    // test if a specific major diagonal on this board contains a conflict
    hasMajorDiagonalConflictAt: function(majorDiagonalColumnIndexAtFirstRow) {
      var rowIndex = arguments[1] ? arguments[1] : 0;
      var majorDiagonal = [];
      var n = this.get('n');
      for (var i = rowIndex; i < n; i++) {
        majorDiagonal.push(this.get(i)[majorDiagonalColumnIndexAtFirstRow]);
        majorDiagonalColumnIndexAtFirstRow++;
      }

      if (majorDiagonal.indexOf(1) === -1) {
        return false;
      } else {
        if (majorDiagonal.slice(majorDiagonal.indexOf(1) + 1).indexOf(1) !== -1) {
          return true;
        } else {
          return false;
        }
      }
    },

    // test if any major diagonals on this board contain conflicts
    hasAnyMajorDiagonalConflicts: function() {
      var hasDiagonalConflict = false;
      var n = this.get('n');
      for (var rowIndex = 0; rowIndex < n; rowIndex++) {
        for (var colIndex = 0; colIndex < n; colIndex++) {
          hasDiagonalConflict = hasDiagonalConflict || this.hasMajorDiagonalConflictAt(n-1-colIndex, rowIndex);
        }
      }
      return hasDiagonalConflict;
    },



    // Minor Diagonals - go from top-right to bottom-left
    // --------------------------------------------------------------
    //
    // test if a specific minor diagonal on this board contains a conflict
    hasMinorDiagonalConflictAt: function(minorDiagonalColumnIndexAtFirstRow) {
      var rowIndex = arguments[1] ? arguments[1] : 0;
      var minorDiagonal = [];
      var n = this.get('n');
      for (var i = rowIndex; i < n; i++) {
        minorDiagonal.push(this.get(i)[minorDiagonalColumnIndexAtFirstRow]);
        minorDiagonalColumnIndexAtFirstRow--;
      }

      if (minorDiagonal.indexOf(1) === -1) {
        return false;
      } else {
        if (minorDiagonal.slice(minorDiagonal.indexOf(1) + 1).indexOf(1) !== -1) {
          return true;
        } else {
          return false;
        }
      }
    },

    // test if any minor diagonals on this board contain conflicts
    hasAnyMinorDiagonalConflicts: function() {
      var hasDiagonalConflict = false;
      var n = this.get('n');
      for (var rowIndex = 0; rowIndex < n; rowIndex++) {
        for (var colIndex = 0; colIndex < n; colIndex++) {
          hasDiagonalConflict = hasDiagonalConflict || this.hasMinorDiagonalConflictAt(n-1-colIndex, rowIndex);
        }
      }
      return hasDiagonalConflict;
    }

    /*--------------------  End of Helper Functions  ---------------------*/


  });

  var makeEmptyMatrix = function(n) {
    return _(_.range(n)).map(function() {
      return _(_.range(n)).map(function() {
        return 0;
      });
    });
  };

}());
