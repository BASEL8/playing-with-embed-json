$(document).ready(function() {



    $.getJSON("js/sc.json", function(json) {

        var scPlayList = json.sound_playList.sc_url;
        var spotify_list = json.sound_playList.spotify;
        var yt_songs_playlist = json.youtube_playlist.songs_url;
        var yt_food_playlist = json.food.youtube_food_url;
        var insta_playlist = json.food.insta_url;

        for (let i = 0; i < scPlayList.length; i++) {

            $('.sc_plays_list').append('<iframe width="70%" height="250" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com' + scPlayList[i] + '&color=%23594954&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>')

        }
        for (let i = 0; i < spotify_list.length; i++) {

            $('.spotify_list').append('<iframe src="https://open.spotify.com/embed/user/' + spotify_list[i] + '" width="300" height="380" frameborder="0" allowtransparency="true"></iframe>')

        }
        for (let y = 0; y < yt_songs_playlist.length; y++) {

            $('.songs_playlist').append('<iframe width="560" height="315" src="https://www.youtube.com/embed/' + yt_songs_playlist[y] + '?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>')

        }

        for (let y = 0; y < yt_food_playlist.length; y++) {

            $('.insta_playlist').append('<iframe width="560" height="315" src="https://www.youtube.com/embed/' + yt_food_playlist[y] + '?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>')

        }

        for (let z = 0; z < insta_playlist.length; z++) {

            $('.insta_playlist').append('<video width="320" height="240" controls><source src="mp4/' + insta_playlist[z] + '" type="video/mp4">Your browser does not support the video tag. </video>')

        }




    })




});