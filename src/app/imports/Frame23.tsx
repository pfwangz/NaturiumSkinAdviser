import imgEllipse2 from "figma:asset/c65ef2234afb6f261eec0889d2ccf9c8075f9d33.png";

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start not-italic relative shrink-0 text-neutral-950 w-full">
      <p className="font-['Canela:Regular',sans-serif] leading-[48px] relative shrink-0 text-[32px] text-center w-full">Naturium Skin Advisor</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[14px] tracking-[-0.1504px] w-full">Ask any questions about your skin concerns. I’m here to help!</p>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative size-full">
      <div className="relative shrink-0 size-[100px]">
        <img alt="" className="block max-w-none size-full" height="100" src={imgEllipse2} width="100" />
      </div>
      <Frame1 />
    </div>
  );
}