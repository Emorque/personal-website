import Image from 'next/image'

export default function Home() {
  return (
    // <div className="min-h-svh relative z-0 flex border-4 border-color">
    //   <div className=" absolute z-10 inset-0"> 
    //   </div>
    //   <div className="absolute inset-0 flex z-20">
    //     <img src="/images/portrait_test.jpg" className="h-96 w-96 absolute z-10 inset-y-0 left-0 animate-in slide-in-from-left-0"></img>
    //   </div>
      
    //   <div className="absolute top-10 right-10 z-10 left-1/2 text-right h-svh">
    //     <h2> As a recent Computer Science Grad from Syracuse University, I am driven by a passion for innovation and a commitment to harnessing technology to build new projects. </h2>
    //     <br/>
    //     <br/>
    //     <h2> Outside of programming, I enjoy creating art, assisting students as a Tech Fellow for CodePath, and going bouldering.</h2>
    //     <br/>
    //   </div>

    //   {/* <h2 className="absolute top-0 right-0 z-10 rel">Testing</h2>  
    //   <h2 className="absolute top-0 right-0 z-10">hey there, testing layering</h2> */}
    // </div>
    <div className="relative">
      <div className="relative h-4/4 w-4/4"> {/*the 4/4 seems to just fit the content needed?*/}
        <div className="absolute z-10 inset-y-0 left-0 hidden lg:block md:block">
          <Image 
            src="/images/portraitBorder.svg" 
            alt="Border Image for Portrait"
            height={384}
            width={384}
            className="h-96 w-96 z-20">
          </Image>
          <Image 
            src="/images/portrait_test.jpg"
            alt="My Portrait" 
            height={384}
            width={384}
            priority
            className="absolute h-96 w-96 left-14 top-14 drop-shadow-2xl">
          </Image>
        </div>
        <div className="z-20 relative lg:text-right md:text-right text-center text-base">
          <div className="pl-10 pr-1 pt-10 absolute right-0 lg:w-2/4 md:w-2/4">
            <h1 className="text-3xl">Software Engineer</h1>
            <br/>
            <h2> I recently graduated from Syracuse University with a Bachelor&#39;s in Computer Science. It was a great time, and now I am back in the Big Apple: New York City.</h2>
            <br/>
            <h2>Now, I am focused on growing as a Software Engineer through my and learning all that I can, and want to be a part of this community</h2>
            <br/>
            <h2>Outside of programming, I enjoy creating art, coming up with video game ideas, playing video games, and going rock climbing.</h2>
            <br/>
            <h2>If you would like to get in touch, feel free to shoot me an email or see my socials. I&#39;d love to get in touch.</h2>
            <br/>
            <br/>
            <br/>
            <br/>
          </div>
        </div>
      </div>
    </div>
    
  );
}
