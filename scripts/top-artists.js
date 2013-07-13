require([
  '$api/models',
  '$api/toplists',
  '$views/list#List'
], function(models, toplists, List){
	
	var doPlaylistForTopArtist = function() {
		var list = toplists.Toplist.forCurrentUser();
		//var topArtist = list.artists.snapshot(0,1,true).get(0).uri;
		//var topArtistUri = topArtist.get(0).uri;
		//var topArtistUri = list.artists.snapshot(0,1,true).get(0).uri;
		list.artists.snapshot(0,1).done(function(snapshot){
			var topArtist = snapshot.get(0);
			topArtist.singles.snapshot(0,5).done(function(snapshot2){
				var topArtistPlaylist = models.Playlist.fromURI(snapshot2.uri);
				var displayList = List.forPlaylist(topArtistPlaylist.uri);
				document.getElementById('playlistContainer').appendChild(displayList.node);
				displayList.init();
			});
			
		})
		
	};
	exports.doPlaylistForTopArtist = doPlaylistForTopArtist;
});