import Image from "next/image";
import { ResourcesImage } from "../../../../public/assets/images";
import PageLayout from "@/layout";

export async function generateMetadata({ params }) {
  const title = params.title;

  return {
    title: `${title} article - Clearline HMO`,
  };
}

export default function Page() {
  return (
    <PageLayout>
      <div className="px-16 max-lg:px-12 max-md:px-8 pt-32 max-md:pt-24 mb-3">
        <p className="text-[48px] max-lg:text-[32px] max-md:text-[24px] font-semibold">
          Clearline HMO Newsletter
        </p>
        <div className="flex max-lg:flex-col gap-4 mb-8">
          <div className="w-1/2 max-lg:w-full">
            <Image
              src={ResourcesImage}
              alt="Clearline HMO Newsletter"
              className="object-cover w-full h-full max-lg:h-[400px] max-md:h-[280px]"
            />
          </div>
          <div className="w-1/2 max-lg:w-full rounded-lg bg-[#f6f7ff] p-8 max-md:p-4">
            <p className="text-catalineBlue text-[48px] max-lg:text-[32px] max-md:text-[24px] font-medium">
              Did You know?
            </p>
            <div className="text-[20px] max-md:text-[13px] italic">
              <p className="mb-2">
                Moringa is packed with antioxidants, that promote cell repair
                and boost immunity.
              </p>
              <p className="mb-2">
                Shoko leaves are high in fiber which aid digestion and help with
                weight management.
              </p>
              <p className="mb-2">
                Coconut water makes a great drink full of electrolytes which
                help to rehydrate the body at cellular level
              </p>
              <p>
                Studies have shown 2-3 servings of walnut a day can help to
                reduce cholesterol level and reduce the risk of heart disease.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="mb-12">
            <p className="text-[40px] max-md:text-[24px] font-semibold">
              Super Foods
            </p>
            <p className="text-boulder text-[32px] max-md:text-[16px] mb-10">
              Why you should eat them
            </p>
            <p className="text-[28px] max-md:text-[14px]">
              Superfoods, nutrient-packed powerhouses like berries, kale, and
              quinoa, are culinary superheroes promoting optimal health.
              Incorporating these nutrient-rich gems into your diet can enhance
              immunity, boost energy, and support overall well-being, making
              them a delicious investment in your long-term health.
            </p>
          </div>
          <div>
            <p className="text-[24px] max-md:text-[12px] mb-6">
              Blueberries:{" "}
              <span className="text-boulder">
                Packed with antioxidants and vitamins, they are low in calories
                and high in fiber.
              </span>
            </p>
            <p className="text-[24px] max-md:text-[12px] mb-6">
              Avocado:{" "}
              <span className="text-boulder">
                Rich in healthy monounsaturated fats, avocados offer a creamy
                texture and essential nutrients.
              </span>
            </p>
            <p className="text-[24px] max-md:text-[12px] mb-6">
              Spinach:{" "}
              <span className="text-boulder">
                A nutrient powerhouse, low in calories and high in vitamins like
                A, C, and K, as well as minerals.
              </span>
            </p>
            <p className="text-[24px] max-md:text-[12px] mb-6">
              Quinoa:{" "}
              <span className="text-boulder">
                A complete protein source, quinoa is high in fiber, vitamins,
                and minerals.
              </span>
            </p>
            <p className="text-[24px] max-md:text-[12px] mb-6">
              Salmon:{" "}
              <span className="text-boulder">
                A fatty fish that provides omega-3 fatty acids and high-quality
                protein.
              </span>
            </p>
            <p className="text-[24px] max-md:text-[12px] mb-6">
              Kale:{" "}
              <span className="text-boulder">
                A leafy green loaded with vitamins, minerals, and antioxidants,
                while being low in calories.
              </span>
            </p>
            <p className="text-[24px] max-md:text-[12px] mb-6">
              Chia Seeds:{" "}
              <span className="text-boulder">
                Packed with fiber, omega-3 fatty acids, and various
                micronutrients.
              </span>
            </p>
            <p className="text-[24px] max-md:text-[12px] mb-6">
              Broccoli:{" "}
              <span className="text-boulder">
                A cruciferous vegetable rich in vitamins, minerals, and
                antioxidants.
              </span>
            </p>
            <p className="text-[24px] max-md:text-[12px] mb-6">
              Sweet Potatoes:{" "}
              <span className="text-boulder">
                A nutrient-dense source of carbohydrates, vitamins, and fiber.
              </span>
            </p>
            <p className="text-[24px] max-md:text-[12px] mb-6">
              Greek Yogurt:{" "}
              <span className="text-boulder">
                High in protein, probiotics, and calcium, with relatively fewer
                calories compared to some alternatives.
              </span>
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
