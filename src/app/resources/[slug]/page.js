import Image from "next/image";
import PageLayout from "@/layout";
import { resourcesData } from "@/utils/data";

export async function generateMetadata({ params }) {
  const article = resourcesData?.find(({ slug }) => slug === params.slug);

  return {
    title: `${article?.title} article - Clearline HMO`,
  };
}

export async function generateStaticParams() {
  return resourcesData.map(({ slug }) => ({
    slug,
  }));
}

export default function Page({ params }) {
  const article = resourcesData?.find(({ slug }) => slug === params.slug);

  return (
    <PageLayout>
      <div className="px-16 max-lg:px-12 max-md:px-8 pt-32 max-md:pt-24 mb-3">
        <p className="text-[48px] max-lg:text-[32px] max-md:text-[24px] font-semibold">
          Clearline HMO Newsletter
        </p>
        <div className="flex max-lg:flex-col gap-4 mb-8">
          <div className="w-1/2 max-lg:w-full">
            <Image
              src={article.img}
              alt="Clearline HMO Newsletter"
              className="object-cover w-full h-full max-lg:h-[400px] max-md:h-[280px] rounded-md"
            />
          </div>
          <div className="w-1/2 max-lg:w-full rounded-lg bg-[#f6f7ff] p-8 max-md:p-4">
            <p className="text-catalineBlue text-[48px] max-lg:text-[32px] max-md:text-[24px] font-medium">
              {article.article.didYouKnow.title}
            </p>
            <div className="text-[20px] max-md:text-[13px] italic">
              {article.article.didYouKnow.list?.map((item, idx) => (
                <p className="mb-2" key={idx}>
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div>
          <div className="mb-12">
            <p className="text-[40px] max-md:text-[24px] font-semibold">
              {article.title}
            </p>
            <p className="text-boulder text-[32px] max-md:text-[16px] mb-10">
              {article.article.articleQuestion}
            </p>
            <p className="text-[28px] max-md:text-[14px]">
              {article.article.text1}
            </p>
            <p className="text-[28px] max-md:text-[14px]">
              {article.article.text2}
            </p>
          </div>
          {params.slug==="hypertension"&&
          <>
          <div className="flex flex-col text-[24px] max-md:text-[12px] mb-6">
            <div className=" font-bold ">Triggers of Hypertension
            </div>
            <p className="mb-5 mt-3">Several factors can contribute to the development of hypertension, including:</p>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col">
                  <div className="font-bold">Lifestyle Factors:</div>
                   <ul>
                    <li>- Lack of Physical Activity: Regular exercise helps to keep your heart and blood vessels healthy.</li>
                    <li> - Unhealthy Diet: Diets high in salt, fat, and sugar can raise blood pressure.</li>
                    <li> - Excess Alcohol: Drinking too much alcohol can elevate your blood pressure.</li>
                    <li> - Smoking: Tobacco use damages your blood vessels and raises blood pressure.</li>
                    <li>- Stress: Chronic stress can contribute to hypertension.</li>
                   </ul>
              </div>
              <div className="flex flex-col">
                  <div className="font-bold">Medical Conditions:</div>
                   <ul>
                    <li> - Diabetes: High blood sugar can damage blood vessels, increasing blood pressure.</li>
                    <li> - Family History: Hypertension often runs in families..</li>
                    <li> - Age: The risk of high blood pressure increases as you age.</li>
                   </ul>
              </div>
            </div>
    
          </div>
          <div className="flex flex-col gap-1 text-[24px] max-md:text-[12px] mb-4">
            <div className=" font-bold">Controlling High Blood Pressure
            </div>
            <p className="">
                Managing hypertension involves a combination of lifestyle changes and, in some cases, medication. Here are key strategies to help control high blood pressure:
            </p>
    
          </div>
          </>
          }
          <div>
            {article.article.foodList?.map(({ title, text }, idx) => (
              <p className="text-[24px] max-md:text-[12px] mb-6" key={idx}>
                {title}
                {text && ":"} <span className="text-boulder">{text}</span>
              </p>
            ))}
          </div>
        </div>
        {article.article.foodList1 && (
          <div>
            <div className="mb-12">
              <p className="text-[40px] max-md:text-[24px] font-semibold">
                {article.title}
              </p>
              <p className="text-boulder text-[32px] max-md:text-[16px] mb-10">
                {article.article.articleQuestion1}
              </p>
            </div>
            <div>
              {article.article.foodList1?.map(({ title, text }, idx) => (
                <p className="text-[24px] max-md:text-[12px] mb-6" key={idx}>
                  {title}: <span className="text-boulder">{text}</span>
                </p>
              ))}
            </div>
          </div>
        )}
        {params.slug==="hypertension"&&
          <>
          <div className="flex flex-col text-[24px] max-md:text-[12px] mb-6">
            <div className=" font-bold ">Clearline HMO is Here for You
            </div>
            <p className="mb-3">At Clearline HMO, we are committed to your health and well-being. Our comprehensive health plans provide access to regular check-ups, specialist consultations, and lifestyle support to manage hypertension effectively. We offer a range of services designed to help you maintain optimal health, including:</p>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col">
                   <ul>
                    <li>- Regular Health Screenings: Routine check-ups to monitor your blood pressure and other vital signs.</li>
                    <li> - Specialist Consultations: Access to cardiologists and other specialists to manage your condition.</li>
                    <li> - Health Education: Resources and workshops to educate you about hypertension and healthy living.</li>
                    <li> - Fitness Programs: Tailored exercise plans to help you stay active and healthy.</li>
                    <li>- Nutrition Counseling: Guidance on maintaining a healthy diet to control blood pressure.</li>
                    <li>- Stress Management Workshops: Techniques to help you manage stress and improve your overall well-being.</li>
                   </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-1 text-[24px] max-md:text-[12px] mb-4">
            <div className=" font-bold mt-2">Take Charge of Your Health Today!

            </div>
            <p className="">
            Remember, managing hypertension is a lifelong commitment. By making informed lifestyle choices and staying proactive about your health, you can lead a fulfilling and heart-healthy life. Clearline HMO is proud to support you every step of the way.
            <br />
            Let&apos;s celebrate World Hypertension Day by taking a stand against high blood pressure. Your health is your wealth—protect it with Clearline HMO.
            </p>
            <div className=" font-bold mt-2">Join Us in the Fight Against Hypertension</div>
            <p className="">
            We encourage you to engage with us on our social media platforms. Share this blogpost with your loved ones rightaway. Together, we can raise awareness and support each other in living healthier lives
            </p>
            <div className=" font-bold mt-2">Connect with Us</div>
            <p className="">
            Follow us on social media for more health tips, updates, and community stories
            </p>
          </div>
          </>
          }
      </div>
    </PageLayout>
  );
}
