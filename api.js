class lostlandsAPIv1 {
    constructor(api_url) {
        if (api_url) {
            var url = api_url;
        } else {
            var url = "https://api.lostlands.co/v1";
        }
        this.request = function(route, callback, u = url) {
            let xhr = new XMLHttpRequest();
            xhr.open('GET', u + route);
            xhr.responseType = 'json';
            xhr.send();

            xhr.onreadystatechange=function () {
                if (xhr.readyState == 4 && xhr.status==200){
                    callback(null, xhr.response)
                }
                else {
                    if(xhr.readyState == 4 && xhr.status == 404) {
                        console.error('[Lost Lands API] Invalid Request: '+route);
                        callback(xhr.response)
                    } else if(xhr.readyState == 4 && xhr.status == 400) {
                        console.error('[Lost Lands API] Missing Parameters: '+route);
                        callback(xhr.response)
                    }

                }
            };
        }
        
        //API functions
        this.player = function(player, callback) {
            this.request('/player/' + player, function(err, response) {
                if (err) {
                    callback(err);
                } else {
                    callback(null, response);
                }
            })
        }
        this.pvp = function(player, callback) {
            this.request('/pvp/' + player, function(err, response) {
                if (err) {
                    callback(err);
                } else {
                    callback(null, response);
                }
            })
        }
        this.kills = function(server, callback) {
            this.request('/kills/' + server, function(err, response) {
                if (err) {
                    callback(err);
                } else {
                    callback(null, response);
                }
            })
        }
        this.performance = function(server, callback) {
            this.request('/server/' + server, function(err, response) {
                if (err) {
                    callback(err);
                } else {
                    callback(null, response);
                }
            })
        }
        this.online = function(server, callback) {
            this.request('/online/' + server, function(err, response) {
                if (err) {
                    callback(err);
                } else {
                    callback(null, response);
                }
            })
        }
    }
}