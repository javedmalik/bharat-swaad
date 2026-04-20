"use client";

import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { Check, ChevronDown } from "lucide-react";

const subjects = [
  { id: 1, name: "Select subject", value: "" },
  { id: 2, name: "General Inquiry", value: "general" },
  { id: 3, name: "Product Information", value: "product" },
  { id: 4, name: "Bulk Order", value: "bulk" },
  { id: 5, name: "Partnership", value: "partnership" },
];

export default function SubjectDropdown() {
  const [selected, setSelected] = useState(subjects[0]);

  return (
    <div className="w-full">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative">
          <Listbox.Button className="relative w-full rounded-2xl border border-[color:var(--border)] bg-[color:var(--card)] py-3 pl-4 pr-12 text-left text-[color:var(--foreground)] shadow-[0_8px_24px_rgba(22,101,52,0.10)] transition focus:border-[color:var(--primary)] focus:outline-none focus:ring-4 focus:ring-[rgba(22,101,52,0.16)]">
            <span
              className={`block truncate ${
                selected.value ? "text-[color:var(--foreground)]" : "text-[color:var(--muted-foreground)]"
              }`}
            >
              {selected.name}
            </span>

            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4 text-[color:var(--primary)]">
              <ChevronDown className="h-5 w-5" />
            </span>
          </Listbox.Button>

          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Listbox.Options className="absolute z-50 mt-2 max-h-60 w-full overflow-auto rounded-2xl border border-[color:var(--border)] bg-[color:var(--card)] p-2 shadow-[0_18px_50px_rgba(22,101,52,0.18)] ring-1 ring-black/5 focus:outline-none">
              {subjects.map((subject) => (
                <Listbox.Option
                  key={subject.id}
                  value={subject}
                  className={({ active }) =>
                    `relative cursor-pointer select-none rounded-xl py-3 pl-10 pr-4 transition ${
                      active
                        ? "bg-[color:var(--primary)] text-[color:var(--primary-foreground)]"
                        : "text-[color:var(--foreground)]"
                    }`
                  }
                >
                  {({ selected }) => (
                    <>
                      <span className={`block truncate ${selected ? "font-semibold" : "font-medium"}`}>
                        {subject.name}
                      </span>

                      {selected ? (
                        <span className="absolute inset-y-0 left-3 flex items-center">
                          <Check className="h-4 w-4" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}