import { PolyMod, MixinType } from "https://pml.ccrjakob.com/PolyTrackMods/PolyModLoader/0.5.1/PolyModLoader.js";

class YourMod extends PolyMod {
    init = (pml) => {
        // regular init
    }
    postInit = () => {
        // post init
    }
    simInit = () => {
        // sim init here
    } 
}


export let polyMod = new YourMod();
