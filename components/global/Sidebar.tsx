import linksList from "@/constants/sidebarLinks";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Sidebar({
  open,
  set,
}: {
  open: boolean;
  set: (value: boolean) => void;
}) {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <>
      {/*//! Layout closer */}
      <div
        className={cn(
          "fixed z-50 top-0 right-0 h-dvh w-dvw max-w-[calc(2*dvw)] bg-primary-900/80 transition-all duration-150",
          !open && "-translate-x-[100dvw] -translate-y-[100dvh] scale-50 opacity-50"
        )}
        onClick={() => set(false)}
      />

      <aside
        className={cn(
          "z-100 fixed top-0 right-0 h-dvh p-2 sm:p-5 bg-primary-500 w-[266px] sm:w-[400px] transition-all duration-300",
          !open && "translate-x-[266px] sm:translate-x-[400px]"
        )}
      >
        {/*//! Links */}
        <div className="z-200 pt-14 flex flex-col gap-3">
          {linksList.map(({ label, route, Icon }) => (
            <button
              onClick={() => {
                router.push(route);
                set(false);
              }}
              key={label}
              className="cursor-pointer flex items-center p-2 rounded-xl text-secondary-500 hover:bg-secondary-500 hover:text-primary-500! "
            >
              <Icon className="size-9 sm:size-12 shrink-0" />
              <h3 className="flex-1 text-center text-[30px] sm:text-body">
                {label}
              </h3>
            </button>
          ))}
        </div>
      </aside>
    </>
  );
}
