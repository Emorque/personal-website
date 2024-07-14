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
                    <Image priority alt="Ninth Drawing" width={2012} height={2740} src="/drawings/9.jpg"></Image>
                </div>
            </div>
            <br/>
            <h1>What I am Playing Now:</h1>
            <div className={`grid grid-cols-4 gap-2`}>
                <div>
                    <Image 
                    width={2012} height={2740}
                    alt="Artwork for Elden Ring" 
                    src="/videoGames/current/EldenRing.webp">
                    </Image>
                </div>
            </div>
            <br/>
            <h1>Some of my Favorites:</h1>
            <div className={`grid grid-cols-4 gap-2`}>
                <div>
                    <Image 
                    width={2012} height={2740}
                    alt="Artwork for Octopath Traveler 2" 
                    src="/videoGames/favorites/OT2.webp">
                    </Image>
                </div>
                <div>
                    <Image 
                    width={2012} height={2740}
                    alt="Artwork for Jak and Daxter" 
                    src="/videoGames/favorites/JandD.webp">
                    </Image>
                </div>
                <div>
                    <Image 
                    width={2012} height={2740}
                    alt="Artwork for Celeste" 
                    src="/videoGames/favorites/celeste.webp">
                    </Image>
                </div>
            </div>
            <br/>
            <br/>
        </div>
    );
  }