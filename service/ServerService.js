'use strict';


/**
 * 企業情報を取得 Get company data. 
 * 企業コードから企業情報を取得 Obtains store information using the company code. 
 *
 * xEXAPIKEY String 
 * xSTORETOKEN String 
 * xSTORENAME String 
 * xSTORESERVERVERSION String 
 * xSTORESERVEROSTYPE String 
 * returns successCompanyGet
 **/
exports.companyGET = function(xEXAPIKEY,xSTORETOKEN,xSTORENAME,xSTORESERVERVERSION,xSTORESERVEROSTYPE) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "result" : 0,
  "address" : {
    "address3" : "address3",
    "address2" : "address2",
    "address1" : "address1"
  },
  "ulrList" : {
    "ur2" : "ur2",
    "ur3" : "ur3",
    "url" : "url"
  },
  "companyName" : "companyName",
  "location" : {
    "latitude" : "latitude",
    "longitude" : "longitude"
  },
  "telephone" : "telephone",
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
 * 企業情報を新規登録 Register the information of the company newly. 
 * 企業コードから企業情報を新規登録 Creates or change company information using the company code. 
 *
 * body CompanyPost  (optional)
 * returns success
 **/
exports.companyPOST = function(body) {
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
 * 店舗稼働フラグの更新 Updates store activeFlag 
 * 店舗マスタの店舗稼働フラグを更新する Updates store information using the company code and store code. 
 *
 * xEXAPIKEY String 
 * xSTORETOKEN String 
 * xSTORENAME String 
 * xSTORESERVERVERSION String 
 * xSTORESERVEROSTYPE String 
 * activeFlag Integer 
 * returns success
 **/
exports.companyStoreActivatePATCH = function(xEXAPIKEY,xSTORETOKEN,xSTORENAME,xSTORESERVERVERSION,xSTORESERVEROSTYPE,activeFlag) {
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
 * 店舗情報を取得 Get store data. 
 * 企業コード・店舗コードから店舗情報を取得 Store information using the company code and store code use it in third-party server 
 *
 * returns successStoreGet
 **/
exports.companyStoreGET = function() {
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
 * 店舗用APIキー・ユーザID発行　　　　　　　　　　　　　　　　　　 Create API Key and User ID for store server. 
 * 初回アクセス時に、APIキーとユーザIDを発行 Obtains the list of nearby stores using location information. 
 *
 * xSTORENAME String 
 * xSTORESERVERVERSION String 
 * xSTORESERVEROSTYPE String 
 * returns successInitiate
 **/
exports.companyStoreInitiatePOST = function(xSTORENAME,xSTORESERVERVERSION,xSTORESERVEROSTYPE) {
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
 * 商品マスタ情報を削除 Deletes item master data. 
 * 商品コードをキーにして、商品マスタ情報を削除 Deletes item master data using the item code. 
 *
 * xEXAPIKEY String 
 * xSTORETOKEN String 
 * xSTORENAME String 
 * xSTORESERVERVERSION String 
 * xSTORESERVEROSTYPE String 
 * barcode String 
 * returns success
 **/
exports.companyStoreItemsBarcodeDELETE = function(xEXAPIKEY,xSTORETOKEN,xSTORENAME,xSTORESERVERVERSION,xSTORESERVEROSTYPE,barcode) {
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
 * 商品マスタの取得。 Obtains item master data. 
 * 既設メンテナンスシステムにて、商品コードをキーにして、商品マスタを取得する。 Obtains item master data using the item code use it in third-party server. 
 *
 * xEXAPIKEY String 
 * xSTORETOKEN String 
 * xSTORENAME String 
 * xSTORESERVERVERSION String 
 * xSTORESERVEROSTYPE String 
 * barcode String 
 * returns successItemGET
 **/
exports.companyStoreItemsBarcodeGET = function(xEXAPIKEY,xSTORETOKEN,xSTORENAME,xSTORESERVERVERSION,xSTORESERVEROSTYPE,barcode) {
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
 * 商品マスタの新規登録 Register the information of the item-master newly. 
 * 既設メンテナンスシステムにて、商品コードをキーにし、商品マスタに新規登録する。 Creates item master data using the item code. 
 *
 * xEXAPIKEY String 
 * xSTORETOKEN String 
 * xSTORENAME String 
 * xSTORESERVERVERSION String 
 * xSTORESERVEROSTYPE String 
 * body ItemPOST 
 * returns success
 **/
exports.companyStoreItemsPOST = function(xEXAPIKEY,xSTORETOKEN,xSTORENAME,xSTORESERVERVERSION,xSTORESERVEROSTYPE,body) {
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
 * 店舗情報を新規登録 Register the information of the store newly. 
 * 企業コード・店舗コードから店舗情報を新規登録 Creates or change store information using the company code and store code. 
 *
 * xEXAPIKEY String 
 * xSTORETOKEN String 
 * xSTORENAME String 
 * xSTORESERVERVERSION String 
 * xSTORESERVEROSTYPE String 
 * body StorePOST ユーザID User ID 
 * returns success
 **/
exports.companyStorePOST = function(xEXAPIKEY,xSTORETOKEN,xSTORENAME,xSTORESERVERVERSION,xSTORESERVEROSTYPE,body) {
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
 * 複数商品登録用URLの返却 
 * 複数商品登録用に作成したファイルの、保存先URLを返す 
 *
 * xEXAPIKEY String 
 * xSTORETOKEN String 
 * xSTORENAME String 
 * xSTORESERVERVERSION String 
 * xSTORESERVEROSTYPE String 
 * returns successPluralGET
 **/
exports.companyStorePlural_itemsGET = function(xEXAPIKEY,xSTORETOKEN,xSTORENAME,xSTORESERVERVERSION,xSTORESERVEROSTYPE) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "result" : 0,
  "itemsURL" : "itemsURL",
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
 * 複数アイテム登録用ファイルの進捗確認 
 * 複数アイテム登録様に、サーバに上げたファイルの進捗状況を返す 
 *
 * xEXAPIKEY String 
 * xSTORETOKEN String 
 * xSTORENAME String 
 * xSTORESERVERVERSION String 
 * xSTORESERVEROSTYPE String 
 * file_number BigDecimal 
 * returns successPluralStatusGET
 **/
exports.companyStorePlural_itemsStatusFile_numberGET = function(xEXAPIKEY,xSTORETOKEN,xSTORENAME,xSTORESERVERVERSION,xSTORESERVEROSTYPE,file_number) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "result" : 0,
  "progress" : 6,
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
 * 店舗用JWTの発行 Create JWT for store. 
 * アクセス毎にForm認証を行い、json web tokenを発行する。以降、Headerに必ずセットする。 (現状は匿名会員のため、認証するユーザーIDとパスワードは固定の自動認証。将来的にログインにて発行) 
 *
 * xEXAPIKEY String 
 * xSTORENAME String 
 * xSTORESERVERVERSION String 
 * xSTORESERVEROSTYPE String 
 * returns successToken
 **/
exports.companyStoreTokenPOST = function(xEXAPIKEY,xSTORENAME,xSTORESERVERVERSION,xSTORESERVEROSTYPE) {
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

