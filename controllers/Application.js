'use strict';

var utils = require('../utils/writer.js');
var Application = require('../service/ApplicationService');

module.exports.guestCompaniesCompanyCodeStoresStoreCodeGET = function guestCompaniesCompanyCodeStoresStoreCodeGET (req, res, next) {
  var xAPIKEY = req.swagger.params['X-API-KEY'].value;
  var xAPPTOKEN = req.swagger.params['X-APP-TOKEN'].value;
  var xAPPVERSION = req.swagger.params['X-APP-VERSION'].value;
  var xAPPOSTYPE = req.swagger.params['X-APP-OS-TYPE'].value;
  var companyCode = req.swagger.params['companyCode'].value;
  var storeCode = req.swagger.params['storeCode'].value;
  Application.guestCompaniesCompanyCodeStoresStoreCodeGET(xAPIKEY,xAPPTOKEN,xAPPVERSION,xAPPOSTYPE,companyCode,storeCode)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.guestCompanyCompanyCodeStoreStoreCodeCartsCartIDRegisterPOST = function guestCompanyCompanyCodeStoreStoreCodeCartsCartIDRegisterPOST (req, res, next) {
  var xAPIKEY = req.swagger.params['X-API-KEY'].value;
  var xAPPTOKEN = req.swagger.params['X-APP-TOKEN'].value;
  var xAPPVERSION = req.swagger.params['X-APP-VERSION'].value;
  var xAPPOSTYPE = req.swagger.params['X-APP-OS-TYPE'].value;
  var companyCode = req.swagger.params['companyCode'].value;
  var storeCode = req.swagger.params['storeCode'].value;
  var cartID = req.swagger.params['cartID'].value;
  Application.guestCompanyCompanyCodeStoreStoreCodeCartsCartIDRegisterPOST(xAPIKEY,xAPPTOKEN,xAPPVERSION,xAPPOSTYPE,companyCode,storeCode,cartID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.guestCompanyCompanyCodeStoreStoreCodeCartsCartIDShopping_statusGET = function guestCompanyCompanyCodeStoreStoreCodeCartsCartIDShopping_statusGET (req, res, next) {
  var xAPIKEY = req.swagger.params['X-API-KEY'].value;
  var xAPPTOKEN = req.swagger.params['X-APP-TOKEN'].value;
  var xAPPVERSION = req.swagger.params['X-APP-VERSION'].value;
  var xAPPOSTYPE = req.swagger.params['X-APP-OS-TYPE'].value;
  var companyCode = req.swagger.params['companyCode'].value;
  var storeCode = req.swagger.params['storeCode'].value;
  var cartID = req.swagger.params['cartID'].value;
  Application.guestCompanyCompanyCodeStoreStoreCodeCartsCartIDShopping_statusGET(xAPIKEY,xAPPTOKEN,xAPPVERSION,xAPPOSTYPE,companyCode,storeCode,cartID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.guestCompanyCompanyCodeStoreStoreCodeCartsCartIDUploadedPATCH = function guestCompanyCompanyCodeStoreStoreCodeCartsCartIDUploadedPATCH (req, res, next) {
  var xAPIKEY = req.swagger.params['X-API-KEY'].value;
  var xAPPTOKEN = req.swagger.params['X-APP-TOKEN'].value;
  var xAPPVERSION = req.swagger.params['X-APP-VERSION'].value;
  var xAPPOSTYPE = req.swagger.params['X-APP-OS-TYPE'].value;
  var companyCode = req.swagger.params['companyCode'].value;
  var storeCode = req.swagger.params['storeCode'].value;
  var cartID = req.swagger.params['cartID'].value;
  var body = req.swagger.params['body'].value;
  Application.guestCompanyCompanyCodeStoreStoreCodeCartsCartIDUploadedPATCH(xAPIKEY,xAPPTOKEN,xAPPVERSION,xAPPOSTYPE,companyCode,storeCode,cartID,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.guestCompanyCompanyCodeStoreStoreCodeCartsPOST = function guestCompanyCompanyCodeStoreStoreCodeCartsPOST (req, res, next) {
  var xAPIKEY = req.swagger.params['X-API-KEY'].value;
  var xAPPTOKEN = req.swagger.params['X-APP-TOKEN'].value;
  var xAPPVERSION = req.swagger.params['X-APP-VERSION'].value;
  var xAPPOSTYPE = req.swagger.params['X-APP-OS-TYPE'].value;
  var companyCode = req.swagger.params['companyCode'].value;
  var storeCode = req.swagger.params['storeCode'].value;
  Application.guestCompanyCompanyCodeStoreStoreCodeCartsPOST(xAPIKEY,xAPPTOKEN,xAPPVERSION,xAPPOSTYPE,companyCode,storeCode)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.guestCompanyCompanyCodeStoreStoreCodeInstore_masterGET = function guestCompanyCompanyCodeStoreStoreCodeInstore_masterGET (req, res, next) {
  var xAPIKEY = req.swagger.params['X-API-KEY'].value;
  var xAPPTOKEN = req.swagger.params['X-APP-TOKEN'].value;
  var xAPPVERSION = req.swagger.params['X-APP-VERSION'].value;
  var xAPPOSTYPE = req.swagger.params['X-APP-OS-TYPE'].value;
  var companyCode = req.swagger.params['companyCode'].value;
  var storeCode = req.swagger.params['storeCode'].value;
  Application.guestCompanyCompanyCodeStoreStoreCodeInstore_masterGET(xAPIKEY,xAPPTOKEN,xAPPVERSION,xAPPOSTYPE,companyCode,storeCode)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.guestCompanyCompanyCodeStoreStoreCodeItemsBarcodeGET = function guestCompanyCompanyCodeStoreStoreCodeItemsBarcodeGET (req, res, next) {
  var xAPIKEY = req.swagger.params['X-API-KEY'].value;
  var xAPPTOKEN = req.swagger.params['X-APP-TOKEN'].value;
  var xAPPVERSION = req.swagger.params['X-APP-VERSION'].value;
  var xAPPOSTYPE = req.swagger.params['X-APP-OS-TYPE'].value;
  var companyCode = req.swagger.params['companyCode'].value;
  var storeCode = req.swagger.params['storeCode'].value;
  var barcode = req.swagger.params['barcode'].value;
  Application.guestCompanyCompanyCodeStoreStoreCodeItemsBarcodeGET(xAPIKEY,xAPPTOKEN,xAPPVERSION,xAPPOSTYPE,companyCode,storeCode,barcode)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.guestStore_listlatitudelongitudescaleGET = function guestStore_listlatitudelongitudescaleGET (req, res, next) {
  var xAPIKEY = req.swagger.params['X-API-KEY'].value;
  var xAPPTOKEN = req.swagger.params['X-APP-TOKEN'].value;
  var xAPPVERSION = req.swagger.params['X-APP-VERSION'].value;
  var xAPPOSTYPE = req.swagger.params['X-APP-OS-TYPE'].value;
  var latitude = req.swagger.params['latitude'].value;
  var longitude = req.swagger.params['longitude'].value;
  var scale = req.swagger.params['scale'].value;
  Application.guestStore_listlatitudelongitudescaleGET(xAPIKEY,xAPPTOKEN,xAPPVERSION,xAPPOSTYPE,latitude,longitude,scale)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.guestUserTokenPOST = function guestUserTokenPOST (req, res, next) {
  var xAPIKEY = req.swagger.params['X-API-KEY'].value;
  var xAPPVERSION = req.swagger.params['X-APP-VERSION'].value;
  var xAPPOSTYPE = req.swagger.params['X-APP-OS-TYPE'].value;
  var body = req.swagger.params['body'].value;
  Application.guestUserTokenPOST(xAPIKEY,xAPPVERSION,xAPPOSTYPE,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.guestUsesInitiatePOST = function guestUsesInitiatePOST (req, res, next) {
  var xAPPVERSION = req.swagger.params['X-APP-VERSION'].value;
  var xAPPOSTYPE = req.swagger.params['X-APP-OS-TYPE'].value;
  Application.guestUsesInitiatePOST(xAPPVERSION,xAPPOSTYPE)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.guestUsesVersioncheckGET = function guestUsesVersioncheckGET (req, res, next) {
  var xAPIKEY = req.swagger.params['X-API-KEY'].value;
  var xAPPTOKEN = req.swagger.params['X-APP-TOKEN'].value;
  var xAPPVERSION = req.swagger.params['X-APP-VERSION'].value;
  var xAPPOSTYPE = req.swagger.params['X-APP-OS-TYPE'].value;
  Application.guestUsesVersioncheckGET(xAPIKEY,xAPPTOKEN,xAPPVERSION,xAPPOSTYPE)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
