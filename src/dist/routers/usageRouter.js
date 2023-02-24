"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const usageController_1 = require("../controller/usageController");
const router = express_1.default.Router();
// SERP: SEO
router.route("/:id/get-google-search").post(usageController_1.getGoogleKeywords);
router.route("/:id/get-bing-search").post(usageController_1.getBingKeywords);
router.route("/:id/get-yahoo-search").post(usageController_1.getYahooKeywords);
// BAIDU
router.route("/:id/get-baidu-search").post(usageController_1.postBaiduKeywords);
router.route("/:id/:myIDs/get-baidu-search").get(usageController_1.getBaiduKeywords);
// NAVER
router.route("/:id/get-naver-search").post(usageController_1.postNaverKeywords);
router.route("/:id/:myIDs/get-naver-search").get(usageController_1.getNaverKeywords);
// SEZNAM
router.route("/:id/get-seznam-search").post(usageController_1.postSeznamKeywords);
router.route("/:id/:myIDs/get-seznam-search").get(usageController_1.getSeznamKeywords);
router.route("/:id/backlink-summary-search").post(usageController_1.gettBacklinkSummary);
// BusinessData API Call
router.route("/:id/business-data-search").post(usageController_1.postBusinessInfo);
router.route("/:id/:myID/business-data-search").get(usageController_1.getBusinessInfo);
// 
exports.default = router;
