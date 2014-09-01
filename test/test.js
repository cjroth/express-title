var express = require('express');
var request = require('supertest');
var should = require('should');
var title = require('..');

describe('res.title()', function() {

  it('should set res.locals.title to the correct title', function(done) {

    var app = express();
    app.set('title', 'base title');
    app.use(title());
    app.get('/', function(req, res, next) {
      res.title('page title');
      res.locals.title.should.equal('page title · base title');
      res.end();
    });

    request(app)
      .get('/')
      .end(function(err, res) {
        done();
      });

  });

  it('should set res.locals.title to the correct title when using a custom formatter', function(done) {

    var app = express();
    app.set('title', 'base title');
    app.use(title('%base% - %title%'));
    app.get('/', function(req, res, next) {
      res.title('page title');
      res.locals.title.should.equal('base title - page title');
      res.end();
    });

    request(app)
      .get('/')
      .end(function(err, res) {
        done();
      });

  });

});