import backgroundImage from '/assets/images/bg-img.jpg';

const footerStyle = {
  backgroundImage: `url(${backgroundImage})`, 
};

export default function Footer() {
    return (
      <>
       <footer className="relative footer footer-center p-3 text-primary-content" style={footerStyle}>
       <div className="absolute inset-0 bg-black opacity-40"></div>
  <div>
    <div className="grid grid-flow-col gap-4 z-10">
      <a href='https://github.com/Dinh282' target="_blank" className="icon-link hover:scale-110 hover:shadow-lg fill-white"><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg></a> 
      <a href='https://www.linkedin.com/' target="_blank" className="icon-link hover:scale-110 hover:shadow-lg fill-white" ><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg></a>
      <a href="tel:910-922-0341" className="icon-link hover:scale-110 hover:shadow-lg tooltip tooltip-info fill-white" data-tip="(910) 922-0341"><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35"><path d="m27.728 20.384-4.242-4.242a1.982 1.982 0 0 0-1.413-.586h-.002c-.534 0-1.036.209-1.413.586L17.83 18.97l-8.485-8.485 2.828-2.828c.78-.78.78-2.05-.001-2.83L7.929.585A1.986 1.986 0 0 0 6.516 0h-.001C5.98 0 5.478.209 5.101.587L.858 4.83C.729 4.958-.389 6.168.142 8.827c.626 3.129 3.246 7.019 7.787 11.56 6.499 6.499 10.598 7.937 12.953 7.937 1.63 0 2.426-.689 2.604-.867l4.242-4.242c.378-.378.587-.881.586-1.416 0-.534-.208-1.037-.586-1.415zm-5.656 5.658c-.028.028-3.409 2.249-12.729-7.07C-.178 9.452 2.276 6.243 2.272 6.244L6.515 2l4.243 4.244-3.535 3.535a.999.999 0 0 0 0 1.414l9.899 9.899a.999.999 0 0 0 1.414 0l3.535-3.536 4.243 4.244-4.242 4.242z"/></svg></a>
      <a href="mailto:nguyen_dinh282@yahoo.com" className="icon-link hover:scale-110 hover:shadow-lg tooltip tooltip-info fill-white" data-tip="nguyen_dinh282@yahoo.com"><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35"><path d="M29 4H3a3 3 0 0 0-3 3v18a3 3 0 0 0 3 3h26a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-.72 2L16 14.77 3.72 6zM30 25a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.23l13.42 9.58a1 1 0 0 0 1.16 0L30 7.23z"/></svg></a> 
      <a href="/assets/documents/dinh-nguyen-resume.pdf" download="dinh-nguyen-resume.pdf" target="_blank" className="icon-link hover:scale-110 hover:shadow-lg tooltip tooltip-info fill-white" data-tip="Download My Full Resume"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="35" height="35"><path d="M 20 10 C 16.686 10 14 12.686 14 16 L 14 48 C 14 51.314 16.686 54 20 54 L 44 54 C 47.314 54 50 51.314 50 48 L 50 28.65625 C 50 27.06425 49.367188 25.539062 48.242188 24.414062 L 35.585938 11.757812 C 34.459938 10.632812 32.93475 10 31.34375 10 L 20 10 z M 20 14 L 30 14 L 30 24 C 30 27.314 32.686 30 36 30 L 46 30 L 46 48 C 46 49.105 45.105 50 44 50 L 20 50 C 18.895 50 18 49.105 18 48 L 18 16 C 18 14.895 18.895 14 20 14 z M 34 15.828125 L 44.171875 26 L 36 26 C 34.895 26 34 25.105 34 24 L 34 15.828125 z M 24 34 C 22.896 34 22 34.895 22 36 C 22 37.105 22.896 38 24 38 L 40 38 C 41.104 38 42 37.105 42 36 C 42 34.895 41.104 34 40 34 L 24 34 z M 24 42 C 22.896 42 22 42.895 22 44 C 22 45.105 22.896 46 24 46 L 40 46 C 41.104 46 42 45.105 42 44 C 42 42.895 41.104 42 40 42 L 24 42 z"/></svg></a>
      
    </div>
  </div>
</footer>
      </>
    );
  }
  