var audioEl = $('audio')

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