'use strict';

var utils = require('../utils/writer.js');
var Server = require('../service/ServerService');

module.exports.companyGET = function companyGET (req, res, next) {
  var xEXAPIKEY = req.swagger.params['X-EX-API-KEY'].value;
  var xSTORETOKEN = req.swagger.params['X-STORE-TOKEN'].value;
  var xSTORENAME = req.swagger.params['X-STORE-NAME'].value;
  var xSTORESERVERVERSION = req.swagger.params['X-STORESERVER-VERSION'].value;
  var xSTORESERVEROSTYPE = req.swagger.params['X-STORESERVER-OS-TYPE'].value;
  Server.companyGET(xEXAPIKEY,xSTORETOKEN,xSTORENAME,xSTORESERVERVERSION,xSTORESERVEROSTYPE)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.companyPOST = function companyPOST (req, res, next) {
  var body = req.swagger.params['body'].value;
  Server.companyPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.companyStoreActivatePATCH = function companyStoreActivatePATCH (req, res, next) {
  var xEXAPIKEY = req.swagger.params['X-EX-API-KEY'].value;
  var xSTORETOKEN = req.swagger.params['X-STORE-TOKEN'].value;
  var xSTORENAME = req.swagger.params['X-STORE-NAME'].value;
  var xSTORESERVERVERSION = req.swagger.params['X-STORESERVER-VERSION'].value;
  var xSTORESERVEROSTYPE = req.swagger.params['X-STORESERVER-OS-TYPE'].value;
  var activeFlag = req.swagger.params['activeFlag'].value;
  Server.companyStoreActivatePATCH(xEXAPIKEY,xSTORETOKEN,xSTORENAME,xSTORESERVERVERSION,xSTORESERVEROSTYPE,activeFlag)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.companyStoreGET = function companyStoreGET (req, res, next) {
  Server.companyStoreGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.companyStoreInitiatePOST = function companyStoreInitiatePOST (req, res, next) {
  var xSTORENAME = req.swagger.params['X-STORE-NAME'].value;
  var xSTORESERVERVERSION = req.swagger.params['X-STORESERVER-VERSION'].value;
  var xSTORESERVEROSTYPE = req.swagger.params['X-STORESERVER-OS-TYPE'].value;
  Server.companyStoreInitiatePOST(xSTORENAME,xSTORESERVERVERSION,xSTORESERVEROSTYPE)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.companyStoreItemsBarcodeDELETE = function companyStoreItemsBarcodeDELETE (req, res, next) {
  var xEXAPIKEY = req.swagger.params['X-EX-API-KEY'].value;
  var xSTORETOKEN = req.swagger.params['X-STORE-TOKEN'].value;
  var xSTORENAME = req.swagger.params['X-STORE-NAME'].value;
  var xSTORESERVERVERSION = req.swagger.params['X-STORESERVER-VERSION'].value;
  var xSTORESERVEROSTYPE = req.swagger.params['X-STORESERVER-OS-TYPE'].value;
  var barcode = req.swagger.params['barcode'].value;
  Server.companyStoreItemsBarcodeDELETE(xEXAPIKEY,xSTORETOKEN,xSTORENAME,xSTORESERVERVERSION,xSTORESERVEROSTYPE,barcode)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.companyStoreItemsBarcodeGET = function companyStoreItemsBarcodeGET (req, res, next) {
  var xEXAPIKEY = req.swagger.params['X-EX-API-KEY'].value;
  var xSTORETOKEN = req.swagger.params['X-STORE-TOKEN'].value;
  var xSTORENAME = req.swagger.params['X-STORE-NAME'].value;
  var xSTORESERVERVERSION = req.swagger.params['X-STORESERVER-VERSION'].value;
  var xSTORESERVEROSTYPE = req.swagger.params['X-STORESERVER-OS-TYPE'].value;
  var barcode = req.swagger.params['barcode'].value;
  Server.companyStoreItemsBarcodeGET(xEXAPIKEY,xSTORETOKEN,xSTORENAME,xSTORESERVERVERSION,xSTORESERVEROSTYPE,barcode)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.companyStoreItemsPOST = function companyStoreItemsPOST (req, res, next) {
  var xEXAPIKEY = req.swagger.params['X-EX-API-KEY'].value;
  var xSTORETOKEN = req.swagger.params['X-STORE-TOKEN'].value;
  var xSTORENAME = req.swagger.params['X-STORE-NAME'].value;
  var xSTORESERVERVERSION = req.swagger.params['X-STORESERVER-VERSION'].value;
  var xSTORESERVEROSTYPE = req.swagger.params['X-STORESERVER-OS-TYPE'].value;
  var body = req.swagger.params['body'].value;
  Server.companyStoreItemsPOST(xEXAPIKEY,xSTORETOKEN,xSTORENAME,xSTORESERVERVERSION,xSTORESERVEROSTYPE,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.companyStorePOST = function companyStorePOST (req, res, next) {
  var xEXAPIKEY = req.swagger.params['X-EX-API-KEY'].value;
  var xSTORETOKEN = req.swagger.params['X-STORE-TOKEN'].value;
  var xSTORENAME = req.swagger.params['X-STORE-NAME'].value;
  var xSTORESERVERVERSION = req.swagger.params['X-STORESERVER-VERSION'].value;
  var xSTORESERVEROSTYPE = req.swagger.params['X-STORESERVER-OS-TYPE'].value;
  var body = req.swagger.params['body'].value;
  Server.companyStorePOST(xEXAPIKEY,xSTORETOKEN,xSTORENAME,xSTORESERVERVERSION,xSTORESERVEROSTYPE,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.companyStorePlural_itemsGET = function companyStorePlural_itemsGET (req, res, next) {
  var xEXAPIKEY = req.swagger.params['X-EX-API-KEY'].value;
  var xSTORETOKEN = req.swagger.params['X-STORE-TOKEN'].value;
  var xSTORENAME = req.swagger.params['X-STORE-NAME'].value;
  var xSTORESERVERVERSION = req.swagger.params['X-STORESERVER-VERSION'].value;
  var xSTORESERVEROSTYPE = req.swagger.params['X-STORESERVER-OS-TYPE'].value;
  Server.companyStorePlural_itemsGET(xEXAPIKEY,xSTORETOKEN,xSTORENAME,xSTORESERVERVERSION,xSTORESERVEROSTYPE)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.companyStorePlural_itemsStatusFile_numberGET = function companyStorePlural_itemsStatusFile_numberGET (req, res, next) {
  var xEXAPIKEY = req.swagger.params['X-EX-API-KEY'].value;
  var xSTORETOKEN = req.swagger.params['X-STORE-TOKEN'].value;
  var xSTORENAME = req.swagger.params['X-STORE-NAME'].value;
  var xSTORESERVERVERSION = req.swagger.params['X-STORESERVER-VERSION'].value;
  var xSTORESERVEROSTYPE = req.swagger.params['X-STORESERVER-OS-TYPE'].value;
  var file_number = req.swagger.params['file_number'].value;
  Server.companyStorePlural_itemsStatusFile_numberGET(xEXAPIKEY,xSTORETOKEN,xSTORENAME,xSTORESERVERVERSION,xSTORESERVEROSTYPE,file_number)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.companyStoreTokenPOST = function companyStoreTokenPOST (req, res, next) {
  var xEXAPIKEY = req.swagger.params['X-EX-API-KEY'].value;
  var xSTORENAME = req.swagger.params['X-STORE-NAME'].value;
  var xSTORESERVERVERSION = req.swagger.params['X-STORESERVER-VERSION'].value;
  var xSTORESERVEROSTYPE = req.swagger.params['X-STORESERVER-OS-TYPE'].value;
  Server.companyStoreTokenPOST(xEXAPIKEY,xSTORENAME,xSTORESERVERVERSION,xSTORESERVEROSTYPE)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
