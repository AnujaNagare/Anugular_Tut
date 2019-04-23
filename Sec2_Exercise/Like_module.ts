// Sec2 : Module
export class Like_module{ 
    constructor(private _c?: number, private _s?: string){ 
    }
    count () {
        console.log('Count: ' + (this._c+1) + " State: "+ this._s);
    }
}