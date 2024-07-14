import Image from "next/image";

export default function hobbiesPage() {
    return (
        <div>
            <div className="grid gap-2 grid-cols-1 md:grid-cols-4 lg:grid-cols-4">
                <div>
                    <Image alt="First Drawing" width={2012} height={2740} className="border-Zcolor4 border-4 drop-shadow-2xl" src="/drawings/1.webp"></Image>
                </div>
                <div>
                    <Image alt="Second Drawing" width={2012} height={2740} className="border-Zcolor4 border-4 drop-shadow-2xl" src="/drawings/2.webp"></Image>
                </div>
                <div>
                    <Image alt="Third Drawing" width={2012} height={2740}  className="border-Zcolor4 border-4 drop-shadow-2xl" src="/drawings/3.webp"></Image>
                </div>
                <div>
                    <Image alt="Fourth Drawing" width={2012} height={2740} className="border-Zcolor4 border-4 drop-shadow-2xl" src="/drawings/4.webp"></Image>
                </div>
                <div>
                    <Image alt="Fifth Drawing" width={2012} height={2740} className="border-Zcolor4 border-4 drop-shadow-2xl" src="/drawings/5.webp"></Image>
                </div>
                <div>
                    <Image alt="Sixth Drawing" width={2012} height={2740} className="border-Zcolor4 border-4 drop-shadow-2xl" src="/drawings/6.webp"></Image>
                </div>
                <div>
                    <Image alt="Seventh Drawing" width={2012} height={2740} className="border-Zcolor4 border-4 drop-shadow-2xl" src="/drawings/7.webp"></Image>
                </div>
                <div>
                    <Image alt="Eighth Drawing" width={2012} height={2740} className="border-Zcolor4 border-4 drop-shadow-2xl" src="/drawings/8.webp"></Image>
                </div>
                <div className="col-span-2">
                    <Image priority alt="Ninth Drawing" width={2012} height={2740} className="border-Zcolor4 border-4 drop-shadow-2xl" src="/drawings/9.webp"></Image>
                </div>
            </div>
            <br/>
            <h1>The Video Game I am Playing Now:</h1>
            <div className={`grid grid-cols-4 gap-2`}>
                <div>
                    <Image 
                    className="border-Zcolor4 border-4 drop-shadow-2xl"
                    width={2012} height={2740}
                    alt="Artwork for Elden Ring" 
                    src="/videoGames/current/EldenRing.webp">
                    </Image>
                </div>
            </div>
            <br/>
            <h1>My All-Time Favorites:</h1>
            <div className={`grid grid-cols-4 gap-2`}>
                <div>
                    <Image
                    className="border-Zcolor4 border-4 drop-shadow-2xl"
                    width={2012} height={2740}
                    alt="Artwork for Octopath Traveler 2" 
                    src="/videoGames/favorites/OT2.webp">
                    </Image>
                </div>
                <div>
                    <Image 
                    className="border-Zcolor4 border-4 drop-shadow-2xl"
                    width={2012} height={2740}
                    alt="Artwork for Jak and Daxter" 
                    src="/videoGames/favorites/JandD.webp">
                    </Image>
                </div>
                <div>
                    <Image 
                    className="border-Zcolor4 border-4 drop-shadow-2xl"
                    width={2012} height={2740}
                    alt="Artwork for Celeste" 
                    src="/videoGames/favorites/celeste.webp">
                    </Image>
                </div>
            </div>
            <br/>
            <br/>
            <br/>
        </div>
    );
  }