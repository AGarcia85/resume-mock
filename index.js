#! /usr/bin/env mode

const fs = require('fs')

fs.readFile(_dirname + '/info.json', 'utf8', function(err, data) {
    if (err) {
        console.log(err)
    }else {
        console.log(data)
        return data
    }
})