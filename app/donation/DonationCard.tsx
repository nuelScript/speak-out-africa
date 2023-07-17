"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { BsCurrencyDollar } from "react-icons/bs";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";

const formSchema = z.object({
  amount: z.string({
    required_error: "Enter an Amount",
  }),
  firstName: z.string({ required_error: "First Name is required" }).min(1),
  lastName: z.string({ required_error: "Last Name is required" }).min(1),
  emailAddress: z
    .string({ required_error: "Email Address is required" })
    .email(),
});

export const DonationCard = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      const response = await fetch("/api/donate", {
        method: "post",
        body: new URLSearchParams(data),
      });
      if (!response.ok) {
        throw new Error(`Invalid response: ${response.status}`);
      }
      toast({
        title: "Thank you for your donation",
        description:
          "We appreciate your donation, we will send you a mail shortly",
        action: <ToastAction altText="Close">Close</ToastAction>,
      });
    } catch (err) {
      console.error(err);
      alert("We can't submit the form, try again later?");
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex h-[750px] w-[856px] flex-col gap-3 p-10 shadow-lg shadow-gray-400"
      >
        <h1 className="text-xl font-medium">Your Donation</h1>
        <Separator />
        <div className="mb-1">
          <div className="flex w-full flex-col gap-4">
            <FormField
              control={form.control}
              name="amount"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      className="peer block w-[300px] appearance-none rounded-full bg-neutral-200 px-6 py-4 text-base font-light text-black focus:outline-none focus:ring-0"
                      type="text"
                      id="Amount"
                      placeholder="Amount"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="amount"
              render={({ field }) => (
                <FormItem>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="w-[300px] rounded-full bg-black px-8 py-4 text-base font-semibold uppercase text-white">
                        <SelectValue placeholder="Select your Currency" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent position="popper">
                      <SelectItem value="Naira">Naira</SelectItem>
                      <SelectItem value="Dollar">Dollar</SelectItem>
                      <SelectItem value="Pound">Pound</SelectItem>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
          </div>
        </div>
        <h1 className="text-xl font-medium">Your Personal Info</h1>
        <Separator />
        <div className="flex w-full flex-col">
          <div className="flex flex-col gap-6">
            <div className="flex w-full gap-16">
              <div className="w-full">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-md mb-3 block font-medium text-zinc-900">
                        First Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="peer block w-full appearance-none rounded-full bg-neutral-200 px-6 py-4 text-base font-light text-black focus:outline-none focus:ring-0"
                          type="text"
                          id="firstName"
                          placeholder="Enter your first name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="w-full">
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-md mb-3 block font-medium text-zinc-900">
                        Last Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="peer block w-full appearance-none rounded-full bg-neutral-200 px-6 py-4 text-base font-light text-black focus:outline-none focus:ring-0"
                          type="text"
                          id="lastName"
                          placeholder="Enter your last name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <div className="w-full">
              <FormField
                control={form.control}
                name="emailAddress"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-md mb-3 block font-medium text-zinc-900">
                      Email Address
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="peer block w-full appearance-none rounded-full bg-neutral-200 px-6 py-4 text-base font-light text-black focus:outline-none focus:ring-0"
                        type="text"
                        id="emailAddress"
                        placeholder="Enter your last name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
        </div>
        <div className="mt-3 flex flex-col gap-4">
          <h1 className="mt-3 text-xl font-medium">
            Donation Total:{" "}
            <span className="text-[#DC0A00]">
              <BsCurrencyDollar
                size={20}
                className="mb-1 inline-block text-[#DC0A00]"
              />
              100
            </span>
          </h1>
          <div className="w-full">
            <button
              type="submit"
              className="rounded-full bg-[#DC0A00] px-8 py-4 text-center text-xs font-bold uppercase tracking-tight text-gray-100"
            >
              Continue
            </button>
          </div>
        </div>
      </form>
    </Form>
  );
};
