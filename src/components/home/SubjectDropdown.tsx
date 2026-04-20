"use client";

import { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { Check, ChevronDown } from "lucide-react";

const subjects = [
  { id: 1, name: "Product Enquiry", value: "Product Enquiry", emoji: "📦" },
  { id: 2, name: "Bulk Order", value: "Bulk Order", emoji: "📊" },
  { id: 3, name: "Dealership", value: "Dealership", emoji: "🤝" },
  { id: 4, name: "Business Partnership", value: "Business Partnership", emoji: "💼" },
  { id: 5, name: "Feedback", value: "Feedback", emoji: "⭐" },
  { id: 6, name: "Other", value: "Other", emoji: "📝" },
];

type SubjectDropdownProps = {
  value?: string;
  onChange: (value: string) => void;
  error?: string;
  name?: string;
};

export default function SubjectDropdown({
  value = "",
  onChange,
  error,
  name = "subject",
}: SubjectDropdownProps) {
  const selectedSubject = subjects.find((item) => item.value === value);

  return (
    <div className="w-full">
      <Listbox value={value} onChange={onChange}>
        <div className="relative">
          <Listbox.Button
            className={`relative w-full rounded-2xl border bg-[color:var(--card)] py-3 pl-4 pr-12 text-left text-[color:var(--foreground)] shadow-[0_8px_24px_rgba(22,101,52,0.10)] transition focus:outline-none focus:ring-4 ${
              error
                ? "border-red-500 focus:border-red-500 focus:ring-red-200"
                : "border-[color:var(--border)] focus:border-[color:var(--primary)] focus:ring-[rgba(22,101,52,0.16)]"
            }`}
          >
            <span
              className={`flex items-center gap-2 truncate ${
                selectedSubject
                  ? "text-[color:var(--foreground)]"
                  : "text-[color:var(--muted-foreground)]"
              }`}
            >
              {selectedSubject ? (
                <>
                  <span>{selectedSubject.emoji}</span>
                  <span>{selectedSubject.name}</span>
                </>
              ) : (
                <span>Select subject</span>
              )}
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
                  value={subject.value}
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
                      <span
                        className={`flex items-center gap-2 truncate ${
                          selected ? "font-semibold" : "font-medium"
                        }`}
                      >
                        <span>{subject.emoji}</span>
                        <span>{subject.name}</span>
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

      <input type="hidden" name={name} value={value} />

      {error ? <p className="mt-2 text-sm text-red-600">{error}</p> : null}
    </div>
  );
}