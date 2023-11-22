import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline/index.js";

const faqs = [
  {
    question: "How do I get to Body and Mind?",
    answer: (
      <>
        <p className="mt-2">
          <strong>Our address is</strong>:{" "}
          <a
            href="https://www.google.com/maps/place/20A+Nun+St,+Newcastle+upon+Tyne+NE1+5AQ,+UK/@54.972059,-1.615283,14z/data=!4m5!3m4!1s0x487e70b58c5cd70b:0xad2024801410f64f!8m2!3d54.9720592!4d-1.6152828?hl=en-GB"
            target="_blank"
            rel="noopener"
            className="text-blue-500"
          >
            2 Browns Buildings, Dipton, County Durham DH9 9AB
          </a>
        </p>
        
        
        
      </>
    ),
  },
  {
    question: "How should I prepare for my massage treatment?",
    answer:
      "Nothing special, but try to avoid alcohol for 24 hours before, and avoid eating a big meal on the 2-3 hours before your massage",
  },
  {
    question: "Will I need to provide my medical history?",
    answer:
      "If you are a first-time visitor to Body and Mind, you will be asked to complete a short questionnaire covering medical history. This is for your safety, and to allow us to best tailor your treatment to your needs",
  },
  {
    question: "If I am pregnant is it safe to have a massage?",
    answer: (
      <>
    
     <p>We can provide pregnancy massage. If you are in your first trimester it is not recommended to have a body massage, although it can be done safely. Massage can be beneficial after the first trimester, and you should consult your GP in any case. <br />
      You can find out more about having a massage during pregnancy in our article - <a href="/blog/is-it-safe-to-get-a-massage-while-pregnant/" className="text-blue-500">Is it safe to get a massage while pregnant?</a>
     </p> 
      </>
    )
  },
  {
    question: "What is the difference between a Thai massage and a Thai oil massage?",
    answer: (
      <>
    
     <p>A Thai massage is a traditional type of massage that uses pressure and stretching techniques, while a Thai oil massage includes the use of massage oils to help with the massage.</p>
      <p>Both massages are said to be helpful in relieving stress and tension, but using massage oils may also help to improve blood circulation and flexibility.</p>
      <p>
      You can find out more in our article - <a href="/blog/what-is-the-difference-between-a-thai-massage-and-a-thai-oil-massage/" className="text-blue-500">What is the difference between a Thai massage and a Thai oil massage?</a>
     </p> 
      </>
    )
  },
  {
    question: "What is a Thai herbal compress massage?",
    answer: (
      <>
    
     <p>Thai herbal compress massage is a Thai massage technique that uses a ball made of Thai herbs. This ball is steamed and used to massage the body.</p>
      <p>The Thai Herbal Ball compress technique offers several potential health benefits: It induces deep relaxation, relieves stress and fatigue, boosts both emotional and physical well-being, assists alignment and postural integrity of the body, improves circulation of blood and lymphatic system and stimulates the internal organs.</p>
      <p>
      You can find out more in our article - <a href="/blog/what-is-a-thai-herbal-compress-massage" className="text-blue-500">What is a Thai herbal compress massage?</a>
     </p> 
      </>
    )
  },
  {
    question: "What is the difference between a Swedish massage and a regular massage?",
    answer: (
      <>
    
     <p>A <a href="/treatments/body-and-mind-swedish-massage/" className="text-blue-500">Swedish massage </a>is a distinctly European, full-body massage that uses a combination of three basic strokes to relieve stress. They are medium in pressure, comprising long firm strokes, kneading strokes and small circular strokes, and use peace oil, a blend of lavender, lemongrass or coconut.</p>
      <p>A regular <a href="/treatments/body-and-mind-sport-deep-tissue-massage/" className="text-blue-500">deep tissue massage</a>, on the other hand, uses more pressure and can be more intense.</p>
      <p>
      You can find out more in our article - <a href="/blog/what-is-the-difference-between-a-swedish-massage-and-a-regular-massage" className="text-blue-500">What is the difference between a Swedish massage and a regular massage?</a>
     </p> 
      </>
    )
  },
  {
    question: "What Does a Hot Stone Massage Do?",
    answer: (
      <>
    
     <p>This type of massage has been used for centuries in Thailand, where the therapist uses hot stones to melt away tension and ease muscle stiffness. They also help to increase circulation and metabolism.</p>
      <p>When coupled with massage, hot stones can also help to expand blood vessels and encourage blood flow throughout the body, which can help with a number of health conditions.</p>
      <p>
      You can find out more in our article - <a href="/blog/what-does-a-hot-stone-massage-do" className="text-blue-500">What Does a Hot Stone Massage Do?</a>
     </p> 
      </>
    )
  },
  {
    question: "When is the Best Time to Get a Foot or Leg Massage?",
    answer: (
      <>
    
     <p>There is no wrong time to get a foot or leg massage. However, some times may be more ideal than others.</p>
      <p>For example, if you have just finished a long day of work or exercise, getting a foot or leg massage can help to relieve any tension or soreness that you may be feeling.</p>
      <p>If you are planning on going out for the evening, a foot or leg massage can help to relax you and prepare you for a night of fun. Whenever you need a foot or leg massage, our team is here to help!</p>
      <p>
      You can find out more in our article - <a href="/blog/the-best-time-to-get-a-foot-or-leg-massage/" className="text-blue-500">The Best Time to Get a Foot or Leg Massage.</a>
     </p> 
      </>
    )
  },
  {
    question: "What are the Benefits of a Back, Shoulder and Neck Massage?",
    answer: (
      <>
    
     <p>A back, shoulder and neck massage focuses on the most commonly problematic areas of the back, shoulders and neck. These areas can often become stressed and tense due to modern day activities such as being sat at a desk all day.</p>
      <p>A back, shoulder and neck massage can help to relieve the pain and tension.</p>
      <p>
      You can find out more in our article - <a href="/blog/the-benefits-of-a-back-shoulder-and-neck-massage/" className="text-blue-500">the Benefits of a Back, Shoulder and Neck Massage.</a>
     </p> 
      </>
    )
  },
  {
    question: "What is Four Hands Massage?",
    answer: (
      <>
    
     <p>Four hands massage is a type of massage where two therapists work on one client. It is often used in Thai massage, which is a type of massage that uses stretching and pressure point techniques.</p>
      <p>People are increasingly turning to four hands massage for its many benefits. This type of massage is said to be able to provide relief from stress, tension, and muscle pain. It can also help improve circulation and promote relaxation.</p>
      <p>
      You can find out more in our article - <a href="/blog/why-four-hands-massage-is-becoming-more-popular/" className="text-blue-500">Why Four Hands Massage is Becoming More Popular.</a>
     </p> 
      </>
    )
  },
  {
    question: "What is the dress code when receiving the treatments?",
    answer:
      "Most of the treatments we provide require application of oil. This can be aromatic or odour-less (your choice). You should remove clothing to a level with which you are comfortable. You will be asked to leave your underwear on. In any case, you'll be covered at all times with a towel from upper thigh to waist.",
  },
  {
    question: "Do I have to undress in front of my therapist?",
    answer:
      "No. Your masseuse will show you to your treatment room and then leave you in private to undress. They will knock before re-entering.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "When you make a reservation, we make sure that a room is prepared and a therapist is available. If you do need to cancel your appointment, please let us know as soon as you can. If you made an online booking you will have paid for your massage in full - if you make sure we get at least 24 hours notice of a cancellation or rescheduling then we will refund you (and we like to think we are&nbsp;reasonable in other circumstances!)",
  },
  {
    question: "Do you sell gift vouchers?",
    answer:
      "Yes! We currently have vouchers for a “massage of your choice” designed as a perfect gift. Just drop in to buy one, or we can arrange postage",
  },
  {
    question: "Am I supposed to tip the therapist?",
    answer:
      "It is completely up to you! If you do, you can be assured that your therapist(s) will keep 100% of the tip.",
  },
];

const classNames = (...classes) => classes.filter(Boolean).join(" ");

export const FrequentlyAskedQuestions = () => {
  return (
    <dl className="mt-6 space-y-6 divide-y divide-gray-200">
      {faqs.map((faq) => (
        <Disclosure as="div" key={faq.question} className="pt-6">
          {({ open }) => (
            <>
              <dt className="text-lg">
                <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-400">
                  <span className="font-medium text-gray-900">
                    {faq.question}
                  </span>
                  <span className="ml-6 flex h-7 items-center">
                    <ChevronDownIcon
                      className={classNames(
                        open ? "-rotate-180" : "rotate-0",
                        "h-6 w-6 transform"
                      )}
                      aria-hidden="true"
                    />
                  </span>
                </Disclosure.Button>
              </dt>
              <Disclosure.Panel as="dd" className="mt-2 pr-12">
                <p className="text-base text-gray-500">{faq.answer}</p>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      ))}
    </dl>
  );
};
