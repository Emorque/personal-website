export default function hobbiesPage() {
    return (
        <div>
            <div className="grid grid-cols-4 gap-2">
                <div>
                    <img alt="First Drawing" className="" src="/drawings/1.jpg"></img>
                </div>
                <div>
                    <img alt="Second Drawing" className="" src="/drawings/2.jpg"></img>
                </div>
                <div>
                    <img alt="Third Drawing" className="" src="/drawings/3.jpg"></img>
                </div>
                <div>
                    <img alt="Fourth Drawing" className="" src="/drawings/4.jpg"></img>
                </div>
                <div>
                    <img alt="Fifth Drawing" className="" src="/drawings/5.jpg"></img>
                </div>
                <div>
                    <img alt="Sixth Drawing" className="" src="/drawings/6.jpg"></img>
                </div>
                <div>
                    <img alt="Seventh Drawing" className="" src="/drawings/7.jpg"></img>
                </div>
                <div>
                    <img alt="Eighth Drawing" className="" src="/drawings/8.jpg"></img>
                </div>
                <div className="col-span-2">
                    <img alt="Ninth Drawing" src="/drawings/9.jpg"></img>
                </div>
            </div>
            <div className={`grid grid-cols-4 gap-2 transition-opacity ease-in duration-1000`}>
                <div>
                    <img 
                    className=""
                    alt="Artwork for Elden Ring" 
                    src="/videoGames/current/eldenringjpg.jpg">
                    </img>
                </div>
                <div>
                    <img 
                    className="" 
                    alt="Artwork for Ratchet and Clank: A Rift Apart"
                    src="/videoGames/current/RC.png">
                    </img>
                </div>
            </div>
        </div>
    );
  }