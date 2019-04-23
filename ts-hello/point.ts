// Sec2 : Module
export class Point{ 
    
    constructor(private _x?: number, private _y?:number){ //when the 1st parameter is made optional by adding?, all other parameters should also be optional   
    }
    draw () {
        console.log('X: ' +this._x + '\nY: '+ this._y);
    }
}