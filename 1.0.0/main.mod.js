import { PolyMod, MixinType } from "https://pml.crjakob.com/cb/PolyTrackMods/PolyModLoader/0.5.2/PolyModLoader.js";

class RPC extends PolyMod {
    init = (pml) => {
        pml.registerFuncMixin("polyInitFunction", MixinType.INSERT, 'const n = i(7780);', `
            const script = document.createElement("script");
            script.src = "https://raw.githubusercontent.com/discordjs/RPC/refs/heads/master/src/client.js"; // URL of the library
            script.onload = () => {
                console.log("loaded!");
            };
            document.head.appendChild(script);
    `);
    };
}


export let polyMod = new RPC();
