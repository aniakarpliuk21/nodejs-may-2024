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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRepository = void 0;
var fs_servises_1 = require("../services/fs.servises");
var UserRepository = /** @class */ (function () {
    function UserRepository() {
    }
    UserRepository.prototype.getList = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, fs_servises_1.read)()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    UserRepository.prototype.create = function (dto) {
        return __awaiter(this, void 0, void 0, function () {
            var users, newUser;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, fs_servises_1.read)()];
                    case 1:
                        users = _a.sent();
                        newUser = {
                            id: users.length ? users[users.length - 1].id + 1 : 1,
                            name: dto.name,
                            email: dto.email,
                            password: dto.password,
                        };
                        users.push(newUser);
                        return [4 /*yield*/, (0, fs_servises_1.write)(users)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, newUser];
                }
            });
        });
    };
    UserRepository.prototype.delete = function (userId) {
        return __awaiter(this, void 0, void 0, function () {
            var users, findUserId;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, fs_servises_1.read)()];
                    case 1:
                        users = _a.sent();
                        findUserId = users.findIndex(function (user) { return user.id !== Number(userId); });
                        users.splice(findUserId, 1);
                        return [4 /*yield*/, (0, fs_servises_1.write)(users)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UserRepository.prototype.getUserById = function (userId) {
        return __awaiter(this, void 0, void 0, function () {
            var users;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, fs_servises_1.read)()];
                    case 1:
                        users = _a.sent();
                        return [2 /*return*/, users.find(function (user) { return user.id === Number(userId); })];
                }
            });
        });
    };
    UserRepository.prototype.updateUser = function (userId, dto) {
        return __awaiter(this, void 0, void 0, function () {
            var users, findUserId, user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, fs_servises_1.read)()];
                    case 1:
                        users = _a.sent();
                        findUserId = users.findIndex(function (user) { return user.id === Number(userId); });
                        user = users[findUserId];
                        user.name = dto.name;
                        user.email = dto.email;
                        user.password = dto.password;
                        return [4 /*yield*/, (0, fs_servises_1.write)(users)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, user];
                }
            });
        });
    };
    return UserRepository;
}());
exports.userRepository = new UserRepository();
