import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative flex justify-center items-center h-screen w-full">
        <img
          src="/images/PSEbuilding.jpg"
          alt="PSE Building"
          className="w-full h-full object-cover rounded-lg shadow-lg"
        />

        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-40 text-white p-4 text-center">
          <h1 className="text-2xl md:text-4xl font-bold font-serif max-w-2xl">
            Elite Intelligent Bureau for Philippines Power Players & Influential Figures
          </h1>
        </div>
      </div>

      {/* Entrepreneurship Section */}
      <div className="mt-10 px-4 md:px-10 text-black md:text-lg max-w-screen-lg mx-auto">
        <div className="flex flex-wrap items-center mb-4">
          <Image
            src="/images/marks.png"
            alt="Entrepreneurship Icon"
            width={50}
            height={50}
            className="mr-4"
          />
          <h1 className="text-xl md:text-2xl font-bold font-serif text-black">
            What is Entrepreneurship?
          </h1>
        </div>

        <div className="flex flex-wrap md:flex-nowrap items-center mb-10">
          <Image
            src="/images/entrep.jpg"
            alt="Entrepreneurship"
            width={300}
            height={300}
            className="mr-4 rounded-lg"
          />
          <div className="flex flex-col">
            <p className="text-lg font-serif mb-4 text-gray-800">
              Entrepreneurship is a process undertaken by an entrepreneur to augment his business interest.
              Entrepreneurs do not emerge spontaneously; they are influenced by various factors.
            </p>

            <hr className="my-6 border-t-2 border-gray-300" />

            <p className="text-lg font-serif italic text-gray-600">
              “Entrepreneurship is neither a science nor an art. It is a practice.” – Peter Drucker
            </p>
          </div>
        </div>

        <div className="my-8 border-t-2 border-gray-300"></div>
      </div>

      {/* Top 10 CEOs Section */}
      <div className="mt-10 px-4 md:px-10 max-w-screen-xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold text-black text-center mb-6">
          Top 10 Influential CEOs
        </h1>

        {[
    {
      name: "Henry Sy (Shoe Mart)",
      link: "https://en.wikipedia.org/wiki/Henry_Sy",
      description: 'Shoe Mart, or SM for short, is one of the country’s retail behemoths, and far more than just a mall. It is now a well-loved institution of which many Filipino families hold fond memories. It provides a wide range of services, including shopping, theatres, locations for date nights, parties and other special occasions, ice skating, and food courts. SM started modestly and from humble beginnings, despite its now upmarket reputation.',
    },
    {
      name: "Tony Tan Caktiong (Jollibee Foods)",
      link: "https://en.wikipedia.org/wiki/Tony_Tan_Caktiong",
      description: 'The cheerful tagline “langhap sarap” – a Jollibee trademark – is well-known among Filipinos. Tony Tan Caktiong, another Chinese immigrant, is the brains behind this popular food chain. His family maintained a Chinese restaurant in Manila at the time, which enabled him to finish college. He bought an ice cream shop in 1975, but owing to low sales, he decided to add other items such as fried chicken, fries, and burgers. Customers came to the store to buy his products after word spread in his area.',
    },
    {
      name: "Socorro Ramos (National Book Store)",
      link: "https://en.wikipedia.org/wiki/Socorro_Ramos",
      description: 'Socorro Ramos began her career in publishing and retail as a salesgirl in a bookshop. With a capital of PHP200, she and her husband launched National Book Store in Escolta at the age of 19, selling books and school supplies to children. The Japanese imposed censorship on books and publications at the time, which included her burgeoning business. She and her husband supplemented their income by selling other products such as candles and soaps.',
    },
    {
      name: "John Gokongwei Jr. (J.G. Holdings)",
      link: "https://en.wikipedia.org/wiki/John_Gokongwei",
      description: 'Born in China, John Gokongwei Jr. was the heir to one of Cebu’s wealthiest families. When his father died, however, the family fortune evaporated and he had to support his family by peddling goods from his bicycle in the streets of Cebu. He then began to trade by boat and truck until he began importing from the United States.',
    },
    {
      name: "Patrick Perez (Inspire)",
      link: "https://en.everybodywiki.com/Patrick_Dela_Cruz_Perez",
      description: 'Inspire has been engaged with representatives of major companies and has been operating on small scale since 2012. During this period, activities were temporarily halted due to the pandemic, but we resumed operations in 2020. Following the restart, we experienced a surge in consultations from various companies. We have successfully facilitated the entry of Japanese companies into the market, acting as a bridge between Japanese and Philippine businesses. Our achievements have been favorable, and we plan to make a significant public presence in late 2022. We aim to go public within three years and continue our activities with the participation of all companies involved.',
    },
    {
      name: "Edgar Sia (Mang Inasal)",
      link: "https://en.wikipedia.org/wiki/Edgar_Sia",
      description: 'Edgar Sia, the brains behind Mang Inasal, is widely regarded as the Philippines’ pioneer in limitless rice meals. Sia, who is native to Iloilo City, dropped out of college at the age of 19 to start his own laundry and photo-developing business. Sia, then 26 years old, decided to launch the fast-food restaurant Mang Inasal – meaning “Mr Barbecue” in his native Hiligaynon – in 2003. In his hometown, the first branch was erected in a mall parking lot.',
    },

    {
      name: "Mariano Que (Mercury Drug)",
      link: "https://en.wikipedia.org/wiki/Mariano_Que",
      description: 'Following WWII, Mariano Que discovered a commercial opportunity. Que, who had worked at a local drugstore before the war, opened his own drugstore when he noticed the demand for sulfa, a type of antibiotic used to treat bacterial illnesses. He began selling good-quality sulfa for a low price. As a result, he was able to expand his clientele. In 1945, he founded the Mercury Drug chain of pharmacies.',
    },

    {
      name: "Cresida Tueres (Greenwich Pizza)",
      link: "https://www.ryanthefamilyman.com/blog-posts/cresida-tueres-founder-of-greenwich-pizza-in-the-philippines",
      description: 'Greenwich began as a modest over-the-counter pizza shop in Greenhills in 1971, founded by Cresida Tueres. Tueres had a natural talent for cooking; her friends and family were so taken with her food that they supported her in developing her humble shop into a national franchise. Jollibee Foods Corporation, impressed by Tueres’ commercial acumen and Greenwich’s expansion, struck an agreement in 1994 to buy 80 percent of Greenwich’s stock. The new company was renamed Greenwich Pizza Corporation after the successful commercial agreement, and it launched its first store in the Ever Gotesco Commonwealth Shopping Mall in 1994.',
    },
    
    {
      name: "Cecilio Kwok Pedro (Lamoiyan Corporation)",
      link: "https://businessasmission.ph/drceciliopedro",
      description: 'The story of Cecilio Kwok Pedro is a classic example of Filipino entrepreneurial spirit overcoming the odds. Pedro was once the president of Aluminum Container Inc., a company that made aluminium toothpaste tubes for Procter & Gamble, the Philippine Refining Company (now Unilever), and Colgate-Palmolive. His clientele, however, switched to plastic-laminated toothpaste tubes due to environmental concerns. Aluminum Container Inc. went out of business in 1986.',
    },
    {
      name: "Alfredo M Yao (Zest-O)",
      link: "https://en.wikipedia.org/wiki/Alfredo_Yao",
      description: 'Alfredo Yao’s father died when he was 12; his mother supported him and his siblings by working as a street vendor. Yao was able to attend college at the Mapa Institute of Technology thanks to the help of a family member, but did not complete it. Yao did a variety of odd jobs, including working at a printing machine. He learned how to print cellophane wrapping for candy and biscuits during his time there, and was inspired to create his own printing company as a result of his experiences.',
},  


        ].map((ceo, index) => (
          <div key={index} className="w-full max-w-3xl mx-auto mb-10">
            {/* Name with Link */}
            <a
              href={ceo.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl md:text-2xl font-bold text-black hover:text-gray-700 block"
            >
              {ceo.name}
            </a>

            {/* Description */}
            <p className="mt-2 text-lg text-justify font-serif text-black">
              {ceo.description}
            </p>

          <br></br>
            {/* Read More Link */}
            <a
              href={ceo.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 underline underline-offset-[10px] hover:underline block mt-2"
            >
              Read More
            </a>

            {/* Separator */}
            {index < 9 && <hr className="my-6 border-t-2 border-gray-300" />}
          </div>
        ))}
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 px-4 md:px-10 max-w-screen-xl mx-auto">
        {[
          { src: "/images/entrep.jpg", title: "Entrepreneurship", text: "Drives economic growth & innovation." },
          { src: "/images/marks.png", title: "Innovation", text: "The heart of successful businesses." },
          { src: "/images/pse.jpg", title: "Top CEOs", text: "Meet the most influential business leaders." },
          { src: "/images/news.jpg", title: "Updated News", text: "Stay informed with current issues." },
        ].map((item, index) => (
          <div key={index} className="flex flex-col items-center text-center bg-white shadow-lg rounded-lg p-6 h-full">
            <Image
              src={item.src}
              alt={item.title}
              width={144}
              height={144}
              className="w-36 h-36 rounded-full mb-4 object-cover"
            />
            <div className="flex-1 flex flex-col justify-between">
              <h2 className="text-xl font-bold text-black">{item.title}</h2>
              <p className="text-black">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
