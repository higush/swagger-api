'use strict';


/**
 * 部門名称の取得 Obtains department name. 
 * 入力された部門コードをキーにして部門名称を取得する Obtains department name using the department code. Used when store associate registers a NonFile item by its department on a payment station. 
 *
 * xREGIVERSION String 
 * xREGIOSTYPE String 
 * departmentCode String 
 * returns CRDepartmentGET
 **/
exports.exDepartmentsDepartmentCodeGET = function(xREGIVERSION,xREGIOSTYPE,departmentCode) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "result" : 0,
  "departmentName" : "departmentName",
  "departmentCode" : "departmentCode",
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
 * 商品情報を取得 Obtains item information. 
 * 商品コードをキーにして商品情報を取得する Obtains item information using the item code. A store associate enters the item code of \"Unidentifiable\" items by scanning the barcode or manually keying it in on the payment station. 
 *
 * xREGIVERSION String 
 * xREGIOSTYPE String 
 * barcode String 
 * returns CRItemGET
 **/
exports.exItemsBarcodePOST = function(xREGIVERSION,xREGIOSTYPE,barcode) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "result" : 0,
  "unitOfMeasurement" : 5,
  "quantity" : 5,
  "price" : 6,
  "weighrType" : 1,
  "name" : "name",
  "message" : "message",
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
 * 他社ポイントサーバーから情報取得 Obtains points information from third-party points server. 
 * 他社ポイントサーバーからポイント情報を取得する　 ※{memberInfo}は会員コード、電話番号等の情報 Obtains points information from third-party points server using the member code.  {memberInfo}：\"member code\", \"telephone number\" and so on. 
 *
 * xREGIVERSION String 
 * xREGIOSTYPE String 
 * memberInfo String 
 * returns CRMemberGET
 **/
exports.exMembersMemberInfoGET = function(xREGIVERSION,xREGIOSTYPE,memberInfo) {
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
 * 精算済みデータを送信 Sending data of completed transactions. 
 * 精算済みデータ（ジャーナルデータ）を既設POSに送信する API for sending data of completed transactions from payment stations to existing POS systems. 
 *
 * xREGIVERSION String 
 * xREGIOSTYPE String 
 * returns CRResultPOST
 **/
exports.exResultPOST = function(xREGIVERSION,xREGIOSTYPE) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "totalRoundAmount" : 4,
  "receiptNum" : "receiptNum",
  "cartID" : "cartID",
  "subTotalServiceList" : [ {
    "servicePrice" : 1,
    "name" : "name"
  }, {
    "servicePrice" : 1,
    "name" : "name"
  } ],
  "totalService" : 7,
  "itemTotalService" : 9,
  "subTotalService" : 3,
  "itemTotalDiscount" : 5,
  "cancelFlag" : 1,
  "subTotalDiscountList" : [ {
    "name" : "name",
    "discountPrice" : 4
  }, {
    "name" : "name",
    "discountPrice" : 4
  } ],
  "taxList" : [ {
    "amount" : 4,
    "code" : "code",
    "rate" : 7,
    "name" : "name",
    "taxableAmout" : 1
  }, {
    "amount" : 4,
    "code" : "code",
    "rate" : 7,
    "name" : "name",
    "taxableAmout" : 1
  } ],
  "total" : 0,
  "memberList" : {
    "code" : "code",
    "availableAmount" : 5,
    "name" : "name",
    "memberType" : "memberType",
    "point" : 6,
    "addPoint" : 1
  },
  "totalQuantity" : 1,
  "paymentCode" : "paymentCode",
  "subTotalDiscount" : 2,
  "paymentTypeList" : [ {
    "paymentCode" : "paymentCode",
    "price" : 7,
    "type" : "type"
  }, {
    "paymentCode" : "paymentCode",
    "price" : 7,
    "type" : "type"
  } ],
  "subtotal" : 6,
  "totalDiscount" : 5,
  "startTime" : "startTime",
  "itemList" : [ {
    "calculatedPrice" : 8,
    "unitOfMeasurement" : "unitOfMeasurement",
    "discountList" : "",
    "quantity" : 9,
    "scanStatus" : 5,
    "barcode2" : "barcode2",
    "memberFlag" : 9,
    "weightType" : 9,
    "taxList" : "",
    "price" : 6,
    "name" : "name",
    "serviceList" : "",
    "ID" : "ID",
    "barcode" : "barcode"
  }, {
    "calculatedPrice" : 8,
    "unitOfMeasurement" : "unitOfMeasurement",
    "discountList" : "",
    "quantity" : 9,
    "scanStatus" : 5,
    "barcode2" : "barcode2",
    "memberFlag" : 9,
    "weightType" : 9,
    "taxList" : "",
    "price" : 6,
    "name" : "name",
    "serviceList" : "",
    "ID" : "ID",
    "barcode" : "barcode"
  } ],
  "taxAmount" : 2,
  "subtotalRequestTime" : "subtotalRequestTime"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * 従業員コードの確認 Confirms a staff code. 
 * 精算機で読み取られた従業員コードが正しいか確認する Confirms whether a staff code is valid or not. Used when store associate tries to login to the maintenance mode on the payment station. 
 *
 * xREGIVERSION String 
 * xREGIOSTYPE String 
 * staffCode String 
 * returns CRStaffGET
 **/
exports.exStaffStaffCodeGET = function(xREGIVERSION,xREGIOSTYPE,staffCode) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "result" : 0,
  "staffCode" : "staffCode",
  "staffName" : "staffName",
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
 * 小計リクエストを行う Send back the calculated subtotal. 
 * 商品リストを既設POSに送信し、精算済みデータ（ジャーナルデータ）を受け取る The payment station sends the item list obtained from the virtual shopping cart to the existing POS. The existing POS sends back the calculated subtotal to the payment station. 
 *
 * xREGIVERSION String 
 * xREGIOSTYPE String 
 * body CRSubtotal-paraPOST 
 * returns CRSubtotal-resPOST
 **/
exports.exSubtotalGET = function(xREGIVERSION,xREGIOSTYPE,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "totalRoundAmount" : 6,
  "receiptNum" : "receiptNum",
  "cartID" : "cartID",
  "subTotalServiceList" : [ {
    "servicePrice" : 1,
    "name" : "name"
  }, {
    "servicePrice" : 1,
    "name" : "name"
  } ],
  "totalService" : 7,
  "itemTotalService" : 1,
  "subTotalService" : 1,
  "message" : "message",
  "itemTotalDiscount" : 3,
  "subTotalDiscountList" : [ {
    "name" : "name",
    "discountPrice" : 4
  }, {
    "name" : "name",
    "discountPrice" : 4
  } ],
  "result" : 0,
  "taxList" : [ {
    "amount" : 4,
    "code" : "code",
    "rate" : 7,
    "name" : "name",
    "taxableAmout" : 1
  }, {
    "amount" : 4,
    "code" : "code",
    "rate" : 7,
    "name" : "name",
    "taxableAmout" : 1
  } ],
  "total" : 5,
  "memberList" : {
    "code" : "code",
    "availableAmount" : 5,
    "name" : "name",
    "memberType" : "memberType",
    "point" : 6,
    "addPoint" : 1
  },
  "totalQuantity" : 7,
  "paymentCode" : "paymentCode",
  "subTotalDiscount" : 2,
  "subtotal" : 2,
  "totalDiscount" : 9,
  "startTime" : "startTime",
  "itemList" : [ {
    "calculatedPrice" : 8,
    "unitOfMeasurement" : "unitOfMeasurement",
    "discountList" : "",
    "quantity" : 9,
    "scanStatus" : 5,
    "barcode2" : "barcode2",
    "memberFlag" : 9,
    "weightType" : 9,
    "taxList" : "",
    "price" : 6,
    "name" : "name",
    "serviceList" : "",
    "ID" : "ID",
    "barcode" : "barcode"
  }, {
    "calculatedPrice" : 8,
    "unitOfMeasurement" : "unitOfMeasurement",
    "discountList" : "",
    "quantity" : 9,
    "scanStatus" : 5,
    "barcode2" : "barcode2",
    "memberFlag" : 9,
    "weightType" : 9,
    "taxList" : "",
    "price" : 6,
    "name" : "name",
    "serviceList" : "",
    "ID" : "ID",
    "barcode" : "barcode"
  } ],
  "taxAmount" : 6,
  "subtotalRequestTime" : "subtotalRequestTime"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

