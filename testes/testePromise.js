const _ = require('lodash')

function resolveRemovedShares(removedShares) {
    return new Promise(function(resolve, reject){
        if(_.isEmpty(removedShares)) {
            reject('Removed empty')
        }

        resolve('Removed resolved')

        //continua com requisição
    })
}

function resolveAddedShares(addedShares) {
    return new Promise(function(resolve, reject){
        if(_.isEmpty(addedShares)){
            reject('Added empty')
        }
        resolve('Added resolved')
        //continua com requisição
    })
}

function resolveChangedShares(changedShares) {
    return new Promise(function(resolve, reject){
        if(_.isEmpty(changedShares)){
            reject('Changed empty')
        }
        resolve('Changed resolved')
        //continua com requisição
    })
}

const removedShares = []
const addedShares = []
const changedShares = []
let remainingShares = 1

resolveRemovedShares(removedShares)
    .then(function(response) {
        console.log(response)
        return resolveAddedShares(addedShares)
    })
    .catch(function(err){
        console.log(err)
        if(remainingShares > 0) {
            return resolveAddedShares(addedShares)
        }
    })
    .then(function(response){
        console.log(response)
        return resolveChangedShares(changedShares)
    })
    .catch(function(err){
        console.log(err)
        return resolveChangedShares(changedShares)
    })
    .then(function(response){
        console.log(response)
    })
    .catch(function(err){
        console.log(err)
    })



function resolveShares(func, lists) {
    return new Promise(function(resolve, reject){
        if(_.isEmpty(lists)) {
            resolve()
        }

        function handleResponse(data){
            if(success){
                resolve()
            } else {
                reject(data.response)
            }
        }

        func(handleResponse, lists)
    });
}