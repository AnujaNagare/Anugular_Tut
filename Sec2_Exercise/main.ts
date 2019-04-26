import {Like_module} from './Like_module';

let likeM  = new Like_module(10,true);
likeM.clickb();

console.log(`Count:  ${likeM.likesCount} , State: ${likeM.buttonSelected}`);

