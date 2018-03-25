var audioEl = $('audio')
var logoEl = $('.logo')

$('.mute').click(function(e) {
    e.preventDefault();
    if (audioEl[0].paused) {
        audioEl.trigger('play')
        $(this).removeClass('muted')
    }
    else {
        audioEl.trigger('pause')
        $(this).addClass('muted')
    }
})

$('.play').click(function(e) {
    var $this = $(this)
    $this.hide()
    audioEl.trigger('play')
    logoEl.addClass('intro')
})