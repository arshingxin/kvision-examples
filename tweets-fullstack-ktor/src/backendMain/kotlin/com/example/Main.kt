package com.example

import io.ktor.server.application.*
import io.ktor.server.plugins.compression.*
import io.ktor.server.routing.*
import io.ktor.server.websocket.*
import io.kvision.remote.applyRoutes
import io.kvision.remote.kvisionInit

fun Application.main() {
    install(Compression)
    install(WebSockets)
    routing {
        applyRoutes(TweetServiceManager)
    }
    kvisionInit()
}
