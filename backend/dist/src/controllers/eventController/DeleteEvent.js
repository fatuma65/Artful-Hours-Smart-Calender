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
const client_1 = __importDefault(require("../../client"));
const deleteEvent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const eventToDelete = yield client_1.default.event
            .delete({
            where: { id: req.params.id },
        })
            .catch(() => {
            throw ((new Error(`Event with id ${req.params.id} not found`),
                res.status(404).json({ error: "Event not found" })));
        });
        if (eventToDelete) {
            console.log("Event deleted successfully");
            res.status(200).json({ message: "Event deleted successfully" });
        }
    }
    catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
});
exports.default = deleteEvent;
