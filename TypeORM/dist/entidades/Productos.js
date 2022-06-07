"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productos = void 0;
const typeorm_1 = require("typeorm");
let productos = class productos extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], productos.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5IWLLinP9aZgQbZmDw1yhRz2MXz8zt9XxTl0KgPjfEFB64sBvcSFcuQYNua3NLaTC2ro&usqp=CAU"
    }),
    __metadata("design:type", String)
], productos.prototype, "foto", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], productos.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], productos.prototype, "precio", void 0);
__decorate([
    (0, typeorm_1.Column)({
        default: "Gato meow meow"
    }),
    __metadata("design:type", String)
], productos.prototype, "descripcion", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], productos.prototype, "crearAdd", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], productos.prototype, "actualizarUp", void 0);
productos = __decorate([
    (0, typeorm_1.Entity)()
], productos);
exports.productos = productos;
