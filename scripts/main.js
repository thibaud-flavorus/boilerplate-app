require([
  '$api/models',
  'scripts/language-example',
  'scripts/cover-example',
  'scripts/button-example',
  'scripts/playlist-example',
  'scripts/top-artists'
], function(models, languageExample, coverExample, buttonExample, playlistExample, topArtists) {
  'use strict';

  languageExample.doHelloWorld();
  coverExample.doCoverForAlbum();
  buttonExample.doShareButtonForArtist();
  buttonExample.doPlayButtonForAlbum();
  //playlistExample.doPlaylistForAlbum();
  topArtists.doPlaylistForTopArtist();
});
