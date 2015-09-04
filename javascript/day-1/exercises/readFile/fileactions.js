function fileactions(err, file){ 
    if (err) {
        throw err;
    }
    var episodes = JSON.parse(file)
    console.log(episodes[0])
}

