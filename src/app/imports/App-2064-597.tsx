import svgPaths from "./svg-rju1j7yeqm";
import clsx from "clsx";
import imgImageNaturium from "figma:asset/0de4e7d939c801856973b5afdce10426809fa9b9.png";
import imgImageMultiPeptideMoisturizer from "figma:asset/8af0976a30b9a1224a2b438c1fbd4304e6eadce3.png";
import imgImageMultiPeptideMoisturizer1 from "figma:asset/4ea151c4cc370a56af6f4e93881a95740a21f270.png";
import imgImageMultiPeptideMoisturizer2 from "figma:asset/49acd9e9230abefcfe5a5cbf93ab5c208a922435.png";
import imgImageMultiPeptideMoisturizer3 from "figma:asset/6f85f5a0f0b9864e138b8d7be540158644c848b0.png";

function ContainerBackgroundImage1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[20.5px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">{children}</div>
    </div>
  );
}
type IconBackgroundImage1Props = {
  additionalClassNames?: string;
};

function IconBackgroundImage1({ children, additionalClassNames = "" }: React.PropsWithChildren<IconBackgroundImage1Props>) {
  return (
    <div className={clsx("size-[16px]", additionalClassNames)}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        {children}
      </svg>
    </div>
  );
}
type BackgroundImage1Props = {
  additionalClassNames?: string;
};

function BackgroundImage1({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage1Props>) {
  return (
    <div className={clsx("relative shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">{children}</div>
    </div>
  );
}
type BackgroundImageProps = {
  additionalClassNames?: string;
};

function BackgroundImage({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImageProps>) {
  return (
    <div className={additionalClassNames}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        {children}
      </svg>
    </div>
  );
}

function IconBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[20.5px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 21">
        <g id="Icon">{children}</g>
      </svg>
    </div>
  );
}

function IconVectorBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute inset-1/4">
      <BackgroundImage additionalClassNames="absolute inset-[-8.33%]">{children}</BackgroundImage>
    </div>
  );
}
type TextBackgroundImageAndText1Props = {
  text: string;
};

function TextBackgroundImageAndText1({ text }: TextBackgroundImageAndText1Props) {
  return (
    <BackgroundImage1 additionalClassNames="h-[15px] w-[45.094px]">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#4a5565] text-[10px] text-nowrap top-0 tracking-[0.1172px]">{text}</p>
    </BackgroundImage1>
  );
}

function ContainerBackgroundImage() {
  return (
    <div className="h-[12px] relative shrink-0 w-[60px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        {[...Array(4).keys()].map((_, i) => (
          <BackgroundImage additionalClassNames="relative shrink-0 size-[12px]">
            <g clipPath="url(#clip0_2064_627)" id="Icon">
              <path d={svgPaths.p30b08400} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <defs>
              <clipPath id="clip0_2064_627">
                <rect fill="white" height="12" width="12" />
              </clipPath>
            </defs>
          </BackgroundImage>
        ))}
        <div className="basis-0 grow h-[12px] min-h-px min-w-px relative shrink-0">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
            <div className="absolute inset-[8.33%_8.33%_12.2%_8.33%]" data-name="Vector">
              <div className="absolute inset-[-5.24%_-5%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
                  <path d={svgPaths.p2ed0980} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
type TextBackgroundImageAndTextProps = {
  text: string;
};

function TextBackgroundImageAndText({ text }: TextBackgroundImageAndTextProps) {
  return (
    <div className="h-[20px] relative shrink-0 w-[25.625px]">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#0a0a0a] text-[14px] text-nowrap top-0 tracking-[-0.1504px]">{text}</p>
    </div>
  );
}
type HeadingBackgroundImageAndText1Props = {
  text: string;
};

function HeadingBackgroundImageAndText1({ text }: HeadingBackgroundImageAndText1Props) {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#0a0a0a] text-[12px] tracking-[0.3px] uppercase">{text}</p>
    </div>
  );
}
type ButtonBackgroundImageAndTextProps = {
  text: string;
};

function ButtonBackgroundImageAndText({ text }: ButtonBackgroundImageAndTextProps) {
  return (
    <div className="content-stretch flex items-center justify-center px-[13px] py-[7px] relative shrink-0">
      <div aria-hidden="true" className="absolute border border-[#c8c7c5] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#364153] text-[12px] text-center text-nowrap">{text}</p>
    </div>
  );
}
type HeadingBackgroundImageAndTextProps = {
  text: string;
};

function HeadingBackgroundImageAndText({ text }: HeadingBackgroundImageAndTextProps) {
  return (
    <div className="h-[20px] relative shrink-0 w-full">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#6a7282] text-[14px] text-nowrap top-0 tracking-[-0.1504px]">{text}</p>
    </div>
  );
}

export default function App() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="App">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0px_0px_0px_1px] border-solid inset-0 pointer-events-none shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]" />
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
        <div className="bg-white relative shrink-0 w-full" data-name="Header">
          <div aria-hidden="true" className="absolute border-[#f3f4f6] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
          <div className="flex flex-col items-end size-full">
            <div className="content-stretch flex flex-col gap-[16px] items-end pb-[24px] pt-[12px] px-[24px] relative w-full">
              <div className="content-stretch flex flex-col items-start pb-0 pt-[6px] px-[6px] relative shrink-0 size-[32px]" data-name="Button">
                <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
                  <IconVectorBackgroundImage>
                    <path d={svgPaths.p354ab980} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  </IconVectorBackgroundImage>
                  <IconVectorBackgroundImage>
                    <path d={svgPaths.p2a4db200} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  </IconVectorBackgroundImage>
                </div>
              </div>
              <div className="content-stretch flex h-[47px] items-center justify-between relative shrink-0 w-[498.75px]" data-name="Container">
                <div className="h-[46.656px] relative shrink-0 w-[183.328px]" data-name="Container">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
                    <div className="h-[20px] relative shrink-0 w-full" data-name="Image (Naturium)">
                      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageNaturium} />
                    </div>
                    <div className="content-stretch flex h-[18.656px] items-start relative shrink-0 w-full" data-name="Paragraph">
                      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[18.667px] min-h-px min-w-px not-italic relative shrink-0 text-[#6a7282] text-[14px] tracking-[-0.1504px]">Skin Advisor</p>
                    </div>
                  </div>
                </div>
                <div className="relative shrink-0">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative">
                    <div className="font-['Font_Awesome_7_Pro:Solid',sans-serif] leading-none not-italic relative shrink-0 size-[40px] text-nowrap">
                      <p className="absolute bg-clip-text left-[20px] text-[40px] text-center top-0 translate-x-[-50%]" style={{ WebkitTextFillColor: "transparent", backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 40 40\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'1\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(0 -2.8284 -2.8284 0 20 20)\\\'><stop stop-color=\\\'rgba(255,215,122,1)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(240,185,74,1)\\\' offset=\\\'0.5\\\'/><stop stop-color=\\\'rgba(200,144,47,1)\\\' offset=\\\'1\\\'/></radialGradient></defs></svg>')" }}>
                        shield
                      </p>
                      <p className="absolute left-[calc(50%-9px)] text-[#5c3b00] text-[16px] top-[calc(50%-8px)] tracking-[-0.1504px]">crown</p>
                    </div>
                    <div className="bg-black content-stretch flex gap-[8px] h-[47px] items-center px-[12px] py-0 relative shrink-0 w-[87.625px]" data-name="Container">
                      <IconBackgroundImage1 additionalClassNames="relative shrink-0">
                        <g clipPath="url(#clip0_2064_639)" id="Icon">
                          <path d={svgPaths.p3adb3b00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                          <path d="M8 1.33333V2.66667" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                          <path d="M8 13.3333V14.6667" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                          <path d={svgPaths.p5c447c0} id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                          <path d={svgPaths.p191ca260} id="Vector_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                          <path d="M1.33333 8H2.66667" id="Vector_6" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                          <path d="M13.3333 8H14.6667" id="Vector_7" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                          <path d={svgPaths.p17455c00} id="Vector_8" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                          <path d={svgPaths.p1df25380} id="Vector_9" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                        </g>
                        <defs>
                          <clipPath id="clip0_2064_639">
                            <rect fill="white" height="16" width="16" />
                          </clipPath>
                        </defs>
                      </IconBackgroundImage1>
                      <div className="basis-0 grow h-[31px] min-h-px min-w-px relative shrink-0" data-name="Container">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                          <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[39.625px]" data-name="Text">
                            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
                              <p className="basis-0 font-['Inter:Medium',sans-serif] font-medium grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[12px] text-white">78°F</p>
                            </div>
                          </div>
                          <BackgroundImage1 additionalClassNames="h-[15px] opacity-75 w-[39.625px]">
                            <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[10px] text-nowrap text-white top-0 tracking-[0.1172px]">UV High</p>
                          </BackgroundImage1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white content-stretch flex flex-col gap-[16px] items-start px-[24px] py-[16px] relative shrink-0 w-[546.75px]" data-name="Title / Ingredient Explorer">
          <div aria-hidden="true" className="absolute border-[#f3f4f6] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
          <div className="content-stretch flex gap-[12px] h-[36px] items-center relative shrink-0 w-full" data-name="Container">
            <div className="h-[36px] relative shrink-0 w-[194.75px]" data-name="Heading 4">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
                <p className="font-['Canela:Regular',sans-serif] leading-[36px] not-italic relative shrink-0 text-[#0a0a0a] text-[24px] text-nowrap">Ingredient Explorer</p>
              </div>
            </div>
            <div className="relative shrink-0 size-[20px]" data-name="Icon">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                <g id="Icon">
                  <path d="M3.75 2.5H16.25" id="Vector" stroke="var(--stroke-0, #FE8F7F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  <path d={svgPaths.pbba100} id="Vector_2" stroke="var(--stroke-0, #FE8F7F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  <path d="M5 11.6667H15" id="Vector_3" stroke="var(--stroke-0, #FE8F7F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                </g>
              </svg>
            </div>
          </div>
          <div className="content-stretch flex h-[38px] items-start pl-0 pr-[-0.016px] py-0 relative shrink-0 w-full" data-name="Container">
            <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center justify-center relative w-full">
                <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Button">
                  <div aria-hidden="true" className="absolute border border-[#e4e7ec] border-solid inset-0 pointer-events-none" />
                  <div className="flex flex-row items-center justify-center size-full">
                    <div className="content-stretch flex items-center justify-center px-[69px] py-[9px] relative w-full">
                      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#4a5565] text-[14px] text-center text-nowrap tracking-[-0.1504px]">Ingredients</p>
                    </div>
                  </div>
                </div>
                <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Button">
                  <div aria-hidden="true" className="absolute border border-[#aeadac] border-solid inset-0 pointer-events-none" />
                  <div className="flex flex-row items-center justify-center size-full">
                    <div className="content-stretch flex items-center justify-center px-[70px] py-[9px] relative w-full">
                      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] text-center text-nowrap tracking-[-0.1504px]">Products</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[42px] relative shrink-0 w-full" data-name="Container">
            <div className="absolute bg-[#f9fafb] h-[42px] left-0 top-0 w-[498.75px]" data-name="Text Input">
              <div className="content-stretch flex items-center overflow-clip pl-[40px] pr-[16px] py-[10px] relative rounded-[inherit] size-full">
                <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[14px] text-[rgba(10,10,10,0.5)] text-nowrap tracking-[-0.1504px]">Search products...</p>
              </div>
              <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
            </div>
            <IconBackgroundImage1 additionalClassNames="absolute left-[12px] top-[13px]">
              <g id="Icon">
                <path d="M14 14L11.1067 11.1067" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                <path d={svgPaths.p107a080} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
              </g>
            </IconBackgroundImage1>
          </div>
        </div>
      </div>
      <div className="basis-0 bg-[#ebeae8] content-stretch flex flex-col gap-[24px] grow items-start min-h-px min-w-px overflow-x-clip overflow-y-auto pb-0 pl-[24px] pr-[39px] pt-[24px] relative shrink-0 w-[546.75px]" data-name="Container">
        <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
          <HeadingBackgroundImageAndText text="Categories" />
          <div className="content-start flex flex-wrap gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
            <ButtonBackgroundImageAndText text="Trending" />
            <ButtonBackgroundImageAndText text="Hydration" />
            <ButtonBackgroundImageAndText text="Barrier Support" />
            <ButtonBackgroundImageAndText text="Acne Care" />
            <ButtonBackgroundImageAndText text="Exfoliation" />
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[12px] h-[1016px] items-start relative shrink-0 w-full" data-name="Container">
          <HeadingBackgroundImageAndText text="Products" />
          <div className="h-[805.656px] relative shrink-0 w-full" data-name="Container">
            <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-0 top-0 w-[233.875px]" data-name="Product">
              <div className="content-stretch flex flex-col h-[250px] items-start overflow-clip relative rounded-[10px] shrink-0 w-full" data-name="Container">
                <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Image (Multi-Peptide Moisturizer)">
                  <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgImageMultiPeptideMoisturizer} />
                </div>
              </div>
              <HeadingBackgroundImageAndText1 text="Niacinamide Serum 12% Plus Zinc 2%" />
              <TextBackgroundImageAndText text="$17" />
              <div className="content-stretch flex gap-[4px] h-[15px] items-center relative shrink-0 w-full" data-name="Container">
                <ContainerBackgroundImage />
                <TextBackgroundImageAndText1 text="4.5 (542)" />
              </div>
            </div>
            <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[249.88px] top-0 w-[233.875px]" data-name="Product">
              <div className="content-stretch flex flex-col h-[250px] items-start overflow-clip relative rounded-[10px] shrink-0 w-full" data-name="Container">
                <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Image (Multi-Peptide Moisturizer)">
                  <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgImageMultiPeptideMoisturizer1} />
                </div>
              </div>
              <HeadingBackgroundImageAndText1 text="Niacinamide Cleansing Gelée 3%" />
              <TextBackgroundImageAndText text="$18" />
              <div className="content-stretch flex gap-[4px] h-[15px] items-center relative shrink-0 w-full" data-name="Container">
                <ContainerBackgroundImage />
                <TextBackgroundImageAndText1 text="4.5 (542)" />
              </div>
            </div>
            <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-0 top-[418.83px] w-[233.875px]" data-name="Product">
              <div className="content-stretch flex flex-col h-[250px] items-start overflow-clip relative rounded-[10px] shrink-0 w-full" data-name="Container">
                <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Image (Multi-Peptide Moisturizer)">
                  <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgImageMultiPeptideMoisturizer2} />
                </div>
              </div>
              <HeadingBackgroundImageAndText1 text="Niacinamide Serum 12% Plus Zinc 2% - Jumbo" />
              <TextBackgroundImageAndText text="$31" />
              <div className="content-stretch flex gap-[4px] h-[15px] items-center relative shrink-0 w-full" data-name="Container">
                <ContainerBackgroundImage />
                <TextBackgroundImageAndText1 text="4.5 (542)" />
              </div>
            </div>
            <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[249.88px] top-[418.83px] w-[233.875px]" data-name="Product">
              <div className="content-stretch flex flex-col h-[250px] items-start overflow-clip relative rounded-[10px] shrink-0 w-full" data-name="Container">
                <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Image (Multi-Peptide Moisturizer)">
                  <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgImageMultiPeptideMoisturizer3} />
                </div>
              </div>
              <HeadingBackgroundImageAndText1 text="The Purifier Niacinamide Serum Body Wash" />
              <TextBackgroundImageAndText text="$17" />
              <div className="content-stretch flex gap-[4px] h-[15px] items-center relative shrink-0 w-full" data-name="Container">
                <ContainerBackgroundImage />
                <TextBackgroundImageAndText1 text="4.5 (542)" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white h-[90px] relative shrink-0 w-[546.75px]" data-name="BottomNavigation">
        <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[2px_0px_0px] border-solid inset-0 pointer-events-none" />
        <div className="absolute content-stretch flex flex-col gap-[6px] h-[43px] items-center justify-center left-[24px] top-[24px] w-[124.688px]" data-name="Button">
          <ContainerBackgroundImage1>
            <IconBackgroundImage>
              <path d={svgPaths.p11042f80} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.70833" />
              <path d="M17.0833 2.5625V5.97917" id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.70833" />
              <path d="M18.7917 4.27083H15.375" id="Vector_3" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.70833" />
              <path d="M3.41667 14.5208V16.2292" id="Vector_4" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.70833" />
              <path d="M4.27083 15.375H2.5625" id="Vector_5" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.70833" />
            </IconBackgroundImage>
          </ContainerBackgroundImage1>
          <BackgroundImage1 additionalClassNames="h-[16.5px] w-[59.281px]">
            <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-[30.5px] not-italic text-[#99a1af] text-[11px] text-center text-nowrap top-0 translate-x-[-50%]">Skin Coach</p>
          </BackgroundImage1>
        </div>
        <div className="absolute content-stretch flex flex-col gap-[6px] h-[43px] items-center justify-center left-[148.69px] top-[24px] w-[124.688px]" data-name="Button">
          <ContainerBackgroundImage1>
            <IconBackgroundImage>
              <path d="M10.25 5.97917V17.9375" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.70833" />
              <path d={svgPaths.p36ff9d80} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.70833" />
            </IconBackgroundImage>
          </ContainerBackgroundImage1>
          <BackgroundImage1 additionalClassNames="h-[16.5px] w-[64.469px]">
            <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-[32px] not-italic text-[#99a1af] text-[11px] text-center text-nowrap top-0 translate-x-[-50%]">Skin Journal</p>
          </BackgroundImage1>
        </div>
        <div className="absolute content-stretch flex flex-col gap-[6px] h-[43px] items-center justify-center left-[273.38px] top-[24px] w-[124.688px]" data-name="Button">
          <div className="h-[20.5px] relative shrink-0 w-[19.5px]" data-name="Container">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
              <div className="h-[20.5px] overflow-clip relative shrink-0 w-full" data-name="Icon">
                <div className="absolute contents inset-[0_2.5%_2.34%_0]" data-name="Group">
                  <div className="absolute inset-[10.86%_52.5%_29.62%_0]" data-name="Vector">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 13">
                      <path d={svgPaths.p299cd600} fill="var(--fill-0, #99A1AF)" id="Vector" />
                    </svg>
                  </div>
                  <div className="absolute inset-[0_2.5%_2.34%_30.45%]" data-name="Vector">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 21">
                      <path d={svgPaths.p29466e00} fill="var(--fill-0, #99A1AF)" id="Vector" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <BackgroundImage1 additionalClassNames="h-[16.5px] w-[45.953px]">
            <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-[23px] not-italic text-[#99a1af] text-[11px] text-center text-nowrap top-0 translate-x-[-50%]">Routines</p>
          </BackgroundImage1>
        </div>
        <div className="absolute h-[43px] left-[398.06px] top-[24px] w-[124.688px]" data-name="Button">
          <div className="absolute content-stretch flex items-center justify-center left-[52.09px] size-[20.5px] top-0" data-name="Container">
            <IconBackgroundImage>
              <path d="M3.84375 2.5625H16.6563" id="Vector" stroke="var(--stroke-0, #FE8F7F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.70833" />
              <path d={svgPaths.p3bc4ab00} id="Vector_2" stroke="var(--stroke-0, #FE8F7F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.70833" />
              <path d="M5.125 11.9583H15.375" id="Vector_3" stroke="var(--stroke-0, #FE8F7F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.70833" />
            </IconBackgroundImage>
          </div>
          <div className="absolute h-[16.5px] left-[12.34px] top-[26.5px] w-[100px]" data-name="Paragraph">
            <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-[50.5px] not-italic text-[11px] text-black text-center text-nowrap top-0 translate-x-[-50%]">Ingredient Explorer</p>
          </div>
          <div className="absolute bg-[#fe8f7f] h-[2px] left-[38.34px] top-[-24px] w-[48px]" data-name="Container" />
        </div>
      </div>
    </div>
  );
}