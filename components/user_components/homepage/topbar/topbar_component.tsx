import { SetingsUI } from "@/models/settingsUI_model";

export default async function TopBarComponent(params: any) {
  return (
    params.uiData.notificationTxt && (
      <div className="w-full bg-amber-50 h-14 flex flex-row justify-center items-center">
        <p className=" font-bold text-MainBlueColor text-sm text-left tracking-[0] leading-[normal] whitespace-nowrap [direction:rtl]">
          {params.uiData.notificationTxt}
        </p>
      </div>
    )
  );
}
