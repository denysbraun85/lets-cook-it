// export default class RecipeService {
//     constructor() {
//         this._apiBase = 'https://lets-cook-it.firebaseio.com/lets-coolk-it';
//         console.log(this._apiBase);
//     }
//
//     getResource = async (url) => {
//         const res = await fetch(`${this._apiBase}${url}`);
//
//         if (!res.ok) {
//             throw new Error(`Could not fetch ${url}` +
//                 `, received ${res.status}`);
//         }
//         return await res.json();
//     }
// }