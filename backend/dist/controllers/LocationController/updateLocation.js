"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = __importDefault(require("../../src/client"));
const updateLocation = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const location = yield client_1.default.locationData.update({
            data: req.body,
            where: {
                id: req.params.id,
            },
        });
        if (!location) {
            console.log("location not found");
            res.status(404).json({ error: "location not found" });
        }
        return (console.log(location),
            res.status(200).json({ Message: "location updated successfully" }));
    }
    catch (error) {
        console.log("An error has occured");
        res.status(500).json({ error: "Internal Server Error" });
    }
});
exports.default = updateLocation;
