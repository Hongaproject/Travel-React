import { useState } from "react";

function RegionList () {

    return(
        <div> 
            <div class="grid grid-cols-4 gap-4 place-items-center my-auto mt-40">
                <div className="p-10 bg-slate-200">01</div>
                <div>02</div>
                <div>03</div>
                <div>04</div>
                <div className="p-10 bg-slate-200">05</div>
                <div>06</div>
                <div>07</div>
                <div>08</div>
                <div className="p-10 bg-slate-200">09</div>
            </div>
        </div>
    );
}

export default RegionList;