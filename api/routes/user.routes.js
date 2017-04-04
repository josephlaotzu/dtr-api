(function () {
    'use strict';

    module.exports = function (app) {
        var usersController = require('../controllers/users.controller');

        // users.controller Routes
        app.route('/users')
            .get(usersController.list_all_users)
            .post(usersController.create_a_user);


        app.route('/users/:userId')
            .get(usersController.fetch_a_user)
            .put(usersController.update_a_user)
            .delete(usersController.delete_a_user);
    };
})();
