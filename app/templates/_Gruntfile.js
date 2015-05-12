"use strict";

var path = require("path");

function configureGrunt(grunt) {
    grunt.loadNpmTasks("grunt-browserify");
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-concurrent");
    grunt.loadNpmTasks("grunt-exec");

    var clientAppFullPath = path.resolve("./app/javascripts/client/ClientApp.js");

    grunt.initConfig({

        browserify: {
            build: {
                src: [
                    "./app/javascripts/**/*.js"
                ],
                dest: "./public/javascripts/application.js",
                options: {
                    alias: [
                        "./node_modules/brisket/lib/brisket.js:brisket",
                        clientAppFullPath + ":app/ClientApp"
                    ],
                    ignore: [
                        "./app/javascripts/server/**/*.js"
                    ]
                }
            }

        },

        clean: {
            js: [
                "public/javascripts",
            ]
        },

        exec: {
            nodemon: {
                cmd: "node_modules/.bin/nodemon server.js"
            }
        },

        concurrent: {
            server: {
                tasks: [
                    "exec:nodemon",
                    "watch"
                ],
                options: {
                    logConcurrentOutput: true
                }
            }
        },

        watch: {
            options: {
                interrupt: true,
                debounceDelay: 250
            },
            js: {
                files: [
                    "app/javascripts/**/*.js",
                    "server.js",
                    "Gruntfile.js",
                ],
                tasks: [
                    "build",
                ]
            }
        }

    });


    grunt.registerTask("build", [
        "clean:js",
        "browserify:build"
    ]);

    grunt.registerTask("server", [
        "build",
        "concurrent:server",
    ]);

    grunt.registerTask("default", ["server"]);
}

module.exports = configureGrunt;
