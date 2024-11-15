"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const routes_1 = __importDefault(require("@/routes"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)({ credentials: true, origin: true }));
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.urlencoded({ extended: true }));
if (process.env.NODE_ENV === "development") {
    app.use((0, morgan_1.default)("dev"));
    app.use("/api/v1", routes_1.default);
    app.listen(process.env.PORT || 5000, () => {
        console.log(`Server listening on port ${process.env.PORT || 5000}...  http://localhost:${process.env.PORT || 5000}`);
    });
}
else {
    app.use("/api/v1", routes_1.default);
    app.listen(process.env.PORT, () => {
        console.log(`Server listening on port ${process.env.PORT}...`);
    });
}
