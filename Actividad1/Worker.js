var lastfm;
self.addEventListener('message', function(e){
    lastfm = new LastFM ({
        apiUrl : 'http://ws.audioscrobbler.com//2.0/?method=artist.getinfo&artist=Cher&api_key=7c070193276d5a79ac33e608475c6a6c&format=json',
        apiKey : '7c070193276d5a79ac33e608475c6a6c'
    });
    
    getTopArtists();
});

var getArtistInfo = function() {
    var myworker =  new Worker("Worker.js");
    myworker.addEventListener("message", function(e) {
        
    })
};


var sendResponse = function(data) {
    postMessage(data);
};

function LastFM(options) {
    var apiUrl = options.apiUrl || '';
    var apiKey = options.apiKey || '';
    
    this.getApiUrl = function() {
        return apiUrl;
    };
    
    this.getApiKey = function() {
        return apiKey
    };
}

