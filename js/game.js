/*
 * This class is responcible for handling the majority of the actual workings of
 * the Othello game.
 */

var Game = new (function() {
  var self = this,
      debug = document.location.hash == '#debug',
      grid,
      sizes = [8],
      lastSize = 0,
      currentPuzzle = null,
      checkTOH = 0,
      endGameTOH1,
      endGameTOH2,
      endGameTOH3,
      endSubtleHintTOH,
      onHomeScreen = true,
      undoStack = [],
      undone = false,
      gameEnded = false;

function init() {
  $('#scorenr').html(getScore());
  $('#tweeturl, #facebook').hide();

  if (!window.isWebApp)
    $('#app').hide();

  if (Utils.isTouch())
    $('html').addClass('touch');

          $('[data-size]').each(function(i,el){
            var $el = $(el),
                size = $el.attr('data-size') * 1,
                label = sizes[size - 1];
            $el.html(label)
            $el.on('touchstart mousedown', function(evt){
              if (Utils.isDoubleTapBug(evt)) return false;
              var size = sizes[$(evt.target).closest('[data-size]').attr('data-size') * 1 - 1];
              loadGame(size);
            })
          })
          resize();
          $(window).on('resize', resize);
          $(window).on('orientationchange', resize);

          showTitleScreen();
          resize();

          var colors = ['#a7327c', '#c24b31', '#c0cd31']
          Utils.setColorScheme(colors[1]);
        }
