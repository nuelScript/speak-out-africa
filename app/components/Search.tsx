"use client";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";

const frequentlySearched = [
  {
    value: "How can I volunteer?",
    label: "How can I volunteer?",
  },
];

const Search = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  return (
    <div className="flex w-full justify-center gap-8 bg-neutral-600 p-20">
      <BiSearch className="inline-flex h-32 w-32 text-white" />
      <div className="flex w-1/2 flex-col gap-y-8">
        <h1 className="text-4xl font-bold tracking-normal text-white">
          Search for something
        </h1>
        <div className="w-full">
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={open}
                className="w-full justify-between rounded-full"
              >
                {value
                  ? frequentlySearched.find(
                      (frequent) => frequent.value === value
                    )?.label
                  : "Search..."}
                <BiSearch className="ml-2 h-4 w-4 shrink-0 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-full p-0">
              <Command>
                <CommandInput placeholder="Search..." />
                <CommandEmpty>Not Found</CommandEmpty>
                <CommandGroup>
                  {frequentlySearched.map((frequent) => (
                    <CommandItem
                      key={frequent.value}
                      onSelect={(currentValue) => {
                        setValue(currentValue === value ? "" : currentValue);
                        setOpen(false);
                      }}
                    >
                      {frequent.label}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </Command>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  );
};

export default Search;
