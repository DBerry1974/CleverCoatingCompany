import traditionalThai from "../../assets/images/traditional-massage.png";
import packageOneTwenty from "../../assets/images/120-package.png";
import hotStone from "../../assets/images/hot-stone2.png";
import bodyAndMindCombined from "../../assets/images/body-and-mind-combined.png";
import aboutUs from "../../assets/images/about-us-alt.jpeg";
import travelersChoice from "../../assets/images/travellers-choice.png";
import faqBanner from "../../assets/images/faq-alt.jpeg";
import gallery from "../../assets/images/bodyandmind.jpg.png";

export const navigation = {
  categories: [
    {
      name: "Treatments", 
      featured: [
        {
          name: "Body and Mind Thai Combined Massage",
          href: "/treatments/body-and-mind-thai-combined-massage",
          imageSrc: bodyAndMindCombined,
          imageAlt:
            "A relaxed woman receiving a traditional Thai body and mind massage.",
        },
        {
          name: "Body and Mind 120 Minute Packages",
          href: "/treatments/body-and-mind-120-minute-massage-packages",
          imageSrc: packageOneTwenty,
          imageAlt:
            "Close up of women having a full body massage from head to feet, with candles and aroma.",
        },
        {
          name: "Body and Mind Thai Combined Massage",
          href: "/treatments/body-and-mind-thai-traditional-massage",
          imageSrc: traditionalThai,
          imageAlt:
            "A woman lying on her front with candles, while a professional massage therapist kneels on her back to alleviate tension.",
        },
        {
          name: "Body and Mind Hot Stone Massage",
          href: "/treatments/body-and-mind-hot-stone-massage",
          imageSrc: hotStone,
          imageAlt:
            "A close up of hot stones being placed on somebody's back by a professional Thai Massage Therapist.",
        },
      ],
    },
  //  {
    //  name: "About Us",
     // featured: [
     //   {
    //   name: "Meet the Team",
    //      href: "/about",
    //      imageSrc: aboutUs,
    //      imageAlt:
    //        "A group of Thai Massage Therapists posing for a professional group photo.",
    //    },
    //    {
    //      name: "Reviews",
      //    href: "/reviews",
        //  imageSrc: travelersChoice,
      //    imageAlt: "A travelers choice award from Trip Advisor.",
        //  cta: "Read our recent reviews",
    //    },
     //   {
         // name: "Frequently Asked",
        //  href: "/faq",
       //   imageSrc: faqBanner,
      //    imageAlt: "An image of a question mark draw in beach sand.",
       //   cta: "See our Frequently Asked Questions",
     //   },
   //     {
   //       name: "Gallery",
   //       href: "/gallery",
   //       imageSrc: gallery,
   //       imageAlt:
  //          "An image of two Thai Massage beds fully prepared for customers with flowers and towels neatly placed.",
  //        cta: "See our full gallery",
 //       },
 //     ],
 //   },
  ],
  pages: [
    { name: "FAQ", href: "/faq" },
    { name: "Reviews", href: "/reviews" },
    { name: "Gift Vouchers", href: "/gift-vouchers" },
    { name: "Massage Benefits", href: "/benefits" },
    { name: "Contact", href: "/contact" },
  ],
};
