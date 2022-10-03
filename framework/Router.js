const http = require('http')
const EventEmitter = require('events')

const PORT = process.env.PORT || 5000
const emitter = new EventEmitter()

module.exports = class Router {
    constructor() {
        this.endpoints = {}
    }

    request(method = "GET", path, handler) {
        if (!this.endpoints[path]) {
            this.endpoints[path] = {}
        }

        const endpoint = this.endpoints[path]

        if(endpoint[method]) {
            throw new Error(`[${method} in address ${path} has been existed]`)
        }

        endpoint[method] = handler

    }

    get(path, handler) {
        this.request('GET', path, handler)
    }
    post(path, handler) {
        this.request('POST', path, handler)
    }
    put(path, handler) {
        this.request('PUT', path, handler)
    }
    delete(path, handler) {
        this.request('DELETE', path, handler)
    }
}
