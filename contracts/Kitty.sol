// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.18;

contract Kitty {

    uint kittydna1 = 2345534598873982;
    uint kittydna2 = 2837283948372467;
    uint kittydna3 = 8898276173876478;
    uint kittydna4 = 8723163899482736;

    function getKittyDNA(uint _id) public view returns (uint){
        if(_id == 1) { return kittydna1;} 
        if(_id == 2) { return kittydna2;} 
        if(_id == 3) { return kittydna3;} 
        if(_id == 4) { return kittydna4;}
        else { return kittydna4; }
    }

}