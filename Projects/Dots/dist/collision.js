"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CollisionResponse = exports.Sphere2Sphere = void 0;
//-----------------------------------------------------------------------------------------------//
function Sphere2Sphere(c1, r1, c2, r2) {
    const dis = c1._sub(c2).length;
    return dis < r1 + r2;
}
exports.Sphere2Sphere = Sphere2Sphere;
//-----------------------------------------------------------------------------------------------//
//		(U1*M1)+(U2*M2)-(U1-U2)*M2
// V = -----------------------------
//                M1+M2
//-----------------------------------------------------------------------------------------------//
function CollisionResponse(vel1, M1, vel2, M2) {
    const invM1M2 = 1.0 / (M1 + M2);
    const V1M1 = vel1._mul(M1);
    const V2M2 = vel2._mul(M2);
    const ENERGY = V1M1._add(V2M2);
    const V12 = vel2._sub(vel1);
    const V1 = ENERGY._add(V12._mul(M2)).mul(invM1M2);
    const V2 = ENERGY._sub(V12._mul(M1)).mul(invM1M2);
    vel1.copy(V1);
    vel2.copy(V2);
}
exports.CollisionResponse = CollisionResponse;
//-----------------------------------------------------------------------------------------------//
