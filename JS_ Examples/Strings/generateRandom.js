function generateRandom() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 36; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

var random = generateRandom();
