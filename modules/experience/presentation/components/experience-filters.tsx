"use client";

import { ChevronDown, ChevronUp, Search } from "lucide-react";

export function FilterSection({
  title,
  // count,
  children,
  valueSearch,
  setValueSearch,
}: {
  title: string;
  // count: number;
  children: React.ReactNode;
  valueSearch?: string;
  setValueSearch?: (value: string) => void;
}) {
  const showSearch = valueSearch !== undefined && setValueSearch !== undefined;

  return (
    <div className="mb-3 rounded-xl border border-slate-200 bg-white ">
      <button
        type="button"
        className="p-3 flex w-full items-center justify-between border-b border-slate-200 pb-3 text-left text-sm font-semibold text-slate-700"
      >
        <span>{title}</span>
        <div className="flex items-center gap-2 text-xs text-slate-400">
          {/* {count > 0 ? <span className="rounded bg-[#EEF5FC] px-1.5 py-0.5 text-[#3C7ACB]">{count}</span> : null} */}
          <ChevronUp size={14} color="black" />
        </div>
      </button>
      {showSearch ? (
        <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 mt-3 ml-3 mr-3">
          <Search size={18} className="text-slate-400" />
          <input
            value={valueSearch}
            onChange={(event) => setValueSearch(event.target.value)}
            placeholder={`Search ${title === "Fields" ? "field" : title.toLowerCase()}`}
            className="h-8 w-full border-0 bg-transparent text-sm text-slate-700 outline-none"
          />
        </div>
      ) : null}
      <div className="max-h-[210px] space-y-1 overflow-auto p-3">
        {children}
      </div>
    </div>
  );
}

export function FilterCheckbox({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <label className="flex cursor-pointer items-center gap-2 rounded-md px-1 py-1 text-sm text-slate-600 hover:bg-white">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="h-4 w-4 rounded border-slate-300"
      />
      <span>{label}</span>
    </label>
  );
}
