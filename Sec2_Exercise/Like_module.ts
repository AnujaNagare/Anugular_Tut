// Sec2 : Module
export class Like_module{ 
    constructor(private _c?: number, private _s?: boolean){ 
    }    

    get likesCount(){
        return this._c;
    }
    get buttonSelected(){
        return this._s;
    }
    clickb () {

        // if(this._s){
        //     this._c--;
        //     this._s = false
        // }//if
        // else{
        //     this._c++;
        //     this._s = true

        // }//else

        // console.log('Count: ' + (this._c) + " State: "+ this._s);

        this._c += (this._c) ? -1 : +1;
        this._s = !this._s;
    }
}