'use strict';


/**
 * 入店処理 Entering a shop processing 
 * 企業コード・店舗コードから店舗情報を取得 Obtains store information using the company code and store code use it in Shop&Go application 
 *
 * xAPIKEY String 
 * xAPPTOKEN String 
 * xAPPVERSION String 
 * xAPPOSTYPE String 
 * companyCode String 
 * storeCode String 
 * returns successStoreGet
 **/
exports.guestCompaniesCompanyCodeStoresStoreCodeGET = function(xAPIKEY,xAPPTOKEN,xAPPVERSION,xAPPOSTYPE,companyCode,storeCode) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "address" : {
    "address3" : "address3",
    "address2" : "address2",
    "address1" : "address1"
  },
  "enterpriseFlag" : 1,
  "pointFlag" : 5,
  "companyName" : "companyName",
  "currencyPosision" : 5,
  "currencyRoundPosision" : 2,
  "zeroPaddingFlag" : 7,
  "timeZone" : "timeZone",
  "telephone" : "telephone",
  "authenticationKey" : "authenticationKey",
  "message" : "message",
  "result" : 0,
  "availableTimeFrom" : "availableTimeFrom",
  "pointServerDomain" : "pointServerDomain",
  "maxScanItems" : 6,
  "ulrList" : {
    "ur2" : "ur2",
    "ur3" : "ur3",
    "url" : "url"
  },
  "closeTime" : "closeTime",
  "availableTimeTo" : "availableTimeTo",
  "storeName" : "storeName",
  "location" : {
    "latitude" : "latitude",
    "longitude" : "longitude"
  },
  "currency" : "currency",
  "openTime" : "openTime",
  "activeFlag" : 9
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * 商品一覧をカートへ登録 Registers the list of scanned items to the cart. 
 * スマートフォンローカル内の商品一覧を、バーチャルショッピングカートに登録するAPI Registers the list of scanned items in the smartphone to the virtual shopping cart. 
 *
 * xAPIKEY String 
 * xAPPTOKEN String 
 * xAPPVERSION String 
 * xAPPOSTYPE String 
 * companyCode String 
 * storeCode String 
 * cartID String 
 * returns appItemPOST
 **/
exports.guestCompanyCompanyCodeStoreStoreCodeCartsCartIDRegisterPOST = function(xAPIKEY,xAPPTOKEN,xAPPVERSION,xAPPOSTYPE,companyCode,storeCode,cartID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "quantity" : 6,
  "price" : 1,
  "scanStatus" : 0,
  "ID" : "ID",
  "barcode" : "barcode",
  "barcode2" : "barcode2"
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
 * xAPIKEY String 
 * xAPPTOKEN String 
 * xAPPVERSION String 
 * xAPPOSTYPE String 
 * companyCode String 
 * storeCode String 
 * cartID String 
 * returns appCartStatusGET
 **/
exports.guestCompanyCompanyCodeStoreStoreCodeCartsCartIDShopping_statusGET = function(xAPIKEY,xAPPTOKEN,xAPPVERSION,xAPPOSTYPE,companyCode,storeCode,cartID) {
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
 * スマホアプリがショッピングカートの状態を変更する。 Changes the status of the virtual shopping cart using the shopping cart ID. 
 *
 * xAPIKEY String 
 * xAPPTOKEN String 
 * xAPPVERSION String 
 * xAPPOSTYPE String 
 * companyCode String 
 * storeCode String 
 * cartID String 
 * body AppCartStatusPATCH 
 * returns success
 **/
exports.guestCompanyCompanyCodeStoreStoreCodeCartsCartIDUploadedPATCH = function(xAPIKEY,xAPPTOKEN,xAPPVERSION,xAPPOSTYPE,companyCode,storeCode,cartID,body) {
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


/**
 * カートIDを作成・取得 Create and Get cart ID. 
 * バーチャルショッピングカートを作成。カートID取得(スマホに返す) Creates ID of shopping cart and returns it to the smartphone. 
 *
 * xAPIKEY String 
 * xAPPTOKEN String 
 * xAPPVERSION String 
 * xAPPOSTYPE String 
 * companyCode String 
 * storeCode String 
 * returns appCartPOST
 **/
exports.guestCompanyCompanyCodeStoreStoreCodeCartsPOST = function(xAPIKEY,xAPPTOKEN,xAPPVERSION,xAPPOSTYPE,companyCode,storeCode) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "result" : 0,
  "cartID" : "cartID",
  "startTime" : "startTime",
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
 * インストアマスタの取得 Get instore-master 
 * （ログイン(入店)処理が完了後）アプリがサーバからログイン店舗のインストアマスタを取得する。 After Shop&Go login processing is completion,acquire an in store master. 
 *
 * xAPIKEY String 
 * xAPPTOKEN String 
 * xAPPVERSION String 
 * xAPPOSTYPE String 
 * companyCode String 
 * storeCode String 
 * returns success
 **/
exports.guestCompanyCompanyCodeStoreStoreCodeInstore_masterGET = function(xAPIKEY,xAPPTOKEN,xAPPVERSION,xAPPOSTYPE,companyCode,storeCode) {
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


/**
 * 商品マスタ情報を取得 Obtains item master data. 
 * 商品マスタ情報を取得する（バーコードスキャン時etc.） Obtains item master data using the item code use it in Shop&Go application. 
 *
 * xAPIKEY String 
 * xAPPTOKEN String 
 * xAPPVERSION String 
 * xAPPOSTYPE String 
 * companyCode String 
 * storeCode String 
 * barcode String バーコード文字列
 * returns successItemGET
 **/
exports.guestCompanyCompanyCodeStoreStoreCodeItemsBarcodeGET = function(xAPIKEY,xAPPTOKEN,xAPPVERSION,xAPPOSTYPE,companyCode,storeCode,barcode) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "result" : 0,
  "reduceTaxFlag" : 5,
  "unitOfMeasurement" : "unitOfMeasurement",
  "discountList" : {
    "code" : "code",
    "establishmentQuantity" : 5,
    "name" : "name",
    "discountPrice" : "discountPrice"
  },
  "taxList" : {
    "rate" : 7,
    "type" : 2
  },
  "itemType" : 6,
  "warningTyepe" : 1,
  "price" : "price",
  "name" : "name",
  "message" : "message",
  "barcode" : "barcode"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * 店舗一覧取得 Get store-List 
 * 位置情報から近傍の入店候補の店舗一覧を取得 Obtains the list of nearby stores using location information. 
 *
 * xAPIKEY String 
 * xAPPTOKEN String 
 * xAPPVERSION String 
 * xAPPOSTYPE String 
 * latitude String 
 * longitude String 
 * scale Integer 
 * returns successStoreList
 **/
exports.guestStore_listlatitudelongitudescaleGET = function(xAPIKEY,xAPPTOKEN,xAPPVERSION,xAPPOSTYPE,latitude,longitude,scale) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "result" : 0,
  "storeList" : [ {
    "address" : {
      "address3" : "address3",
      "address2" : "address2",
      "address1" : "address1"
    },
    "company" : {
      "code" : 6.02745618307040320615897144307382404804229736328125,
      "name" : "name"
    },
    "location" : {
      "latitude" : "latitude",
      "longitude" : "longitude"
    },
    "store" : {
      "code" : 1.46581298050294517310021547018550336360931396484375,
      "name" : "name"
    },
    "url" : {
      "ur2" : "ur2",
      "ur3" : "ur3",
      "url" : "url"
    }
  }, {
    "address" : {
      "address3" : "address3",
      "address2" : "address2",
      "address1" : "address1"
    },
    "company" : {
      "code" : 6.02745618307040320615897144307382404804229736328125,
      "name" : "name"
    },
    "location" : {
      "latitude" : "latitude",
      "longitude" : "longitude"
    },
    "store" : {
      "code" : 1.46581298050294517310021547018550336360931396484375,
      "name" : "name"
    },
    "url" : {
      "ur2" : "ur2",
      "ur3" : "ur3",
      "url" : "url"
    }
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
 * アプリ用JWTの発行 Create JWT for application. 
 * アクセス毎にForm認証を行い、json web tokenを発行する。以降、Headerに必ずセットする。 (現状は匿名会員のため、認証するユーザーIDとパスワードは固定の自動認証。将来的にログインにて発行) 
 *
 * xAPIKEY String 
 * xAPPVERSION String 
 * xAPPOSTYPE String 
 * body CreateToken ユーザID User ID 
 * returns successToken
 **/
exports.guestUserTokenPOST = function(xAPIKEY,xAPPVERSION,xAPPOSTYPE,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "result" : 0,
  "JWT" : "JWT",
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
 * アプリ用APIキー・ユーザID発行 Create API Key and User ID for application. 
 * 初回ログイン時に、APIキーとユーザIDを発行 Obtains the list of nearby stores using location information. 
 *
 * xAPPVERSION String 
 * xAPPOSTYPE String 
 * returns successInitiate
 **/
exports.guestUsesInitiatePOST = function(xAPPVERSION,xAPPOSTYPE) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "result" : 0,
  "UID" : "UID",
  "API Key" : "API Key",
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
 * バージョンチェック Version check. 
 * アプリ起動時に、使用可能バージョンであるかチェックする When the application is turned on, it confirms whether the current application version is usable or not. 
 *
 * xAPIKEY String 
 * xAPPTOKEN String 
 * xAPPVERSION String 
 * xAPPOSTYPE String 
 * returns successVerChk
 **/
exports.guestUsesVersioncheckGET = function(xAPIKEY,xAPPTOKEN,xAPPVERSION,xAPPOSTYPE) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "result" : 0,
  "updateFlag" : 6,
  "updateURL" : "updateURL",
  "message" : "message"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

