const express = require("express");
const showRoutes = express.Router();

const Show = require("../../models/Show");

showRoutes.route('/').get(function(req, res) {
    Show.find(function(err, shows) {
        if (err) {
            console.log(err);
        } else {
            res.json(shows);
        }
    });
});

showRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    Show.findById(id, function(err, show) {
        res.json(show);
    });
});

showRoutes.route('/add').post(function(req, res) {
    let show = new Show(req.body);
    show.save()
        .then(show => {
            res.status(200).json({'show': '정상 추가 되었습니다.'});
        })
        .catch(err => {
            res.status(400).send('추가에 실패했습니다.');
        });
});

module.exports = showRoutes;