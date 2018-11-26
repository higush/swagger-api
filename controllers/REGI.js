'use strict';

var utils = require('../utils/writer.js');
var REGI = require('../service/REGIService');

module.exports.rEGICartsCartIDItemsGET = function rEGICartsCartIDItemsGET (req, res, next) {
  var xEXAPIKEY = req.swagger.params['X-EX-API-KEY'].value;
  var xSTORETOKEN = req.swagger.params['X-STORE-TOKEN'].value;
  var xREGIVERSION = req.swagger.params['X-REGI-VERSION'].value;
  var xREGIOSTYPE = req.swagger.params['X-REGI-OS-TYPE'].value;
  var cartID = req.swagger.params['cartID'].value;
  REGI.rEGICartsCartIDItemsGET(xEXAPIKEY,xSTORETOKEN,xREGIVERSION,xREGIOSTYPE,cartID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.rEGICompanyStoreCartsCartIDPayment_statusGET = function rEGICompanyStoreCartsCartIDPayment_statusGET (req, res, next) {
  var xEXAPIKEY = req.swagger.params['X-EX-API-KEY'].value;
  var xSTORETOKEN = req.swagger.params['X-STORE-TOKEN'].value;
  var xREGIVERSION = req.swagger.params['X-REGI-VERSION'].value;
  var xREGIOSTYPE = req.swagger.params['X-REGI-OS-TYPE'].value;
  var cartID = req.swagger.params['cartID'].value;
  REGI.rEGICompanyStoreCartsCartIDPayment_statusGET(xEXAPIKEY,xSTORETOKEN,xREGIVERSION,xREGIOSTYPE,cartID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.rEGICompanyStoreCartsCartIDTerminatedPATCH = function rEGICompanyStoreCartsCartIDTerminatedPATCH (req, res, next) {
  var xEXAPIKEY = req.swagger.params['X-EX-API-KEY'].value;
  var xSTORETOKEN = req.swagger.params['X-STORE-TOKEN'].value;
  var xREGIVERSION = req.swagger.params['X-REGI-VERSION'].value;
  var xREGIOSTYPE = req.swagger.params['X-REGI-OS-TYPE'].value;
  var cartID = req.swagger.params['cartID'].value;
  var body = req.swagger.params['body'].value;
  REGI.rEGICompanyStoreCartsCartIDTerminatedPATCH(xEXAPIKEY,xSTORETOKEN,xREGIVERSION,xREGIOSTYPE,cartID,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
