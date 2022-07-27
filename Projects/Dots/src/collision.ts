import { PT } from "./pt";

//-----------------------------------------------------------------------------------------------//
export function Sphere2Sphere(c1: PT, r1: number, c2: PT, r2: number): boolean {
    const dis = c1._sub(c2).length;
    return dis < r1 + r2;
}
//-----------------------------------------------------------------------------------------------//
//		(U1*M1)+(U2*M2)-(U1-U2)*M2
// V = -----------------------------
//                M1+M2
//-----------------------------------------------------------------------------------------------//
export function CollisionResponse(vel1: PT, M1: number, vel2: PT, M2: number) {
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
//-----------------------------------------------------------------------------------------------//
