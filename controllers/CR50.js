'use strict';

var utils = require('../utils/writer.js');
var CR50 = require('../service/CR50Service');

module.exports.exDepartmentsDepartmentCodeGET = function exDepartmentsDepartmentCodeGET (req, res, next) {
  var xREGIVERSION = req.swagger.params['X-REGI-VERSION'].value;
  var xREGIOSTYPE = req.swagger.params['X-REGI-OS-TYPE'].value;
  var departmentCode = req.swagger.params['departmentCode'].value;
  CR50.exDepartmentsDepartmentCodeGET(xREGIVERSION,xREGIOSTYPE,departmentCode)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.exItemsBarcodePOST = function exItemsBarcodePOST (req, res, next) {
  var xREGIVERSION = req.swagger.params['X-REGI-VERSION'].value;
  var xREGIOSTYPE = req.swagger.params['X-REGI-OS-TYPE'].value;
  var barcode = req.swagger.params['barcode'].value;
  CR50.exItemsBarcodePOST(xREGIVERSION,xREGIOSTYPE,barcode)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.exMembersMemberInfoGET = function exMembersMemberInfoGET (req, res, next) {
  var xREGIVERSION = req.swagger.params['X-REGI-VERSION'].value;
  var xREGIOSTYPE = req.swagger.params['X-REGI-OS-TYPE'].value;
  var memberInfo = req.swagger.params['memberInfo'].value;
  CR50.exMembersMemberInfoGET(xREGIVERSION,xREGIOSTYPE,memberInfo)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.exResultPOST = function exResultPOST (req, res, next) {
  var xREGIVERSION = req.swagger.params['X-REGI-VERSION'].value;
  var xREGIOSTYPE = req.swagger.params['X-REGI-OS-TYPE'].value;
  CR50.exResultPOST(xREGIVERSION,xREGIOSTYPE)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.exStaffStaffCodeGET = function exStaffStaffCodeGET (req, res, next) {
  var xREGIVERSION = req.swagger.params['X-REGI-VERSION'].value;
  var xREGIOSTYPE = req.swagger.params['X-REGI-OS-TYPE'].value;
  var staffCode = req.swagger.params['staffCode'].value;
  CR50.exStaffStaffCodeGET(xREGIVERSION,xREGIOSTYPE,staffCode)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.exSubtotalGET = function exSubtotalGET (req, res, next) {
  var xREGIVERSION = req.swagger.params['X-REGI-VERSION'].value;
  var xREGIOSTYPE = req.swagger.params['X-REGI-OS-TYPE'].value;
  var body = req.swagger.params['body'].value;
  CR50.exSubtotalGET(xREGIVERSION,xREGIOSTYPE,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
