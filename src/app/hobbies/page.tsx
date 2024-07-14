import Image from "next/image";

export default function hobbiesPage() {
    return (
        <div>
            <div className="grid grid-cols-4 gap-2">
                <div>
                    <Image alt="First Drawing" width={2012} height={2740} className="" src="/drawings/1.jpg"></Image>
                </div>
                <div>
                    <Image alt="Second Drawing" width={2012} height={2740} className="" src="/drawings/2.jpg"></Image>
                </div>
                <div>
                    <Image alt="Third Drawing" width={2012} height={2740}  className="" src="/drawings/3.jpg"></Image>
                </div>
                <div>
                    <Image alt="Fourth Drawing" width={2012} height={2740} className="" src="/drawings/4.jpg"></Image>
                </div>
                <div>
                    <Image alt="Fifth Drawing" width={2012} height={2740} className="" src="/drawings/5.jpg"></Image>
                </div>
                <div>
                    <Image alt="Sixth Drawing" width={2012} height={2740} className="" src="/drawings/6.jpg"></Image>
                </div>
                <div>
                    <Image alt="Seventh Drawing" width={2012} height={2740} className="" src="/drawings/7.jpg"></Image>
                </div>
                <div>
                    <Image alt="Eighth Drawing" width={2012} height={2740} className="" src="/drawings/8.jpg"></Image>
                </div>
                <div className="col-span-2">
                    <Image alt="Ninth Drawing" width={2012} height={2740} src="/drawings/9.jpg"></Image>
                </div>
            </div>
            <div className={`grid grid-cols-4 gap-2 transition-opacity ease-in duration-1000`}>
                <div>
                    <Image 
                    className=""
                    width={2012} height={2740}
                    alt="Artwork for Elden Ring" 
                    src="/videoGames/current/eldenringjpg.jpg">
                    </Image>
                </div>
                <div>
                    <Image 
                    className="" 
                    width={2012} height={2740}
                    alt="Artwork for Ratchet and Clank: A Rift Apart"
                    src="/videoGames/current/RC.png">
                    </Image>
                </div>
            </div>
        </div>
    );
  }