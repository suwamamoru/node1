//
// /controllers/user.js
//
var dbModels = require('../models');
var userController = {

    //
    // メソッド １
    // パス: /user/
    // レスポンス: 全てのユーザーを表示する
    //
    showAllUsers: function (req, res, next) {

        // Sequelizeのモデルを使ってデータを取得する
        dbModels.User.findAll().then(users => {

            if (!users) {
                console.log("ユーザーデータを取得できませんでした");
                res.send('Error');
            } else {
                res.render('allUsers', { users: users });
            }
        });
    },

    //
    // メソッド 2
    // パス: /user/:userId
    // レスポンス: IDで指定されたユーザーを表示する
    //
    showUserById: function (req, res, next) {

        var userId = req.params.userId; // ユーザーIDを取得
        if (!userId) {
            console.log("ユーザーIDを取得できませんでした");
            res.send('Error');
        } else {
            // Sequelizeのモデルを使ってデータを取得する
            dbModels.User.findByPk(userId).then(user => {

                if (!user) {
                    console.log("ユーザーデータを取得できませんでした");
                    res.send('Error');
                } else {
                    res.render('oneUser', { user: user });
                }
            });
        }
    },
    //
    // メソッド 3
    // パス: /user/json
    // レスポンス: DBのデータをJSON形式で返す
    //
    sendJson: function (req, res, next) {

        // Sequelizeのモデルを使ってデータを取得する
        dbModels.User.findAll().then(users => {

            if (!users) {
                console.log("ユーザーデータを取得できませんでした");
                res.send('Error');
            } else {
                res.json(users);
            }

        });
    },

};

module.exports = userController;