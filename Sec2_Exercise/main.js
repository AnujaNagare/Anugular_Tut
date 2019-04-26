"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Like_module_1 = require("./Like_module");
var likeM = new Like_module_1.Like_module(10, true);
likeM.clickb();
console.log("Count:  " + likeM.likesCount + " , State: " + likeM.buttonSelected);
