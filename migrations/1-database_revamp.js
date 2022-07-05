'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * createTable "applicants", deps: []
 * createTable "users", deps: []
 *
 **/

var info = {
    "revision": 1,
    "name": "database_revamp",
    "created": "2022-04-18T03:16:10.110Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "createTable",
        params: [
            "applicants",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "users",
            {

            },
            {}
        ]
    }
];

module.exports = {
    pos: 0,
    up: function(queryInterface, Sequelize)
    {
        var index = this.pos;
        return new Promise(function(resolve, reject) {
            function next() {
                if (index < migrationCommands.length)
                {
                    let command = migrationCommands[index];
                    console.log("[#"+index+"] execute: " + command.fn);
                    index++;
                    queryInterface[command.fn].apply(queryInterface, command.params).then(next, reject);
                }
                else
                    resolve();
            }
            next();
        });
    },
    info: info
};
