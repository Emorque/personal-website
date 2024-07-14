import Image from "next/image";

export default function hobbiesPage() {
    return (
        <div>
            <div className="grid grid-cols-4 gap-2">
                <div>
                    <Image alt="First Drawing" className="" src="/drawings/1.jpg"></Image>
                </div>
                <div>
                    <Image alt="Second Drawing" className="" src="/drawings/2.jpg"></Image>
                </div>
                <div>
                    <Image alt="Third Drawing" className="" src="/drawings/3.jpg"></Image>
                </div>
                <div>
                    <Image alt="Fourth Drawing" className="" src="/drawings/4.jpg"></Image>
                </div>
                <div>
                    <Image alt="Fifth Drawing" className="" src="/drawings/5.jpg"></Image>
                </div>
                <div>
                    <Image alt="Sixth Drawing" className="" src="/drawings/6.jpg"></Image>
                </div>
                <div>
                    <Image alt="Seventh Drawing" className="" src="/drawings/7.jpg"></Image>
                </div>
                <div>
                    <Image alt="Eighth Drawing" className="" src="/drawings/8.jpg"></Image>
                </div>
                <div className="col-span-2">
                    <Image alt="Ninth Drawing" src="/drawings/9.jpg"></Image>
                </div>
            </div>
            <div className={`grid grid-cols-4 gap-2 transition-opacity ease-in duration-1000`}>
                <div>
                    <Image 
                    className=""
                    alt="Artwork for Elden Ring" 
                    src="/videoGames/current/eldenringjpg.jpg">
                    </Image>
                </div>
                <div>
                    <Image 
                    className="" 
                    alt="Artwork for Ratchet and Clank: A Rift Apart"
                    src="/videoGames/current/RC.png">
                    </Image>
                </div>
            </div>
        </div>
    );
  }