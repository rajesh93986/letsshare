const express = require('express');

function createRouter(db) {
    const router = express.Router();
    router.post('/event', (req,res,next) => {
    db.query(
        'INSERT INTO events (username, Quantity, phonenumber, address) VALUES (?,?,?,?)',
        [req.body.username, req.body.Quantity, req.body.phonenumber, req.body.address],
        (error) => {
            if (error) {
                console.error(error);
                res.status(500).json({status: 'error'});
            }
            else{
                res.status(200).json({status : 'ok'});
            }
        }
    );
    });

    router.get('/event', function (req,res,next) {
        db.query (
            'SELECT id,username,Quantity, phonenumber, address FROM events WHERE username = ?  ORDER BY id LIMIT 10 OFFSET ?',
            [username, 10*(req.params.page || 0)],
            (error, results) => {
                if (error) {
                    console.log(error);
                    res.status(500).json({status : 'error'});

                }
                else {
                    res.status(200).json(results);
                }
            }

        );
    });

    router.put('/event/:id', function (req, res, next) {
        db.query(
        'UPDATE events SET username=?, Quantity=?, phonenumber=? address=? WHERE id=? ',
            [req.body.username, req.body.Quantity, req.body.phonenumber, req.body.address, req.params.id ],
            (error) => {
                if (error) {
                res.status(500).json({status: 'error'});
                } else {
                res.status(200).json({status: 'ok'});
                }
            }
        );
    });

    router.delete('/event/:id', function (req, res, next) {
        db.query(
            'DELETE FROM events WHERE id=?',
            [req.params.id],
            (error) => {
                if (error) {
                res.status(500).json({status: 'error'});
                } else {
                res.status(200).json({status: 'ok'});
            }
            }
        );
    });

    return router;
}

module.exports = createRouter;
