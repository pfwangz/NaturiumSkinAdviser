import svgPaths from "./svg-nlbcikv62d";

function Frame1() {
  return (
    <div className="h-[106px] relative shrink-0 w-[113px]">
      <div className="absolute h-[66px] left-0 top-0 w-[113px]" data-name="Union">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 113 66">
          <path d={svgPaths.p3c176880} fill="var(--fill-0, #FE8F7F)" id="Union" />
        </svg>
      </div>
      <div className="absolute h-[21px] left-[46.5px] top-[27px] w-[20px]" data-name="Union">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 21">
          <path d={svgPaths.p38851a00} fill="var(--fill-0, white)" id="Union" />
        </svg>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[39.5px] not-italic text-[12px] text-black text-nowrap top-[74px] whitespace-pre">Home</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="h-[106px] relative shrink-0 w-[113px]">
      <div className="absolute left-[calc(50%-0.5px)] size-[20.508px] top-[29.24px] translate-x-[-50%]" data-name="Vector (Stroke)">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 21">
          <path d={svgPaths.p302ccc80} fill="var(--fill-0, #99A1AF)" id="Vector (Stroke)" />
        </svg>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[calc(50%-32px)] not-italic text-[12px] text-black text-nowrap top-[74px] whitespace-pre">Skin Coach</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="h-[106px] relative shrink-0 w-[113px]">
      <div className="absolute h-[19.5px] left-1/2 top-[27px] translate-x-[-50%] w-[21.5px]" data-name="Union">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 20">
          <path d={svgPaths.p2aad9580} fill="var(--fill-0, #99A1AF)" id="Union" />
        </svg>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[calc(50%-35px)] not-italic text-[12px] text-black text-nowrap top-[74px] whitespace-pre">Skin Journal</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute h-[20.509px] left-[calc(50%-0.25px)] top-[27px] translate-x-[-50%] w-[19.5px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 21">
        <g id="Frame 12">
          <path d={svgPaths.p2b9fe700} fill="var(--fill-0, #99A1AF)" id="Vector (Stroke)" />
          <path d={svgPaths.p3d62ce00} fill="var(--fill-0, #99A1AF)" id="Vector (Stroke)_2" />
        </g>
      </svg>
    </div>
  );
}

function Frame5() {
  return (
    <div className="h-[106px] relative shrink-0 w-[113px]">
      <Frame7 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[calc(50%-25px)] not-italic text-[12px] text-black text-nowrap top-[74px] whitespace-pre">Routines</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute h-[19.5px] left-1/2 top-[27px] translate-x-[-50%] w-[15.5px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
        <g id="Frame 11">
          <path d={svgPaths.p2f6a2700} fill="var(--fill-0, #99A1AF)" id="Vector (Stroke)" />
          <path d={svgPaths.p2bef46c0} fill="var(--fill-0, #99A1AF)" id="Vector (Stroke)_2" />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="h-[106px] relative shrink-0 w-[113px]">
      <Frame6 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[calc(50%-47px)] not-italic text-[12px] text-black text-nowrap top-[74px] whitespace-pre">Ingredient Guide</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-white content-stretch flex h-[106px] items-start justify-between overflow-clip pb-[17px] pt-0 px-0 relative shrink-0 w-full">
      <Frame1 />
      <Frame4 />
      <Frame3 />
      <Frame5 />
      <Frame2 />
    </div>
  );
}

export default function Frame8() {
  return (
    <div className="content-stretch flex flex-col items-end relative size-full">
      <div className="bg-[#fe8f7f] h-[10.501px] shrink-0 w-full" />
      <Frame />
    </div>
  );
}