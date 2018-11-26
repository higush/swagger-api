'use strict';


/**
 * 商品リストのデータを取得 Obtains data of the item list. 
 * 対応するバーチャルショッピングカート内の商品リストのデータを取得する。 Obtains data of the item list from a virtual shopping cart using the shopping cart ID. 
 *
 * xEXAPIKEY String 
 * xSTORETOKEN String 
 * xREGIVERSION String 
 * xREGIOSTYPE String 
 * cartID String 
 * returns successCartIDGET
 **/
exports.rEGICartsCartIDItemsGET = function(xEXAPIKEY,xSTORETOKEN,xREGIVERSION,xREGIOSTYPE,cartID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "result" : 0,
  "startTime" : "startTime",
  "itemList" : [ {
    "quantity" : 1,
    "price" : 5,
    "scanStatus" : 6,
    "ID" : "ID",
    "barcode" : "barcode",
    "barcode2" : "barcode2"
  }, {
    "quantity" : 1,
    "price" : 5,
    "scanStatus" : 6,
    "ID" : "ID",
    "barcode" : "barcode",
    "barcode2" : "barcode2"
  } ],
  "message" : "message"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * カート状態を取得 Obtains the status of the cart. 
 * 対応するバーチャルショッピングカート内の状態を取得する。 Obtains the status of the virtual shopping cart using the shopping cart ID. 
 *
 * xEXAPIKEY String 
 * xSTORETOKEN String 
 * xREGIVERSION String 
 * xREGIOSTYPE String 
 * cartID String 
 * returns REGICartStatusGET
 **/
exports.rEGICompanyStoreCartsCartIDPayment_statusGET = function(xEXAPIKEY,xSTORETOKEN,xREGIVERSION,xREGIOSTYPE,cartID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "result" : 0,
  "cartStatus" : 6,
  "message" : "message"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * カート状態を変更 Changes the status of the cart. 
 * ショッピングカートの状態を変更する。 Changes the status of the virtual shopping cart using the shopping cart ID. 
 *
 * xEXAPIKEY String 
 * xSTORETOKEN String 
 * xREGIVERSION String 
 * xREGIOSTYPE String 
 * cartID String 
 * body REGICartStatusPATCH 
 * returns success
 **/
exports.rEGICompanyStoreCartsCartIDTerminatedPATCH = function(xEXAPIKEY,xSTORETOKEN,xREGIVERSION,xREGIOSTYPE,cartID,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "result" : 0,
  "message" : "message"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

