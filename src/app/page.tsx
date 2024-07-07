export default function Home() {
  return (
    <div className="h-screen relative z-0 flex">
      <div className="bg-red-500 absolute z-10 inset-0"> 
      </div>
      {/* <div className="inset-0 flex items-center justify-center z-20">
        <img src="/images/portrait_test.jpg" className="h-svh"></img>
        <h2>Testing</h2>  
        <h2>hey there, testing layering</h2>
      </div> */}


      
      <img src="/images/portrait_test.jpg" className="h-svh absolute z-10 inset-y-0 left-0"></img>
      
      <div className="absolute top-10 right-10 z-10 left-1/2 text-right">
        <h2> As a recent Computer Science Grad from Syracuse University, I am driven by a passion for innovation and a commitment to harnessing technology to build new projects. </h2>
        <br/>
        <h2> While at my time I SU, I worked with Professor Endadul Hoque at his lab through the Research Experience for Undergraduates (REU) program. What we worked on: an automated translator that converts natural language security policy descriptions into a formal policy language specifically designed for Internet-of-Things (IoT) defense mechanisms. This project leverages the advanced capabilities of modern Large Language Models (LLMs), such as ChatGPT. </h2>
        <br/>
        <h2> Outside of programming, I enjoy creating art, assisting students as a Tech Fellow for CodePath, and going bouldering.</h2>
        <br/>
        <h2> I am always eager to meet new people. Feel free to connect, and let’s get to know each other. </h2>        
      </div>

      {/* <h2 className="absolute top-0 right-0 z-10 rel">Testing</h2>  
      <h2 className="absolute top-0 right-0 z-10">hey there, testing layering</h2> */}
    </div>
  );
}
